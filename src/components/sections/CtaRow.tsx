import { LinkButton, type LinkButtonVariant } from '../ui/LinkButton.tsx'
import { trackEvent } from '../../lib/analytics.ts'
import type { SectionCta } from './types.ts'

function isLeadMagnetHref(href: string): boolean {
  return href.includes('/downloads/') || href.toLowerCase().endsWith('.pdf')
}

function CtaItem({ cta }: { cta: SectionCta }) {
  const variant: LinkButtonVariant = cta.variant ?? 'primary'

  if ('href' in cta) {
    const onClick = () => {
      if (isLeadMagnetHref(cta.href)) {
        trackEvent('lead_magnet_download', { href: cta.href })
      }
      if (/calendly\.com/i.test(cta.href)) {
        trackEvent('calendly_click', { source: 'external_href' })
      }
    }

    if (cta.external === true) {
      return (
        <LinkButton
          href={cta.href}
          variant={variant}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {cta.label}
        </LinkButton>
      )
    }
    return (
      <LinkButton href={cta.href} variant={variant} onClick={onClick}>
        {cta.label}
      </LinkButton>
    )
  }

  const scheduleClick =
    cta.to === '/schedule'
      ? () => {
          trackEvent('calendly_click', { source: 'internal_nav' })
        }
      : undefined

  return (
    <LinkButton to={cta.to} variant={variant} onClick={scheduleClick}>
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
