import { BRAND_NAME } from '../../lib/brand.ts'

type SiteLogoProps = {
  className?: string
}

/** RoseJS wordmark — used in header home link. */
export function SiteLogo({ className = '' }: SiteLogoProps) {
  return (
    <span className={`text-lg font-semibold tracking-tight text-foreground ${className}`}>
      {BRAND_NAME}
    </span>
  )
}
