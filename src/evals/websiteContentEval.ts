/**
 * Static website content eval (TASK-089 / EVAL-P1-002).
 * Scans key marketing sources against docs/rosejs-knowledge/.
 * Callers supply file contents (CLI loads from disk; tests inject fixtures).
 */
import {
  APPROVED,
  FORBIDDEN_CLAIM_PATTERNS,
  findPatternHits,
  normalizeSourceText,
  type MatchHit,
} from './patterns.ts'

export type EvalCheckResult = {
  id: string
  page: string
  label: string
  ok: boolean
  severity: 'critical' | 'should'
  detail: string
}

export type ContentEvalReport = {
  task: 'TASK-089'
  ok: boolean
  checks: EvalCheckResult[]
  forbiddenHits: MatchHit[]
  scannedFiles: string[]
}

/** Page → source files covered by the static-website-eval checklist. */
export const CONTENT_SCAN_TARGETS: Array<{ page: string; relativePaths: string[] }> = [
  {
    page: 'Homepage',
    relativePaths: [
      'src/pages/Home.tsx',
      'src/components/sections/Hero.tsx',
      'src/components/sections/ServicesOverview.tsx',
      'src/components/sections/MethodologySection.tsx',
      'src/components/sections/TrustSection.tsx',
      'src/components/sections/CTASection.tsx',
      'src/app/cmsLoaders.ts',
    ],
  },
  {
    page: 'Services',
    relativePaths: ['src/pages/Services.tsx', 'src/content/fallback/services.ts'],
  },
  {
    page: 'About',
    relativePaths: ['src/pages/About.tsx'],
  },
  {
    page: 'Contact',
    relativePaths: ['src/pages/Contact.tsx', 'src/lib/site.ts', 'src/lib/calendly.ts'],
  },
  {
    page: 'Lead magnet',
    relativePaths: [
      'src/content/fallback/leadMagnets.ts',
      'src/components/sections/LeadMagnetSection.tsx',
    ],
  },
]

function check(
  id: string,
  page: string,
  label: string,
  ok: boolean,
  detail: string,
  severity: 'critical' | 'should' = 'critical',
): EvalCheckResult {
  return { id, page, label, ok, detail, severity }
}

export type ContentFileMap = Readonly<Record<string, string | null>>

