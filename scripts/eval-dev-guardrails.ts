#!/usr/bin/env node
/**
 * TASK-086 — development-workflow MVP guardrail eval CLI.
 * Usage:
 *   npm run eval:dev-guardrails
 *   npm run eval:dev-guardrails -- --text "Add Express + Postgres…"
 *   npm run eval:dev-guardrails -- --file path/to/pr.md
 */
import { readFileSync } from 'node:fs'
import {
  formatGuardrailEvalReport,
  runDevWorkflowGuardrailEval,
  runGuardrailBaselineFixtures,
} from '../src/evals/devWorkflowGuardrailEval.ts'

function parseArgs(argv: string[]) {
  let text: string | undefined
  let file: string | undefined
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--text') text = argv[++i]
    else if (arg === '--file') file = argv[++i]
    else if (arg === '--help' || arg === '-h') {
      console.log(`Usage:
  npm run eval:dev-guardrails
  npm run eval:dev-guardrails -- --text "Assistant plan…"
  npm run eval:dev-guardrails -- --file drafts/pr-description.md`)
      process.exit(0)
    }
  }
  return { text, file }
}

const { text, file } = parseArgs(process.argv.slice(2))

let report
if (file != null) {
  report = runDevWorkflowGuardrailEval({
    draftText: readFileSync(file, 'utf8'),
    draftSource: file,
  })
} else if (text != null) {
  report = runDevWorkflowGuardrailEval({
    draftText: text,
    draftSource: 'cli --text',
  })
} else {
  report = runGuardrailBaselineFixtures()
}

console.log(formatGuardrailEvalReport(report))
process.exit(report.ok ? 0 : 1)
