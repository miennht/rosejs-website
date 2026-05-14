import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './Button.tsx'

describe('Button', () => {
  it('renders with accessible name and handles click', () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Send</Button>)
    const btn = screen.getByRole('button', { name: 'Send' })
    expect(btn).toBeVisible()
    fireEvent.click(btn)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
