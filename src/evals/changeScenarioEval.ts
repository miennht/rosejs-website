/**
 * Change-based scenario eval (TASK-091 / EVAL-P2-001).
 * Validates scenario catalog against repo sources + Calendly dry-run.
 */
import {
  APPROVED,
  FORBIDDEN_CLAIM_PATTERNS,
  findPatternHits,
  normalizeSourceText,
} from './patterns.ts'

export type ChangeScenario = {
  id: string
  changeType: string
  title: string
  scanFiles: string[]
  mustPresent?: string[]
  mustAbsent?: string[]
  mustAbsentPatterns?: string[]
  dryRun?: {
    id: string
    description: string
    fixtureText: string
    expectFail: boolean
  }
}

export type ChangeScenarioCatalog = {
  version: number
  task: string
  approvedDefaults: {
    calendlyUrl: string
    contactEmail: string
    siteOrigin: string
    leadMagnetTitle: string
    leadMagnetSlug: string
    leadMagnetFile: string
    publishedServiceSlugs: string[]
  }
  scenarios: ChangeScenario[]
}

export type ScenarioCheck = {
  id: string
  scenarioId: string
  label: string
  ok: boolean
  detail: string
}

export type ScenarioEvalReport = {
  task: 'TASK-091'
  ok: boolean
  checks: ScenarioCheck[]
  dryRunDetectedStaleCalendly: boolean
}

export type ScenarioFileMap = Readonly<Record<string, string | null>>

const REQUIRED_CHANGE_TYPES = [
  'target-industries',
  'service-offerings',
  'lead-magnet',
  'cta',
  'pricing-consultation-policy',
  'calendly-contact-link',
] as const

