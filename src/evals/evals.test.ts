/// <reference types="node" />
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import {
  APPROVED,
  BRAND_VOICE_HYPE_PATTERNS,
  FORBIDDEN_CLAIM_PATTERNS,
  findPatternHits,
} from './patterns.ts'
import { runBrandVoiceEval, evaluateVoiceText } from './brandVoiceEval.ts'
import { listContentEvalPaths, runStaticWebsiteContentEval } from './websiteContentEval.ts'
import { listSotEvalPaths, runSourceOfTruthEval, type SotCatalog } from './sotEval.ts'
import {
  findStaleCalendlyUrls,
  listScenarioScanPaths,
  runChangeScenarioEval,
  type ChangeScenarioCatalog,
} from './changeScenarioEval.ts'
import { EVAL_P2_003_FIXTURES, listStaleScanPaths, runStaleClaimEval } from './staleClaimEval.ts'
import {
  listQaKnowledgePaths,
  runQaRegressionEval,
  scoreQaAnswer,
  type QaSuite,
} from './qaRegressionEval.ts'
import {
  BASELINE_EVAL_COMMANDS,
  FULL_REGRESSION_COMMANDS,
  pathMatchesTrigger,
  selectEvalCommands,
} from './ciEvalSelector.ts'
import { runDevWorkflowEval, type DevWorkflowSuite } from './devWorkflowEval.ts'
import {
  GUARDRAIL_FAIL_FIXTURES,
  runDevWorkflowGuardrailEval,
  runGuardrailBaselineFixtures,
} from './devWorkflowGuardrailEval.ts'

function loadRepoFiles(): Record<string, string | null> {
  const root = process.cwd()
  const files: Record<string, string | null> = {}
  for (const rel of listContentEvalPaths()) {
    const abs = join(root, rel)
    files[rel] = existsSync(abs) ? readFileSync(abs, 'utf8') : null
  }
  return files
}

function loadCatalog(): SotCatalog {
  return JSON.parse(readFileSync(join(process.cwd(), 'eval/catalog.json'), 'utf8')) as SotCatalog
}

function loadSotFiles(catalog: SotCatalog): Record<string, string | null> {
  const root = process.cwd()
  const files: Record<string, string | null> = {}
  for (const rel of listSotEvalPaths(catalog)) {
    const abs = join(root, rel)
    files[rel] = existsSync(abs) ? readFileSync(abs, 'utf8') : null
  }
  return files
}

function loadScenarioCatalog(): ChangeScenarioCatalog {
  return JSON.parse(
    readFileSync(join(process.cwd(), 'eval/scenarios/change-scenarios.json'), 'utf8'),
  ) as ChangeScenarioCatalog
}

function loadScenarioFiles(catalog: ChangeScenarioCatalog): Record<string, string | null> {
  const root = process.cwd()
  const files: Record<string, string | null> = {}
  for (const rel of listScenarioScanPaths(catalog)) {
    const abs = join(root, rel)
    files[rel] = existsSync(abs) ? readFileSync(abs, 'utf8') : null
  }
  return files
}

describe('forbidden claim patterns (TASK-089/090)', () => {
  it('flags healthcare-only and ROI guarantee language', () => {
    const text = 'RoseJS serves healthcare only and guarantees ROI for every engagement.'
    const hits = findPatternHits(text, 'fixture', FORBIDDEN_CLAIM_PATTERNS)
    expect(hits.map((h) => h.ruleId)).toEqual(
      expect.arrayContaining(['healthcare-only', 'guarantee-roi']),
    )
  })

  it('does not flag legitimate healthcare insurance specialization', () => {
    const text =
      'RoseJS brings specialized depth in healthcare insurance and RCM, plus eCommerce modernization.'
    const hits = findPatternHits(text, 'fixture', FORBIDDEN_CLAIM_PATTERNS)
    expect(hits).toEqual([])
  })

  it('flags brand-voice hype phrases', () => {
    const text = 'Our cutting-edge platform delivers world-class 10x results.'
    const hits = findPatternHits(text, 'fixture', BRAND_VOICE_HYPE_PATTERNS)
    expect(hits.length).toBeGreaterThanOrEqual(2)
  })
})

