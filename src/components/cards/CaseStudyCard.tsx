import { MarketingCardLayout } from './MarketingCardLayout.tsx'

export type CaseStudyCardProps = {
  title: string
  summary: string
  to: string
  ctaLabel?: string
  className?: string
}

export function CaseStudyCard({
  title,
  summary,
  to,
  ctaLabel = 'View case study',
  className = '',
}: CaseStudyCardProps) {
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
