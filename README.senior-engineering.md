# MUBX Portfolio: Senior Engineering Review README

[![version](https://img.shields.io/badge/version-0.1.0-blue)](package.json)
[![next](https://img.shields.io/badge/Next.js-16.1.6-black)](https://nextjs.org/)
[![react](https://img.shields.io/badge/React-19.2.3-61DAFB)](https://react.dev/)
[![typescript](https://img.shields.io/badge/TypeScript-5.x-3178C6)](https://www.typescriptlang.org/)

Last Updated: 2026-03-07

## Executive Summary

MUBX is a Next.js App Router monolith delivering a bilingual portfolio and production lead-ingestion pipeline. The architecture is intentionally compact: route handlers for integration boundaries, typed client logic, and security-first headers/CSP at the framework edge.

Primary non-functional priorities are runtime performance, integration reliability, and operational simplicity.

## Architecture and Data Flow

```text
Browser -> Next.js App Router -> /api/notify -> Resend
                           -> Supabase (contact_submissions)
                           -> /api/events (webhook ingest/logging)
```

## Engineering Highlights

- Strict TypeScript mode enabled.
- Security headers include HSTS, CSP, COOP, and anti-sniffing policies.
- Static metadata surfaces (robots/sitemap/manifest) generated via typed route modules.
- Supabase client initialization uses a cached singleton path to avoid repeated client construction.

## Performance Profile

| Area | Current Behavior | Risk | Recommendation |
|---|---|---|---|
| Form validation | O(1) fixed checks | Low | Keep step-bounded schema |
| Sitemap generation | O(S + P + B) | Low | Keep source lists bounded |
| Integration I/O | Network bound | Medium | Add retry/backoff + queue |
| Public API routes | No explicit rate limit | High | Add edge throttling + bot guard |

## API Contract Surface

### POST /api/notify

```ts
type NotifyRequest = {
  email: string;
  name?: string;
  business?: string;
  website?: string;
  goal?: string;
  budget?: string;
  deadline?: string;
  message: string;
  language?: 'en' | 'ar';
};
```

### POST /api/events

```ts
type EventWebhookRequest = {
  type: string;
  [key: string]: unknown;
};
```

## Reliability and SLO Thinking

Suggested initial service objectives:

| SLI | Target |
|---|---|
| Lead submission success ratio | >= 99.5% |
| p95 API latency (/api/notify) | <= 300 ms (excluding provider variance) |
| Error budget window | 30 days |

## Operational Risk Register

| Risk | Severity | Mitigation |
|---|---|---|
| Credential exposure in local test scripts | Critical | Rotate keys, remove hardcoded secrets, enforce secret scanning |
| Missing schema validation on API edge | High | Add zod validation in route handlers |
| Webhook authenticity not verified | High | Implement signature verification and replay protection |
| No queue for notification dispatch | Medium | Introduce background queue/outbox |

## Deployment and Runtime Controls

- Build: Next.js with webpack flags and explicit memory settings.
- Runtime security: strict headers in framework config.
- Caching: immutable headers for static assets.

## Observability Gaps

Current:
- Console-level logs in route handlers.

Needed for production maturity:
1. Structured logs with request correlation IDs.
2. Error aggregation with alerting.
3. Latency histograms and endpoint-level dashboards.

## Review Checklist for Senior Engineers

1. Validate API input contracts and error taxonomy.
2. Review CSP for least-privilege source constraints.
3. Confirm secrets hygiene and repository history hygiene.
4. Add integration tests for notify/events boundary conditions.
5. Introduce rate limits and bot-resistant form controls.

## Quick Commands

```bash
pnpm install
pnpm lint
pnpm build
pnpm dev
```
