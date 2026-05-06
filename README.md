# RoseJS Website

Initial repository placeholder for the RoseJS website MVP.

This project is an AI-first healthcare software architecture consulting website built with React + Vite, TypeScript, and Tailwind CSS.

## Documentation

Canonical project documentation lives in `docs/`:

- `docs/PRD.md`
- `docs/Architecture.md`
- `docs/Traceability_Matrix.md`
- `docs/Tasks.md`
- `docs/Testing_Strategy.md`
- `docs/Deployment_Guide.md`
- `docs/AI_Workflow_Guide.md`
- `docs/Code_Review_Checklist.md`
- `docs/SEO_Strategy.md`
- `docs/Content_Plan.md`
- `docs/Component_Map.md`

## Branching Strategy

This repository uses GitHub Flow.

```text
main
feature/*
fix/*
docs/*
```

- `main` is the production-ready branch.
- All code changes should be made in feature/fix/docs branches and merged via pull requests.
- Branch names should be concise and descriptive, for example `feature/home-page`, `fix/mobile-nav`, `docs/deployment-guide`.

## Branch Protection Plan

Branch protection for `main` is planned as follows:

- Require pull requests before merge.
- Require at least one approving review.
- Require CI checks after workflows are added.
- Restrict direct pushes to `main`.
