import type { HTMLAttributes } from 'react'

export type BadgeProps = HTMLAttributes<HTMLSpanElement>

export function Badge({ className = '', ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs font-medium text-foreground ${className}`.trim()}
      {...props}
    />
  )
}
