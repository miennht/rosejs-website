import { Link } from 'react-router-dom'
import { Container } from '../ui/Container.tsx'
import { PRIMARY_NAV_ITEMS } from './navConfig'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border bg-surface/40">
      <Container className="py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">RoseJS</p>
            <p className="mt-2 max-w-sm text-sm text-muted">
              Healthcare software architecture and AI-first engineering consulting.
            </p>
            <p className="mt-4 text-xs text-muted">© {year} RoseJS. All rights reserved.</p>
          </div>
          <nav aria-label="Footer" className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Explore</p>
            <ul className="flex flex-col gap-1">
              {PRIMARY_NAV_ITEMS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-foreground underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
