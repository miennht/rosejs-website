import { SEO } from '../components/seo/SEO.tsx'
import { LinkButton } from '../components/ui/LinkButton.tsx'
import { Container } from '../components/ui/Container.tsx'

export function NotFound() {
  return (
    <Container className="py-16 text-center">
      <SEO title="Page not found | RoseJS" description="The page you requested does not exist." />
      <p className="mb-2 text-sm font-medium uppercase tracking-wide text-muted">404</p>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-foreground">
        This page is not available
      </h1>
      <p className="mx-auto mb-8 max-w-md text-muted">
        The URL may be mistyped, or the content moved. Try the home page, services overview, or
        contact form.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <LinkButton to="/" variant="primary">
          Back to home
        </LinkButton>
        <LinkButton to="/services" variant="secondary">
          Services
        </LinkButton>
        <LinkButton to="/contact" variant="secondary">
          Contact
        </LinkButton>
      </div>
    </Container>
  )
}
