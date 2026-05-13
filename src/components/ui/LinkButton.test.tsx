import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithRouter } from '../../test/test-utils.tsx'
import { LinkButton } from './LinkButton.tsx'

describe('LinkButton', () => {
  it('renders an in-app link with correct href', () => {
    renderWithRouter(<LinkButton to="/contact">Contact</LinkButton>)
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact')
  })
})
