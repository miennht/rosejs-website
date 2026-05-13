import { render, type RenderOptions } from '@testing-library/react'
import type { ReactElement, ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'

/** Use for components that call `react-router` hooks or render `<Link>`. */
export function renderWithRouter(
  ui: ReactElement,
  { route = '/', ...renderOptions }: { route?: string } & Omit<RenderOptions, 'wrapper'> = {},
) {
  function Wrapper({ children }: { children: ReactNode }) {
    return <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
  }
  return render(ui, { ...renderOptions, wrapper: Wrapper })
}
