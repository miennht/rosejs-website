import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navigation } from './Navigation.tsx'
import { PRIMARY_NAV_ITEMS } from './navConfig.ts'
import { renderWithRouter } from '../../test/test-utils.tsx'

describe('Navigation', () => {
  it('renders primary nav with correct hrefs', () => {
    renderWithRouter(<Navigation />)
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    for (const item of PRIMARY_NAV_ITEMS) {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute('href', item.to)
    }
  })
})
