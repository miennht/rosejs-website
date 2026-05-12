import { MarketingCardLayout } from './MarketingCardLayout.tsx'

export type BlogCardProps = {
  title: string
  summary: string
  to: string
  ctaLabel?: string
  className?: string
}

export function BlogCard({
  title,
  summary,
  to,
  ctaLabel = 'Read more',
  className = '',
}: BlogCardProps) {
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
