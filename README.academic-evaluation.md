# MUBX Portfolio: Academic and CS Evaluation README

[![version](https://img.shields.io/badge/version-0.1.0-blue)](package.json)
[![framework](https://img.shields.io/badge/Framework-Next.js%2016-black)](https://nextjs.org/)
[![language](https://img.shields.io/badge/Language-TypeScript-blue)](https://www.typescriptlang.org/)

Last Updated: 2026-03-07

## Abstract

This project implements a bilingual web platform with deterministic form-processing and integration-based notification delivery. It serves as an applied software engineering artifact combining user-facing interaction design with practical backend I/O and security controls.

## Problem Statement

Given a public-facing portfolio that must collect client leads reliably, the system must:
1. Validate user intent and form payload correctness.
2. Persist submissions to durable storage.
3. Trigger low-latency notification pathways.
4. Preserve usability and SEO quality in multilingual contexts.

## Methodology

- Architectural method: layered monolith (presentation, application, integration).
- Implementation language: TypeScript with strict static checks.
- Validation approach: deterministic step-wise validation with bounded field sets.
- Performance approach: static asset caching and reduced runtime overhead via cached client initialization.

## Algorithmic Analysis

### A. Step Validation

Let $k$ be the number of validated fields per step. Here, $k$ is constant.

- Time: $O(k)=O(1)$
- Space: $O(1)$

### B. Sitemap Generation

Let $S$ be static routes, $P$ project routes, and $B$ blog routes.

- Time: $O(S+P+B)$
- Space: $O(S+P+B)$

### C. Middleware Rewrite Decision

- Time: $O(1)$
- Space: $O(1)$

## Data Structures

| Data Structure | Usage | Complexity |
|---|---|---|
| Object map | i18n dictionary lookup | Average $O(1)$ |
| Arrays | route and content enumeration | $O(n)$ traversal |
| Object state maps | form and error state | Average $O(1)$ updates |

## Experimental Characteristics

Observed/declared characteristics in project documentation/config:

| Metric | Value |
|---|---|
| Lighthouse desktop score | 100/100 |
| Static cache max-age | 31536000 s |
| Node memory flag | 8192 MB |

## Internal Validity Considerations

Potential confounders:
- Network variability dominates integration latency.
- Lack of controlled benchmark harness can bias reported performance.
- Production traffic shape not represented by local development measurements.

## Threats to Validity

- Construct validity: user-perceived performance may differ from synthetic Lighthouse outcomes.
- External validity: portfolio workload does not represent high-cardinality transactional systems.
- Conclusion validity: without repeated trials and confidence intervals, benchmark certainty is limited.

## Reproducibility Protocol

1. Install dependencies: `pnpm install`
2. Configure `.env.local` with Supabase and Resend credentials.
3. Run static checks: `pnpm lint`
4. Build artifact: `pnpm build`
5. Run runtime: `pnpm dev`
6. Execute API probes with cURL against `/api/notify` and `/api/events`.

## API Type Contracts

```ts
type LeadSubmission = {
  name: string;
  email: string;
  business: string;
  message: string;
  website?: string;
  goal?: string;
  budget?: string;
  deadline?: string;
  language: 'en' | 'ar';
};
```

## Results Interpretation Guidance

- Throughput and latency should be reported with units (req/s, ms).
- Use percentile reporting (p50/p95/p99) rather than only mean latency.
- Couple quality claims with reproducible command traces.

## Future Research Directions

1. Formal API schema verification with runtime contracts.
2. Queue-based delivery model for improved fault tolerance.
3. Controlled benchmark suite with statistically meaningful repetitions.
4. Comparative study: monolith route handlers vs dedicated microservice boundary.

## References

1. Cormen, Leiserson, Rivest, Stein. Introduction to Algorithms.
2. PostgreSQL Documentation. https://www.postgresql.org/docs/
3. Next.js Documentation. https://nextjs.org/docs
4. OWASP Top Ten. https://owasp.org/www-project-top-ten/