export function runStaticWebsiteContentEval(files: ContentFileMap): ContentEvalReport {
  const checks: EvalCheckResult[] = []
  const forbiddenHits: MatchHit[] = []
  const scannedFiles: string[] = []

  const combinedByPage = new Map<string, string>()

  for (const target of CONTENT_SCAN_TARGETS) {
    const parts: string[] = []
    for (const rel of target.relativePaths) {
      const raw = files[rel]
      if (raw == null) {
        checks.push(
          check(
            `${target.page}:missing:${rel}`,
            target.page,
            `Source present: ${rel}`,
            false,
            `Expected file missing: ${rel}`,
          ),
        )
        continue
      }
      scannedFiles.push(rel)
      parts.push(raw)
      forbiddenHits.push(
        ...findPatternHits(normalizeSourceText(raw), rel, FORBIDDEN_CLAIM_PATTERNS),
      )
    }
    combinedByPage.set(target.page, parts.join('\n'))
  }

  for (const hit of forbiddenHits) {
    checks.push(
      check(
        `forbidden:${hit.ruleId}:${hit.source}`,
        hit.source,
        `No forbidden claim (${hit.ruleId})`,
        false,
        `${hit.reason} — “…${hit.excerpt}…”`,
      ),
    )
  }

  if (forbiddenHits.length === 0) {
    checks.push(
      check(
        'forbidden:none',
        'All pages',
        'No forbidden claims in scanned marketing sources',
        true,
        `Scanned ${scannedFiles.length} files against forbidden-claims patterns`,
      ),
    )
  }

  const servicesTs = files['src/content/fallback/services.ts'] ?? ''
  for (const slug of APPROVED.publishedServiceSlugs) {
    const ok = servicesTs.includes(`slug: '${slug}'`) || servicesTs.includes(`slug: "${slug}"`)
    checks.push(
      check(
        `service-slug:${slug}`,
        'Services',
        `Published service slug present: ${slug}`,
        ok,
        ok ? `Found slug ${slug}` : `Missing published slug ${slug} in fallback services`,
      ),
    )
  }

  const about = combinedByPage.get('About') ?? ''
  const servicesPage = combinedByPage.get('Services') ?? ''
  const ecommerceOk = /e-?commerce/i.test(about) && /e-?commerce/i.test(servicesPage)
  checks.push(
    check(
      'industries:ecommerce',
      'About + Services',
      'eCommerce (or e-commerce) framing present — not healthcare-only',
      ecommerceOk,
      ecommerceOk
        ? 'About and Services mention eCommerce'
        : 'Missing eCommerce industry framing on About and/or Services',
    ),
  )

  const calendly = files['src/lib/calendly.ts'] ?? ''
  const calendlyOk = calendly.includes(APPROVED.calendlyUrl)
  checks.push(
    check(
      'cta:calendly',
      'Contact / Schedule',
      'Approved Calendly URL in defaults',
      calendlyOk,
      calendlyOk ? APPROVED.calendlyUrl : `Expected DEFAULT_CALENDLY_URL = ${APPROVED.calendlyUrl}`,
    ),
  )

  const site = files['src/lib/site.ts'] ?? ''
  const emailOk = site.includes(APPROVED.contactEmail)
  const originOk = site.includes(APPROVED.siteOrigin)
  checks.push(
    check(
      'cta:email',
      'Contact',
      'Approved contact email default',
      emailOk,
      emailOk ? APPROVED.contactEmail : `Expected ${APPROVED.contactEmail}`,
    ),
  )
  checks.push(
    check(
      'brand:origin',
      'Contact / SEO defaults',
      'Approved site origin default',
      originOk,
      originOk ? APPROVED.siteOrigin : `Expected ${APPROVED.siteOrigin}`,
    ),
  )

  const brand = files['src/lib/brand.ts'] ?? ''
  const brandOk =
    brand.includes(`'${APPROVED.brandName}'`) || brand.includes(`"${APPROVED.brandName}"`)
  checks.push(
    check(
      'brand:name',
      'Brand',
      'Brand constant is RoseJS',
      brandOk,
      brandOk ? APPROVED.brandName : 'BRAND_NAME must be RoseJS',
    ),
  )

  const lead = files['src/content/fallback/leadMagnets.ts'] ?? ''
  const leadTitleOk = lead.includes(APPROVED.leadMagnetTitle)
  const leadFileOk = lead.includes(APPROVED.leadMagnetFile)
  const leadSlugOk = lead.includes(APPROVED.leadMagnetSlug)
  checks.push(
    check(
      'lead:title',
      'Lead magnet',
      'Approved lead magnet title',
      leadTitleOk,
      leadTitleOk ? APPROVED.leadMagnetTitle : `Expected title ${APPROVED.leadMagnetTitle}`,
    ),
  )
  checks.push(
    check(
      'lead:file',
      'Lead magnet',
      'Approved lead magnet file path',
      leadFileOk,
      leadFileOk ? APPROVED.leadMagnetFile : `Expected ${APPROVED.leadMagnetFile}`,
    ),
  )
  checks.push(
    check(
      'lead:slug',
      'Lead magnet',
      'Approved lead magnet slug',
      leadSlugOk,
      leadSlugOk ? APPROVED.leadMagnetSlug : `Expected ${APPROVED.leadMagnetSlug}`,
    ),
  )

  const home = combinedByPage.get('Homepage') ?? ''
  const homeCtaOk = home.includes('/schedule') && home.includes('/contact')
  checks.push(
    check(
      'home:ctas',
      'Homepage',
      'Homepage CTAs include /schedule and /contact',
      homeCtaOk,
      homeCtaOk ? 'Found schedule + contact CTAs' : 'Missing /schedule and/or /contact CTAs',
    ),
  )

  const criticalFailed = checks.some((c) => !c.ok && c.severity === 'critical')
  return {
    task: 'TASK-089',
    ok: !criticalFailed,
    checks,
    forbiddenHits,
    scannedFiles: [...new Set(scannedFiles)],
  }
}

export function formatContentEvalReport(report: ContentEvalReport): string {
  const lines: string[] = [
    `Static website content eval (${report.task})`,
    `Result: ${report.ok ? 'PASS' : 'FAIL'}`,
    `Scanned files: ${report.scannedFiles.length}`,
    '',
  ]
  for (const c of report.checks) {
    lines.push(`${c.ok ? '✓' : '✗'} [${c.page}] ${c.label}`)
    if (!c.ok) lines.push(`  → ${c.detail}`)
  }
  const failed = report.checks.filter((c) => !c.ok).length
  const passed = report.checks.length - failed
  lines.push('')
  lines.push(`Summary: ${passed} passed, ${failed} failed`)
  return lines.join('\n')
}

/** Paths required for a full website content eval (unique). */
export function listContentEvalPaths(): string[] {
  const paths = new Set<string>(['src/lib/brand.ts'])
  for (const target of CONTENT_SCAN_TARGETS) {
    for (const rel of target.relativePaths) paths.add(rel)
  }
  return [...paths]
}
