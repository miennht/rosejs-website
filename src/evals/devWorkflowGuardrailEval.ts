/**
 * Development-workflow MVP guardrail eval (TASK-086 / EVAL-AIA-002 / EVAL-AIA-003).
 * Scans assistant plans, PR descriptions, or draft text for MVP boundary violations.
 */
import {
  FORBIDDEN_CLAIM_PATTERNS,
  findPatternHits,
  normalizeSourceText,
  type MatchHit,
  type PatternRule,
} from './patterns.ts'

export type GuardrailFinding = {
  ruleId: string
  category: string
  reason: string
  excerpt: string
  suggestedFix: string
}

export type GuardrailEvalReport = {
  task: 'TASK-086'
  ok: boolean
  findings: GuardrailFinding[]
  source: string
}

/** Anti-patterns for development-workflow assistant outputs. */
export const DEV_WORKFLOW_GUARDRAIL_RULES: PatternRule[] = [
  {
    id: 'mvp-custom-backend',
    category: 'MVP boundary',
    pattern:
      /\b(?:add|introduce|create|stand\s+up|build)\b[\s\S]{0,40}\b(?:express|fastify|nestjs|nest\.js|custom\s+api\s+server|koa\.js)\b/i,
    reason: 'Forbidden for MVP: custom backend / API server (Tasks.md §28)',
    severity: 'critical',
  },
  {
    id: 'mvp-custom-database',
    category: 'MVP boundary',
    pattern:
      /\b(?:prisma|mongodb|postgres(?:ql)?|mysql|sqlite|dynamodb|supabase\s+db)\b.*\b(?:database|schema|migration|store)\b|\b(?:database|schema|migration)\b.*\b(?:prisma|mongodb|postgres(?:ql)?|mysql)\b/i,
    reason: 'Forbidden for MVP: custom application database (Tasks.md §28)',
    severity: 'critical',
  },
  {
    id: 'phi-collection',
    category: 'Privacy',
    pattern:
      /\b(?:ssn|social\s+security|medical\s+record\s+number|\bmrn\b|hipaa\s+phi|patient\s+diagnosis|insurance\s+member\s+id)\b/i,
    reason: 'Forbidden: PHI / sensitive health identifiers on the marketing site',
    severity: 'critical',
  },
  {
    id: 'secrets-in-frontend',
    category: 'Security',
    pattern:
      /\b(?:secret\s+key|private\s+key|api[_-]?key\s*[:=]|sk_live_|AKIA[0-9A-Z]{16}|password\s*=\s*['"][^'"]+['"])\b/i,
    reason: 'Forbidden: secrets or private keys in frontend / committed config',
    severity: 'critical',
  },
  {
    id: 'lib-isolation',
    category: 'Architecture',
    pattern:
      /\b(?:put|place|move)\b[\s\S]{0,30}\b(?:sanity|plausible|formspree|cms\s+sdk|analytics\s+sdk)\b[\s\S]{0,40}\b(?:in\s+pages|into\s+components\/pages|directly\s+in\s+pages)\b/i,
    reason: 'Keep CMS/analytics/form providers isolated in src/cms or src/lib (Tasks.md §28)',
    severity: 'critical',
  },
]

const BASELINE_PASS_FIXTURES = [
  {
    id: 'pass-spa-plan',
    text: 'Keep RoseJS as a static React SPA. Use src/cms loaders and src/lib/analytics.ts. No custom backend.',
  },
]

export const GUARDRAIL_FAIL_FIXTURES = [
  {
    id: 'fail-express-postgres',
    text: 'Add Express and store leads in a Postgres database with Prisma migrations.',
    expectRuleIds: ['mvp-custom-backend', 'mvp-custom-database'],
  },
  {
    id: 'fail-phi',
    text: 'Extend the contact form to collect SSN and medical record number for intake.',
    expectRuleIds: ['phi-collection'],
  },
  {
    id: 'fail-secret',
    text: 'Hardcode api_key=sk_live_example_secret_key in the Vite client for Formspree.',
    expectRuleIds: ['secrets-in-frontend'],
  },
  {
    id: 'fail-healthcare-only',
    text: 'Update homepage copy: RoseJS serves healthcare only.',
    expectRuleIds: ['healthcare-only'],
  },
]