describe('static website content eval (TASK-089)', () => {
  it('passes against the current develop baseline', () => {
    const report = runStaticWebsiteContentEval(loadRepoFiles())
    expect(report.ok, formatFailures(report)).toBe(true)
    expect(report.scannedFiles.length).toBeGreaterThan(5)
    expect(report.checks.some((c) => c.id === 'industries:ecommerce' && c.ok)).toBe(true)
    expect(report.checks.some((c) => c.id === 'cta:calendly' && c.ok)).toBe(true)
    expect(report.checks.some((c) => c.id.startsWith('lead:') && c.ok)).toBe(true)
  })

  it('detects intentional positioning drift in a fixture string', () => {
    const hits = findPatternHits(
      'RoseJS serves healthcare only.',
      'drift-fixture',
      FORBIDDEN_CLAIM_PATTERNS,
    )
    expect(hits.some((h) => h.ruleId === 'healthcare-only')).toBe(true)
  })
})

describe('brand voice eval (TASK-090)', () => {
  it('scores golden pass/fail samples correctly', () => {
    const report = runBrandVoiceEval()
    expect(
      report.ok,
      report.items
        .filter((i) => !i.ok)
        .map((i) => i.id)
        .join(', '),
    ).toBe(true)
    expect(report.items).toHaveLength(6)
  })

  it('fails an AI draft with exaggerated claims', () => {
    const hits = evaluateVoiceText(
      'Guaranteed 10x delivery with zero-risk AI that replaces your team.',
      'ai-draft',
    )
    expect(hits.length).toBeGreaterThan(0)
    const report = runBrandVoiceEval({
      draftText: 'Guaranteed 10x delivery with zero-risk AI.',
      draftSource: 'ai-draft',
    })
    expect(report.ok).toBe(false)
    expect(report.draftHits.length).toBeGreaterThan(0)
  })

  it('passes a practical AI draft', () => {
    const report = runBrandVoiceEval({
      draftText:
        'RoseJS helps healthcare and eCommerce teams modernize platforms with phased migration and human-owned review gates.',
      draftSource: 'ai-draft',
    })
    expect(report.ok).toBe(true)
    expect(report.draftHits).toEqual([])
  })
})

describe('source-of-truth eval (TASK-081)', () => {
  it('passes against eval/catalog.json and the develop baseline', () => {
    const catalog = loadCatalog()
    const report = runSourceOfTruthEval(catalog, loadSotFiles(catalog))
    expect(
      report.ok,
      report.checks
        .filter((c) => !c.ok)
        .map((c) => `${c.id}: ${c.detail}`)
        .join('\n'),
    ).toBe(true)
    expect(report.checks.some((c) => c.id.startsWith('core-route:') && c.ok)).toBe(true)
    expect(report.checks.some((c) => c.id === 'brand:name' && c.ok)).toBe(true)
  })

  it('fails when a core route is missing from routes.tsx', () => {
    const catalog = loadCatalog()
    const files = loadSotFiles(catalog)
    files['src/app/routes.tsx'] = 'export const router = createBrowserRouter([])'
    const report = runSourceOfTruthEval(catalog, files)
    expect(report.ok).toBe(false)
    expect(report.checks.some((c) => c.id.startsWith('core-route:') && !c.ok)).toBe(true)
  })
})

describe('change-based scenarios (TASK-091)', () => {
  it('defines all six required change types and passes baseline', () => {
    const catalog = loadScenarioCatalog()
    const report = runChangeScenarioEval(catalog, loadScenarioFiles(catalog))
    expect(
      report.ok,
      report.checks
        .filter((c) => !c.ok)
        .map((c) => `${c.id}: ${c.detail}`)
        .join('\n'),
    ).toBe(true)
    expect(report.dryRunDetectedStaleCalendly).toBe(true)
    expect(catalog.scenarios).toHaveLength(6)
  })

  it('detects an outdated Calendly URL in a fixture (dry-run)', () => {
    const stale = findStaleCalendlyUrls(
      'Book at https://calendly.com/old-rosejs/30min',
      APPROVED.calendlyUrl,
    )
    expect(stale).toEqual(['https://calendly.com/old-rosejs/30min'])
    expect(findStaleCalendlyUrls(`Book at ${APPROVED.calendlyUrl}`, APPROVED.calendlyUrl)).toEqual(
      [],
    )
  })
})

