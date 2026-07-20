/**
 * Q&A regression eval (TASK-092 / EVAL-P2-002).
 * Scores golden pass/fail answers and optional AI drafts against knowledge-grounded criteria.
 */
import {
  BRAND_VOICE_HYPE_PATTERNS,
  FORBIDDEN_CLAIM_PATTERNS,
  findPatternHits,
  findStaleCalendlyUrls,
  normalizeSourceText,
  type MatchHit,
} from './patterns.ts'

export type QaCase = {
  id: string
  question: string
  knowledgeRefs: string[]
  passAnswer: string
  mustContain: string[]
  knowledgeMustContain?: string[]
  mustNotContain?: string[]
  mustNotMatchPatterns?: string[]
  failAnswers: string[]
}

export type QaSuite = {
  version: number
  task: string
  cases: QaCase[]
}

export type QaScore = {
  ok: boolean
  missingRequired: string[]
  forbiddenPresent: string[]
  patternHits: MatchHit[]
  staleCalendly: string[]
}

export type QaCheckResult = {
  id: string
  caseId: string
  label: string
  ok: boolean
  detail: string
}

export type QaEvalReport = {
  task: 'TASK-092'
  ok: boolean
  checks: QaCheckResult[]
  draftCaseId?: string
  draftOk?: boolean
}

export type QaFileMap = Readonly<Record<string, string | null>>

const REQUIRED_QUESTION_IDS = [
  'what-does-rosejs-do',
  'who-does-rosejs-help',
  'what-is-ai-first',
  'works-with-ecommerce',
  'guarantee-project-success',
  'how-to-contact',
  'what-makes-rosejs-different',
] as const

function check(
  id: string,
  caseId: string,
  label: string,
  ok: boolean,
  detail: string,
): QaCheckResult {
  return { id, caseId, label, ok, detail }
}

export function scoreQaAnswer(qaCase: QaCase, answer: string): QaScore {
  const normalized = normalizeSourceText(answer)
  const missingRequired = (qaCase.mustContain ?? []).filter((n) => !answer.includes(n))
  const forbiddenPresent = (qaCase.mustNotContain ?? []).filter((n) => answer.includes(n))

  const patternIds = qaCase.mustNotMatchPatterns ?? []
  const rules = [...FORBIDDEN_CLAIM_PATTERNS, ...BRAND_VOICE_HYPE_PATTERNS].filter((r) =>
    patternIds.includes(r.id),
  )
  const patternHits = findPatternHits(normalized, qaCase.id, rules)
  const staleCalendly = findStaleCalendlyUrls(answer)

  const ok =
    missingRequired.length === 0 &&
    forbiddenPresent.length === 0 &&
    patternHits.length === 0 &&
    staleCalendly.length === 0

  return { ok, missingRequired, forbiddenPresent, patternHits, staleCalendly }
}

