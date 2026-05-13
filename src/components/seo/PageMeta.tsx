import { useEffect } from 'react'

export type PageMetaProps = {
  title: string
  description?: string
}

/** Client-side `<title>` and `meta[name=description]` for SPA routes. */
export function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
    if (meta == null) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    const previousDescription = meta.getAttribute('content')
    if (description != null && description !== '') {
      meta.setAttribute('content', description)
    }

    return () => {
      document.title = previousTitle
      if (previousDescription != null) {
        meta.setAttribute('content', previousDescription)
      } else {
        meta.removeAttribute('content')
      }
    }
  }, [title, description])

  return null
}