describe('stale / forbidden claim detection (TASK-093)', () => {
  it('passes against the current marketing baseline', () => {
    const root = process.cwd()
    const files: Record<string, string | null> = {}
    for (const rel of listStaleScanPaths()) {
      const abs = join(root, rel)
      files[rel] = existsSync(abs) ? readFileSync(abs, 'utf8') : null
    }
    const report = runStaleClaimEval({ files })
    expect(
      report.ok,
      report.findings.map((f) => `${f.source}: ${f.ruleId} — ${f.reason}`).join('\n'),
    ).toBe(true)
    expect(report.scannedFiles.length).toBeGreaterThan(5)
  })

  it('covers all PRD EVAL-P2-003 example fixtures', () => {
    for (const fixture of EVAL_P2_003_FIXTURES) {
      const report = runStaleClaimEval({
        draftText: fixture.text,
        draftSource: `fixture:${fixture.id}`,
      })
      expect(report.ok, fixture.id).toBe(false)
      if (fixture.expectRuleId != null) {
        expect(
          report.findings.some((f) => f.ruleId === fixture.expectRuleId),
          `${fixture.id} missing rule ${fixture.expectRuleId}: ${report.findings.map((f) => f.ruleId).join(',')}`,
        ).toBe(true)
      }
      expect(report.findings[0]?.suggestedFix.length).toBeGreaterThan(10)
    }
  })

  it('fails an AI draft with a forbidden claim and reports location', () => {
    const report = runStaleClaimEval({
      draftText: 'RoseJS guarantees ROI on every modernization.',
      draftSource: 'ai-draft',
    })
    expect(report.ok).toBe(false)
    expect(report.findings[0]?.source).toBe('ai-draft')
    expect(report.findings[0]?.reason).toMatch(/ROI/i)
  })
})

function loadQaSuite(): QaSuite {
  return JSON.parse(
    readFileSync(join(process.cwd(), 'eval/qa/regression-suite.json'), 'utf8'),
  ) as QaSuite
}

function loadQaFiles(suite: QaSuite): Record<string, string | null> {
  const root = process.cwd()
  const files: Record<string, string | null> = {}
  for (const rel of listQaKnowledgePaths(suite)) {
    const abs = join(root, rel)
    files[rel] = existsSync(abs) ? readFileSync(abs, 'utf8') : null
  }
  return files
}

describe('Q&A regression suite (TASK-092)', () => {
  it('covers seven PRD questions and passes baseline', () => {
    const suite = loadQaSuite()
    const report = runQaRegressionEval(suite, loadQaFiles(suite))
    expect(
      report.ok,
      report.checks
        .filter((c) => !c.ok)
        .map((c) => `${c.id}: ${c.detail}`)
        .join('\n'),
    ).toBe(true)
    expect(suite.cases).toHaveLength(7)
  })

  it('rejects a bad draft for a named question', () => {
    const suite = loadQaSuite()
    const report = runQaRegressionEval(suite, loadQaFiles(suite), {
      questionId: 'guarantee-project-success',
      draftText: 'Yes. RoseJS guarantees project success and ROI.',
      draftSource: 'ai-draft',
    })
    expect(report.ok).toBe(false)
    expect(report.draftOk).toBe(false)
  })

  it('detects knowledge-base mismatch when required tokens are missing', () => {
    const suite = loadQaSuite()
    const files = loadQaFiles(suite)
    files['docs/rosejs-knowledge/target-industries.md'] = '# Empty industries file\n'
    const report = runQaRegressionEval(suite, files)
    expect(report.ok).toBe(false)
    expect(
      report.checks.some((c) => c.id.startsWith('kb-token:works-with-ecommerce:') && !c.ok),
    ).toBe(true)
  })

  it('scores golden pass answers as pass and fail fixtures as fail', () => {
    const suite = loadQaSuite()
    const ecommerce = suite.cases.find((c) => c.id === 'works-with-ecommerce')
    expect(ecommerce).toBeDefined()
    expect(scoreQaAnswer(ecommerce!, ecommerce!.passAnswer).ok).toBe(true)
    expect(scoreQaAnswer(ecommerce!, ecommerce!.failAnswers[0]!).ok).toBe(false)
  })
})

