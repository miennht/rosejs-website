import { useEffect } from 'react'

const SCRIPT_ID = 'plausible-analytics'

/** Loads the Plausible script once when `VITE_PLAUSIBLE_DOMAIN` is set (deferred, non-blocking). */
export function PlausibleLoader() {
  useEffect(() => {
    const domain = (import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined)?.trim()
    if (domain == null || domain === '') return
    if (document.getElementById(SCRIPT_ID) != null) return
    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.defer = true
    script.dataset.domain = domain
    script.src = 'https://plausible.io/js/script.js'
    document.head.appendChild(script)
  }, [])

  return null
}
