# GEMINI.md - MUBX Portfolio

> **Project:** MUBX Portfolio (v2.6)  
> **Owner:** Omar Mubaidin (عمر مبيضين)  
> **Mission:** High-performance, bilingual (EN/AR) digital experience showcasing web engineering expertise.

## 🚀 Core Mandates

1. **Bilingual Integrity:** Every user-facing change **must** be reflected in both English and Arabic dictionaries in `src/lib/dictionaries.ts`. Arabic uses `dir="rtl"` and the `Cairo` font.
2. **Neon Red Aesthetic:** Strictly adhere to the brand color `#E11D1D` (Red Neon) and glassmorphism styling (backdrop blur, subtle borders).
3. **Performance First:** Maintain Lighthouse 100/100 scores. Use `next/dynamic` for heavy components and defer Three.js canvas loading by 3.5s.
4. **Tooling:** Use `pnpm` for package management. Build and Dev scripts require the `--webpack` flag and increased memory (`--max-old-space-size=8192`).
5. **No CMS:** Content is static and version-controlled. Update `src/lib/blog-data.ts` and `src/lib/projects.ts` directly for content changes.

## 🏗️ Technical Architecture

- **Framework:** Next.js 16.1.6 (App Router) + React 19.2.3.
- **Styling:** Tailwind CSS v4 with custom `@theme` directives in `src/app/globals.css`.
- **Database:** Supabase for contact submissions. Client is initialized lazily in `src/lib/db-init.ts`.
- **Email:** Resend API for lead notifications via `/api/notify`.
- **Animations:** 
  - Framer Motion 12.31.0 for UI transitions.
  - **Crucial:** Use patched Framer components in `src/components/framer/patch/` to avoid proprietary runtime dependencies.
- **Scrolling:** Lenis for smooth scroll orchestration.
- **3D:** Three.js + React Three Fiber for the `Stars` background and `CanvasCursor`.

## 📂 Key File Map

- `src/app/globals.css`: Design tokens, Tailwind v4 theme, and global animations.
- `src/lib/dictionaries.ts`: Central source of truth for all translations (EN/AR).
- `src/context/LanguageContext.tsx`: Manages i18n state and document direction (LTR/RTL).
- `src/lib/blog-data.ts`: Static blog content repository.
- `src/lib/projects.ts`: Static project case studies repository.
- `src/components/framer/patch/`: Custom-built animation components (Typewriter, SwipeButton, etc.).
- `src/middleware.ts`: Handles subdomain rewrites (e.g., `contact.mubx.dev`).

## 🛠️ Development Workflow

- **Dev Command:** `pnpm dev` (Runs with Webpack and increased memory).
- **Build Command:** `pnpm build` (Ensures production optimization).
- **Linting:** `pnpm lint` (Uses ESLint 9).
- **Styling:** Prefer Tailwind utility classes. Use `rtl:` variant for Arabic-specific layouts.
- **Icons:** Use `lucide-react`. Ensure they are mirrored or swapped appropriately for RTL if they are directional (e.g., arrows).

## 📝 Design Standards

- **Typography:**
  - Headings: `Space Grotesk` (Latin) / `Cairo` (Arabic).
  - Body: `Inter` (Latin) / `Cairo` (Arabic).
  - Code: `JetBrains Mono`.
- **Components:** Use glassmorphic containers (`bg-white/3 backdrop-blur-md border border-white/5`).
- **Animations:** Subtle entrances, magnetic buttons, and neon glows. Avoid overwhelming the user; prioritize clarity.

---

*This file serves as the foundational guide for all AI-assisted development on the MUBX Portfolio project.*
