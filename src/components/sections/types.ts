import type { LinkButtonVariant } from '../ui/LinkButton.tsx'

/** In-app navigation CTA */
export type SectionCtaInternal = {
  label: string
  to: string
  variant?: LinkButtonVariant
}

/** External or downloadable resource CTA */
export type SectionCtaExternal = {
  label: string
  href: string
  variant?: LinkButtonVariant
  /** When true, opens in a new tab with safe `rel`. */
  external?: boolean
}

export type SectionCta = SectionCtaInternal | SectionCtaExternal
