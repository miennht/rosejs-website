import { Container } from '../components/ui/Container.tsx'
import { BlogCard } from '../components/cards/index.ts'

const posts = [
  {
    title: 'Designing safe AI boundaries in clinical workflows',
    summary:
      'Where to place human review, how to log decisions, and how to keep models from becoming silent single points of failure.',
    to: '/insights/sample-post',
  },
  {
    title: 'Why integration debt outruns feature debt',
    summary:
      'Signals that your integration layer needs attention before the next vendor swap or payer rule change lands on your roadmap.',
    to: '/insights/sample-post',
  },
] as const

export function Insights() {
  return (
    <Container className="py-10">
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">Insights</h1>
      <p className="mb-10 max-w-2xl text-muted">
        Blog-style cards with title, summary, and CTA — ready for CMS-sourced posts and slugs.
      </p>
      <ul className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <li key={post.title} className="min-h-0">
            <BlogCard title={post.title} summary={post.summary} to={post.to} />
          </li>
        ))}
      </ul>
    </Container>
  )
}
