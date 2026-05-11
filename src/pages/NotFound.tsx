import { LinkButton } from '../components/ui/LinkButton.tsx'

export function NotFound() {
  return (
    <div className="text-center">
      <h1 className="mb-3 text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mb-6 text-muted">The page you requested does not exist.</p>
      <LinkButton to="/">Back to home</LinkButton>
    </div>
  )
}
