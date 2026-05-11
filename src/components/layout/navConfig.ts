export type NavItem = {
  to: string
  label: string
  /** Pass `true` for the home route so `/insights` does not mark Home active */
  end?: boolean
}

/** Primary site navigation — matches PRD information architecture */
export const PRIMARY_NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/insights', label: 'Insights' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/contact', label: 'Contact' },
  { to: '/schedule', label: 'Schedule Consultation' },
]
