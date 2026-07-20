/**
 * Diff-aware eval command selection (TASK-082 / EVAL-REG-001 / EVAL-REG-002).
 * Full regression when knowledge base, eval catalog, shared layout, or CI/config changes.
 * Otherwise unions evalCommands from matching change-scenarios triggerPaths.
 */
import type { ChangeScenarioCatalog } from './changeScenarioEval.ts'

export type EvalNpmScript =
  | 'eval:content'
  | 'eval:voice'
  | 'eval:sot'
  | 'eval:scenarios'
  | 'eval:qa'
  | 'eval:stale'

export type EvalSelection = {
  mode: 'full' | 'subset' | 'baseline'
  commands: EvalNpmScript[]
  matchedScenarioIds: string[]
  reasons: string[]
}

/** Always run on every PR (EVAL-REG-001 Phase 1 gate). */
export const BASELINE_EVAL_COMMANDS: readonly EvalNpmScript[] = [
  'eval:content',
  'eval:voice',
  'eval:sot',
]

/** Full Phase 2 + Phase 1 regression set. */
export const FULL_REGRESSION_COMMANDS: readonly EvalNpmScript[] = [
  ...BASELINE_EVAL_COMMANDS,
  'eval:scenarios',
  'eval:qa',
  'eval:stale',
]

/** Paths that force full regression (TASK-082). */
export const FULL_REGRESSION_PATH_PREFIXES = [
  'docs/rosejs-knowledge/',
  'eval/',
  'src/evals/',
  'src/components/layout/',
  'src/app/',
  '.github/workflows/',
  'scripts/eval-',
  'scripts/select-eval-ci.ts',
  'scripts/eval-ci.ts',
] as const

export const FULL_REGRESSION_EXACT_PATHS = [
  'package.json',
  'package-lock.json',
  'playwright.config.ts',
  'vite.config.ts',
  'tsconfig.json',
  'tsconfig.app.json',
  'tsconfig.node.json',
] as const

/** Area extras beyond scenario triggerPaths (routes / SEO / forms / analytics). */
const AREA_EXTRA_RULES: { id: string; prefixes: string[]; commands: EvalNpmScript[] }[] = [
  {
    id: 'seo',
    prefixes: ['src/lib/seo', 'scripts/generate-sitemap', 'public/robots.txt', 'e2e/seo-'],
    commands: ['eval:content', 'eval:sot'],
  },
  {
    id: 'forms',
    prefixes: ['src/components/forms/', 'e2e/contact-form'],
    commands: ['eval:content', 'eval:scenarios'],
  },
  {
    id: 'analytics',
    prefixes: ['src/lib/analytics'],
    commands: ['eval:content', 'eval:sot'],
  },
  {
    id: 'qa-suite',
    prefixes: ['eval/qa/', 'scripts/eval-qa.ts', 'src/evals/qaRegressionEval.ts'],
    commands: ['eval:qa'],
  },
  {
    id: 'stale-suite',
    prefixes: [
      'scripts/eval-stale.ts',
      'src/evals/staleClaimEval.ts',
      'src/evals/patterns.ts',
      'docs/rosejs-knowledge/forbidden-claims.md',
    ],
    commands: ['eval:stale'],
  },
]

const COMMAND_ORDER: EvalNpmScript[] = [
  'eval:content',
  'eval:voice',
  'eval:sot',
  'eval:scenarios',
  'eval:qa',
  'eval:stale',
]

