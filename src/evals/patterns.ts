/**
 * Shared pattern rules for Phase 1 static content and brand-voice evals
 * (TASK-089, TASK-090). Grounded in docs/rosejs-knowledge/forbidden-claims.md
 * and brand-voice.md.
 */

export type PatternRule = {
  id: string
  /** Human-readable failure category */
  category: string
  /** Case-insensitive match against scanned text */
  pattern: RegExp
  /** Why this fails (for reports) */
  reason: string
  severity: 'critical' | 'should'
}

/** Hard-fail claims that must not appear in marketing/AI copy. */
export const FORBIDDEN_CLAIM_PATTERNS: PatternRule[] = [
  {
    id: 'guarantee-roi',
    category: 'Outcome guarantees',
    pattern: /\bguarantees?\s+roi\b/i,
    reason: 'Forbidden: guaranteed ROI',
    severity: 'critical',
  },
  {
    id: 'guarantee-success',
    category: 'Outcome guarantees',
    pattern: /\bguarantees?\s+project\s+success\b/i,
    reason: 'Forbidden: guaranteed project success',
    severity: 'critical',
  },
  {
    id: 'instant-transformation',
    category: 'Outcome guarantees',
    pattern: /\binstant\s+transformation\b/i,
    reason: 'Forbidden: instant transformation',
    severity: 'critical',
  },
  {
    id: 'zero-risk',
    category: 'Outcome guarantees',
    pattern: /\bzero[- ]risk\b/i,
    reason: 'Forbidden: zero-risk claims',
    severity: 'critical',
  },
  {
    id: 'healthcare-only',
    category: 'Industry misrepresentation',
    pattern: /\b(?:serves?|serve|works?\s+with)\s+healthcare\s+only\b/i,
    reason: 'Forbidden: healthcare-only positioning',
    severity: 'critical',
  },
  {
    id: 'we-only-serve-healthcare',
    category: 'Industry misrepresentation',
    pattern: /\bwe\s+only\s+serve\s+healthcare\b/i,
    reason: 'Forbidden: healthcare-only positioning',
    severity: 'critical',
  },
  {
    id: 'no-ecommerce',
    category: 'Industry misrepresentation',
    pattern: /\bdoes\s+not\s+work\s+with\s+e-?commerce\b/i,
    reason: 'Forbidden: excluding e-commerce',
    severity: 'critical',
  },
  {
    id: 'hospitals-only',
    category: 'Industry misrepresentation',
    pattern: /\bonly\s+works?\s+with\s+hospitals\b/i,
    reason: 'Forbidden: hospitals-only exclusivity',
    severity: 'critical',
  },
  {
    id: 'ai-replaces-team',
    category: 'AI hype',
    pattern: /\bai\s+(?:fully\s+)?replaces?\b/i,
    reason: 'Forbidden: AI replaces humans',
    severity: 'critical',
  },
  {
    id: 'fully-autonomous',
    category: 'AI hype',
    pattern: /\bfully\s+autonomous\b/i,
    reason: 'Forbidden: fully autonomous engineering',
    severity: 'critical',
  },
  {
    id: 'wrong-brand-roseng',
    category: 'Brand',
    pattern: /\bRoseNG\b/,
    reason: 'Forbidden: brand is RoseJS, not RoseNG',
    severity: 'critical',
  },
]

/** Brand-voice hype / exaggeration patterns (TASK-090). */
export const BRAND_VOICE_HYPE_PATTERNS: PatternRule[] = [
  {
    id: 'world-class',
    category: 'Hype',
    pattern: /\bworld[- ]class\b/i,
    reason: 'Avoid vague superlative: world-class',
    severity: 'critical',
  },
  {
    id: 'cutting-edge',
    category: 'Hype',
    pattern: /\bcutting[- ]edge\b/i,
    reason: 'Avoid vague superlative: cutting-edge',
    severity: 'critical',
  },
  {
    id: 'revolutionary',
    category: 'Hype',
    pattern: /\brevolutionary\b/i,
    reason: 'Avoid vague superlative: revolutionary',
    severity: 'critical',
  },
  {
    id: 'ten-x',
    category: 'Hype',
    pattern: /\b10x\b/i,
    reason: 'Avoid exaggerated multiplier claims',
    severity: 'critical',
  },
  {
    id: 'guaranteed-faster',
    category: 'Hype',
    pattern: /\bguaranteed\s+faster\b/i,
    reason: 'Avoid guaranteed delivery speed claims',
    severity: 'critical',
  },
]

