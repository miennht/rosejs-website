import type { ButtonHTMLAttributes } from 'react'

const variants = {
  primary:
    'border border-primary bg-primary text-primary-foreground hover:opacity-90 active:opacity-80',
  secondary:
    'border border-foreground bg-background text-foreground hover:bg-surface active:bg-surface',
  ghost:
    'border border-transparent bg-transparent text-foreground hover:bg-surface active:bg-surface',
} as const

export type ButtonVariant = keyof typeof variants

const baseClass =
  'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground disabled:pointer-events-none disabled:opacity-50'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

export function Button({
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${baseClass} ${variants[variant]} ${className}`.trim()}
      {...props}
    />
  )
}
