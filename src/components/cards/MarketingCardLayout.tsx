import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { LinkButton } from '../ui/LinkButton.tsx'

const titleLinkClass =
  'underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground'

export type MarketingCardLayoutProps = {
  title: string
  summary: string
  to: string
  ctaLabel: string
  /** Optional line under title (e.g. date · category). */
  metaLine?: string
  /** Optional tag chips below meta line. */
  tagLabels?: string[]
  className?: string
}

export function MarketingCardLayout({
  title,
  summary,
  to,
  ctaLabel,
  metaLine,
  tagLabels,
  className = '',
}: MarketingCardLayoutProps) {
  const tagsBlock: ReactNode =
    tagLabels != null && tagLabels.length > 0 ? (
      <ul className="mb-3 flex flex-wrap gap-2" aria-label="Tags">
        {tagLabels.map((label) => (
          <li
            key={label}
            className="rounded-full border border-border px-2 py-0.5 text-xs text-muted"
          >
            {label}
          </li>
        ))}
      </ul>
    ) : null

  return (
    <article
      className={`flex h-full flex-col rounded-lg border border-border bg-background p-6 transition-shadow hover:shadow-sm ${className}`.trim()}
    >
      <h3 className="mb-2 text-lg font-semibold text-foreground">
        <Link to={to} className={titleLinkClass}>
          {title}
        </Link>
      </h3>
      {metaLine != null && metaLine !== '' ? (
        <p className="mb-2 text-xs text-muted">{metaLine}</p>
      ) : null}
      {tagsBlock}
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{summary}</p>
      <div>
        <LinkButton to={to} variant="secondary">
          {ctaLabel}
        </LinkButton>
      </div>
    </article>
  )
}
