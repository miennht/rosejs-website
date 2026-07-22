# Branch protection for `main` (TASK-055)

Branch protection lives in **GitHub repository settings**, not in git. This file is the checklist so what you enable in GitHub matches **`.github/workflows/ci.yml`**.

## Map this repo’s CI to GitHub status checks

| In `.github/workflows/ci.yml` | Value    |
| ----------------------------- | -------- |
| Workflow `name:`              | **`CI`** |
| Job id (`jobs:`)              | **`CI`** |

After at least one successful run on a PR (or on `main` via `push`), GitHub usually lists the required check under one of these labels (UI varies by rulesets vs classic branch rules):

- **`CI / CI`** — most common (workflow display name + job id).
- **`CI`** — sometimes shortened in the picker.
- Occasionally a longer form such as **`CI / CI (pull_request)`** — same job; pick the one tied to this repository’s **CI** workflow.

**What to require:** whichever entry above corresponds to the workflow file **`.github/workflows/ci.yml`** and job **`CI`**. Requiring the wrong workflow (another repo or a deleted workflow name) will not gate merges correctly.

Eval gates (`TASK-082` / `TASK-084`) run inside this same job (`npm run eval:ci`). A failed eval fails **`CI / CI`** — there is no separate eval check name to require.

## Steps (repository admin)

1. Open **GitHub → Repository → Settings → Rules → Rulesets** (recommended) **or** **Settings → Branches → Branch protection rules → Add rule**.
2. Target **`main`** (or a ruleset that applies to `main`).
3. Enable **Require a pull request before merging** (no direct pushes to `main` for routine work).
4. Optionally enable **Require approvals** (for example **1** reviewer) for AI-First / human review.
5. Under **Require status checks to pass before merging** (or the ruleset equivalent):
   - Use the search box and add the check mapped in the table above (**prefer `CI / CI` if both appear**).
   - If no check appears yet, merge or push something to `main` or open a PR so **CI** runs once, then refresh the rules page.
6. Optionally enable **Require branches to be up to date before merging** so the PR branch includes the latest `main` before merge.
7. Optionally **Require conversation resolution before merging** for review threads.
8. Save the ruleset or branch rule.

## Why this matches the product docs

- **README.md** — branching strategy (GitHub Flow) and high-level protection plan.
- **`docs/Tasks.md` TASK-055** — acceptance criteria (PRs required, status checks, restrict direct pushes, reviews as desired).
- **`docs/Deployment_Guide.md` §22** — eval merge gates and exception process (`TASK-084`).

## Validation (after you save in GitHub)

- Open a small test PR and confirm a check named like **`CI / CI`** (or **`CI`**) is **required** and turns green when the workflow passes.
- Confirm a direct push to `main` is blocked if you required PRs (use a harmless branch to test).

This document cannot confirm your live GitHub settings; only the **Settings** UI (or GitHub API) reflects what is actually enabled.

## Live settings (audited July 2026)

Ruleset **`PushToMainApproval`** (targets default branch / `main`):

| Rule | Setting |
| ---- | ------- |
| Pull request | Required (1 approving review); conversation resolution required |
| Required status checks | **`CI`** (strict: branch must be up to date) |
| Force push / deletion | Blocked |
| Bypass | Repository admin role may bypass |

Classic branch protection on `main` may show empty status-check lists; the **ruleset** is the source of truth for the required **`CI`** check. Do not re-add a stale **`validate`** context.
