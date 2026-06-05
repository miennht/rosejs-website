import { BRAND_NAME, SITE_ICON_SRC } from '../../lib/brand.ts'

type SiteLogoProps = {
  className?: string
  /** Icon size in Tailwind scale (default h-9 w-9). */
  iconClassName?: string
}

/** RoseJS wordmark with rose icon — used in header home link. */
export function SiteLogo({ className = '', iconClassName = 'h-9 w-9' }: SiteLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={SITE_ICON_SRC}
        alt=""
        width={36}
        height={36}
        className={`shrink-0 rounded-md object-contain ${iconClassName}`}
        aria-hidden
      />
      <span className="text-lg font-semibold tracking-tight text-foreground">{BRAND_NAME}</span>
    </span>
  )
}
