#!/usr/bin/env node
/**
 * TASK-093 — stale / forbidden claim detection CLI.
 * Usage:
 *   npm run eval:stale
 *   npm run eval:stale -- --text "Draft copy…"
 *   npm run eval:stale -- --file path/to/draft.md
 */
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  formatStaleClaimEvalReport,
  listStaleScanPaths,
  runStaleClaimEval,
} from '../src/evals/staleClaimEval.ts'

function parseArgs(argv: string[]) {
  let text: string | undefined
  let file: string | undefined
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--text') {
      text = argv[++i]
    } else if (arg === '--file') {
      file = argv[++i]
    } else if (arg === '--help' || arg === '-h') {
      console.log(`Usage:
  npm run eval:stale
  npm run eval:stale -- --text "AI draft..."
  npm run eval:stale -- --file drafts/copy.md`)
      process.exit(0)
    }
  }
  return { text, file }
}

const { text, file } = parseArgs(process.argv.slice(2))
const root = process.cwd()

const files: Record<string, string | null> = {}
for (const rel of listStaleScanPaths()) {
  const abs = join(root, rel)
  files[rel] = existsSync(abs) ? readFileSync(abs, 'utf8') : null
}

const options: {
  files: Record<string, string | null>
  draftText?: string
  draftSource?: string
} = { files }

if (file != null) {
  options.draftText = readFileSync(file, 'utf8')
  options.draftSource = file
} else if (text != null) {
  options.draftText = text
  options.draftSource = 'cli --text'
}

const report = runStaleClaimEval(options)
console.log(formatStaleClaimEvalReport(report))
process.exit(report.ok ? 0 : 1)
