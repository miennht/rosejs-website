import { useLoaderData } from 'react-router-dom'
import type { InsightsLoaderData } from '../app/cmsLoaders.ts'
import { BlogCard } from '../components/cards/index.ts'
import { Container } from '../components/ui/Container.tsx'

export function Insights() {
  const { cards } = useLoaderData() as InsightsLoaderData

  return (
    <Container className="py-10">
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">Insights</h1>
      <p className="mb-10 max-w-2xl text-muted">
        Articles from `getBlogPosts`, sorted by publish date. Swap the fallback modules for Sanity
        when the Studio and API credentials are ready.
      </p>
      <ul className="grid gap-6 md:grid-cols-2">
        {cards.map((post) => (
          <li key={post.to} className="min-h-0">
            <BlogCard title={post.title} summary={post.summary} to={post.to} />
          </li>
        ))}
      </ul>
    </Container>
  )
}
