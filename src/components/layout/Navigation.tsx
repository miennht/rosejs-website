import { NavLink } from 'react-router-dom'
import { PRIMARY_NAV_ITEMS } from './navConfig'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
    isActive ? 'bg-foreground text-background' : 'text-foreground hover:bg-surface'
  }`

export function Navigation() {
  return (
    <nav className="flex flex-wrap items-center gap-1" aria-label="Primary">
      {PRIMARY_NAV_ITEMS.map(({ to, label, end }) => (
        <NavLink key={to} to={to} className={linkClass} end={end === true}>
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
