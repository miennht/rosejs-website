import { useCallback, useEffect, useId, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PRIMARY_NAV_ITEMS } from './navConfig'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `block rounded-md px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
    isActive ? 'bg-foreground text-background' : 'text-foreground hover:bg-surface'
  }`

export function MobileNavigation() {
  const [open, setOpen] = useState(false)
  const id = useId()
  const menuId = `${id}-mobile-nav`

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, close])

  return (
    <div className="relative flex items-center">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              d="M6 6l12 12M18 6L6 18"
            />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
        )}
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-default bg-foreground/20"
            aria-label="Close menu"
            onClick={close}
          />
          <div
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed right-4 top-16 z-50 max-h-[min(70vh,calc(100vh-5rem))] w-[min(100vw-2rem,20rem)] overflow-y-auto rounded-lg border border-border bg-background p-2 shadow-lg"
          >
            <nav aria-label="Primary">
              {PRIMARY_NAV_ITEMS.map(({ to, label, end }) => (
                <NavLink key={to} to={to} className={linkClass} end={end === true} onClick={close}>
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        </>
      ) : null}
    </div>
  )
}
