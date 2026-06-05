import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header.tsx'
import { renderWithRouter } from '../../test/test-utils.tsx'

describe('Header', () => {
  it('renders brand link to home', () => {
    renderWithRouter(<Header />)
    expect(screen.getByRole('link', { name: /rosejs home/i })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: /rosejs home/i })).toHaveTextContent('RoseJS')
  })

  it('exposes primary nav destinations including Services', () => {
    renderWithRouter(<Header />)
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '/services')
  })
})
