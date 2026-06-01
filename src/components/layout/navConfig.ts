export type NavItem = {
  to: string
  label: string
  /** Pass `true` for the home route so `/insights` does not mark Home active */
  end?: boolean
}

/** Header and mobile menu — logo links home; no separate Home item */
export const PRIMARY_NAV_ITEMS: NavItem[] = [
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/insights', label: 'Insights' },
  { to: '/schedule', label: 'Schedule' },
]

/** Footer discoverability — includes pages not in the primary nav */
export const FOOTER_NAV_ITEMS: NavItem[] = [
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/insights', label: 'Insights' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/contact', label: 'Contact' },
]
