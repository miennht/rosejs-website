#!/usr/bin/env node
/**
 * TASK-082 — select + run diff-aware eval commands.
 * Usage:
 *   npm run eval:ci
 *   npm run eval:ci -- --full
 *   npm run eval:ci -- --changed path1 path2
 *   npm run eval:ci -- --changed-file /tmp/changed.txt
 *   npm run eval:ci -- --base origin/main
 */
import { execSync, spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  formatEvalSelection,
  selectEvalCommands,
  type EvalNpmScript,
  FULL_REGRESSION_COMMANDS,
} from '../src/evals/ciEvalSelector.ts'
import type { ChangeScenarioCatalog } from '../src/evals/changeScenarioEval.ts'

function parseArgs(argv: string[]) {
  let full = false
  let base: string | undefined
  let changedFile: string | undefined
  const changed: string[] = []
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--full') full = true
    else if (arg === '--base') base = argv[++i]
    else if (arg === '--changed-file') changedFile = argv[++i]
    else if (arg === '--changed') {
      while (argv[i + 1] != null && !argv[i + 1]!.startsWith('--')) {
        changed.push(argv[++i]!)
      }
    } else if (arg === '--help' || arg === '-h') {
      console.log(`Usage:
  npm run eval:ci
  npm run eval:ci -- --full
  npm run eval:ci -- --base origin/main
  npm run eval:ci -- --changed src/pages/Home.tsx
  npm run eval:ci -- --changed-file /tmp/changed.txt`)
      process.exit(0)
    }
  }
  return { full, base, changedFile, changed }
}

function gitChangedFiles(base?: string): string[] {
  try {
    if (base != null && base !== '') {
      const out = execSync(`git diff --name-only ${base}...HEAD`, {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe'],
      })
      return out
        .split('\n')
        .map((l) => l.trim())
        .filter(Boolean)
    }
    const staged = execSync('git diff --name-only --cached', { encoding: 'utf8' })
    const unstaged = execSync('git diff --name-only', { encoding: 'utf8' })
    const untracked = execSync('git ls-files --others --exclude-standard', {
      encoding: 'utf8',
    })
    return [
      ...new Set(
        [...staged, ...unstaged, ...untracked].flatMap((b) =>
          b
            .split('\n')
            .map((l) => l.trim())
            .filter(Boolean),
        ),
      ),
    ]
  } catch {
    return []
  }
}

const { full, base, changedFile, changed } = parseArgs(process.argv.slice(2))
const root = process.cwd()
const catalogPath = join(root, 'eval/scenarios/change-scenarios.json')
const catalog = JSON.parse(readFileSync(catalogPath, 'utf8')) as ChangeScenarioCatalog & {
  scenarios: Array<{
    id: string
    triggerPaths?: string[]
    evalCommands?: string[]
  }>
}

let files: string[]
if (full) {
  files = ['docs/rosejs-knowledge/company-profile.md']
} else if (changedFile != null) {
  files = readFileSync(changedFile, 'utf8')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
} else if (changed.length > 0) {
  files = changed
} else {
  files = gitChangedFiles(base)
}

const selection = full
  ? {
      mode: 'full' as const,
      commands: [...FULL_REGRESSION_COMMANDS] as EvalNpmScript[],
      matchedScenarioIds: catalog.scenarios.map((s) => s.id),
      reasons: ['--full flag'],
    }
  : selectEvalCommands(files, catalog)

const report = [
  formatEvalSelection(selection),
  '',
  `Changed files (${files.length}):`,
  ...(files.length === 0 ? ['(none)'] : files.map((f) => `- ${f}`)),
].join('\n')

console.log(report)
const outDir = join(root, 'artifacts')
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })
const reportPath = join(outDir, 'eval-ci-report.txt')
writeFileSync(reportPath, `${report}\n`, 'utf8')
console.log(`\nWrote ${reportPath}`)

let failed = false
for (const cmd of selection.commands) {
  console.log(`\n>>> npm run ${cmd}`)
  const result = spawnSync('npm', ['run', cmd], {
    cwd: root,
    stdio: 'inherit',
    shell: process.platform === 'win32',
  })
  if (result.status !== 0) {
    failed = true
    console.error(`Command failed: npm run ${cmd} (exit ${result.status ?? 'unknown'})`)
    break
  }
}

process.exit(failed ? 1 : 0)
