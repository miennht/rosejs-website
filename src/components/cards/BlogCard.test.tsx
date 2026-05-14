import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogCard } from './BlogCard.tsx'
import { renderWithRouter } from '../../test/test-utils.tsx'

describe('BlogCard', () => {
  it('renders title link, summary, meta line, tags, and CTA', () => {
    renderWithRouter(
      <BlogCard
        title="Architecture notes"
        summary="A short summary for the card."
        to="/insights/sample-slug"
        metaLine="Jan 1, 2026 · Engineering"
        tagLabels={['RCM', 'APIs']}
        ctaLabel="Read more"
      />,
    )
    expect(
      screen.getByRole('heading', { name: 'Architecture notes', level: 3 }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Architecture notes' })).toHaveAttribute(
      'href',
      '/insights/sample-slug',
    )
    expect(screen.getByText('A short summary for the card.')).toBeVisible()
    expect(screen.getByText('Jan 1, 2026 · Engineering')).toBeVisible()
    expect(screen.getByRole('list', { name: 'Tags' })).toBeInTheDocument()
    expect(screen.getByText('RCM')).toBeVisible()
    expect(screen.getByRole('link', { name: 'Read more' })).toHaveAttribute(
      'href',
      '/insights/sample-slug',
    )
  })
})
