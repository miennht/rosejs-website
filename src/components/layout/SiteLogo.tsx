import { BRAND_NAME } from '../../lib/brand.ts'

const FAVICON_SRC = '/favicon.svg'

type SiteLogoProps = {
  className?: string
  /** Icon size in Tailwind scale (default h-8 w-8). */
  iconClassName?: string
}

/** RoseJS wordmark with favicon mark — used in header home link. */
export function SiteLogo({ className = '', iconClassName = 'h-8 w-8' }: SiteLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={FAVICON_SRC}
        alt=""
        width={32}
        height={32}
        className={`shrink-0 rounded-md ${iconClassName}`}
        aria-hidden
      />
      <span className="text-lg font-semibold tracking-tight text-foreground">{BRAND_NAME}</span>
    </span>
  )
}
