import { Link } from 'react-router-dom'
import { Container } from '../ui/Container.tsx'
import { MobileNavigation } from './MobileNavigation.tsx'
import { Navigation } from './Navigation.tsx'

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          RoseJS
        </Link>
        <div className="hidden md:block">
          <Navigation />
        </div>
        <div className="md:hidden">
          <MobileNavigation />
        </div>
      </Container>
    </header>
  )
}
