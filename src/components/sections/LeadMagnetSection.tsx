import type { ReactNode } from 'react'
import { Container } from '../ui/Container.tsx'
import { Section } from '../ui/Section.tsx'
import { CtaRow } from './CtaRow.tsx'
import type { SectionCta } from './types.ts'

export type LeadMagnetSectionProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  /** Usually an external file URL or CMS asset */
  ctas: SectionCta[]
  className?: string
}

export function LeadMagnetSection({
  eyebrow,
  title,
  description,
  ctas,
  className = '',
}: LeadMagnetSectionProps) {
  return (
    <section className={`bg-surface/40 py-16 ${className}`.trim()}>
      <Container>
        <div className="rounded-xl border border-border bg-background p-8 md:p-10">
          <Section
            title={title}
            {...(eyebrow != null && eyebrow !== '' ? { eyebrow } : {})}
            {...(description != null ? { description } : {})}
          >
            <CtaRow ctas={ctas} />
          </Section>
        </div>
      </Container>
    </section>
  )
}
