import { cleanup, configure } from '@testing-library/react'
import { afterEach } from 'vitest'
import '@testing-library/jest-dom/vitest'

/** Match Testing Library defaults; keeps one place to tune timeouts for async queries. */
configure({ asyncUtilTimeout: 4000 })

afterEach(() => {
  cleanup()
})
