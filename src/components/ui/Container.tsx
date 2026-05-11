import type { HTMLAttributes } from 'react'

export type ContainerProps = HTMLAttributes<HTMLElement> & {
  /** Use `section` when the wrapper is a landmark region. */
  as?: 'div' | 'section'
}

export function Container({ as: Tag = 'div', className = '', ...props }: ContainerProps) {
  return <Tag className={`mx-auto w-full max-w-5xl px-4 ${className}`.trim()} {...props} />
}
