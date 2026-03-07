# MUBX Portfolio: Open Source Contributor README

[![version](https://img.shields.io/badge/version-0.1.0-blue)](package.json)
[![next](https://img.shields.io/badge/Next.js-16.1.6-black)](https://nextjs.org/)
[![react](https://img.shields.io/badge/React-19.2.3-61DAFB)](https://react.dev/)

Last Updated: 2026-03-07

## Project Overview

MUBX is a Next.js-based bilingual portfolio with a practical backend path for lead collection and notifications. Contributors typically work in one of three areas: UI/UX, integration/API behavior, or content/SEO.

## Quick Start

```bash
pnpm install
pnpm dev
```

App runs on http://localhost:3000

## Contributor Workflow

1. Fork and create a feature branch.
2. Keep changes scoped to one concern.
3. Run `pnpm lint` and `pnpm build` before opening PR.
4. Add test coverage for behavior-changing work.
5. Open PR with a clear problem statement and before/after behavior.

## Repo Map

```text
src/app/               # pages, route handlers, metadata routes
src/components/        # reusable UI blocks and section components
src/context/           # language and app-level providers
src/hooks/             # custom hooks
src/lib/               # shared logic, data, integration init
src/middleware.ts      # host rewrite behavior
```

## Areas That Need Help

- API input schema validation in route handlers.
- End-to-end coverage for lead submission and error states.
- Accessibility audits for bilingual UI states.
- Observability improvements (structured logs + trace IDs).

## Development Standards

- TypeScript strict mode compliance required.
- Keep client/server boundaries explicit.
- Avoid introducing breaking API payload changes without docs updates.
- Preserve existing visual language unless issue explicitly requests redesign.

## API Testing Snippets

### POST /api/notify

```bash
curl -X POST http://localhost:3000/api/notify \
  -H "Content-Type: application/json" \
  -d '{"email":"contrib@example.com","name":"Contributor","business":"OSS","message":"Test","language":"en"}'
```

### POST /api/events

```bash
curl -X POST http://localhost:3000/api/events \
  -H "Content-Type: application/json" \
  -d '{"type":"email.delivered","data":{"id":"evt_demo"}}'
```

## Testing Guidance

Current baseline:
- Lint and build validation.
- Manual route and form-path validation.

Recommended additions for contributors:
1. Unit tests for form validation and language switches.
2. Integration tests for `/api/notify` response behavior.
3. E2E tests for multi-step form completion.

## Issue and PR Quality Bar

Please include:
- Problem statement and scope.
- Reproduction steps.
- Expected vs actual behavior.
- Risk notes for security/performance changes.
- Screenshots or terminal output where relevant.

## Security Notes for Contributors

- Never commit secrets.
- Do not add credentials to test scripts.
- Report security-sensitive findings privately when possible.

## Good First Issues

1. Add runtime schema validation with zod for API routes.
2. Add request ID correlation and structured logs.
3. Add Playwright test for contact flow.
4. Improve error code consistency across API responses.

## Community Conduct

- Be respectful and specific in code review comments.
- Prefer evidence-backed technical arguments.
- Keep reviews actionable and scoped.

## License

All rights reserved unless a separate project license is added.
