#!/usr/bin/env node
/**
 * TASK-081 — source-of-truth eval CLI.
 * Usage: npm run eval:sot
 */
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  formatSotEvalReport,
  listSotEvalPaths,
  runSourceOfTruthEval,
  type SotCatalog,
} from '../src/evals/sotEval.ts'

const root = process.cwd()
const catalogPath = join(root, 'eval/catalog.json')
const catalog = JSON.parse(readFileSync(catalogPath, 'utf8')) as SotCatalog

const files: Record<string, string | null> = {}
for (const rel of listSotEvalPaths(catalog)) {
  const abs = join(root, rel)
  files[rel] = existsSync(abs) ? readFileSync(abs, 'utf8') : null
}

const report = runSourceOfTruthEval(catalog, files)
console.log(formatSotEvalReport(report))
process.exit(report.ok ? 0 : 1)
