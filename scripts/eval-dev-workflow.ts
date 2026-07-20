#!/usr/bin/env node
/**
 * TASK-085 — development-workflow assistant scenario eval CLI.
 * Usage:
 *   npm run eval:dev-workflow
 *   npm run eval:dev-workflow -- --scenario dev-marketing-copy-draft --text "Draft…"
 */
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  formatDevWorkflowReport,
  runDevWorkflowEval,
  type DevWorkflowSuite,
} from '../src/evals/devWorkflowEval.ts'

function parseArgs(argv: string[]) {
  let text: string | undefined
  let file: string | undefined
  let scenario: string | undefined
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--text') text = argv[++i]
    else if (arg === '--file') file = argv[++i]
    else if (arg === '--scenario') scenario = argv[++i]
    else if (arg === '--help' || arg === '-h') {
      console.log(`Usage:
  npm run eval:dev-workflow
  npm run eval:dev-workflow -- --scenario dev-marketing-copy-draft --text "Draft…"
  npm run eval:dev-workflow -- --scenario dev-task-planning --file drafts/plan.md`)
      process.exit(0)
    }
  }
  return { text, file, scenario }
}

const { text, file, scenario } = parseArgs(process.argv.slice(2))
const root = process.cwd()
const suitePath = join(root, 'eval/assistant/dev-workflow-scenarios.json')
const suite = JSON.parse(readFileSync(suitePath, 'utf8')) as DevWorkflowSuite

const options: {
  draftText?: string
  draftSource?: string
  scenarioId?: string
} = {}

if (file != null) {
  options.draftText = readFileSync(file, 'utf8')
  options.draftSource = file
  if (scenario != null) options.scenarioId = scenario
} else if (text != null) {
  options.draftText = text
  options.draftSource = 'cli --text'
  if (scenario != null) options.scenarioId = scenario
} else if (scenario != null) {
  options.scenarioId = scenario
}

const report = runDevWorkflowEval(suite, options)
console.log(formatDevWorkflowReport(report))
process.exit(report.ok ? 0 : 1)
