/**
 * Development-workflow assistant scenario eval (TASK-085 / EVAL-AIA-001).
 */
import {
  BRAND_VOICE_HYPE_PATTERNS,
  FORBIDDEN_CLAIM_PATTERNS,
  findPatternHits,
  normalizeSourceText,
  type MatchHit,
} from './patterns.ts'

export type DevWorkflowCase = {
  id: string
  scenarioType: string
  title: string
  prompt: string
  knowledgeRefs: string[]
  passAnswer: string
  mustContain: string[]
  mustNotMatchPatterns?: string[]
  failAnswers: string[]
}

export type DevWorkflowSuite = {
  version: number
  task: string
  cases: DevWorkflowCase[]
}

export type DevWorkflowScore = {
  ok: boolean
  missingRequired: string[]
  patternHits: MatchHit[]
}

export type DevWorkflowCheck = {
  id: string
  caseId: string
  label: string
  ok: boolean
  detail: string
}

export type DevWorkflowReport = {
  task: 'TASK-085'
  ok: boolean
  checks: DevWorkflowCheck[]
  draftCaseId?: string
  draftOk?: boolean
}

const REQUIRED_SCENARIO_TYPES = [
  'task-planning',
  'component-implementation',
  'marketing-copy-draft',
  'documentation-update',
  'pr-review-assistance',
] as const

function check(
  id: string,
  caseId: string,
  label: string,
  ok: boolean,
  detail: string,
): DevWorkflowCheck {
  return { id, caseId, label, ok, detail }
}

export function scoreDevWorkflowAnswer(item: DevWorkflowCase, answer: string): DevWorkflowScore {
  const missingRequired = (item.mustContain ?? []).filter((n) => !answer.includes(n))
  const patternIds = item.mustNotMatchPatterns ?? []
  const rules = [...FORBIDDEN_CLAIM_PATTERNS, ...BRAND_VOICE_HYPE_PATTERNS].filter((r) =>
    patternIds.includes(r.id),
  )
  const patternHits = findPatternHits(normalizeSourceText(answer), item.id, rules)
  return {
    ok: missingRequired.length === 0 && patternHits.length === 0,
    missingRequired,
    patternHits,
  }
}

export function runDevWorkflowEval(
  suite: DevWorkflowSuite,
  options?: { draftText?: string; draftSource?: string; scenarioId?: string },
): DevWorkflowReport {
  const checks: DevWorkflowCheck[] = []

  for (const scenarioType of REQUIRED_SCENARIO_TYPES) {
    const found = suite.cases.some((c) => c.scenarioType === scenarioType)
    checks.push(
      check(
        `catalog:type:${scenarioType}`,
        'catalog',
        `Scenario defined: ${scenarioType}`,
        found,
        found ? scenarioType : `Missing scenarioType ${scenarioType}`,
      ),
    )
  }

  checks.push(
    check(
      'catalog:count',
      'catalog',
      'Suite includes five required scenarios',
      suite.cases.length === 5,
      `cases=${suite.cases.length}`,
    ),
  )

  for (const item of suite.cases) {
    const pass = scoreDevWorkflowAnswer(item, item.passAnswer)
    checks.push(
      check(
        `pass:${item.id}`,
        item.id,
        `Golden pass — ${item.title}`,
        pass.ok,
        pass.ok
          ? 'passAnswer OK'
          : `missing=${pass.missingRequired.join('|')}; patterns=${pass.patternHits.map((h) => h.ruleId).join('|')}`,
      ),
    )

    item.failAnswers.forEach((failAnswer, index) => {
      const scored = scoreDevWorkflowAnswer(item, failAnswer)
      const extraForbidden = findPatternHits(
        normalizeSourceText(failAnswer),
        item.id,
        FORBIDDEN_CLAIM_PATTERNS,
      )
      const detected =
        !scored.ok ||
        extraForbidden.length > 0 ||
        /Express|Postgres|MongoDB|SSN|secret key|RoseNG/i.test(failAnswer)
      checks.push(
        check(
          `fail:${item.id}:${index}`,
          item.id,
          `Fail fixture rejected — ${item.title}`,
          detected,
          detected ? 'Correctly rejected' : `Fail fixture unexpectedly passed: ${failAnswer}`,
        ),
      )
    })
  }

  let draftCaseId: string | undefined
  let draftOk: boolean | undefined
  if (options?.draftText != null && options.draftText.trim() !== '') {
    const item =
      options.scenarioId != null
        ? suite.cases.find((c) => c.id === options.scenarioId)
        : suite.cases[0]
    if (item == null) {
      checks.push(
        check(
          'draft:missing-case',
          options.scenarioId ?? 'unknown',
          `Scenario id ${options.scenarioId} exists`,
          false,
          'Unknown --scenario id',
        ),
      )
    } else {
      draftCaseId = item.id
      const scored = scoreDevWorkflowAnswer(item, options.draftText)
      const extraForbidden = findPatternHits(
        normalizeSourceText(options.draftText),
        options.draftSource ?? 'ai-draft',
        FORBIDDEN_CLAIM_PATTERNS,
      )
      draftOk = scored.ok && extraForbidden.length === 0
      checks.push(
        check(
          `draft:${item.id}`,
          item.id,
          `Draft for “${item.title}” (${options.draftSource ?? 'ai-draft'})`,
          draftOk,
          draftOk
            ? 'Draft passed'
            : `missing=${scored.missingRequired.join('|')}; patterns=${[...scored.patternHits, ...extraForbidden].map((h) => h.ruleId).join('|')}`,
        ),
      )
    }
  }

  const report: DevWorkflowReport = {
    task: 'TASK-085',
    ok: checks.every((c) => c.ok),
    checks,
  }
  if (draftCaseId != null) report.draftCaseId = draftCaseId
  if (draftOk != null) report.draftOk = draftOk
  return report
}

export function formatDevWorkflowReport(report: DevWorkflowReport): string {
  const lines: string[] = [
    `Dev-workflow assistant eval (${report.task})`,
    `Result: ${report.ok ? 'PASS' : 'FAIL'}`,
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