export const APPROVED = {
  calendlyUrl: 'https://calendly.com/roseng0201/30min',
  contactEmail: 'hello@roseng.org',
  siteOrigin: 'https://www.roseng.org',
  brandName: 'RoseJS',
  domainLabel: 'roseng.org',
  leadMagnetTitle: 'Legacy application modernization checklist',
  leadMagnetFile: '/downloads/legacy-application-modernization-checklist.pdf',
  leadMagnetSlug: 'legacy-application-modernization-checklist',
  publishedServiceSlugs: [
    'software-architecture-consulting',
    'legacy-application-modernization',
    'ai-first-product-development',
    'healthcare-insurance-rcm-consulting',
    'cloud-api-integration',
    'technical-debt-assessment',
    'secure-data-system-integration',
  ],
} as const

export type MatchHit = {
  ruleId: string
  category: string
  reason: string
  severity: 'critical' | 'should'
  source: string
  excerpt: string
}

export function findPatternHits(text: string, source: string, rules: PatternRule[]): MatchHit[] {
  const hits: MatchHit[] = []
  for (const rule of rules) {
    const match = rule.pattern.exec(text)
    if (match == null) continue
    const start = Math.max(0, match.index - 40)
    const end = Math.min(text.length, match.index + match[0].length + 40)
    hits.push({
      ruleId: rule.id,
      category: rule.category,
      reason: rule.reason,
      severity: rule.severity,
      source,
      excerpt: text.slice(start, end).replace(/\s+/g, ' ').trim(),
    })
  }
  return hits
}

/** Strip block comments and stringish noise for clearer hits (best-effort). */
export function normalizeSourceText(raw: string): string {
  return raw
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/^\s*\/\/.*$/gm, ' ')
    .replace(/\s+/g, ' ')
}

/**
 * Known removed / never-offered service claims (TASK-093).
 * Append a pattern whenever a published service is retired from services.md.
 */
export const REMOVED_SERVICE_PATTERNS: PatternRule[] = [
  {
    id: 'removed-blockchain-consulting',
    category: 'Removed services',
    pattern: /\boffers?\s+blockchain\s+consulting\b/i,
    reason: 'Stale: blockchain consulting is not a published RoseJS service',
    severity: 'critical',
  },
  {
    id: 'removed-staffing-agency',
    category: 'Service misrepresentation',
    pattern: /\b(?:is|as)\s+a\s+staffing\s+agency\b/i,
    reason: 'Forbidden: RoseJS is not a staffing agency',
    severity: 'critical',
  },
]

/** Outdated lead-magnet paths/titles that must not appear as current assets. */
export const STALE_LEAD_MAGNET_SUBSTRINGS: string[] = [
  '/downloads/modernization-checklist.pdf',
  '/downloads/legacy-modernization-checklist.pdf',
  'Outdated modernization guide',
]

/** Non-approved contact emails that must not appear as primary contact. */
export const STALE_CONTACT_EMAILS: string[] = [
  'hello@example.com',
  'contact@rosejs.com',
  'info@roseng.com',
]

/** Detect Calendly URLs that are not the approved booking link (TASK-091/093). */
export function findStaleCalendlyUrls(
  text: string,
  approvedUrl: string = APPROVED.calendlyUrl,
): string[] {
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

/** All pattern rules used by the TASK-093 stale/forbidden scanner. */
export const STALE_CLAIM_PATTERN_RULES: PatternRule[] = [
  ...FORBIDDEN_CLAIM_PATTERNS,
  ...REMOVED_SERVICE_PATTERNS,
]