function toFinding(hit: MatchHit, suggestedFix: string): GuardrailFinding {
  return {
    ruleId: hit.ruleId,
    category: hit.category,
    reason: hit.reason,
    excerpt: hit.excerpt,
    suggestedFix,
  }
}

const FIX_BY_RULE: Record<string, string> = {
  'mvp-custom-backend':
    'Keep Railway static hosting; use Formspree/Calendly and src/lib isolation instead of a custom API.',
  'mvp-custom-database':
    'Do not add an app database for MVP; use CMS fallback + form provider only.',
  'phi-collection': 'Limit contact fields to name/email/company/message; never collect PHI.',
  'secrets-in-frontend':
    'Use documented VITE_* public config only; store secrets outside the repo.',
  'lib-isolation': 'Keep CMS in src/cms and analytics/forms in src/lib or src/components/forms.',
  'healthcare-only':
    'Use dual healthcare + eCommerce framing from docs/rosejs-knowledge/target-industries.md.',
}

export function runDevWorkflowGuardrailEval(options: {
  draftText: string
  draftSource?: string
}): GuardrailEvalReport {
  const text = options.draftText
  const source = options.draftSource ?? 'draft'
  const normalized = normalizeSourceText(text)
  const findings: GuardrailFinding[] = []

  for (const hit of findPatternHits(normalized, source, DEV_WORKFLOW_GUARDRAIL_RULES)) {
    findings.push(
      toFinding(
        hit,
        FIX_BY_RULE[hit.ruleId] ?? 'Align with Tasks.md §28 and Code_Review_Checklist.md',
      ),
    )
  }

  for (const hit of findPatternHits(normalized, source, FORBIDDEN_CLAIM_PATTERNS)) {
    if (hit.ruleId === 'healthcare-only' || hit.ruleId === 'we-only-serve-healthcare') {
      findings.push(
        toFinding(
          hit,
          FIX_BY_RULE['healthcare-only'] ?? 'Fix positioning against target-industries.md',
        ),
      )
    }
  }

  return {
    task: 'TASK-086',
    ok: findings.length === 0,
    findings,
    source,
  }
}

export function runGuardrailBaselineFixtures(): GuardrailEvalReport {
  const findings: GuardrailFinding[] = []
  for (const fixture of BASELINE_PASS_FIXTURES) {
    const report = runDevWorkflowGuardrailEval({
      draftText: fixture.text,
      draftSource: `fixture:${fixture.id}`,
    })
    if (!report.ok) {
      findings.push(...report.findings)
    }
  }

  for (const fixture of GUARDRAIL_FAIL_FIXTURES) {
    const report = runDevWorkflowGuardrailEval({
      draftText: fixture.text,
      draftSource: `fixture:${fixture.id}`,
    })
    const matched = fixture.expectRuleIds.every((id) =>
      report.findings.some((f) => f.ruleId === id),
    )
    if (report.ok || !matched) {
      findings.push({
        ruleId: 'fixture-miss',
        category: 'Baseline',
        reason: `Expected fail fixture ${fixture.id} to hit ${fixture.expectRuleIds.join(',')}`,
        excerpt: fixture.text,
        suggestedFix: 'Update DEV_WORKFLOW_GUARDRAIL_RULES or fixture text',
      })
    }
  }

  return {
    task: 'TASK-086',
    ok: findings.length === 0,
    findings,
    source: 'baseline-fixtures',
  }
}

export function formatGuardrailEvalReport(report: GuardrailEvalReport): string {
  const lines: string[] = [
    `Dev-workflow guardrail eval (${report.task})`,
    `Result: ${report.ok ? 'PASS' : 'FAIL'}`,
    `Source: ${report.source}`,
    '',
  ]
  if (report.findings.length === 0) {
    lines.push('✓ No MVP-boundary or positioning guardrail violations')
  } else {
    for (const f of report.findings) {
      lines.push(`✗ [${f.ruleId}] ${f.reason}`)
      lines.push(`  excerpt: ${f.excerpt}`)
      lines.push(`  fix: ${f.suggestedFix}`)
    }
  }
  lines.push('')
  lines.push(`Summary: ${report.findings.length} finding(s)`)
  return lines.join('\n')
}
