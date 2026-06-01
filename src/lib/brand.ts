/** Public brand and domain — Option A: RoseJS brand, roseng.org domain (see docs/Brand_and_Domain.md). */

export const BRAND_NAME = 'RoseJS'

/** Display-only domain label (no protocol); canonical URL uses www. */
export const DOMAIN_LABEL = 'roseng.org'

export const BRAND_TAGLINE = `${BRAND_NAME} · ${DOMAIN_LABEL}`

export function brandWithDomainSentence(): string {
  return `${BRAND_NAME} (${DOMAIN_LABEL})`
}
