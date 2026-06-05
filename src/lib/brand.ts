/** Public brand and domain — Option A: RoseJS brand, roseng.org domain (see docs/Brand_and_Domain.md). */

export const BRAND_NAME = 'RoseJS'

/** Display-only domain label (no protocol); canonical URL uses www. */
export const DOMAIN_LABEL = 'roseng.org'

export const BRAND_TAGLINE = `${BRAND_NAME} · ${DOMAIN_LABEL}`

/** Browser tab favicon — letter R mark (`public/favicon.svg`). */
export const FAVICON_SRC = '/favicon.svg'

/** Header/nav rose mark cropped from brand artwork (`public/rosejs-icon.png`). */
export const SITE_ICON_SRC = '/rosejs-icon.png'

/** Full RoseJS logo for Open Graph and structured data (`public/rosejs-logo.png`). */
export const SITE_LOGO_SRC = '/rosejs-logo.png'

export function brandWithDomainSentence(): string {
  return `${BRAND_NAME} (${DOMAIN_LABEL})`
}
