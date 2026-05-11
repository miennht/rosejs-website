import type { ReactNode } from 'react'
import { Container } from '../ui/Container.tsx'

export type PageLayoutProps = {
  children: ReactNode
}

/**
 * Wraps routed page content in the standard max-width container and vertical rhythm.
 */
export function PageLayout({ children }: PageLayoutProps) {
  return <Container className="flex-1 py-10">{children}</Container>
}
