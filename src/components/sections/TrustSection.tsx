import type { ReactNode } from 'react'
import { Container } from '../ui/Container.tsx'
import { Section } from '../ui/Section.tsx'

export type TrustSectionProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  points: string[]
  className?: string
}

export function TrustSection({
  eyebrow,
  title,
  description,
  points,
  className = '',
}: TrustSectionProps) {
  return (
    <section className={`border-b border-border bg-surface/40 py-16 ${className}`.trim()}>
      <Container>
        <Section
          title={title}
          {...(eyebrow != null && eyebrow !== '' ? { eyebrow } : {})}
          {...(description != null ? { description } : {})}
        >
          <ul className="max-w-2xl space-y-3">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-muted">
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
