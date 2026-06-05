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
  /** Full brand artwork — homepage hero only; not used in header icon. */
  brandImageSrc?: string
  brandImageAlt?: string
  className?: string
}

export function Hero({
  title,
  subtitle,
  showEyebrow = false,
  primaryCta,
  secondaryCta,
  brandImageSrc,
  brandImageAlt = 'RoseJS — AI-first architecture and modernization',
  className = '',
}: HeroProps) {
  const ctas = [primaryCta, secondaryCta].filter((cta): cta is SectionCta => cta != null)
  const hasSubtitle = subtitle != null && subtitle !== ''
  const hasCtas = ctas.length > 0
  const hasBrandImage = brandImageSrc != null && brandImageSrc !== ''

  return (
    <section
      className={`border-b border-border bg-surface/40 py-16 md:py-24 ${className}`.trim()}
      aria-labelledby="hero-heading"
    >
      <Container>
        <div
          className={
            hasBrandImage
              ? 'grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12'
              : undefined
          }
        >
          <div>
            {showEyebrow ? (
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                RoseJS
              </p>
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
          </div>
          {hasBrandImage ? (
            <figure className="mx-auto w-full max-w-sm lg:max-w-md lg:justify-self-end">
              <img
                src={brandImageSrc}
                alt={brandImageAlt}
                width={512}
                height={512}
                className="w-full rounded-xl object-contain"
                fetchPriority="high"
              />
            </figure>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
