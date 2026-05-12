import type { ReactNode } from 'react'
import { Container } from '../ui/Container.tsx'
import { Section } from '../ui/Section.tsx'
import { LinkButton } from '../ui/LinkButton.tsx'
import { BlogCard } from '../cards/BlogCard.tsx'

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
                <BlogCard title={post.title} summary={post.summary} to={post.to} />
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
