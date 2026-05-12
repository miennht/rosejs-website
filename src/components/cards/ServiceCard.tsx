import { MarketingCardLayout } from './MarketingCardLayout.tsx'

export type ServiceCardProps = {
  title: string
  summary: string
  to: string
  ctaLabel?: string
  className?: string
}

export function ServiceCard({
  title,
  summary,
  to,
  ctaLabel = 'Learn more',
  className = '',
}: ServiceCardProps) {
  return (
    <MarketingCardLayout
      title={title}
      summary={summary}
      to={to}
      ctaLabel={ctaLabel}
      className={className}
    />
  )
}
