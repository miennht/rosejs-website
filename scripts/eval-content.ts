#!/usr/bin/env node
/**
 * TASK-089 — static website content eval CLI.
 * Usage: npm run eval:content
 */
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  formatContentEvalReport,
  listContentEvalPaths,
  runStaticWebsiteContentEval,
} from '../src/evals/websiteContentEval.ts'

const root = process.cwd()
const files: Record<string, string | null> = {}
for (const rel of listContentEvalPaths()) {
  const abs = join(root, rel)
  files[rel] = existsSync(abs) ? readFileSync(abs, 'utf8') : null
}

const report = runStaticWebsiteContentEval(files)
console.log(formatContentEvalReport(report))
process.exit(report.ok ? 0 : 1)
