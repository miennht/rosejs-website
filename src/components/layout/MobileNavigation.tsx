import { useCallback, useEffect, useId, useRef, useState } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { PRIMARY_NAV_ITEMS } from './navConfig'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `block rounded-md px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
    isActive ? 'bg-foreground text-background' : 'text-foreground hover:bg-surface'
  }`

const focusableSelector = 'a[href], button:not([disabled])'

function collectFocusables(root: HTMLElement): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>(focusableSelector)).filter(
    (el) => !el.hasAttribute('aria-hidden') && el.tabIndex !== -1,
  )
}

export function MobileNavigation() {
  const [open, setOpen] = useState(false)
  const id = useId()
  const menuId = `${id}-mobile-nav`
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, close])

  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    const first = panel?.querySelector<HTMLElement>('a[href]')
    first?.focus()
  }, [open])

  useEffect(() => {
    if (!open) return
    const button = menuButtonRef.current
    return () => {
      button?.focus()
    }
  }, [open])

  const onPanelKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab') return
    const panel = panelRef.current
    if (panel == null) return
    const items = collectFocusables(panel)
    if (items.length === 0) return
    const first = items[0]!
    const last = items[items.length - 1]!
    const active = document.activeElement as HTMLElement | null
    if (event.shiftKey) {
      if (active === first) {
        event.preventDefault()
        last.focus()
      }
    } else if (active === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
    <div className="relative flex items-center">
      <button
        ref={menuButtonRef}
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="dialog"
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
            ref={panelRef}
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            tabIndex={-1}
            onKeyDown={onPanelKeyDown}
            className="fixed right-4 top-16 z-50 max-h-[min(70vh,calc(100vh-5rem))] w-[min(100vw-2rem,20rem)] overflow-y-auto rounded-lg border border-border bg-background p-2 shadow-lg outline-none"
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
