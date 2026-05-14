import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ContactForm } from './ContactForm.tsx'

function fillValidForm() {
  fireEvent.change(screen.getByLabelText(/^name/i), { target: { value: 'Jane Doe' } })
  fireEvent.change(screen.getByLabelText(/^email/i), { target: { value: 'jane@example.com' } })
  fireEvent.change(screen.getByLabelText(/company/i), { target: { value: 'Acme Health' } })
  fireEvent.change(screen.getByLabelText(/service interest/i), {
    target: { value: 'other' },
  })
  fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Project context.' } })
}

describe('ContactForm', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('shows validation errors when required fields are missing', () => {
    vi.stubEnv('VITE_FORM_ENDPOINT', '')
    render(<ContactForm />)
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('Name is required.')).toBeVisible()
    expect(screen.getByText('Email is required.')).toBeVisible()
    expect(screen.getByText('Company is required.')).toBeVisible()
    expect(screen.getByText('Please select a service interest.')).toBeVisible()
    expect(screen.getByText('Message is required.')).toBeVisible()
  })

  it('shows error for invalid email format', () => {
    vi.stubEnv('VITE_FORM_ENDPOINT', '')
    render(<ContactForm />)
    fireEvent.change(screen.getByLabelText(/^name/i), { target: { value: 'Jane' } })
    fireEvent.change(screen.getByLabelText(/^email/i), { target: { value: 'not-an-email' } })
    fireEvent.change(screen.getByLabelText(/company/i), { target: { value: 'Acme' } })
    fireEvent.change(screen.getByLabelText(/service interest/i), {
      target: { value: 'other' },
    })
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hi' } })
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('Enter a valid email address.')).toBeVisible()
  })

  it('shows demo success when no endpoint is configured', async () => {
    vi.stubEnv('VITE_FORM_ENDPOINT', '')
    render(<ContactForm />)
    fillValidForm()
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))
    expect(
      await screen.findByText(/Thanks — in demo mode nothing was sent remotely/i),
    ).toBeVisible()
  })

  it('POSTs to configured endpoint and shows success on 200', async () => {
    vi.stubEnv('VITE_FORM_ENDPOINT', 'https://forms.example.test/abc')
    const json = vi.fn().mockResolvedValue({})
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          status: 200,
          headers: {
            get: (h: string) => (h.toLowerCase() === 'content-type' ? 'application/json' : null),
          },
          json,
        }),
      ),
    )
    render(<ContactForm />)
    fillValidForm()
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))
    expect(await screen.findByText(/Thanks — your message was sent/i)).toBeVisible()
    expect(globalThis.fetch).toHaveBeenCalled()
  })
})
