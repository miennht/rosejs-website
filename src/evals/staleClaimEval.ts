/**
 * Stale answer and forbidden claim detection (TASK-093 / EVAL-P2-003).
 * Scans marketing sources (and optional AI drafts) against forbidden-claims.md rules.
 */
import { CONTENT_SCAN_TARGETS } from './websiteContentEval.ts'
import {
  APPROVED,
  STALE_CLAIM_PATTERN_RULES,
  STALE_CONTACT_EMAILS,
  STALE_LEAD_MAGNET_SUBSTRINGS,
  findPatternHits,
  findStaleCalendlyUrls,
  normalizeSourceText,
  type MatchHit,
} from './patterns.ts'

export type StaleFinding = MatchHit & {
  suggestedFix: string
}

export type StaleClaimEvalReport = {
  task: 'TASK-093'
  ok: boolean
  findings: StaleFinding[]
  scannedFiles: string[]
  draftSource?: string
}

export type StaleFileMap = Readonly<Record<string, string | null>>

/** Extra marketing paths beyond TASK-089 content targets. */
const EXTRA_SCAN_PATHS = [
  'src/pages/Schedule.tsx',
  'src/lib/brand.ts',
  'src/components/layout/navConfig.ts',
] as const

export function listStaleScanPaths(): string[] {
  const paths = new Set<string>(EXTRA_SCAN_PATHS)
  for (const target of CONTENT_SCAN_TARGETS) {
    for (const rel of target.relativePaths) paths.add(rel)
  }
  return [...paths]
}

function suggestedFixFor(ruleId: string, category: string): string {
  if (ruleId.startsWith('removed-') || category === 'Removed services') {
    return 'Remove the service claim or restore it in services.md + fallback + catalog together'
  }
  if (ruleId.includes('calendly') || category === 'Calendly') {
    return `Update to approved Calendly URL: ${APPROVED.calendlyUrl}`
  }
  if (ruleId.includes('email') || category === 'Contact email') {
    return `Use approved contact email: ${APPROVED.contactEmail}`
  }
  if (ruleId.includes('lead') || category === 'Lead magnet') {
    return `Use approved lead magnet: ${APPROVED.leadMagnetTitle} (${APPROVED.leadMagnetFile})`
  }
  if (category.includes('Industry') || ruleId.includes('healthcare')) {
    return 'Use dual healthcare + eCommerce framing from target-industries.md'
  }
  return 'Update copy to match docs/rosejs-knowledge/forbidden-claims.md (or update the knowledge base if the fact changed)'
}

function toFinding(hit: MatchHit): StaleFinding {
  return {
    ...hit,
    suggestedFix: suggestedFixFor(hit.ruleId, hit.category),
  }
}

function scanText(text: string, source: string): StaleFinding[] {
  const normalized = normalizeSourceText(text)
  const findings: StaleFinding[] = []

  for (const hit of findPatternHits(normalized, source, STALE_CLAIM_PATTERN_RULES)) {
    findings.push(toFinding(hit))
  }

  for (const url of findStaleCalendlyUrls(text, APPROVED.calendlyUrl)) {
    findings.push(
      toFinding({
        ruleId: 'stale-calendly-url',
        category: 'Calendly',
        reason: `Stale Calendly URL (approved: ${APPROVED.calendlyUrl})`,
        severity: 'critical',
        source,
        excerpt: url,
      }),
    )
  }

  for (const email of STALE_CONTACT_EMAILS) {
    if (!text.includes(email)) continue
    findings.push(
      toFinding({
        ruleId: 'stale-contact-email',
        category: 'Contact email',
        reason: `Stale contact email ${email}`,
        severity: 'critical',
        source,
        excerpt: email,
      }),
    )
  }

  for (const stale of STALE_LEAD_MAGNET_SUBSTRINGS) {
    if (!text.includes(stale)) continue
    findings.push(
      toFinding({
        ruleId: 'stale-lead-magnet',
        category: 'Lead magnet',
        reason: `Outdated lead magnet asset reference: ${stale}`,
        severity: 'critical',
        source,
        excerpt: stale,
      }),
    )
  }

  return findings
}

/** Canonical PRD EVAL-P2-003 examples — each must produce at least one finding. */
export const EVAL_P2_003_FIXTURES: Array<{ id: string; text: string; expectRuleId?: string }> = [
  {
    id: 'healthcare-only',
    text: 'RoseJS serves healthcare only.',
    expectRuleId: 'healthcare-only',
  },
  {
    id: 'guarantee-roi',
    text: 'RoseJS guarantees ROI.',
    expectRuleId: 'guarantee-roi',
  },
  {
    id: 'guarantee-success',
    text: 'RoseJS guarantees project success.',
    expectRuleId: 'guarantee-success',
  },
  {
    id: 'removed-service',
    text: 'RoseJS offers blockchain consulting for every engagement.',
    expectRuleId: 'removed-blockchain-consulting',
  },
  {
    id: 'old-calendly',
    text: 'Book a call at https://calendly.com/old-rosejs/30min today.',
    expectRuleId: 'stale-calendly-url',
  },
  {
    id: 'outdated-lead-magnet',
    text: 'Download /downloads/modernization-checklist.pdf for our free guide.',
    expectRuleId: 'stale-lead-magnet',
  },
]

export function runStaleClaimEval(options?: {
  files?: StaleFileMap
  draftText?: string
  draftSource?: string
}): StaleClaimEvalReport {
  const findings: StaleFinding[] = []
  const scannedFiles: string[] = []

  if (options?.files != null) {
    for (const [rel, raw] of Object.entries(options.files)) {
      if (raw == null) continue
      scannedFiles.push(rel)
      findings.push(...scanText(raw, rel))
    }
  }

  if (options?.draftText != null && options.draftText.trim() !== '') {
    const source = options.draftSource ?? 'ai-draft'
    findings.push(...scanText(options.draftText, source))
  }

  const report: StaleClaimEvalReport = {
    task: 'TASK-093',
    ok: findings.length === 0,
    findings,
    scannedFiles: [...new Set(scannedFiles)],
  }
  if (options?.draftSource != null) {
    report.draftSource = options.draftSource
  }
  return report
}

export function formatStaleClaimEvalReport(report: StaleClaimEvalReport): string {
  const lines: string[] = [
    `Stale / forbidden claim eval (${report.task})`,
    `Result: ${report.ok ? 'PASS' : 'FAIL'}`,
    `Scanned files: ${report.scannedFiles.length}`,
    '',
  ]
  if (report.findings.length === 0) {
    lines.push('✓ No forbidden or stale claims detected')
  } else {
    for (const f of report.findings) {
      lines.push(`✗ [${f.severity}] ${f.ruleId} in ${f.source}`)
      lines.push(`  → ${f.reason}`)
      lines.push(`  → “…${f.excerpt}…”`)
      lines.push(`  → Fix: ${f.suggestedFix}`)
    }
  }
  if (report.draftSource != null) {
    lines.push('')
    lines.push(`Draft source: ${report.draftSource}`)
  }
  lines.push('')
  lines.push(`Summary: ${report.findings.length} finding(s)`)
  return lines.join('\n')
}
