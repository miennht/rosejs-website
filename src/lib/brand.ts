/** Public brand and domain — Option A: RoseJS brand, roseng.org domain (see docs/Brand_and_Domain.md). */

export const BRAND_NAME = 'RoseJS'

/** Display-only domain label (no protocol); canonical URL uses www. */
export const DOMAIN_LABEL = 'roseng.org'

export const BRAND_TAGLINE = `${BRAND_NAME} · ${DOMAIN_LABEL}`

/** Browser tab favicon — rose mark from `rosejs-icon.png` (`public/favicon.svg`). */
export const FAVICON_SRC = '/favicon.svg'

/** Header/nav rose mark only — not the full brand hero (`public/rosejs-icon.png`). */
export const SITE_ICON_SRC = '/rosejs-icon.png'

/** Main RoseJS brand image for homepage hero, OG, and JSON-LD (`public/rosejs-brand.png`). */
export const SITE_BRAND_IMAGE_SRC = '/rosejs-brand.png'

/** @deprecated Use SITE_BRAND_IMAGE_SRC; kept for existing references during transition. */
export const SITE_LOGO_SRC = SITE_BRAND_IMAGE_SRC

export function brandWithDomainSentence(): string {
  return `${BRAND_NAME} (${DOMAIN_LABEL})`
}
