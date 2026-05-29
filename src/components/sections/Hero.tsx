import type { ReactNode } from 'react'
import { Container } from '../ui/Container.tsx'
import { CtaRow } from './CtaRow.tsx'
import type { SectionCta } from './types.ts'

export type HeroProps = {
  title: string
  subtitle?: ReactNode
  showEyebrow?: boolean
  primaryCta?: SectionCta
  secondaryCta?: SectionCta
  className?: string
}

export function Hero({
  title,
  subtitle,
  showEyebrow = false,
  primaryCta,
  secondaryCta,
  className = '',
}: HeroProps) {
  const ctas = [primaryCta, secondaryCta].filter((cta): cta is SectionCta => cta != null)
  const hasSubtitle = subtitle != null && subtitle !== ''
  const hasCtas = ctas.length > 0

  return (
    <section
      className={`border-b border-border bg-surface/40 py-16 md:py-24 ${className}`.trim()}
      aria-labelledby="hero-heading"
    >
      <Container>
        {showEyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">RoseJS</p>
        ) : null}
        <h1
          id="hero-heading"
          className={`max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl ${hasSubtitle ? 'mb-6' : hasCtas ? 'mb-10' : ''}`}
        >
          {title}
        </h1>
        {hasSubtitle ? (
          <div
            className={`max-w-2xl text-lg leading-relaxed text-muted md:text-xl ${hasCtas ? 'mb-10' : ''}`}
          >
            {subtitle}
          </div>
        ) : null}
        {hasCtas ? <CtaRow ctas={ctas} /> : null}
      </Container>
    </section>
  )
}
