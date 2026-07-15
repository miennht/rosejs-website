/**
 * Source-of-truth eval runner (TASK-081 / EVAL-SOT-005).
 * Compares repo sources against eval/catalog.json golden cases.
 */
import {
  FORBIDDEN_CLAIM_PATTERNS,
  findPatternHits,
  normalizeSourceText,
} from './patterns.ts'

export type SotCatalogExpect = {
  titleExact?: string
  descriptionContains?: string[]
  ctaPaths?: string[]
  bodyContains?: string[]
  bodyContainsAnyPerFile?: Record<string, string[]>
  publishedServiceSlugs?: string[]
  forbiddenRuleIds?: string[]
  contactEmail?: string
  calendlyUrl?: string
  primaryNavPaths?: string[]
  footerNavPaths?: string[]
  leadMagnetSlug?: string
  leadMagnetFile?: string
  brandName?: string
  domainLabel?: string
  siteOrigin?: string
  notes?: string
}

export type SotCatalogCase = {
  id: string
  route: string
  page: string
  contentSource?: string
  sourceFiles: string[]
  expect: SotCatalogExpect
}

export type SotCatalog = {
  version: number
  task: string
  coreRoutes: string[]
  brand: {
    id: string
    sourceFiles: string[]
    expect: SotCatalogExpect
  }
  cases: SotCatalogCase[]
}

export type SotCheckResult = {
  id: string
  caseId: string
  label: string
  ok: boolean
  detail: string
}

export type SotEvalReport = {
  task: 'TASK-081'
  ok: boolean
  checks: SotCheckResult[]
}

export type SotFileMap = Readonly<Record<string, string | null>>

function check(
  id: string,
  caseId: string,
  label: string,
  ok: boolean,
  detail: string,
): SotCheckResult {
  return { id, caseId, label, ok, detail }
}

function joinSources(files: SotFileMap, paths: string[]): string {
  return paths.map((p) => files[p] ?? '').join('\n')
}

function extractRegisteredRoutes(routesTs: string): Set<string> {
  const routes = new Set<string>(['/'])
  if (/index:\s*true/.test(routesTs)) routes.add('/')
  for (const match of routesTs.matchAll(/path:\s*['"]([^'"]+)['"]/g)) {
    const segment = match[1]
    if (segment === '*' || segment.includes(':')) continue
    routes.add(`/${segment}`)
  }
  return routes
}

function assertContainsAll(
  text: string,
  needles: string[],
  label: string,
): { ok: boolean; missing: string[] } {
  const missing = needles.filter((n) => !text.includes(n))
  return { ok: missing.length === 0, missing }
}

