import { Badge } from '../components/ui/Badge.tsx'
import { Button } from '../components/ui/Button.tsx'
import { LinkButton } from '../components/ui/LinkButton.tsx'
import { Section } from '../components/ui/Section.tsx'

export function Home() {
  return (
    <div>
      <Section
        eyebrow="Placeholder"
        title="Home"
        description="RoseJS healthcare software architecture consulting — this page will become the full marketing home experience."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Badge>MVP scaffold</Badge>
          <Badge>AI-first delivery</Badge>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton to="/contact" variant="primary">
            Contact
          </LinkButton>
          <LinkButton to="/services" variant="secondary">
            Services
          </LinkButton>
          <Button type="button" variant="ghost" disabled>
            Coming soon
          </Button>
        </div>
      </Section>
    </div>
  )
}
