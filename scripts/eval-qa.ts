#!/usr/bin/env node
/**
 * TASK-092 — Q&A regression eval CLI.
 * Usage:
 *   npm run eval:qa
 *   npm run eval:qa -- --question what-does-rosejs-do --text "Draft answer…"
 *   npm run eval:qa -- --question how-to-contact --file path/to/answer.md
 */
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  formatQaEvalReport,
  listQaKnowledgePaths,
  runQaRegressionEval,
  type QaSuite,
} from '../src/evals/qaRegressionEval.ts'

function parseArgs(argv: string[]) {
  let text: string | undefined
  let file: string | undefined
  let question: string | undefined
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--text') text = argv[++i]
    else if (arg === '--file') file = argv[++i]
    else if (arg === '--question') question = argv[++i]
    else if (arg === '--help' || arg === '-h') {
      console.log(`Usage:
  npm run eval:qa
  npm run eval:qa -- --question what-does-rosejs-do --text "Draft…"
  npm run eval:qa -- --question how-to-contact --file drafts/answer.md`)
      process.exit(0)
    }
  }
  return { text, file, question }
}

const { text, file, question } = parseArgs(process.argv.slice(2))
const root = process.cwd()
const suitePath = join(root, 'eval/qa/regression-suite.json')
const suite = JSON.parse(readFileSync(suitePath, 'utf8')) as QaSuite

const files: Record<string, string | null> = {}
for (const rel of listQaKnowledgePaths(suite)) {
  const abs = join(root, rel)
  files[rel] = existsSync(abs) ? readFileSync(abs, 'utf8') : null
}

const options: {
  draftText?: string
  draftSource?: string
  questionId?: string
} = {}

if (file != null) {
  options.draftText = readFileSync(file, 'utf8')
  options.draftSource = file
  if (question != null) options.questionId = question
} else if (text != null) {
  options.draftText = text
  options.draftSource = 'cli --text'
  if (question != null) options.questionId = question
} else if (question != null) {
  options.questionId = question
}

const report = runQaRegressionEval(suite, files, options)
console.log(formatQaEvalReport(report))
process.exit(report.ok ? 0 : 1)
