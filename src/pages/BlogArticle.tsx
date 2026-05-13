import { Link, useLoaderData } from 'react-router-dom'
import type { BlogArticleLoaderData } from '../app/cmsLoaders.ts'
import { PageMeta } from '../components/seo/PageMeta.tsx'
import { Container } from '../components/ui/Container.tsx'

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(iso))
  } catch {
    return iso
  }
}

export function BlogArticle() {
  const { post, relatedServices } = useLoaderData() as BlogArticleLoaderData

  if (post == null) {
    return (
      <Container className="py-10">
        <PageMeta
          title="Article not found | RoseJS"
          description="The requested article does not exist."
        />
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">Article</h1>
        <p className="mb-6 text-muted">This article could not be found.</p>
        <Link
          to="/insights"
          className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
        >
          Back to insights
        </Link>
      </Container>
    )
  }

  const paragraphs = post.body.split(/\n\n+/).filter(Boolean)

  return (
    <Container className="py-10">
      <PageMeta title={post.seo.seoTitle} description={post.seo.seoDescription} />
      <p className="mb-4 text-sm text-muted">
        <Link to="/insights" className="underline-offset-4 hover:underline">
          Insights
        </Link>
        <span aria-hidden="true" className="px-2">
          /
        </span>
        <span className="text-foreground">{post.title}</span>
      </p>
      <article className="max-w-3xl">
        <header className="mb-8 border-b border-border pb-8">
          {post.category != null ? (
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">
              {post.category.title}
            </p>
          ) : null}
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-foreground">
            {post.title}
          </h1>
          <p className="text-lg text-muted">{post.summary}</p>
          <p className="mt-4 text-sm text-muted">
            <span className="text-foreground">{post.author.name}</span>
            {post.author.role != null ? ` · ${post.author.role}` : null}
            <span aria-hidden="true"> · </span>
            Published {formatDate(post.publishedDate)}
            {post.updatedDate !== post.publishedDate ? (
              <>
                <span aria-hidden="true"> · </span>
                Updated {formatDate(post.updatedDate)}
              </>
            ) : null}
          </p>
          {post.tags.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <li
                  key={tag.id}
                  className="rounded-full border border-border px-2 py-0.5 text-xs text-muted"
                >
                  {tag.title}
                </li>
              ))}
            </ul>
          ) : null}
        </header>
        <div className="space-y-4 text-sm leading-relaxed text-muted">
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {relatedServices.length > 0 ? (
          <section className="mt-12 border-t border-border pt-8">
            <h2 className="mb-3 text-lg font-semibold text-foreground">Related services</h2>
            <ul className="space-y-2">
              {relatedServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </article>
    </Container>
  )
}
