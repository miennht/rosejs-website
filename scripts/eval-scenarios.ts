#!/usr/bin/env node
/**
 * TASK-091 — change-based scenario eval CLI.
 * Usage: npm run eval:scenarios
 */
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  formatScenarioEvalReport,
  listScenarioScanPaths,
  runChangeScenarioEval,
  type ChangeScenarioCatalog,
} from '../src/evals/changeScenarioEval.ts'

const root = process.cwd()
const catalogPath = join(root, 'eval/scenarios/change-scenarios.json')
const catalog = JSON.parse(readFileSync(catalogPath, 'utf8')) as ChangeScenarioCatalog

const files: Record<string, string | null> = {}
for (const rel of listScenarioScanPaths(catalog)) {
  const abs = join(root, rel)
  files[rel] = existsSync(abs) ? readFileSync(abs, 'utf8') : null
}

const report = runChangeScenarioEval(catalog, files)
console.log(formatScenarioEvalReport(report))
process.exit(report.ok ? 0 : 1)