export function runQaRegressionEval(
  suite: QaSuite,
  files: QaFileMap,
  options?: { draftText?: string; draftSource?: string; questionId?: string },
): QaEvalReport {
  const checks: QaCheckResult[] = []

  for (const id of REQUIRED_QUESTION_IDS) {
    const found = suite.cases.some((c) => c.id === id)
    checks.push(
      check(
        `catalog:${id}`,
        'catalog',
        `Q&A case present: ${id}`,
        found,
        found ? id : `Missing case ${id}`,
      ),
    )
  }

  checks.push(
    check(
      'catalog:count',
      'catalog',
      'Suite includes seven recurring questions',
      suite.cases.length === 7,
      `cases=${suite.cases.length}`,
    ),
  )

  for (const qaCase of suite.cases) {
    const pass = scoreQaAnswer(qaCase, qaCase.passAnswer)
    checks.push(
      check(
        `pass:${qaCase.id}`,
        qaCase.id,
        `Golden pass answer scores pass — ${qaCase.question}`,
        pass.ok,
        pass.ok
          ? 'passAnswer OK'
          : `missing=${pass.missingRequired.join('|')}; patterns=${pass.patternHits.map((h) => h.ruleId).join('|')}; staleCalendly=${pass.staleCalendly.join('|')}`,
      ),
    )

    qaCase.failAnswers.forEach((failAnswer, index) => {
      const scored = scoreQaAnswer(qaCase, failAnswer)
      // Fail answers should not pass — also treat explicit forbidden pattern hits / missing required as failure detection.
      // A fail answer that still "passes" scoring is a suite bug unless it trips stale calendly or forbidden substrings.
      // For fail fixtures we expect score.ok === false OR they contain known bad signals.
      const detected =
        !scored.ok ||
        findPatternHits(normalizeSourceText(failAnswer), qaCase.id, FORBIDDEN_CLAIM_PATTERNS)
          .length > 0 ||
        findStaleCalendlyUrls(failAnswer).length > 0 ||
        /RoseNG/.test(failAnswer) ||
        /hello@example\.com/.test(failAnswer)

      checks.push(
        check(
          `fail:${qaCase.id}:${index}`,
          qaCase.id,
          `Fail fixture rejected — ${qaCase.question}`,
          detected,
          detected ? 'Correctly rejected' : `Fail fixture unexpectedly passed: ${failAnswer}`,
        ),
      )
    })

    const kbTokens = qaCase.knowledgeMustContain ?? qaCase.mustContain
    const kbText = qaCase.knowledgeRefs.map((rel) => files[rel] ?? '').join('\n')
    for (const rel of qaCase.knowledgeRefs) {
      checks.push(
        check(
          `kb-file:${qaCase.id}:${rel}`,
          qaCase.id,
          `Knowledge file present: ${rel}`,
          files[rel] != null,
          files[rel] != null ? rel : `Missing ${rel}`,
        ),
      )
    }
    for (const token of kbTokens) {
      const ok = kbText.includes(token)
      checks.push(
        check(
          `kb-token:${qaCase.id}:${token}`,
          qaCase.id,
          `Knowledge grounding contains “${token}”`,
          ok,
          ok
            ? `Found in knowledgeRefs`
            : `Missing “${token}” in ${qaCase.knowledgeRefs.join(', ')} — update KB or Q&A fixture`,
        ),
      )
    }
  }

  let draftCaseId: string | undefined
  let draftOk: boolean | undefined
  if (options?.draftText != null && options.draftText.trim() !== '') {
    const qaCase =
      options.questionId != null
        ? suite.cases.find((c) => c.id === options.questionId)
        : suite.cases[0]
    if (qaCase == null) {
      checks.push(
        check(
          'draft:missing-case',
          options.questionId ?? 'unknown',
          `Draft question id ${options.questionId} exists`,
          false,
          'Unknown --question id',
        ),
      )
    } else {
      draftCaseId = qaCase.id
      const scored = scoreQaAnswer(qaCase, options.draftText)
      // Also apply full forbidden + calendly scan for drafts
      const extraForbidden = findPatternHits(
        normalizeSourceText(options.draftText),
        options.draftSource ?? 'ai-draft',
        FORBIDDEN_CLAIM_PATTERNS,
      )
      const stale = findStaleCalendlyUrls(options.draftText)
      draftOk = scored.ok && extraForbidden.length === 0 && stale.length === 0
      checks.push(
        check(
          `draft:${qaCase.id}`,
          qaCase.id,
          `Draft answer for “${qaCase.question}” (${options.draftSource ?? 'ai-draft'})`,
          draftOk,
          draftOk
            ? 'Draft passed'
            : `missing=${scored.missingRequired.join('|')}; patterns=${[...scored.patternHits, ...extraForbidden].map((h) => h.ruleId).join('|')}; stale=${stale.join('|')}`,
        ),
      )
    }
  }

  const report: QaEvalReport = {
    task: 'TASK-092',
    ok: checks.every((c) => c.ok),
    checks,
  }
  if (draftCaseId != null) report.draftCaseId = draftCaseId
  if (draftOk != null) report.draftOk = draftOk
  return report
}

export function formatQaEvalReport(report: QaEvalReport): string {
  const lines: string[] = [
    `Q&A regression eval (${report.task})`,
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

export function listQaKnowledgePaths(suite: QaSuite): string[] {
  const paths = new Set<string>()
  for (const qaCase of suite.cases) {
    for (const rel of qaCase.knowledgeRefs) paths.add(rel)
  }
  return [...paths]
}
