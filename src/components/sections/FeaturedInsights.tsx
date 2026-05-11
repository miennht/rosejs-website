import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../ui/Container.tsx'
import { Section } from '../ui/Section.tsx'
import { LinkButton } from '../ui/LinkButton.tsx'

export type InsightTeaser = {
  title: string
  summary: string
  to: string
}

export type FeaturedInsightsProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  posts: InsightTeaser[]
  /** Optional “view all” link to blog listing */
  viewAllTo?: string
  viewAllLabel?: string
  className?: string
}

export function FeaturedInsights({
  eyebrow,
  title,
  description,
  posts,
  viewAllTo = '/insights',
  viewAllLabel = 'View all insights',
  className = '',
}: FeaturedInsightsProps) {
  return (
    <section className={`border-b border-border py-16 ${className}`.trim()}>
      <Container>
        <Section
          title={title}
          {...(eyebrow != null && eyebrow !== '' ? { eyebrow } : {})}
          {...(description != null ? { description } : {})}
        >
          <ul className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <li key={post.to}>
                <article className="flex h-full flex-col rounded-lg border border-border bg-background p-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    <Link
                      to={post.to}
                      className="underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{post.summary}</p>
                  <Link
                    to={post.to}
                    className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    Read more
                  </Link>
                </article>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <LinkButton to={viewAllTo} variant="secondary">
              {viewAllLabel}
            </LinkButton>
          </div>
        </Section>
      </Container>
    </section>
  )
}
