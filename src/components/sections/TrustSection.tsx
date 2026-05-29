import type { ReactNode } from 'react'
import { Container } from '../ui/Container.tsx'
import { Section } from '../ui/Section.tsx'

export type TrustSectionProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  points: string[]
  /** Tighter spacing and typography for supporting copy on focused pages */
  compact?: boolean
  className?: string
}

export function TrustSection({
  eyebrow,
  title,
  description,
  points,
  compact = false,
  className = '',
}: TrustSectionProps) {
  return (
    <section
      className={`border-b border-border ${compact ? 'bg-surface/30 py-10' : 'bg-surface/40 py-16'} ${className}`.trim()}
    >
      <Container>
        <Section
          title={title}
          {...(eyebrow != null && eyebrow !== '' ? { eyebrow } : {})}
          {...(description != null ? { description } : {})}
          {...(compact ? { className: '!py-0 [&>h2]:mb-4 [&>h2]:text-lg' } : {})}
        >
          <ul
            className={
              compact ? 'grid max-w-3xl gap-3 sm:grid-cols-2 sm:gap-x-8' : 'max-w-2xl space-y-3'
            }
          >
            {points.map((point) => (
              <li key={point} className={`flex gap-3 text-muted ${compact ? 'text-sm' : ''}`}>
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground"
                  aria-hidden
                />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </Section>
      </Container>
    </section>
  )
}
