import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LeadMagnetSection } from './LeadMagnetSection.tsx'
import { renderWithRouter } from '../../test/test-utils.tsx'

describe('LeadMagnetSection', () => {
  it('renders eyebrow, title, description, and CTA links', () => {
    renderWithRouter(
      <LeadMagnetSection
        eyebrow="Lead magnet"
        title="Legacy modernization checklist"
        description="A concise PDF for stakeholder alignment."
        ctas={[
          { label: 'Download PDF', href: '/downloads/checklist.pdf', variant: 'primary' },
          { label: 'Talk to us', to: '/contact', variant: 'secondary' },
        ]}
      />,
    )
    expect(screen.getByText('Lead magnet')).toBeVisible()
    expect(
      screen.getByRole('heading', { name: 'Legacy modernization checklist', level: 2 }),
    ).toBeInTheDocument()
    expect(screen.getByText('A concise PDF for stakeholder alignment.')).toBeVisible()
    expect(screen.getByRole('link', { name: 'Download PDF' })).toHaveAttribute(
      'href',
      '/downloads/checklist.pdf',
    )
    expect(screen.getByRole('link', { name: 'Talk to us' })).toHaveAttribute('href', '/contact')
  })
})
