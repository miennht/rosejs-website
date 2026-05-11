import { LinkButton, type LinkButtonVariant } from '../ui/LinkButton.tsx'
import type { SectionCta } from './types.ts'

function CtaItem({ cta }: { cta: SectionCta }) {
  const variant: LinkButtonVariant = cta.variant ?? 'primary'

  if ('href' in cta) {
    if (cta.external === true) {
      return (
        <LinkButton href={cta.href} variant={variant} target="_blank" rel="noopener noreferrer">
          {cta.label}
        </LinkButton>
      )
    }
    return (
      <LinkButton href={cta.href} variant={variant}>
        {cta.label}
      </LinkButton>
    )
  }

  return (
    <LinkButton to={cta.to} variant={variant}>
      {cta.label}
    </LinkButton>
  )
}

export type CtaRowProps = {
  ctas: SectionCta[]
  className?: string
}

export function CtaRow({ ctas, className = '' }: CtaRowProps) {
  if (ctas.length === 0) return null

  return (
    <div className={`flex flex-wrap gap-3 ${className}`.trim()}>
      {ctas.map((cta, index) => (
        <CtaItem key={`${'href' in cta ? cta.href : cta.to}-${cta.label}-${index}`} cta={cta} />
      ))}
    </div>
  )
}
