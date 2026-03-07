# MUBX Portfolio: Technical System README

[![version](https://img.shields.io/badge/version-0.1.0-blue)](package.json)
[![next](https://img.shields.io/badge/Next.js-16.1.6-black)](https://nextjs.org/)
[![react](https://img.shields.io/badge/React-19.2.3-61DAFB)](https://react.dev/)
[![typescript](https://img.shields.io/badge/TypeScript-5.x-3178C6)](https://www.typescriptlang.org/)
[![license](https://img.shields.io/badge/license-All%20Rights%20Reserved-red)](LICENSE)

Last Updated: 2026-03-07

## Audience-Specific Versions

Use one of these tailored variants depending on reader profile:

1. Senior engineering review: [README.senior-engineering.md](README.senior-engineering.md)
2. Academic/project evaluation: [README.academic-evaluation.md](README.academic-evaluation.md)
3. Open-source contributors: [README.opensource-contributors.md](README.opensource-contributors.md)

## Abstract

MUBX Portfolio is a production-oriented, bilingual web platform for showcasing services, projects, and technical content, while also operating a lead ingestion pipeline (form submission, persistence, and email notification). The system is implemented as a Next.js App Router monolith with clearly separated presentation, application, and integration layers.

The codebase emphasizes practical software engineering concerns: strict TypeScript settings, secure HTTP headers, static and dynamic SEO surfaces, deterministic server routes, and modular UI composition. Its architecture optimizes for fast first-load performance and maintainability under incremental feature growth.

## 1. System Architecture

### 1.1 High-Level Component Diagram

```text
                        +---------------------------+
                        |      End User Browser     |
                        |  (EN/AR, Desktop/Mobile)  |
                        +-------------+-------------+
                                      |
                                      | HTTPS
                                      v
                      +---------------+----------------+
                      | Next.js 16 App Router Runtime |
                      | (SSR, RSC, API Routes, SEO)   |
                      +-------+---------------+--------+
                              |               |
                              |               |
                 /api/notify  |               |  /api/events (webhook)
                              v               v
                     +--------+----+     +----+----------------+
                     |  Resend API |     | Event Processing Log |
                     +-------------+     +-----------------------+
                              ^
                              |
                              | Lead data write
                              |
                      +-------+----------------+
                      | Supabase (PostgreSQL)  |
                      | contact_submissions    |
                      +------------------------+
```

### 1.2 Layered Architecture

```text
+---------------------------------------------------------------+
| Presentation Layer                                            |
| - React components (forms, pages, i18n UI, animations)       |
+---------------------------------------------------------------+
| Application Layer                                             |
| - API route handlers, middleware rewrite, validation logic    |
| - i18n context, routing logic, SEO metadata generators        |
+---------------------------------------------------------------+
| Integration Layer                                              |
| - Supabase client initialization and DB writes                |
| - Resend outbound email and inbound event processing          |
+---------------------------------------------------------------+
| Infrastructure/Runtime                                         |
| - Next.js runtime, Node.js process, CDN/static caching        |
| - Security headers and CSP                                    |
+---------------------------------------------------------------+
```

### 1.3 Core Workflow Sequence (Lead Submission)

```text
User -> Contact Form (Client): Enter multi-step form data
Contact Form -> Validation: Validate required fields
Validation -> Supabase Init: initializeSupabaseStore()
Supabase Init -> Supabase: INSERT contact_submissions
Supabase -> Contact Form: success | error
Contact Form -> /api/notify: POST lead payload
/api/notify -> Resend: send email notification
Resend -> /api/notify: accepted | error
/api/notify -> Contact Form: response JSON
Contact Form -> User: success/error UI state
```

## 2. Core Algorithms

### 2.1 Multi-Step Form Validation

Location: src/components/Contact.tsx

Algorithmic model:
- Step-conditional validation with regex email check and minimum length constraints.
- Constant number of fields per step.

Complexity:
- Time: O(1) per validation invocation (bounded fixed field set).
- Space: O(1) auxiliary error map.

### 2.2 Dynamic Sitemap Construction

Location: src/app/sitemap.ts

Algorithmic model:
- Linear traversal and mapping over static routes, project records, and blog post records.

Let:
- S = number of static routes
- P = number of projects
- B = number of blog posts

Complexity:
- Time: O(S + P + B)
- Space: O(S + P + B)

### 2.3 Subdomain Rewrite Routing

Location: src/middleware.ts

Algorithmic model:
- Host equality check with constant-time conditional rewrite to contact route.

Complexity:
- Time: O(1)
- Space: O(1)

### 2.4 Example with Complexity Annotation

```tsx
const validateStep = (s: number) => {
  // O(1) time, O(1) space: fixed number of field checks per step.
  const errors: { name?: string; email?: string; business?: string; message?: string } = {};

  if (s === 1) {
    if (!formData.name.trim()) errors.name = 'Please enter your name';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.business.trim()) errors.business = 'Please enter your business name';
  } else if (s === 3) {
    if (!formData.message.trim() || formData.message.length < 10) {
      errors.message = 'Please enter at least 10 characters';
    }
  }

  setFieldErrors(errors);
  return Object.keys(errors).length === 0;
};
```

## 3. Data Structures and Models

### 3.1 Primary Data Structures

| Structure | Location | Role | Complexity Notes |
|---|---|---|---|
| Object map | i18n dictionaries | Language-keyed translation access | Average O(1) property lookup |
| Array of records | projects/blog lists | Dynamic route and UI list rendering | O(n) traversal |
| Object map | fieldErrors/formData | Form state and error propagation | O(1) key update/access |
| Array of route descriptors | sitemap | Metadata route output | O(n) generation |

### 3.2 Lead Submission Model (Type Contract)

```ts
type LeadSubmission = {
  name: string;
  email: string;
  business: string;
  website?: string;
  goal?: string;
  budget?: string;
  deadline?: string;
  message: string;
  language: 'en' | 'ar';
};
```

### 3.3 Database Schema (Current)

```sql
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  name TEXT,
  email TEXT NOT NULL,
  brand_name TEXT,
  website TEXT,
  goal TEXT,
  budget TEXT,
  deadline TEXT,
  message TEXT,
  language TEXT
);
```

## 4. API Specification

### 4.1 Endpoint: POST /api/notify

Purpose:
- Send lead notification email through Resend.

Request schema:

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

Success response (HTTP 200):

```ts
type NotifySuccess = {
  data: {
    id?: string;
  };
};
```

Error responses:

```ts
type NotifyError400 = {
  error: {
    message: string;
    name?: string;
  };
};

type NotifyError500 = {
  error: 'Internal Server Error';
};
```

cURL:

```bash
curl -X POST http://localhost:3000/api/notify \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Jane Doe",
    "email":"jane@example.com",
    "business":"Acme Labs",
    "message":"Need a high-performance marketing site.",
    "language":"en"
  }'
```

### 4.2 Endpoint: POST /api/events

Purpose:
- Accept and log webhook-style event payloads (currently focused on Resend event types).

Request schema:

```ts
type EventWebhookRequest = {
  type:
    | 'email.received'
    | 'email.delivered'
    | 'email.bounced'
    | 'email.complained'
    | string;
  [key: string]: unknown;
};
```

Response:

```ts
type EventWebhookResponse =
  | { received: true }
  | { error: 'Internal Server Error' };
```

cURL:

```bash
curl -X POST http://localhost:3000/api/events \
  -H "Content-Type: application/json" \
  -d '{"type":"email.delivered","data":{"id":"evt_123"}}'
```

### 4.3 Error Handling Strategy

| Layer | Strategy |
|---|---|
| Client form | Step-level validation + user-facing status states |
| API handlers | try/catch boundaries + JSON error payloads |
| Integrations | Service-level error logging with fallback response codes |

## 5. File System Architecture

```text
src/
  app/
    api/
      notify/route.ts          # outbound email API
      events/route.ts          # webhook/event ingestion API
    blog/[slug]/               # dynamic blog pages
    projects/[slug]/           # dynamic project pages
    manifest.ts                # PWA manifest generator
    robots.ts                  # robots metadata generator
    sitemap.ts                 # sitemap metadata generator
  components/                  # reusable UI and feature components
  context/LanguageContext.tsx  # i18n runtime state
  hooks/                       # custom hooks for scrolling and typing
  lib/
    db-init.ts                 # lazy Supabase initialization
    blog-data.ts               # blog data source
    projects.ts                # projects data source
  middleware.ts                # host-based contact rewrite logic
```

## 6. Development Setup

### 6.1 Prerequisites

| Tool | Version |
|---|---|
| Node.js | >= 20.x |
| pnpm | >= 9.x |
| TypeScript | 5.x |

### 6.2 Installation and Run

```bash
pnpm install
pnpm dev
```

Application default URL: http://localhost:3000

### 6.3 Build and Lint

```bash
pnpm lint
pnpm build
pnpm start
```

## 7. Data Pipeline

```text
Input (UI form)
  -> Client-side validation
  -> Supabase INSERT (contact_submissions)
  -> Resend notification dispatch
  -> Optional webhook event POST (/api/events)
  -> Logging/operational review in hosting logs
```

Pipeline characteristics:
- Write path is synchronous from the client perspective.
- Notification failures are non-blocking relative to DB insertion completion.

## 8. Performance and Scalability

### 8.1 Verified Metrics

| Metric | Value | Source |
|---|---|---|
| Lighthouse Desktop Score | 100/100 | Project documentation |
| Static Asset Cache TTL | 31536000 s | next.config.ts headers |
| Image minimumCacheTTL | 60 s | next.config.ts images |
| Node memory flag (dev/build) | 8192 MB | package.json scripts |

### 8.2 Runtime Performance Characteristics

| Operation | Time Complexity | Dominant Factors |
|---|---|---|
| Sitemap generation | O(S + P + B) | Number of route records |
| Form validation | O(1) | Constant field checks |
| Middleware subdomain rewrite | O(1) | Single hostname comparison |
| Lead insertion | O(1) client call + network I/O | Supabase latency |

### 8.3 Scalability Analysis

Current bottlenecks:
- Single write path tightly coupled to client runtime.
- API route logging only (no durable event queue).
- No explicit rate limiting at API edge layer.

Recommended scale upgrades:
1. Add API-level schema validation (zod/io-ts) to reduce malformed traffic.
2. Add queue-backed dispatch for notifications to decouple write and email paths.
3. Add rate limiting and bot protection for public form endpoints.

## 9. Environment Variables

Create .env.local with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://<project>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<supabase_anon_key>
RESEND_API_KEY=<resend_key>
```

Security notes:
- Never commit credentials.
- Rotate any credentials that were previously exposed in test artifacts.

## 10. Testing and Quality Assurance

### 10.1 Test Strategy

| Layer | Current State | Recommended Expansion |
|---|---|---|
| Unit | Partial via component logic | Add Vitest/Jest for hooks and utility modules |
| Integration | Manual script exists | Add automated API route integration tests |
| E2E | Not formalized | Add Playwright flow for form submission |

### 10.2 Code Quality Controls

- ESLint (Next core-web-vitals + TypeScript config).
- TypeScript strict mode enabled.
- Next.js compile-time route and metadata checks.

### 10.3 Diagnostic Commands

```bash
pnpm lint
pnpm build
pnpm dev
```

## 11. Design Patterns

| Pattern | Location | Rationale |
|---|---|---|
| Provider Pattern | LanguageContext | Centralized i18n state and dependency injection |
| Module Singleton (cached instance) | lib/db-init.ts | Reuse Supabase client across calls |
| Adapter Pattern | API routes around Resend/Supabase | Isolate third-party service boundaries |
| Layered Architecture | app/components/lib separation | Reduces coupling and improves maintainability |

## 12. Security Considerations

- Security headers configured globally (HSTS, CSP, COOP, X-Frame-Options, etc.).
- CSP includes restricted source lists for scripts, images, and frames.
- Form payloads should be additionally validated server-side to prevent malformed data writes.
- Webhook endpoint should use signature verification before production hardening.

## 13. Known Limitations

1. Webhook processing currently logs events without persistence.
2. API routes do not enforce explicit schema validation yet.
3. No dedicated distributed tracing pipeline in current repository.
4. CI badge is informational only unless external workflow is configured.

## 14. Troubleshooting

### 14.1 Development Server Fails or Behaves Inconsistently

```bash
rm -rf .next
pnpm dev
```

### 14.2 Missing Supabase/Resend Runtime Configuration

Symptoms:
- Contact submissions return error state.
- API routes return 400/500.

Check:
```bash
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY
echo $RESEND_API_KEY
```

### 14.3 Build-Time Type Errors

```bash
pnpm lint
pnpm build
```

Review imports using path alias resolution and strict TypeScript checks.

## 15. Optimization Example (Before/After)

### Before

```ts
// Recreates client repeatedly under call pressure.
export const initializeSupabaseStore = async () => {
  const mod = await import('@supabase/supabase-js');
  return mod.createClient(url, key);
};
```

### After

```ts
let cachedInstance: any = null;

export const initializeSupabaseStore = async () => {
  // O(1) fast path after first initialization.
  if (cachedInstance) return cachedInstance;
  const mod = await import('@supabase/supabase-js');
  cachedInstance = mod.createClient(url, key);
  return cachedInstance;
};
```

Impact:
- Reduces repeated initialization overhead.
- Improves stability under repeated submission attempts.

## 16. Future Enhancements

Planned roadmap:

| Timeline | Enhancement |
|---|---|
| Q2 2026 | API schema validation with typed runtime guards |
| Q2 2026 | Playwright end-to-end workflow coverage |
| Q3 2026 | Queue-based async notification dispatch |
| Q3 2026 | Rate limiting + anti-automation guardrails |
| Q4 2026 | Extended observability with trace correlation IDs |

## 17. Contributing Guidelines

1. Use feature branches with scoped commit messages.
2. Keep TypeScript strict-safe and lint-clean.
3. Add tests for behavior-changing changes.
4. Validate API contracts when modifying integration routes.
5. Run lint and build before opening PRs.

## 18. License and Attribution

Copyright (c) 2026 Omar Mubaidin.
All rights reserved unless a separate license file is provided.

## 19. References

1. Next.js App Router documentation: https://nextjs.org/docs/app
2. TypeScript handbook: https://www.typescriptlang.org/docs/
3. React official docs: https://react.dev/
4. PostgreSQL documentation: https://www.postgresql.org/docs/
5. OWASP Top Ten: https://owasp.org/www-project-top-ten/