function normalizePath(p: string): string {
  return p.replace(/\\/g, '/').replace(/^\.\//, '')
}

/** True if changed path matches a trigger path (file, directory prefix, or prefix*). */
export function pathMatchesTrigger(changedPath: string, triggerPath: string): boolean {
  const changed = normalizePath(changedPath)
  const trigger = normalizePath(triggerPath)

  if (trigger.endsWith('/')) {
    return changed === trigger.slice(0, -1) || changed.startsWith(trigger)
  }
  if (trigger.endsWith('*')) {
    const prefix = trigger.slice(0, -1)
    return changed.startsWith(prefix)
  }
  return changed === trigger || changed.startsWith(`${trigger}/`)
}

function matchesAnyPrefix(changed: string, prefixes: readonly string[]): boolean {
  return prefixes.some((prefix) => {
    const p = normalizePath(prefix)
    if (p.endsWith('/') || p.endsWith('*')) return pathMatchesTrigger(changed, p)
    return changed === p || changed.startsWith(p)
  })
}

export function isFullRegressionPath(changedPath: string): boolean {
  const changed = normalizePath(changedPath)
  if ((FULL_REGRESSION_EXACT_PATHS as readonly string[]).includes(changed)) return true
  return matchesAnyPrefix(changed, FULL_REGRESSION_PATH_PREFIXES)
}

function dedupeCommands(commands: EvalNpmScript[]): EvalNpmScript[] {
  const set = new Set(commands)
  return COMMAND_ORDER.filter((c) => set.has(c))
}

/**
 * Select which `npm run eval:*` scripts to run for a PR diff.
 * Always includes Phase 1 baseline. Adds Phase 2 commands from matched scenarios / areas.
 */
export function selectEvalCommands(
  changedFiles: readonly string[],
  catalog?: ChangeScenarioCatalog | null,
): EvalSelection {
  const files = changedFiles.map(normalizePath).filter((f) => f.length > 0)
  const reasons: string[] = []
  const matchedScenarioIds: string[] = []

  if (files.length === 0) {
    reasons.push('No changed files listed — running Phase 1 baseline only')
    return {
      mode: 'baseline',
      commands: [...BASELINE_EVAL_COMMANDS],
      matchedScenarioIds,
      reasons,
    }
  }

  const fullHit = files.find((f) => isFullRegressionPath(f))
  if (fullHit != null) {
    reasons.push(`Full regression trigger: ${fullHit}`)
    return {
      mode: 'full',
      commands: [...FULL_REGRESSION_COMMANDS],
      matchedScenarioIds: catalog?.scenarios.map((s) => s.id) ?? [],
      reasons,
    }
  }

  const commands: EvalNpmScript[] = [...BASELINE_EVAL_COMMANDS]
  reasons.push('Phase 1 baseline (always on PR)')
  let extrasMatched = false

  if (catalog != null) {
    for (const scenario of catalog.scenarios) {
      const hit = files.find((f) =>
        (scenario.triggerPaths ?? []).some((t) => pathMatchesTrigger(f, t)),
      )
      if (hit == null) continue
      extrasMatched = true
      matchedScenarioIds.push(scenario.id)
      reasons.push(`Scenario ${scenario.id} (via ${hit})`)
      for (const cmd of scenario.evalCommands ?? []) {
        if (COMMAND_ORDER.includes(cmd as EvalNpmScript)) {
          commands.push(cmd as EvalNpmScript)
        }
      }
    }
  }

  for (const area of AREA_EXTRA_RULES) {
    const hit = files.find((f) => matchesAnyPrefix(f, area.prefixes))
    if (hit == null) continue
    extrasMatched = true
    reasons.push(`Area ${area.id} (via ${hit})`)
    commands.push(...area.commands)
  }

  const unique = dedupeCommands(commands)
  const mode: EvalSelection['mode'] = extrasMatched ? 'subset' : 'baseline'

  return { mode, commands: unique, matchedScenarioIds, reasons }
}

export function formatEvalSelection(selection: EvalSelection): string {
  const lines = [
    `Eval CI selection (TASK-082)`,
    `Mode: ${selection.mode}`,
    `Commands: ${selection.commands.join(', ') || '(none)'}`,
    `Matched scenarios: ${selection.matchedScenarioIds.join(', ') || '(none)'}`,
    '',
    'Reasons:',
    ...selection.reasons.map((r) => `- ${r}`),
  ]
  return lines.join('\n')
}
