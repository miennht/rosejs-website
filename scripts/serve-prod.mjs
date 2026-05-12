import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import process from 'node:process'

const port = process.env.PORT ?? '3000'
const listen = `tcp://0.0.0.0:${port}`
const serveMain = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  'node_modules',
  'serve',
  'build',
  'main.js',
)

const child = spawn(process.execPath, [serveMain, 'dist', '-s', '-l', listen], {
  stdio: 'inherit',
})

child.on('exit', (code, signal) => {
  if (signal) process.exit(1)
  process.exit(code ?? 1)
})
