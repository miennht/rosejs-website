import { useEffect } from 'react'
import { DEFAULT_SITE_DESCRIPTION, absoluteUrl } from '../../lib/seo.ts'

const SEO_MARK = 'data-seo-managed'

export type SEOProps = {
  title: string
  description?: string
  /** Path for og:url, e.g. `/contact` */
  path?: string
  ogImage?: string
  ogType?: 'website' | 'article'
}

function setMeta(attrName: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(
    `meta[${attrName}="${CSS.escape(key)}"]`,
  ) as HTMLMetaElement | null
  if (el == null) {
    el = document.createElement('meta')
    el.setAttribute(attrName, key)
    el.setAttribute(SEO_MARK, 'true')
    document.head.appendChild(el)
  } else if (!el.hasAttribute(SEO_MARK)) {
    el.setAttribute(SEO_MARK, 'true')
  }
  el.setAttribute('content', content)
}

function removeManagedMeta() {
  document.querySelectorAll(`meta[${SEO_MARK}="true"]`).forEach((n) => n.remove())
}

/**
 * Client-side document head: title, description, Open Graph, and basic Twitter tags.
 * Matches Architecture §12 (SPA metadata until prerender exists).
 */
export function SEO({ title, description, path, ogImage, ogType = 'website' }: SEOProps) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    let descMeta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
    if (descMeta == null) {
      descMeta = document.createElement('meta')
      descMeta.setAttribute('name', 'description')
      document.head.appendChild(descMeta)
    }
    const previousDescription = descMeta.getAttribute('content')
    const desc = description != null && description !== '' ? description : DEFAULT_SITE_DESCRIPTION
    descMeta.setAttribute('content', desc)

    const pageUrl = path != null ? absoluteUrl(path) : undefined
    const ogTitle = title
    const ogDesc = desc

    setMeta('property', 'og:title', ogTitle)
    setMeta('property', 'og:description', ogDesc)
    setMeta('property', 'og:type', ogType)
    setMeta('property', 'og:site_name', 'RoseJS')
    if (pageUrl != null) setMeta('property', 'og:url', pageUrl)
    if (ogImage != null && ogImage !== '') {
      const img = ogImage.startsWith('http') ? ogImage : absoluteUrl(ogImage)
      setMeta('property', 'og:image', img)
    }

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', ogTitle)
    setMeta('name', 'twitter:description', ogDesc)

    return () => {
      document.title = previousTitle
      removeManagedMeta()
      if (previousDescription != null && previousDescription !== '') {
        descMeta.setAttribute('content', previousDescription)
      } else {
        descMeta.removeAttribute('content')
      }
    }
  }, [title, description, path, ogImage, ogType])

  return null
}
