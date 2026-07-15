/**
 * Brand-voice eval (TASK-090 / EVAL-P1-003).
 * Rubric from docs/rosejs-knowledge/brand-voice.md + forbidden-claims.md.
 */
import {
  BRAND_VOICE_HYPE_PATTERNS,
  FORBIDDEN_CLAIM_PATTERNS,
  findPatternHits,
  normalizeSourceText,
  type MatchHit,
} from './patterns.ts'

export type VoiceSample = {
  id: string
  label: string
  text: string
  expect: 'pass' | 'fail'
}

/** Canonical pass/fail examples from brand-voice.md (automated). */
export const VOICE_GOLDEN_SAMPLES: VoiceSample[] = [
  {
    id: 'pass-phased-migration',
    label: 'Phased migration (pass example)',
    text: 'Phased migration with validation gates and rollback plans.',
    expect: 'pass',
  },
  {
    id: 'pass-industries',
    label: 'Dual industries (pass example)',
    text: 'Specialized depth in healthcare insurance and RCM, plus eCommerce modernization.',
    expect: 'pass',
  },
  {
    id: 'pass-ai-assists',
    label: 'AI assists (pass example)',
    text: 'AI assists; humans remain accountable.',
    expect: 'pass',
  },
  {
    id: 'fail-10x-zero-risk',
    label: 'Guaranteed 10x / zero-risk (fail example)',
    text: 'Guaranteed 10x delivery with zero-risk AI.',
    expect: 'fail',
  },
  {
    id: 'fail-only-healthcare',
    label: 'Healthcare-only (fail example)',
    text: 'We only serve healthcare.',
    expect: 'fail',
  },
  {
    id: 'fail-ai-replaces',
    label: 'AI replaces team (fail example)',
    text: 'Our AI fully replaces your architecture team.',
    expect: 'fail',
  },
]

export type VoiceEvalItemResult = {
  id: string
  label: string
  expect: 'pass' | 'fail'
  actual: 'pass' | 'fail'
  ok: boolean
  hits: MatchHit[]
}

export type BrandVoiceEvalReport = {
  task: 'TASK-090'
  ok: boolean
  items: VoiceEvalItemResult[]
  draftHits: MatchHit[]
  draftSource?: string
}

const ALL_VOICE_RULES = [...FORBIDDEN_CLAIM_PATTERNS, ...BRAND_VOICE_HYPE_PATTERNS]

export function evaluateVoiceText(text: string, source = 'draft'): MatchHit[] {
  return findPatternHits(normalizeSourceText(text), source, ALL_VOICE_RULES)
}

export function runBrandVoiceEval(options?: {
  draftText?: string
  draftSource?: string
}): BrandVoiceEvalReport {
  const items: VoiceEvalItemResult[] = VOICE_GOLDEN_SAMPLES.map((sample) => {
    const hits = evaluateVoiceText(sample.text, sample.id)
    const actual: 'pass' | 'fail' = hits.length === 0 ? 'pass' : 'fail'
    return {
      id: sample.id,
      label: sample.label,
      expect: sample.expect,
      actual,
      ok: actual === sample.expect,
      hits,
    }
  })

  const draftHits =
    options?.draftText != null && options.draftText.trim() !== ''
      ? evaluateVoiceText(options.draftText, options.draftSource ?? 'ai-draft')
      : []

  const goldenOk = items.every((i) => i.ok)
  const draftOk = draftHits.length === 0
  const hasDraft = options?.draftText != null && options.draftText.trim() !== ''

  const report: BrandVoiceEvalReport = {
    task: 'TASK-090',
    ok: goldenOk && (!hasDraft || draftOk),
    items,
    draftHits,
  }
  if (options?.draftSource != null) {
    report.draftSource = options.draftSource
  }
  return report
}

export function formatBrandVoiceEvalReport(report: BrandVoiceEvalReport): string {
  const lines: string[] = [
    `Brand voice eval (${report.task})`,
    `Result: ${report.ok ? 'PASS' : 'FAIL'}`,
    '',
    'Golden samples (brand-voice.md pass/fail examples):',
  ]
  for (const item of report.items) {
    lines.push(
      `${item.ok ? '✓' : '✗'} ${item.id}: expect=${item.expect} actual=${item.actual} — ${item.label}`,
    )
    if (!item.ok) {
      for (const hit of item.hits) {
        lines.push(`  → ${hit.reason}`)
      }
    }
  }
  if (report.draftSource != null || report.draftHits.length > 0) {
    lines.push('')
    lines.push(`Draft scan (${report.draftSource ?? 'ai-draft'}):`)
    if (report.draftHits.length === 0) {
      lines.push('✓ No forbidden/hype patterns detected')
    } else {
      for (const hit of report.draftHits) {
        lines.push(`✗ ${hit.reason} — “…${hit.excerpt}…”`)
      }
    }
  }
  return lines.join('\n')
}