export function runSourceOfTruthEval(catalog: SotCatalog, files: SotFileMap): SotEvalReport {
  const checks: SotCheckResult[] = []
  const routesTs = files['src/app/routes.tsx'] ?? ''
  const registered = extractRegisteredRoutes(routesTs)

  for (const route of catalog.coreRoutes) {
    const ok = registered.has(route)
    checks.push(
      check(
        `core-route:${route}`,
        'coreRoutes',
        `Core route registered: ${route}`,
        ok,
        ok ? `Found in src/app/routes.tsx` : `Missing route ${route} in src/app/routes.tsx`,
      ),
    )
  }

  const brandText = joinSources(files, catalog.brand.sourceFiles)
  const brand = catalog.brand.expect
  if (brand.brandName != null) {
    const ok =
      brandText.includes(`'${brand.brandName}'`) || brandText.includes(`"${brand.brandName}"`)
    checks.push(
      check(
        'brand:name',
        catalog.brand.id,
        `Brand name is ${brand.brandName}`,
        ok,
        ok ? brand.brandName : `Expected BRAND_NAME ${brand.brandName}`,
      ),
    )
  }
  if (brand.domainLabel != null) {
    const ok = brandText.includes(brand.domainLabel)
    checks.push(
      check(
        'brand:domain',
        catalog.brand.id,
        `Domain label is ${brand.domainLabel}`,
        ok,
        ok ? brand.domainLabel : `Expected domain ${brand.domainLabel}`,
      ),
    )
  }
  if (brand.siteOrigin != null) {
    const ok = brandText.includes(brand.siteOrigin)
    checks.push(
      check(
        'brand:origin',
        catalog.brand.id,
        `Site origin default is ${brand.siteOrigin}`,
        ok,
        ok ? brand.siteOrigin : `Expected ${brand.siteOrigin}`,
      ),
    )
  }
  if (brand.contactEmail != null) {
    const ok = brandText.includes(brand.contactEmail)
    checks.push(
      check(
        'brand:email',
        catalog.brand.id,
        `Contact email default is ${brand.contactEmail}`,
        ok,
        ok ? brand.contactEmail : `Expected ${brand.contactEmail}`,
      ),
    )
  }
  if (brand.calendlyUrl != null) {
    const ok = brandText.includes(brand.calendlyUrl)
    checks.push(
      check(
        'brand:calendly',
        catalog.brand.id,
        `Calendly URL default is ${brand.calendlyUrl}`,
        ok,
        ok ? brand.calendlyUrl : `Expected ${brand.calendlyUrl}`,
      ),
    )
  }

  for (const item of catalog.cases) {
    if (item.route !== '*') {
      const ok = registered.has(item.route)
      checks.push(
        check(
          `case-route:${item.id}`,
          item.id,
          `Case route registered: ${item.route}`,
          ok,
          ok ? item.route : `Missing ${item.route}`,
        ),
      )
    }

    for (const rel of item.sourceFiles) {
      const present = files[rel] != null
      checks.push(
        check(
          `source:${item.id}:${rel}`,
          item.id,
          `Source present: ${rel}`,
          present,
          present ? rel : `Missing file ${rel}`,
        ),
      )
    }

    const combined = joinSources(files, item.sourceFiles)
    const exp = item.expect

    if (exp.titleExact != null) {
      const ok = combined.includes(exp.titleExact)
      checks.push(
        check(
          `title:${item.id}`,
          item.id,
          `SEO title exact: ${exp.titleExact}`,
          ok,
          ok ? 'Found titleExact' : `Missing titleExact in sources for ${item.id}`,
        ),
      )
    }

    if (exp.descriptionContains != null) {
      const { ok, missing } = assertContainsAll(combined, exp.descriptionContains, 'description')
      checks.push(
        check(
          `description:${item.id}`,
          item.id,
          `SEO description contains required tokens`,
          ok,
          ok ? 'All descriptionContains found' : `Missing: ${missing.join(', ')}`,
        ),
      )
    }

    if (exp.ctaPaths != null) {
      const { ok, missing } = assertContainsAll(combined, exp.ctaPaths, 'cta')
      checks.push(
        check(
          `cta:${item.id}`,
          item.id,
          `CTA paths present`,
          ok,
          ok ? `Found ${exp.ctaPaths.join(', ')}` : `Missing CTA paths: ${missing.join(', ')}`,
        ),
      )
    }

    if (exp.bodyContains != null) {
      const { ok, missing } = assertContainsAll(combined, exp.bodyContains, 'body')
      checks.push(
        check(
          `body:${item.id}`,
          item.id,
          `Body contains required tokens`,
          ok,
          ok ? 'All bodyContains found' : `Missing: ${missing.join(', ')}`,
        ),
      )
    }

    if (exp.bodyContainsAnyPerFile != null) {
      for (const [rel, options] of Object.entries(exp.bodyContainsAnyPerFile)) {
        const text = files[rel] ?? ''
        const ok = options.some((o) => text.includes(o))
        checks.push(
          check(
            `body-any:${item.id}:${rel}`,
            item.id,
            `One of [${options.join(' | ')}] in ${rel}`,
            ok,
            ok ? `Matched in ${rel}` : `None of ${options.join(', ')} found in ${rel}`,
          ),
        )
      }
    }

    if (exp.publishedServiceSlugs != null) {
      const services = files['src/content/fallback/services.ts'] ?? ''
      for (const slug of exp.publishedServiceSlugs) {
        const ok = services.includes(`slug: '${slug}'`) || services.includes(`slug: "${slug}"`)
        checks.push(
          check(
            `slug:${item.id}:${slug}`,
            item.id,
            `Published service slug: ${slug}`,
            ok,
            ok ? slug : `Missing slug ${slug}`,
          ),
        )
      }
    }

    if (exp.primaryNavPaths != null) {
      const nav = files['src/components/layout/navConfig.ts'] ?? ''
      const { ok, missing } = assertContainsAll(nav, exp.primaryNavPaths, 'primaryNav')
      checks.push(
        check(
          `nav-primary:${item.id}`,
          item.id,
          `Primary nav paths`,
          ok,
          ok ? 'All primary nav paths found' : `Missing: ${missing.join(', ')}`,
        ),
      )
    }

    if (exp.footerNavPaths != null) {
      const nav = files['src/components/layout/navConfig.ts'] ?? ''
      const { ok, missing } = assertContainsAll(nav, exp.footerNavPaths, 'footerNav')
      checks.push(
        check(
          `nav-footer:${item.id}`,
          item.id,
          `Footer nav paths`,
          ok,
          ok ? 'All footer nav paths found' : `Missing: ${missing.join(', ')}`,
        ),
      )
    }

    if (exp.contactEmail != null) {
      const ok = combined.includes(exp.contactEmail)
      checks.push(
        check(
          `email:${item.id}`,
          item.id,
          `Contact email ${exp.contactEmail}`,
          ok,
          ok ? exp.contactEmail : `Missing ${exp.contactEmail}`,
        ),
      )
    }

    if (exp.calendlyUrl != null) {
      const ok = combined.includes(exp.calendlyUrl)
      checks.push(
        check(
          `calendly:${item.id}`,
          item.id,
          `Calendly URL ${exp.calendlyUrl}`,
          ok,
          ok ? exp.calendlyUrl : `Missing ${exp.calendlyUrl}`,
        ),
      )
    }

    if (exp.leadMagnetSlug != null) {
      const ok = combined.includes(exp.leadMagnetSlug)
      checks.push(
        check(
          `lead-slug:${item.id}`,
          item.id,
          `Lead magnet slug ${exp.leadMagnetSlug}`,
          ok,
          ok ? exp.leadMagnetSlug : `Missing ${exp.leadMagnetSlug}`,
        ),
      )
    }

    if (exp.leadMagnetFile != null) {
      const ok = combined.includes(exp.leadMagnetFile)
      checks.push(
        check(
          `lead-file:${item.id}`,
          item.id,
          `Lead magnet file ${exp.leadMagnetFile}`,
          ok,
          ok ? exp.leadMagnetFile : `Missing ${exp.leadMagnetFile}`,
        ),
      )
    }

    if (exp.forbiddenRuleIds != null && exp.forbiddenRuleIds.length > 0) {
      const rules = FORBIDDEN_CLAIM_PATTERNS.filter((r) => exp.forbiddenRuleIds!.includes(r.id))
      const hits = findPatternHits(normalizeSourceText(combined), item.id, rules)
      const ok = hits.length === 0
      checks.push(
        check(
          `forbidden:${item.id}`,
          item.id,
          `No forbidden patterns (${exp.forbiddenRuleIds.join(', ')})`,
          ok,
          ok
            ? 'Clean'
            : hits.map((h) => `${h.ruleId}: ${h.reason}`).join('; '),
        ),
      )
    }
  }

  return {
    task: 'TASK-081',
    ok: checks.every((c) => c.ok),
    checks,
  }
}

export function formatSotEvalReport(report: SotEvalReport): string {
  const lines: string[] = [
    `Source-of-truth eval (${report.task})`,
    `Result: ${report.ok ? 'PASS' : 'FAIL'}`,
    '',
  ]
  for (const c of report.checks) {
    lines.push(`${c.ok ? '✓' : '✗'} ${c.label}`)
    if (!c.ok) lines.push(`  → ${c.detail}`)
  }
  const failed = report.checks.filter((c) => !c.ok).length
  const passed = report.checks.length - failed
  lines.push('')
  lines.push(`Summary: ${passed} passed, ${failed} failed`)
  return lines.join('\n')
}

/** Unique source paths referenced by the catalog (plus routes). */
export function listSotEvalPaths(catalog: SotCatalog): string[] {
  const paths = new Set<string>(['src/app/routes.tsx', 'src/content/fallback/services.ts'])
  for (const rel of catalog.brand.sourceFiles) paths.add(rel)
  for (const item of catalog.cases) {
    for (const rel of item.sourceFiles) paths.add(rel)
  }
  return [...paths]
}
