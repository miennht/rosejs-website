import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ServiceCard } from './ServiceCard.tsx'
import { renderWithRouter } from '../../test/test-utils.tsx'

describe('ServiceCard', () => {
  it('renders title link, summary, and default CTA to the service route', () => {
    renderWithRouter(
      <ServiceCard
        title="Legacy modernization"
        summary="Reduce risk while upgrading critical systems."
        to="/services/legacy-application-modernization"
      />,
    )
    expect(
      screen.getByRole('heading', { name: 'Legacy modernization', level: 3 }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Legacy modernization' })).toHaveAttribute(
      'href',
      '/services/legacy-application-modernization',
    )
    expect(screen.getByText('Reduce risk while upgrading critical systems.')).toBeVisible()
    expect(screen.getByRole('link', { name: 'Learn more' })).toHaveAttribute(
      'href',
      '/services/legacy-application-modernization',
    )
  })
})
