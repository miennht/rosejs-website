import { Link } from 'react-router-dom'

export function Insights() {
  return (
    <div>
      <h1 className="mb-3 text-3xl font-semibold tracking-tight">Insights</h1>
      <p className="mb-6 text-muted">Blog listing — placeholder.</p>
      <ul className="space-y-2">
        <li>
          <Link to="/insights/sample-post" className="text-foreground underline underline-offset-4">
            Sample post (slug demo)
          </Link>
        </li>
      </ul>
    </div>
  )
}
