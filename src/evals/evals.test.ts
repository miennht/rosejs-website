/// <reference types="node" />
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { BRAND_VOICE_HYPE_PATTERNS, FORBIDDEN_CLAIM_PATTERNS, findPatternHits } from './patterns.ts'
import { runBrandVoiceEval, evaluateVoiceText } from './brandVoiceEval.ts'
import { listContentEvalPaths, runStaticWebsiteContentEval } from './websiteContentEval.ts'
import { listSotEvalPaths, runSourceOfTruthEval, type SotCatalog } from './sotEval.ts'

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

function formatFailures(report: ReturnType<typeof runStaticWebsiteContentEval>): string {
  return report.checks
    .filter((c) => !c.ok)
    .map((c) => `${c.id}: ${c.detail}`)
    .join('\n')
}
