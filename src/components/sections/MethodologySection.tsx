import type { ReactNode } from 'react'
import { Container } from '../ui/Container.tsx'
import { Section } from '../ui/Section.tsx'

export type MethodologyPillar = {
  title: string
  body: ReactNode
}

export type MethodologySectionProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  pillars: MethodologyPillar[]
  className?: string
}

export function MethodologySection({
  eyebrow,
  title,
  description,
  pillars,
  className = '',
}: MethodologySectionProps) {
  return (
    <section className={`border-b border-border py-16 ${className}`.trim()}>
      <Container>
        <Section
          title={title}
          {...(eyebrow != null && eyebrow !== '' ? { eyebrow } : {})}
          {...(description != null ? { description } : {})}
        >
          <ol className="grid gap-8 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <li key={`${pillar.title}-${index}`} className="flex gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground text-sm font-semibold text-foreground"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{pillar.title}</h3>
                  <div className="text-sm leading-relaxed text-muted">{pillar.body}</div>
                </div>
              </li>
            ))}
          </ol>
        </Section>
      </Container>
    </section>
  )
}
