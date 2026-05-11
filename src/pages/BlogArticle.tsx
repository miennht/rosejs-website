import { useParams } from 'react-router-dom'

export function BlogArticle() {
  const { slug } = useParams()

  return (
    <div>
      <h1 className="mb-3 text-3xl font-semibold tracking-tight">Blog article</h1>
      <p className="text-muted">
        Slug: <code className="rounded bg-surface px-1 py-0.5 text-sm">{slug ?? '(none)'}</code>
      </p>
    </div>
  )
}
