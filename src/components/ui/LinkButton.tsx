import type { AnchorHTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

const variants = {
  primary:
    'border border-primary bg-primary text-primary-foreground hover:opacity-90 active:opacity-80',
  secondary:
    'border border-foreground bg-background text-foreground hover:bg-surface active:bg-surface',
} as const

export type LinkButtonVariant = keyof typeof variants

const baseClass =
  'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground'

type ExternalLinkButtonProps = {
  href: string
  variant?: LinkButtonVariant
  className?: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>

type InternalLinkButtonProps = {
  to: LinkProps['to']
  variant?: LinkButtonVariant
  className?: string
} & Omit<LinkProps, 'to' | 'className'>

export type LinkButtonProps = ExternalLinkButtonProps | InternalLinkButtonProps

export function LinkButton(props: LinkButtonProps) {
  if ('href' in props) {
    const { href, variant = 'primary', className = '', ...anchorProps } = props
    return (
      <a
        href={href}
        className={`${baseClass} ${variants[variant]} ${className}`.trim()}
        {...anchorProps}
      />
    )
  }

  const { to, variant = 'primary', className = '', ...linkProps } = props
  return (
    <Link
      to={to}
      className={`${baseClass} ${variants[variant]} ${className}`.trim()}
      {...linkProps}
    />
  )
}
