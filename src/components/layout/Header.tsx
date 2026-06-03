import { Link } from 'react-router-dom'
import { BRAND_NAME } from '../../lib/brand.ts'
import { Container } from '../ui/Container.tsx'
import { MobileNavigation } from './MobileNavigation.tsx'
import { Navigation } from './Navigation.tsx'
import { SiteLogo } from './SiteLogo.tsx'

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link
          to="/"
          aria-label={`${BRAND_NAME} home`}
          className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <SiteLogo />
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
