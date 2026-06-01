import { useLoaderData } from 'react-router-dom'
import type { InsightsLoaderData } from '../app/cmsLoaders.ts'
import { formatBlogPostMetaLine } from '../cms/mappers.ts'
import { BlogCard } from '../components/cards/index.ts'
import { SEO } from '../components/seo/SEO.tsx'
import { Container } from '../components/ui/Container.tsx'

export function Insights() {
  const { posts } = useLoaderData() as InsightsLoaderData

  return (
    <Container className="py-10">
      <SEO
        path="/insights"
        title="Insights | RoseJS"
        description="Articles on healthcare software architecture, legacy modernization, AI-first delivery, and integration strategy from RoseJS."
      />
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">Insights</h1>
      <p className="mb-10 max-w-2xl text-muted">
        Practical articles on healthcare platform modernization, integration strategy, technical
        debt, and AI-first engineering for teams building reliable production systems.
      </p>

      {posts.length === 0 ? (
        <p className="rounded-lg border border-dashed border-border bg-surface/30 px-4 py-8 text-center text-sm text-muted">
          No articles are published yet. Check back soon for new insights.
        </p>
      ) : (
        <ul className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <li key={post.id} className="min-h-0">
              <BlogCard
                title={post.title}
                summary={post.summary}
                to={`/insights/${post.slug}`}
                metaLine={formatBlogPostMetaLine(post)}
                {...(post.tags.length > 0 ? { tagLabels: post.tags.map((t) => t.title) } : {})}
              />
            </li>
          ))}
        </ul>
      )}
    </Container>
  )
}
