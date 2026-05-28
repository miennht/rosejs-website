/** Public site branding — safe to expose via VITE_* (no secrets). */

const DEFAULT_CONTACT_EMAIL = 'hello@roseng.org'
const DEFAULT_SITE_ORIGIN = 'https://www.roseng.org'

export function getSiteOrigin(): string {
  const raw = import.meta.env.VITE_SITE_URL as string | undefined
  if (raw != null && raw.trim() !== '') return raw.replace(/\/$/, '')
  return DEFAULT_SITE_ORIGIN
}

export function getContactEmail(): string {
  const raw = import.meta.env.VITE_CONTACT_EMAIL as string | undefined
  if (raw != null && raw.trim() !== '') return raw.trim()
  return DEFAULT_CONTACT_EMAIL
}

/** When unset, Contact page omits the LinkedIn block. */
export function getLinkedInUrl(): string | undefined {
  const raw = import.meta.env.VITE_LINKEDIN_URL as string | undefined
  if (raw == null || raw.trim() === '') return undefined
  return raw.trim()
}
