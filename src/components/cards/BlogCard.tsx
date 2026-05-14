import { MarketingCardLayout } from './MarketingCardLayout.tsx'

export type BlogCardProps = {
  title: string
  summary: string
  to: string
  ctaLabel?: string
  metaLine?: string
  tagLabels?: string[]
  className?: string
}

export function BlogCard({
  title,
  summary,
  to,
  ctaLabel = 'Read more',
  metaLine,
  tagLabels,
  className = '',
}: BlogCardProps) {
  return (
    <MarketingCardLayout
      title={title}
      summary={summary}
      to={to}
      ctaLabel={ctaLabel}
      {...(metaLine != null && metaLine !== '' ? { metaLine } : {})}
      {...(tagLabels != null && tagLabels.length > 0 ? { tagLabels } : {})}
      className={className}
    />
  )
}
