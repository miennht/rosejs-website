import type { ReactNode } from 'react'
import { Container } from '../ui/Container.tsx'
import { Section } from '../ui/Section.tsx'
import { CtaRow } from './CtaRow.tsx'
import type { SectionCta } from './types.ts'

export type CTASectionProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  ctas: SectionCta[]
  className?: string
}

export function CTASection({ eyebrow, title, description, ctas, className = '' }: CTASectionProps) {
  return (
    <section className={`border-b border-border py-16 ${className}`.trim()}>
      <Container>
        <Section
          title={title}
          {...(eyebrow != null && eyebrow !== '' ? { eyebrow } : {})}
          {...(description != null ? { description } : {})}
        >
          <CtaRow ctas={ctas} />
        </Section>
      </Container>
    </section>
  )
}