/** Detect Calendly URLs that are not the approved booking link. */
export function findStaleCalendlyUrls(text: string, approvedUrl: string): string[] {
  const matches = text.match(/https?:\/\/(?:www\.)?calendly\.com\/[^\s"'`)]+/gi) ?? []
  const stale: string[] = []
  for (const url of matches) {
    const normalized = url.replace(/\/$/, '')
    const approved = approvedUrl.replace(/\/$/, '')
    if (normalized !== approved && !normalized.startsWith(`${approved}?`)) {
      stale.push(url)
    }
  }
  return stale
}

function check(
  id: string,
  scenarioId: string,
  label: string,
  ok: boolean,
  detail: string,
): ScenarioCheck {
  return { id, scenarioId, label, ok, detail }
}

function joinFiles(files: ScenarioFileMap, paths: string[]): string {
  return paths.map((p) => files[p] ?? '').join('\n')
}

export function runChangeScenarioEval(
  catalog: ChangeScenarioCatalog,
  files: ScenarioFileMap,
): ScenarioEvalReport {
  const checks: ScenarioCheck[] = []

  for (const changeType of REQUIRED_CHANGE_TYPES) {
    const found = catalog.scenarios.some((s) => s.changeType === changeType)
    checks.push(
      check(
        `catalog:type:${changeType}`,
        'catalog',
        `Scenario defined for change type: ${changeType}`,
        found,
        found ? changeType : `Missing scenario with changeType ${changeType}`,
      ),
    )
  }

  const defaults = catalog.approvedDefaults
  checks.push(
    check(
      'defaults:calendly',
      'catalog',
      'approvedDefaults.calendlyUrl matches APPROVED',
      defaults.calendlyUrl === APPROVED.calendlyUrl,
      defaults.calendlyUrl,
    ),
  )
  checks.push(
    check(
      'defaults:email',
      'catalog',
      'approvedDefaults.contactEmail matches APPROVED',
      defaults.contactEmail === APPROVED.contactEmail,
      defaults.contactEmail,
    ),
  )

  for (const scenario of catalog.scenarios) {
    for (const rel of scenario.scanFiles) {
      const present = files[rel] != null
      checks.push(
        check(
          `source:${scenario.id}:${rel}`,
          scenario.id,
          `Scan file present: ${rel}`,
          present,
          present ? rel : `Missing ${rel}`,
        ),
      )
    }

    const combined = joinFiles(files, scenario.scanFiles)

    for (const needle of scenario.mustPresent ?? []) {
      const ok = combined.includes(needle)
      checks.push(
        check(
          `present:${scenario.id}:${needle}`,
          scenario.id,
          `mustPresent: ${needle}`,
          ok,
          ok ? 'Found' : `Missing required token in scanFiles for ${scenario.id}`,
        ),
      )
    }

    for (const forbidden of scenario.mustAbsent ?? []) {
      const ok = !combined.includes(forbidden)
      checks.push(
        check(
          `absent:${scenario.id}:${forbidden}`,
          scenario.id,
          `mustAbsent: ${forbidden}`,
          ok,
          ok ? 'Absent' : `Stale token still present: ${forbidden}`,
        ),
      )
    }

    if (scenario.mustAbsentPatterns != null && scenario.mustAbsentPatterns.length > 0) {
      const rules = FORBIDDEN_CLAIM_PATTERNS.filter((r) =>
        scenario.mustAbsentPatterns!.includes(r.id),
      )
      const hits = findPatternHits(normalizeSourceText(combined), scenario.id, rules)
      checks.push(
        check(
          `patterns:${scenario.id}`,
          scenario.id,
          `No forbidden patterns (${scenario.mustAbsentPatterns.join(', ')})`,
          hits.length === 0,
          hits.length === 0 ? 'Clean' : hits.map((h) => h.ruleId).join(', '),
        ),
      )
    }

    if (scenario.changeType === 'calendly-contact-link') {
      const stale = findStaleCalendlyUrls(combined, defaults.calendlyUrl)
      checks.push(
        check(
          `calendly:baseline:${scenario.id}`,
          scenario.id,
          'No stale Calendly URLs in scanFiles',
          stale.length === 0,
          stale.length === 0 ? 'Only approved Calendly URL' : `Stale: ${stale.join(', ')}`,
        ),
      )
    }
  }

  const calendlyScenario = catalog.scenarios.find((s) => s.changeType === 'calendly-contact-link')
  const dryRun = calendlyScenario?.dryRun
  let dryRunDetectedStaleCalendly = false
  if (dryRun != null) {
    const stale = findStaleCalendlyUrls(dryRun.fixtureText, defaults.calendlyUrl)
    dryRunDetectedStaleCalendly = stale.length > 0
    const ok = dryRun.expectFail ? dryRunDetectedStaleCalendly : !dryRunDetectedStaleCalendly
    checks.push(
      check(
        `dry-run:${dryRun.id}`,
        calendlyScenario!.id,
        dryRun.description,
        ok,
        ok
          ? `Dry-run correctly ${dryRun.expectFail ? 'detected' : 'accepted'} fixture`
          : `Dry-run expected fail=${dryRun.expectFail}, staleFound=${dryRunDetectedStaleCalendly}`,
      ),
    )
  } else {
    checks.push(
      check(
        'dry-run:missing',
        'change-calendly-contact-link',
        'Calendly scenario includes dryRun fixture',
        false,
        'Missing dryRun on calendly-contact-link scenario',
      ),
    )
  }

  return {
    task: 'TASK-091',
    ok: checks.every((c) => c.ok),
    checks,
    dryRunDetectedStaleCalendly,
  }
}

export function formatScenarioEvalReport(report: ScenarioEvalReport): string {
  const lines: string[] = [
    `Change-based scenario eval (${report.task})`,
    `Result: ${report.ok ? 'PASS' : 'FAIL'}`,
    `Dry-run stale Calendly detected: ${report.dryRunDetectedStaleCalendly ? 'yes' : 'no'}`,
    '',
  ]
  for (const c of report.checks) {
    lines.push(`${c.ok ? '✓' : '✗'} ${c.label}`)
    if (!c.ok) lines.push(`  → ${c.detail}`)
  }
  const failed = report.checks.filter((c) => !c.ok).length
  lines.push('')
  lines.push(`Summary: ${report.checks.length - failed} passed, ${failed} failed`)
  return lines.join('\n')
}

export function listScenarioScanPaths(catalog: ChangeScenarioCatalog): string[] {
  const paths = new Set<string>()
  for (const scenario of catalog.scenarios) {
    for (const rel of scenario.scanFiles) paths.add(rel)
  }
  return [...paths]
}
