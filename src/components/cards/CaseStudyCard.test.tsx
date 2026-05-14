import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CaseStudyCard } from './CaseStudyCard.tsx'
import { renderWithRouter } from '../../test/test-utils.tsx'

describe('CaseStudyCard', () => {
  it('renders title link, summary, and case study CTA', () => {
    renderWithRouter(
      <CaseStudyCard
        title="Payer platform consolidation"
        summary="Anonymized outcomes narrative."
        to="/case-studies/payer-platform"
        ctaLabel="View case study"
      />,
    )
    expect(
      screen.getByRole('heading', { name: 'Payer platform consolidation', level: 3 }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Payer platform consolidation' })).toHaveAttribute(
      'href',
      '/case-studies/payer-platform',
    )
    expect(screen.getByText('Anonymized outcomes narrative.')).toBeVisible()
    expect(screen.getByRole('link', { name: 'View case study' })).toHaveAttribute(
      'href',
      '/case-studies/payer-platform',
    )
  })
})
