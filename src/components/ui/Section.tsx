import type { HTMLAttributes, ReactNode } from 'react'

export type SectionProps = HTMLAttributes<HTMLElement> & {
  /** Optional short label above the title */
  eyebrow?: string
  title?: string
  description?: ReactNode
  children?: ReactNode
}

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = '',
  ...props
}: SectionProps) {
  return (
    <section className={`py-10 first:pt-0 ${className}`.trim()} {...props}>
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">{eyebrow}</p>
      ) : null}
      {title ? (
        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
      ) : null}
      {description ? <div className="mb-6 max-w-2xl text-muted">{description}</div> : null}
      {children}
    </section>
  )
}
