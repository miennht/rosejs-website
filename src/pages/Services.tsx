import { useLoaderData } from 'react-router-dom'
import type { ServicesLoaderData } from '../app/cmsLoaders.ts'
import { ServiceCard } from '../components/cards/index.ts'
import { Container } from '../components/ui/Container.tsx'

export function Services() {
  const { cards } = useLoaderData() as ServicesLoaderData

  return (
    <Container className="py-10">
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">Services</h1>
      <p className="mb-10 max-w-2xl text-muted">
        Core offerings sourced through the CMS layer (`getServices`). Each card links to a detail
        route backed by the same normalized content.
      </p>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((item) => (
          <li key={item.to} className="min-h-0">
            <ServiceCard title={item.title} summary={item.summary} to={item.to} />
          </li>
        ))}
      </ul>
    </Container>
  )
}
