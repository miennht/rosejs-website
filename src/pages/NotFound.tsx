import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="text-center">
      <h1 className="mb-3 text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mb-6 text-muted">The page you requested does not exist.</p>
      <Link
        to="/"
        className="inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
      >
        Back to home
      </Link>
    </div>
  )
}
