import { useState, type FormEvent } from 'react'
import { trackEvent } from '../../lib/analytics.ts'
import { Button } from '../ui/Button.tsx'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const serviceInterestOptions = [
  { value: '', label: 'Service interest (select)' },
  { value: 'software-architecture-consulting', label: 'Software architecture consulting' },
  { value: 'legacy-application-modernization', label: 'Legacy application modernization' },
  { value: 'ai-first-product-development', label: 'AI-first product development' },
  { value: 'healthcare-insurance-rcm-consulting', label: 'Healthcare insurance & RCM' },
  { value: 'cloud-api-integration', label: 'Cloud & API integration' },
  { value: 'technical-debt-assessment', label: 'Technical debt assessment' },
  { value: 'secure-data-system-integration', label: 'Secure data & integration' },
  { value: 'other', label: 'Other / not sure yet' },
] as const

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [serviceInterest, setServiceInterest] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

  function validate(): boolean {
    if (honeypot !== '') return false
    const next: Record<string, string> = {}
    if (name.trim() === '') next.name = 'Name is required.'
    if (email.trim() === '') next.email = 'Email is required.'
    else if (!emailPattern.test(email.trim())) next.email = 'Enter a valid email address.'
    if (company.trim() === '') next.company = 'Company is required.'
    if (serviceInterest === '') next.serviceInterest = 'Please select a service interest.'
    if (message.trim() === '') next.message = 'Message is required.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMessage(null)
    if (!validate()) return

    setStatus('submitting')

    if (endpoint != null && endpoint !== '') {
      try {
        const form = e.currentTarget
        const formData = new FormData(form)
        const res = await fetch(endpoint, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        })
        if (!res.ok) {
          let detail = `Request failed (${res.status}).`
          try {
            const ct = res.headers.get('content-type')
            if (ct != null && ct.includes('application/json')) {
              const body = (await res.json()) as {
                error?: string
                errors?: Record<string, string>
              }
              if (body.error != null && body.error !== '') detail = body.error
              else if (body.errors != null) {
                const first = Object.values(body.errors)[0]
                if (first != null && first !== '') detail = first
              }
            }
          } catch {
            /* ignore parse errors */
          }
          throw new Error(detail)
        }
        setStatus('success')
        trackEvent('contact_submit', { channel: 'form' })
        form.reset()
        setName('')
        setEmail('')
        setCompany('')
        setServiceInterest('')
        setMessage('')
      } catch (err) {
        console.error(err)
        setStatus('error')
        setErrorMessage(
          'Something went wrong sending your message. Try again or email us directly.',
        )
      }
      return
    }

    setStatus('success')
    setName('')
    setEmail('')
    setCompany('')
    setServiceInterest('')
    setMessage('')
  }

  return (
    <div className="rounded-xl border border-border bg-background p-6 md:p-8">
      <h2 className="mb-2 text-lg font-semibold text-foreground">Send a message</h2>
      <p className="mb-6 text-sm text-muted">
        {endpoint != null && endpoint !== ''
          ? 'Submissions post to your configured form endpoint (`VITE_FORM_ENDPOINT`).'
          : 'Demo mode: configure `VITE_FORM_ENDPOINT` (for example Formspree) to deliver submissions. Submitting still validates input locally.'}
      </p>

      {status === 'success' ? (
        <p
          className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-foreground"
          role="status"
        >
          {endpoint != null && endpoint !== ''
            ? 'Thanks — your message was sent.'
            : 'Thanks — in demo mode nothing was sent remotely. Wire `VITE_FORM_ENDPOINT` for production delivery.'}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(ev) => setHoneypot(ev.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="absolute h-px w-px -translate-x-[9999px] opacity-0"
            aria-hidden="true"
          />

          <div>
            <label
              htmlFor="contact-name"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              Name <span className="text-muted">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none ring-foreground focus-visible:ring-2"
              autoComplete="name"
              aria-invalid={errors.name != null}
              aria-describedby={errors.name != null ? 'contact-name-err' : undefined}
            />
            {errors.name != null ? (
              <p id="contact-name-err" className="mt-1 text-xs text-foreground">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              Email <span className="text-muted">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none ring-foreground focus-visible:ring-2"
              autoComplete="email"
              aria-invalid={errors.email != null}
              aria-describedby={errors.email != null ? 'contact-email-err' : undefined}
            />
            {errors.email != null ? (
              <p id="contact-email-err" className="mt-1 text-xs text-foreground">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="contact-company"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              Company <span className="text-muted">*</span>
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              value={company}
              onChange={(ev) => setCompany(ev.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none ring-foreground focus-visible:ring-2"
              autoComplete="organization"
              aria-invalid={errors.company != null}
              aria-describedby={errors.company != null ? 'contact-company-err' : undefined}
            />
            {errors.company != null ? (
              <p id="contact-company-err" className="mt-1 text-xs text-foreground">
                {errors.company}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="contact-interest"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              Service interest <span className="text-muted">*</span>
            </label>
            <select
              id="contact-interest"
              name="service_interest"
              value={serviceInterest}
              onChange={(ev) => setServiceInterest(ev.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none ring-foreground focus-visible:ring-2"
              aria-invalid={errors.serviceInterest != null}
              aria-describedby={errors.serviceInterest != null ? 'contact-interest-err' : undefined}
            >
              {serviceInterestOptions.map((opt) => (
                <option key={opt.value === '' ? 'empty' : opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.serviceInterest != null ? (
              <p id="contact-interest-err" className="mt-1 text-xs text-foreground">
                {errors.serviceInterest}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              Message <span className="text-muted">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={message}
              onChange={(ev) => setMessage(ev.target.value)}
              rows={5}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none ring-foreground focus-visible:ring-2"
              aria-invalid={errors.message != null}
              aria-describedby={errors.message != null ? 'contact-message-err' : undefined}
            />
            {errors.message != null ? (
              <p id="contact-message-err" className="mt-1 text-xs text-foreground">
                {errors.message}
              </p>
            ) : null}
          </div>

          <div aria-live="polite" aria-atomic="true" className="min-h-[1.25rem]">
            {status === 'error' && errorMessage != null ? (
              <p className="text-sm text-foreground" role="alert">
                {errorMessage}
              </p>
            ) : null}
          </div>

          <Button type="submit" variant="primary" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </Button>
        </form>
      )}
    </div>
  )
}