describe('diff-aware eval CI selector (TASK-082)', () => {
  it('matches directory and file trigger paths', () => {
    expect(pathMatchesTrigger('public/downloads/a.pdf', 'public/downloads/')).toBe(true)
    expect(pathMatchesTrigger('src/pages/Home.tsx', 'src/pages/Home.tsx')).toBe(true)
    expect(pathMatchesTrigger('src/pages/About.tsx', 'src/pages/Home.tsx')).toBe(false)
  })

  it('forces full regression for knowledge-base changes', () => {
    const catalog = loadScenarioCatalog()
    const selection = selectEvalCommands(['docs/rosejs-knowledge/target-industries.md'], catalog)
    expect(selection.mode).toBe('full')
    expect(selection.commands).toEqual([...FULL_REGRESSION_COMMANDS])
  })

  it('selects a subset for SEO-only changes', () => {
    const catalog = loadScenarioCatalog()
    const selection = selectEvalCommands(['src/lib/seo.ts'], catalog)
    expect(selection.mode).toBe('subset')
    expect(selection.reasons.some((r) => r.startsWith('Area seo'))).toBe(true)
    expect(selection.commands).toEqual([...BASELINE_EVAL_COMMANDS])
    expect(selection.commands).not.toContain('eval:qa')
  })

  it('unions scenario evalCommands for Home page changes', () => {
    const catalog = loadScenarioCatalog()
    const selection = selectEvalCommands(['src/pages/Home.tsx'], catalog)
    expect(selection.mode).toBe('subset')
    expect(selection.matchedScenarioIds.length).toBeGreaterThan(0)
    expect(selection.commands).toContain('eval:scenarios')
  })
})

function loadDevWorkflowSuite(): DevWorkflowSuite {
  return JSON.parse(
    readFileSync(join(process.cwd(), 'eval/assistant/dev-workflow-scenarios.json'), 'utf8'),
  ) as DevWorkflowSuite
}

describe('dev-workflow assistant scenarios (TASK-085)', () => {
  it('covers five scenario types and passes baseline', () => {
    const suite = loadDevWorkflowSuite()
    const report = runDevWorkflowEval(suite)
    expect(
      report.ok,
      report.checks
        .filter((c) => !c.ok)
        .map((c) => `${c.id}: ${c.detail}`)
        .join('\n'),
    ).toBe(true)
    expect(suite.cases).toHaveLength(5)
  })

  it('rejects an off-brand marketing draft', () => {
    const suite = loadDevWorkflowSuite()
    const report = runDevWorkflowEval(suite, {
      scenarioId: 'dev-marketing-copy-draft',
      draftText: 'RoseJS serves healthcare only and guarantees ROI.',
      draftSource: 'ai-draft',
    })
    expect(report.ok).toBe(false)
    expect(report.draftOk).toBe(false)
  })
})

describe('dev-workflow guardrails (TASK-086)', () => {
  it('passes baseline fixtures and detects documented anti-patterns', () => {
    const report = runGuardrailBaselineFixtures()
    expect(report.ok, report.findings.map((f) => `${f.ruleId}: ${f.reason}`).join('\n')).toBe(true)
  })

  it('fails Express + Postgres MVP boundary violation', () => {
    const fixture = GUARDRAIL_FAIL_FIXTURES[0]!
    const report = runDevWorkflowGuardrailEval({
      draftText: fixture.text,
      draftSource: fixture.id,
    })
    expect(report.ok).toBe(false)
    for (const id of fixture.expectRuleIds) {
      expect(
        report.findings.some((f) => f.ruleId === id),
        id,
      ).toBe(true)
    }
  })
})

function formatFailures(report: ReturnType<typeof runStaticWebsiteContentEval>): string {
  return report.checks
    .filter((c) => !c.ok)
    .map((c) => `${c.id}: ${c.detail}`)
    .join('\n')
}
