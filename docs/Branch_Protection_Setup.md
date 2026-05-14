# Branch protection for `main` (TASK-055)

Branch protection is configured in the **GitHub repository settings**, not in this repo. After the **CI** workflow (`.github/workflows/ci.yml`) has run at least once on `main`, apply the following so merges stay safe and traceable.

## Steps (repository admin)

1. Open **GitHub → Repository → Settings → Rules → Rulesets** (recommended) **or** **Settings → Branches → Branch protection rules → Add rule**.
2. Target **`main`** (or a ruleset that applies to `main`).
3. Enable **Require a pull request before merging** (no direct pushes to `main` for routine work).
4. Optionally enable **Require approvals** (for example **1** reviewer) for AI-First / human review.
5. Under **Require status checks to pass before merging**:
   - Click the search box and add the job from this repo’s workflow **`CI`**.
   - The check is usually listed as **`validate`** (job id in `.github/workflows/ci.yml`). If GitHub shows a compound name such as **`CI / validate`**, select that.
6. Optionally enable **Require branches to be up to date before merging** so the PR branch includes the latest `main` before merge.
7. Optionally **Require conversation resolution before merging** for review threads.
8. Save the ruleset or branch rule.

## Why this matches the product docs

- **README.md** — branching strategy (GitHub Flow) and high-level protection plan.
- **`docs/Tasks.md` TASK-055** — acceptance criteria (PRs required, status checks, restrict direct pushes, reviews as desired).

## Validation

- Open a small test PR and confirm the **validate** check appears and is required before merge.
- Confirm direct push to `main` is blocked (if you enabled that restriction).
