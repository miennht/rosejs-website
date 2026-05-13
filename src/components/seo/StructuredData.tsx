export type JsonLdProps = {
  data: unknown
}

/** Renders a single JSON-LD script tag (safe JSON serialization). */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD must be raw JSON; characters < and & are escaped by JSON.stringify.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
