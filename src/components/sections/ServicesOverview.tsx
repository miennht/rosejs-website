import type { ReactNode } from 'react'
import { Container } from '../ui/Container.tsx'
import { Section } from '../ui/Section.tsx'
import { CtaRow } from './CtaRow.tsx'
import type { SectionCta } from './types.ts'

export type ServiceTeaser = {
  title: string
  description: string
}

export type ServicesOverviewProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  services: ServiceTeaser[]
  ctas?: SectionCta[]
  className?: string
}

export function ServicesOverview({
  eyebrow,
  title,
  description,
  services,
  ctas,
  className = '',
}: ServicesOverviewProps) {
  return (
    <section className={`border-b border-border py-16 ${className}`.trim()}>
      <Container>
        <Section
          title={title}
          {...(eyebrow != null && eyebrow !== '' ? { eyebrow } : {})}
          {...(description != null ? { description } : {})}
        >
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <li
                key={`${service.title}-${index}`}
                className="rounded-lg border border-border bg-background p-6 shadow-sm"
              >
                <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{service.description}</p>
              </li>
            ))}
          </ul>
          {ctas && ctas.length > 0 ? <CtaRow className="mt-10" ctas={ctas} /> : null}
        </Section>
      </Container>
    </section>
  )
}
