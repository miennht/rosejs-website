import { Link } from 'react-router-dom'
import { LinkButton } from '../ui/LinkButton.tsx'

const titleLinkClass =
  'underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground'

export type MarketingCardLayoutProps = {
  title: string
  summary: string
  to: string
  ctaLabel: string
  className?: string
}

export function MarketingCardLayout({
  title,
  summary,
  to,
  ctaLabel,
  className = '',
}: MarketingCardLayoutProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-lg border border-border bg-background p-6 transition-shadow hover:shadow-sm ${className}`.trim()}
    >
      <h3 className="mb-2 text-lg font-semibold text-foreground">
        <Link to={to} className={titleLinkClass}>
          {title}
        </Link>
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{summary}</p>
      <div>
        <LinkButton to={to} variant="secondary">
          {ctaLabel}
        </LinkButton>
      </div>
    </article>
  )
}
