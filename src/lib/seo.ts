/** Canonical production URL without trailing slash; used for OG URLs and JSON-LD. */
export const SITE_URL_PLACEHOLDER = 'https://www.rosejs.example'

export const DEFAULT_SITE_TITLE = 'RoseJS — Healthcare software architecture consulting'

export const DEFAULT_SITE_DESCRIPTION =
  'RoseJS helps healthcare and payer teams modernize platforms, integrate systems, and ship AI-first software with disciplined architecture and delivery.'

export function getSiteUrl(): string | undefined {
  const raw = import.meta.env.VITE_SITE_URL as string | undefined
  if (raw == null || raw.trim() === '') return undefined
  return raw.replace(/\/$/, '')
}

export function siteUrlOrPlaceholder(): string {
  return getSiteUrl() ?? SITE_URL_PLACEHOLDER
}

export function absoluteUrl(path: string): string {
  const base = siteUrlOrPlaceholder()
  const p = path.startsWith('/') ? path : `/${path}`
  return `${base}${p}`
}
