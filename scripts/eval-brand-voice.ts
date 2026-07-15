#!/usr/bin/env node
/**
 * TASK-090 — brand voice eval CLI.
 * Usage:
 *   npm run eval:voice
 *   npm run eval:voice -- --text "Draft copy here"
 *   npm run eval:voice -- --file path/to/draft.md
 */
import { readFileSync } from 'node:fs'
import { formatBrandVoiceEvalReport, runBrandVoiceEval } from '../src/evals/brandVoiceEval.ts'

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
  npm run eval:voice
  npm run eval:voice -- --text "AI draft..."
  npm run eval:voice -- --file drafts/copy.md`)
      process.exit(0)
    }
  }
  return { text, file }
}

const { text, file } = parseArgs(process.argv.slice(2))

const options: { draftText?: string; draftSource?: string } = {}
if (file != null) {
  options.draftText = readFileSync(file, 'utf8')
  options.draftSource = file
} else if (text != null) {
  options.draftText = text
  options.draftSource = 'cli --text'
}

const report = runBrandVoiceEval(options)
console.log(formatBrandVoiceEvalReport(report))
process.exit(report.ok ? 0 : 1)
