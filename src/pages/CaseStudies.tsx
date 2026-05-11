import { Link } from 'react-router-dom'

export function CaseStudies() {
  return (
    <div>
      <h1 className="mb-3 text-3xl font-semibold tracking-tight">Case studies</h1>
      <p className="mb-6 text-muted">Case study listing — placeholder.</p>
      <ul className="space-y-2">
        <li>
          <Link
            to="/case-studies/sample-study"
            className="text-foreground underline underline-offset-4"
          >
            Sample case study (slug demo)
          </Link>
        </li>
      </ul>
    </div>
  )
}
