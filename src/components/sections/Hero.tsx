import type { ReactNode } from 'react'
import { Container } from '../ui/Container.tsx'
import { CtaRow } from './CtaRow.tsx'
import type { SectionCta } from './types.ts'

export type HeroProps = {
  title: string
  subtitle: ReactNode
  /** Primary CTA (e.g. schedule consultation) */
  primaryCta: SectionCta
  /** Secondary CTA (e.g. explore services) */
  secondaryCta?: SectionCta
  className?: string
}

export function Hero({ title, subtitle, primaryCta, secondaryCta, className = '' }: HeroProps) {
  const ctas: SectionCta[] = secondaryCta ? [primaryCta, secondaryCta] : [primaryCta]

  return (
    <section
      className={`border-b border-border bg-surface/40 py-16 md:py-24 ${className}`.trim()}
      aria-labelledby="hero-heading"
    >
      <Container>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">RoseJS</p>
        <h1
          id="hero-heading"
          className="mb-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl"
        >
          {title}
        </h1>
        <div className="mb-10 max-w-2xl text-lg text-muted md:text-xl">{subtitle}</div>
        <CtaRow ctas={ctas} />
      </Container>
    </section>
  )
}
