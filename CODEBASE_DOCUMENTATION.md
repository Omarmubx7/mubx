# 🚀 MUBX Portfolio - Complete Codebase Documentation

> **Last Updated:** February 17, 2026  
> **Version:** 2.6  
> **Developer:** Omar Mubaidin (عمر مبيضين)

---

## 📑 Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture & Tech Stack](#architecture--tech-stack)
3. [Project Structure](#project-structure)
4. [Core Systems](#core-systems)
5. [Features & Functionality](#features--functionality)
6. [Components Breakdown](#components-breakdown)
7. [Routing & Pages](#routing--pages)
8. [Styling & Theming](#styling--theming)
9. [Performance Optimizations](#performance-optimizations)
10. [API Routes & Backend](#api-routes--backend)
11. [Environment Configuration](#environment-configuration)
12. [Development Workflow](#development-workflow)
13. [Deployment](#deployment)

---

## 🎯 Project Overview

**MUBX Portfolio** is a high-performance, bilingual (English/Arabic) web portfolio built to showcase web development services, client projects, and technical expertise. It features a bold "Red Neon" theme, glassmorphism effects, and smooth data-driven animations.

### **Key Metrics**
- ⚡ **Lighthouse Score:** 100/100 (Desktop)
- 🌍 **Bilingual Support:** English & Arabic (RTL)
- 📦 **PWA Ready:** Installable on mobile/desktop
- 🎨 **Custom Theme:** Red Neon (#E11D1D) with glassmorphic UI
- 🗄️ **Database:** Supabase for lead management
- 📧 **Email Notifications:** Resend API for instant alerts

### **Target Audience**
Startups, businesses, and founders in Amman, Jordan seeking high-performance web development services (landing pages, e-commerce, SaaS MVPs, custom systems).

---

## 🏗️ Architecture & Tech Stack

### **Frontend Framework**
- **Next.js 16.1.6** (App Router with Webpack)
- **React 19.2.3** (Server Components + Client Components)
- **TypeScript 5.x** (Strict mode enabled)

### **Styling & UI**
- **Tailwind CSS v4** (Latest with `@theme` directive)
- **Framer Motion 12.31.0** (Animations & transitions)
- **Lucide React** (Icon library)
- **next-themes** (Dark/Light mode with system preference)

### **Database & Backend**
- **Supabase** (PostgreSQL database for contact submissions)
- **Resend** (Email API for lead notifications)

### **3D & Canvas**
- **Three.js 0.182.0** + **@react-three/fiber** (3D background effects)
- **@react-three/drei** (Helper components for Three.js)

### **Additional Libraries**
- **Lenis 1.3.17** (Smooth scrolling library)
- **react-markdown** (Blog content rendering)
- **clsx + tailwind-merge** (Utility for className merging)
- **react-calendly** (Embedded scheduling widget)

### **Monitoring & Analytics**
- **@vercel/analytics** (User analytics)
- **@vercel/speed-insights** (Performance monitoring)

### **Build Tools**
- **Webpack** (Bundler, explicitly enabled via `--webpack` flag)
- **Sharp** (Image optimization)
- **PostCSS** (CSS processing)
- **ESLint 9** (Linting)

---

## 📂 Project Structure

```
mubx/
├── public/
│   ├── images/              # Project logos, screenshots, OG images
│   ├── techstackicons/      # Technology stack icons
│   ├── manifest.json        # PWA manifest
│   └── google0c91fd7b5511ea7d.html  # Google verification
│
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/           # About page
│   │   ├── api/             # API routes
│   │   │   ├── notify/      # Email notification endpoint
│   │   │   └── events/      # Analytics/tracking events
│   │   ├── blog/            # Blog listing & individual posts
│   │   │   ├── [slug]/      # Dynamic blog post routes
│   │   │   └── page.tsx
│   │   ├── client/          # Client-specific pages
│   │   │   └── demo/
│   │   ├── contact/         # Contact page (also accessible via subdomain)
│   │   ├── contract/        # Contract template page
│   │   ├── legal/           # Privacy & Terms pages
│   │   │   ├── privacy/
│   │   │   └── terms/
│   │   ├── links/           # Custom link tree page
│   │   ├── projects/        # Projects listing & case studies
│   │   │   └── [slug]/      # Dynamic project detail pages
│   │   ├── services/        # Services overview
│   │   │   └── ecommerce/   # E-commerce service page
│   │   ├── success/         # Success page (post-form submission)
│   │   ├── tools/           # Free tools
│   │   │   ├── neon-gradient-card/
│   │   │   └── website-cost-calculator-jordan/
│   │   ├── error.tsx        # Global error boundary
│   │   ├── not-found.tsx    # 404 page
│   │   ├── layout.tsx       # Root layout (fonts, metadata, providers)
│   │   ├── page.tsx         # Homepage
│   │   ├── globals.css      # Global styles & CSS variables
│   │   ├── manifest.ts      # PWA manifest generator
│   │   ├── robots.ts        # robots.txt generator
│   │   └── sitemap.ts       # Dynamic sitemap generator
│   │
│   ├── components/          # React components
│   │   ├── canvas/          # Three.js canvas components
│   │   │   ├── Stars.tsx    # Animated star field background
│   │   │   └── CanvasCursor.tsx  # Interactive cursor effect
│   │   ├── framer/          # Framer Motion components
│   │   │   ├── FramerComponents.tsx  # Dynamic imports for Framer
│   │   │   └── patch/       # Patched/custom Framer components
│   │   │       ├── TypewriterEffect.patch.js
│   │   │       ├── SwipeLettersButton.patch.js
│   │   │       ├── FAQs.patch.js
│   │   │       ├── ProTextType.patch.js
│   │   │       ├── LiquidMetal.patch.js
│   │   │       ├── LogoPreloader.patch.js
│   │   │       ├── Accordion.patch.js
│   │   │       └── LayoutJumpPreventer.patch.js
│   │   ├── hero/            # Hero section variants
│   │   ├── tools/           # Tool-specific components
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── AnimatedText.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── GradientText.tsx
│   │   │   ├── InfiniteMarquee.tsx
│   │   │   ├── LoadingSkeleton.tsx
│   │   │   ├── MagneticButton.tsx
│   │   │   ├── ScrollReveal.tsx
│   │   │   └── TextReveal.tsx
│   │   ├── About.tsx        # About section
│   │   ├── Blog.tsx         # Blog section
│   │   ├── BlogContent.tsx  # Blog post renderer
│   │   ├── BlogPreview.tsx  # Blog card preview
│   │   ├── ChatWidget.tsx   # Chat widget (legacy)
│   │   ├── Contact.tsx      # Contact form & FAQ
│   │   ├── ContactView.tsx  # Full contact page view
│   │   ├── DynamicChatWidget.tsx  # Chat widget with dynamic import
│   │   ├── Footer.tsx       # Site footer
│   │   ├── Hero.tsx         # Hero section with typewriter animation
│   │   ├── HomeClient.tsx   # Main homepage client component
│   │   ├── JsonLd.tsx       # Structured data for SEO
│   │   ├── LanguageToggle.tsx  # Language switcher (EN/AR)
│   │   ├── MetricsStrip.tsx # Statistics strip
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── NotFoundView.tsx # 404 error view
│   │   ├── Photography.tsx  # Photography showcase (unused)
│   │   ├── ProjectCard.tsx  # Project preview card
│   │   ├── Projects.tsx     # Projects section
│   │   ├── ScrollProgressBar.tsx  # Reading progress indicator
│   │   ├── Services.tsx     # Services section
│   │   ├── SkillTicker.tsx  # Infinite scrolling skill marquee
│   │   ├── SkipToContent.tsx  # Accessibility skip link
│   │   ├── SmoothScroll.tsx # Lenis smooth scroll wrapper
│   │   ├── SocialSidebar.tsx  # Fixed social links sidebar
│   │   ├── SuccessView.tsx  # Post-submission success view
│   │   ├── TechStack.tsx    # Technology stack section
│   │   ├── Testimonials.tsx # Client testimonials (merged into Reviews)
│   │   ├── ThemeProvider.tsx  # Dark/Light theme provider
│   │   ├── ThemeToggle.tsx  # Theme switcher button
│   │   └── Timeline.tsx     # Experience timeline
│   │
│   ├── config/              # Configuration files
│   │   └── seo.ts           # SEO metadata configuration
│   │
│   ├── context/             # React Context providers
│   │   └── LanguageContext.tsx  # i18n language state management
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── useLenis.ts      # Smooth scroll hook
│   │   ├── useScrollProgress.ts  # Scroll percentage hook
│   │   ├── useScrollSpy.ts  # Active section detection
│   │   └── useTypingEffect.ts  # Typewriter effect hook
│   │
│   ├── lib/                 # Utility libraries
│   │   ├── blog-data.ts     # Blog posts content (static data)
│   │   ├── db-init.ts       # Supabase client initialization
│   │   ├── dictionaries.ts  # i18n translations (EN/AR)
│   │   ├── framer-mock.ts   # Mock Framer exports for patched components
│   │   ├── motion.ts        # Framer Motion animation variants
│   │   ├── projects.ts      # Project data (case studies)
│   │   └── utils.ts         # Utility functions (cn for className merging)
│   │
│   ├── middleware.ts        # Next.js middleware (subdomain routing)
│   └── utils/               # Additional utilities
│       └── supabase/        # Supabase-specific utilities
│
├── .env.local               # Environment variables (not in repo)
├── .gitignore
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── next-env.d.ts            # Next.js TypeScript definitions
├── package.json             # Dependencies & scripts
├── pnpm-lock.yaml           # Package lock file (pnpm)
├── postcss.config.mjs       # PostCSS configuration
├── README.md                # Project README
├── tsconfig.json            # TypeScript configuration
└── CODEBASE_DOCUMENTATION.md  # This file
```

---

## ⚙️ Core Systems

### **1. Internationalization (i18n)**

**Location:** `src/context/LanguageContext.tsx` + `src/lib/dictionaries.ts`

**How It Works:**
- **Context Provider:** `LanguageProvider` wraps the app and provides `language`, `setLanguage`, `t` (translations), and `isRTL` flag.
- **Language Detection:** Checks URL `?lang=ar` or `?lang=en` parameter, then falls back to localStorage.
- **RTL Support:** Automatically sets `document.documentElement.dir` to `rtl` for Arabic.
- **Dictionary Structure:** Single `dictionaries.ts` file contains nested objects for `en` and `ar` with all translations.

**Key Features:**
- Component-level translation access via `useLanguage()` hook
- Persistent language preference in localStorage
- Dynamic document direction (`ltr`/`rtl`) switching
- URL-based language parameter (`?lang=ar`)

**Example Usage:**
```tsx
const { t, language, isRTL } = useLanguage();
return <h1>{t.hero.title}</h1>;
```

---

### **2. Database (Supabase)**

**Location:** `src/lib/db-init.ts`

**Schema:**
```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  email TEXT NOT NULL,
  goal TEXT,
  budget TEXT,
  deadline TEXT,
  message TEXT NOT NULL,
  language TEXT DEFAULT 'en'
);
```

**Implementation:**
- **Dynamic Import:** Supabase client is loaded lazily to reduce initial bundle size.
- **Singleton Pattern:** Cached instance prevents multiple client instantiations.
- **Environment Validation:** Checks that URL and ANON_KEY are properly configured before initializing.

**Usage Example:**
```tsx
const supabase = await initializeSupabaseStore();
const { error } = await supabase
  .from('contact_submissions')
  .insert([{ email, goal, budget, deadline, message, language }]);
```

---

### **3. Email Notifications (Resend)**

**Location:** `src/app/api/notify/route.ts`

**Flow:**
1. User submits contact form
2. Form data saved to Supabase
3. API route `/api/notify` triggered via `fetch`
4. Resend API sends formatted email to `mubxdev@proton.me`
5. Response returned to client (success/error)

**Email Template:**
- **Subject:** "New Lead from Portfolio (English/Arabic)"
- **HTML Formatted:** Shows email, goal, budget, deadline, message, language
- **From Address:** `onboarding@resend.dev` (default Resend domain)

**Error Handling:**
- Returns JSON response with error details if Resend API fails
- Console logs errors for debugging
- Client-side shows error message to user

---

### **4. Routing & Middleware**

**Location:** `src/middleware.ts`

**Subdomain Routing:**
- **Custom Subdomain:** `contact.mubx.dev` automatically rewrites to `/contact` page
- **Language Preservation:** Maintains `?lang=` query parameter during rewrites
- **Matcher Config:** Excludes static assets, API routes, and Next.js internals

**Dynamic Routes:**
- `blog/[slug]` - Individual blog posts
- `projects/[slug]` - Project case studies
- All routes support `?lang=ar` for Arabic version

---

### **5. Content Management**

**Static Data Files:**
- **Blog Posts:** `src/lib/blog-data.ts` - Array of blog post objects with markdown content
- **Projects:** `src/lib/projects.ts` - Array of project case studies with metadata, tech stack, metrics
- **Translations:** `src/lib/dictionaries.ts` - Complete translation dictionary for entire site

**Why Static?**
- No CMS overhead, faster builds
- Version controlled content
- Easy to audit and update
- Perfect for portfolio with infrequent content changes

---

## 🎨 Features & Functionality

### **Homepage Sections**

1. **Hero Section** (`Hero.tsx`)
   - Animated typewriter effect cycling through: PORTFOLIOS → PLATFORMS → PRODUCTS → E-COMMERCE → WEB APPS → SAAS MVPS
   - Two CTA buttons: "GET IN TOUCH" (Calendly) and "VIEW PROJECTS" (#projects anchor)
   - Responsive image showcase with neon glow effects
   - Bilingual support with proper translations

2. **Metrics Strip** (`MetricsStrip.tsx`)
   - Displays key statistics: 100+ members managed, 20% lead increase, 200% sales boost
   - Glassmorphic cards with animated counters
   - Responsive grid layout

3. **Skill Ticker** (`SkillTicker.tsx`)
   - Infinite horizontal marquee of technologies
   - Smooth CSS animation with duplicate content for seamless loop
   - Technologies: Next.js, React, TypeScript, Tailwind, PostgreSQL, Supabase, etc.

4. **About Section** (`About.tsx`)
   - "WEB DEVELOPER IN AMMAN" heading with animated text
   - Personal introduction with performance quote
   - "Why clients choose me" cards with key differentiators
   - Typing animation effects for dynamic text

5. **Tech Stack** (`TechStack.tsx`)
   - Grid of technology icons with glassmorphic cards
   - Categorized by: Frontend, Backend, Database, Tools
   - Hover effects and smooth transitions

6. **Timeline** (`Timeline.tsx`)
   - Chronological experience and education history
   - Vertical timeline with animated entry points
   - Shows years, roles, companies, and descriptions
   - Bilingual content

7. **Contact Section** (`Contact.tsx`)
   - Lead capture form with qualifiers (goal, budget, deadline)
   - Email and project details input
   - Real-time availability status with green pulse animation
   - WhatsApp direct link for urgent inquiries
   - **6 FAQ Questions:**
     1. What technologies do you use?
     2. How long does a typical project take?
     3. Do you work with clients outside Jordan?
     4. What payment methods do you accept?
     5. Do you offer maintenance after launch?
     6. What's included in your projects?
   - Accordion-style FAQ component with smooth expand/collapse
   - Bilingual FAQ content

8. **Footer** (`Footer.tsx`)
   - Brand logo and description
   - Navigation links (home, about, services, projects, contact, tools)
   - Social media links (GitHub, LinkedIn, Instagram)
   - Payment methods accepted (Zain Cash, CliQ)
   - Selected projects showcase
   - Legal links (privacy, terms)

---

### **Additional Pages**

#### **Projects (`/projects`)**
- Grid display of all projects with ProjectCard components
- Filter by category (coming soon)
- Each card shows: logo, title, description, tech stack, metrics, live link
- Click to view full case study

#### **Project Case Study (`/projects/[slug]`)**
- Full project breakdown:
  - Problem statement
  - Your role
  - Solution approach
  - Outcome/impact
  - Screenshots (if available)
- Tech stack badges
- Live link and GitHub repo (if public)
- Back to projects navigation

#### **Blog (`/blog`)**
- List of blog posts with preview cards
- Shows: title, excerpt, tag, date
- Click to read full post

#### **Blog Post (`/blog/[slug]`)**
- Full blog article with markdown rendering
- Table of contents (if applicable)
- Syntax highlighted code blocks
- Share buttons
- Back to blog navigation

#### **Services (`/services`)**
- Overview of services offered
- Detailed service pages (e.g., `/services/ecommerce`)
- Pricing estimators
- CTA to contact

#### **Tools**
- **Website Cost Calculator (`/tools/website-cost-calculator-jordan`):**
  - Interactive calculator for Jordan-based web projects
  - Inputs: project type, design level, features, bilingual support
  - Real-time price estimation
  - Transparency about pricing factors

- **Neon Gradient Card Generator (`/tools/neon-gradient-card`):**
  - Free design tool for creating glassmorphic cards
  - Customizable colors, gradients, borders, shadows
  - Export as PNG or copy CSS code

#### **Links (`/links`)**
- Custom "Link in Bio" page (like Linktree)
- Displays all important links in one place
- Custom branded design matching portfolio theme

#### **Contract Template (`/contract`)**
- Software Development Services Agreement
- 8 sections: Scope, Compensation, IP, Client Obligations, Warranties, Confidentiality, Termination, Governing Law
- Footer with signature fields
- Bilingual (English/Arabic)

#### **Legal Pages**
- **Privacy Policy (`/legal/privacy`):** Data collection, usage, and protection practices
- **Terms of Service (`/legal/terms`):** Service terms, limitations, and disclaimers

---

## 🧩 Components Breakdown

### **Layout Components**

#### **Navbar (`Navbar.tsx`)**
- Fixed position header with blur backdrop
- Logo (links to homepage)
- Navigation links: Services, Projects, Lab, Testimonials, Contact
- Language toggle (EN/AR)
- Theme toggle (Dark/Light)
- Mobile hamburger menu (responsive)
- Scroll-based opacity changes

#### **Footer (`Footer.tsx`)**
- 4-column grid layout (responsive)
- Brand section with logo and description
- Navigation links
- Social media icons
- Payment methods
- Selected projects showcase
- Copyright and legal links

#### **SocialSidebar (`SocialSidebar.tsx`)**
- Fixed left sidebar (desktop only)
- Vertical stack of social icons: GitHub, LinkedIn, Instagram
- Hover effects with color transitions
- Links open in new tab

---

### **Hero Components**

#### **Hero (`Hero.tsx`)**
- Animated typewriter text cycling through 6 project types
- Badge with job title/location
- Two CTA buttons with swipe animation effects
- Hero image with neon glow backdrop
- Responsive layout (stacked on mobile, side-by-side on desktop)
- Utilizes `TypewriterEffect` and `SwipeLettersButton` Framer components

---

### **Content Sections**

#### **About (`About.tsx`)**
- 2-column layout (text + visual)
- Heading with typing animation
- Personal introduction with bolded name
- Performance quote with border accent
- "Why clients choose me" list with numbered badges
- Uses `ProTextType` Framer component for animations

#### **TechStack (`TechStack.tsx`)**
- Section heading: "TECHNICAL EXPERTISE"
- Grid of technology cards (4 columns on desktop)
- Each card shows: icon, technology name, proficiency level
- Glassmorphic card styling with hover effects
- Technologies grouped by category (Frontend, Backend, Database, DevOps, Tools)

#### **Timeline (`Timeline.tsx`)**
- Section heading: "MY JOURNEY"
- Vertical timeline with connecting line
- Each entry shows: year, role, company, description
- Animated entrance on scroll
- Alternating left/right layout for visual interest

#### **Projects (`Projects.tsx`)**
- Section heading: "SELECTED PROJECTS"
- Grid of project cards (2 columns on tablet, 3 on desktop)
- Each card: logo, title, tech badges, metrics, CTA button
- Hover effects with scale and glow
- Links to full case study pages

#### **Testimonials/Reviews**
- Client quotes with attribution
- Project outcome metrics
- Star ratings or satisfaction indicators
- Carousel or grid layout
- Links to live projects

#### **Contact (`Contact.tsx`)**
**Form Section:**
- Qualifiers row: Goal dropdown, Budget dropdown, Deadline dropdown
- Email input with validation
- Textarea for project details
- Submit button with loading state
- Success/error message display
- Form submission to Supabase + Email notification

**FAQ Section:**
- Accordion-style expandable questions
- 6 questions covering: tech stack, timelines, remote work, payments, maintenance, project inclusions
- Smooth expand/collapse animations via `FAQs.patch.js` Framer component
- Bilingual content

**Availability Section:**
- Green pulse dot indicating online status
- Response time expectation
- WhatsApp direct link for urgent inquiries
- Contact info cards (email, location)

---

### **Utility Components**

#### **SmoothScroll (`SmoothScroll.tsx`)**
- Wraps entire app with Lenis smooth scrolling
- Provides buttery-smooth scroll physics
- Integrates with Framer Motion for scroll-based animations
- Configurable duration, easing, direction, orientation

#### **ScrollProgressBar (`ScrollProgressBar.tsx`)**
- Fixed top bar indicating reading progress
- Red neon color matching theme
- Advances from 0% to 100% as user scrolls down page
- Smooth transition animations

#### **ThemeProvider (`ThemeProvider.tsx`)**
- Wraps app and provides theme context
- Supports: `light`, `dark`, `system` (follows OS preference)
- Uses `next-themes` library
- Prevents flash of unstyled content (FOUC)

#### **ThemeToggle (`ThemeToggle.tsx`)**
- Button to switch between dark/light modes
- Icon changes based on current theme (Sun/Moon)
- Keyboard accessible
- Smooth transition on theme change

#### **LanguageToggle (`LanguageToggle.tsx`)**
- Dropdown or button to switch language
- Shows current language: EN or عربي
- Updates URL parameter `?lang=`
- Persists preference to localStorage
- Triggers context update for entire app

#### **SkipToContent (`SkipToContent.tsx`)**
- Accessibility feature for keyboard navigation
- Hidden link that appears on focus
- Skips directly to main content (#main-content)
- Meets WCAG accessibility standards

#### **JsonLd (`JsonLd.tsx`)**
- Injects structured data (JSON-LD) into page head
- Helps search engines understand content
- Includes: Person schema, ProfessionalService schema
- Improves SEO and rich snippets in search results

---

### **Framer Motion Components**

**Location:** `src/components/framer/patch/`

These are custom patched Framer components to avoid dependency on Framer's proprietary runtime:

1. **TypewriterEffect.patch.js**
   - Animated typewriter text effect
   - Configurable typing speed, deleting speed, pause duration
   - Blinking cursor
   - Loop or single-run modes
   - Used in Hero section for cycling project types

2. **SwipeLettersButton.patch.js**
   - Button with letter-by-letter swipe animation on hover
   - Configurable colors, borders, padding
   - Alternating or uniform direction
   - **Accessibility:** Added `aria-label`, `role="button"`, `aria-hidden="true"` for duplicate letters

3. **FAQs.patch.js**
   - Accordion component for FAQ section
   - Supports up to 6 questions
   - Smooth expand/collapse with variants (OtH3ntvnF, XUqRqoQed, etc.)
   - Click to toggle, only one open at a time
   - Responsive layout

4. **ProTextType.patch.js**
   - Professional typing effect with cursor
   - Configurable speed, loop, pause
   - Custom cursor color and size
   - Fluid sizing based on viewport

5. **LogoPreloader.patch.js**
   - Full-screen logo animation on initial page load
   - Smooth fade-out after duration
   - Prevents content from rendering until animation completes
   - Improves perceived performance

6. **LiquidMetal.patch.js**
   - Liquid metallic visual effect (not actively used)
   - Potential for hero background or decorative elements

7. **Accordion.patch.js**
   - Base accordion component used by FAQs
   - Supports nested children
   - ARIA labels for accessibility

8. **LayoutJumpPreventer.patch.js**
   - Prevents layout shift during animations
   - Maintains consistent positioning
   - Improves Cumulative Layout Shift (CLS) score

**Why Patched?**
- Framer's online components require their proprietary runtime
- Patching allows us to use the UI/animations without dependencies
- Better bundle size control and performance
- Avoid potential breaking changes from Framer updates

---

### **Canvas Components (Three.js)**

#### **Stars (`canvas/Stars.tsx`)**
- Animated 3D star field background
- Uses `@react-three/fiber` and `@react-three/drei`
- Point cloud with randomized positions
- Rotates slowly for parallax effect
- Deferred loading (after 3.5s) to prevent blocking main thread

#### **CanvasCursor (`canvas/CanvasCursor.tsx`)**
- Interactive cursor following effect
- Custom cursor styles based on hover target
- Smooth easing and transitions
- Disabled on mobile for performance

---

## 🎨 Styling & Theming

### **CSS Architecture**

**Location:** `src/app/globals.css`

**Approach:** Tailwind CSS v4 with custom CSS variables

**Color System:**
```css
:root {
  --background: #ffffff;      /* Light mode background */
  --foreground: #09090b;      /* Light mode text */
  --neon: #E11D1D;            /* Primary brand color (red) */
  --muted: #4b5563;           /* Muted text */
  --card: #f9f9f9;            /* Card background */
  --border: #e2e2e2;          /* Border color */
}

[data-theme='dark'] {
  --background: #050505;      /* Dark mode background */
  --foreground: #F9FAFB;      /* Dark mode text */
  --neon: #E11D1D;            /* Consistent brand color */
  --muted: #9CA3AF;           /* Muted text */
  --card: rgba(255, 255, 255, 0.03);  /* Glassmorphic card */
  --border: rgba(255, 255, 255, 0.05); /* Subtle border */
}
```

**Design Tokens:**
- **Neon Red (#E11D1D):** Primary brand color, CTAs, accents, glows
- **Glassmorphism:** `backdrop-blur` with rgba backgrounds for card effects
- **Font System:**
  - Sans: Inter (body text)
  - Display: Space Grotesk (headings)
  - Mono: JetBrains Mono (code)
  - Arabic: Cairo (RTL support)

**Animations:**
```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```
- Used for infinite scrolling ticker
- Duration: 20s (configurable via CSS variable `--marquee-duration`)

**Texture Overlay:**
- Subtle grid pattern across entire site
- Uses radial gradient + linear gradients
- Opacity: 5% for non-intrusive effect

**Responsive Design:**
- Mobile-first approach with Tailwind breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Reduced motion for users with `prefers-reduced-motion`
- Auto-disable smooth scrolling on mobile for performance

---

### **Theme Switching**

**Implementation:** `next-themes` library

**Features:**
- Automatic system preference detection
- Persistent theme choice in localStorage
- Prevents flash of incorrect theme on page load
- Smooth transitions between themes (CSS transitions)

**Usage:**
```tsx
<ThemeProvider
  attribute="data-theme"
  defaultTheme="dark"
  enableSystem
  disableTransitionOnChange
>
  {children}
</ThemeProvider>
```

---

### **RTL (Right-to-Left) Support**

**Implementation:**
- Automatic detection via `LanguageContext`
- Sets `document.documentElement.dir = 'rtl'` for Arabic
- Tailwind's `rtl:` variant for conditional styling
- Example: `rtl:text-right` for right-aligned text in Arabic

**CSS Adjustments:**
- Flexbox direction reversal
- Padding/margin adjustments
- Border positioning changes
- Icon mirroring (e.g., arrow directions)

---

## ⚡ Performance Optimizations

### **1. Code Splitting**

**Dynamic Imports:**
```tsx
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />
});
```

**Benefits:**
- Reduces initial bundle size
- Components load on-demand as user scrolls
- Skeleton screens during loading for better UX

**Components with Dynamic Import:**
- MetricsStrip
- SkillTicker
- About
- TechStack
- Timeline
- Contact
- Footer
- StarsCanvas
- CanvasCursor

---

### **2. Image Optimization**

**Next.js Image Component:**
```tsx
<Image
  src="/images/logo.png"
  alt="MUBX Logo"
  width={140}
  height={50}
  formats={['image/avif', 'image/webp']}
/>
```

**Features:**
- Automatic format selection (AVIF → WebP → fallback)
- Lazy loading by default
- Responsive images with srcset
- Blur placeholder for smooth loading
- Minimum cache TTL: 60 seconds

**Configuration (`next.config.ts`):**
```ts
images: {
  formats: ['image/avif', 'image/webp'],
  minimumCacheTTL: 60,
}
```

---

### **3. Font Optimization**

**Next.js Font Module:**
```tsx
import { Inter, Space_Grotesk, JetBrains_Mono, Cairo } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',  // FOIT prevention
});
```

**Benefits:**
- Fonts self-hosted by Next.js
- Zero layout shift (font metrics pre-calculated)
- `display: swap` to prevent invisible text
- CSS variables for consistent usage

---

### **4. Caching Strategy**

**Static Assets (`next.config.ts`):**
```ts
{
  source: '/_next/static/:path*',
  headers: [
    {
      key: 'Cache-Control',
      value: 'public, max-age=31536000, immutable',
    },
  ],
}
```

**Aggressive caching for:**
- Static assets (JS, CSS): 1 year
- Images: 1 year
- Fonts: 1 year

**Page Caching:**
- Static pages: Cached at CDN edge
- Dynamic pages: ISR (Incremental Static Regeneration) where applicable

---

### **5. Rendering Strategy**

**Per Route:**
- **Static Generation (SSG):** Blog posts, project pages, legal pages
- **Server-Side Rendering (SSR):** Homepage with language detection
- **Client-Side Rendering (CSR):** Interactive components (forms, animations)

**Server Components:**
- Used by default in Next.js App Router
- Reduced JavaScript sent to client
- Components that don't need interactivity stay on server

---

### **6. Third-Party Scripts**

**Deferred Loading:**
- Calendly widget: Lazy loaded on interaction
- Analytics: Loaded after initial render
- Chat widget: Loaded 3.5s after page load

**DNS Prefetch:**
```html
<link rel="dns-prefetch" href="https://vercel.live" />
<link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
```

---

### **7. Canvas Deferral**

**Strategy:**
- Three.js components (Stars, CanvasCursor) deferred 3.5s after page load
- Prevents blocking main thread during critical rendering
- Uses state flag to conditionally render:
```tsx
const [showCanvas, setShowCanvas] = useState(false);
useEffect(() => {
  const timer = setTimeout(() => setShowCanvas(true), 3500);
  return () => clearTimeout(timer);
}, []);
```

---

### **8. Lighthouse Optimizations**

**Achieved Scores (Desktop):**
- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

**Key Techniques:**
- Preload critical fonts
- Minimize render-blocking resources
- Optimize images (AVIF/WebP)
- Eliminate unused CSS
- Reduce JavaScript execution time
- Proper ARIA labels and semantic HTML
- Meta descriptions and Open Graph tags

---

## 🔌 API Routes & Backend

### **API Endpoints**

#### **POST `/api/notify`**

**Purpose:** Send email notification when contact form is submitted

**Request Body:**
```json
{
  "email": "client@example.com",
  "goal": "Landing Page",
  "budget": "500-1000 JOD",
  "deadline": "2-4 weeks",
  "message": "I need a portfolio website",
  "language": "en"
}
```

**Response:**
```json
{
  "data": {
    "id": "email-id-from-resend"
  }
}
```

**Error Response:**
```json
{
  "error": {
    "message": "Error message from Resend",
    "name": "ValidationError"
  }
}
```

**Implementation:**
```ts
const { data, error } = await resend.emails.send({
  from: 'MUBX Portfolio <onboarding@resend.dev>',
  to: ['mubxdev@proton.me'],
  subject: `New Lead from Portfolio (${language === 'ar' ? 'Arabic' : 'English'})`,
  html: `...formatted HTML...`,
});
```

---

#### **POST `/api/events`**

**Purpose:** Track analytics events (page views, interactions)

**Used by:** Custom event tracking, A/B testing, user behavior analysis

---

## 🔐 Environment Configuration

**Required Environment Variables:**

```env
# Supabase (Database)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Resend (Email Notifications)
RESEND_API_KEY=re_your-key
```

**Configuration Files:**

### **`.env.local`** (Not in repo - create this locally)
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
RESEND_API_KEY=re_xxxxxxxxxxxx
```

### **`next.config.ts`**
```ts
const nextConfig: NextConfig = {
  trailingSlash: false,
  compress: true,
  poweredByHeader: false,
  experimental: {
    urlImports: ['https://framer.com/m/', 'https://framerusercontent.com/'],
  },
  // Security headers, caching, image config, etc.
};
```

### **`tsconfig.json`**
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "framer": ["./src/lib/framer-mock.ts"]
    }
  }
}
```

**Path Aliases:**
- `@/*` → `src/*` (absolute imports)
- `framer` → `src/lib/framer-mock.ts` (mock Framer library)

---

## 🛠️ Development Workflow

### **Install Dependencies**
```bash
pnpm install
# or
npm install
```

### **Run Development Server**
```bash
pnpm dev
# or
npm run dev
```

Opens at `http://localhost:3000`

### **Build for Production**
```bash
pnpm build
# or
npm run build
```

Generates optimized production build in `.next/` folder

### **Start Production Server**
```bash
pnpm start
# or
npm start
```

Serves production build locally

### **Lint Code**
```bash
pnpm lint
# or
npm run lint
```

Runs ESLint to check for code quality issues

---

### **Common Development Tasks**

#### **Add New Blog Post**
1. Open `src/lib/blog-data.ts`
2. Add new object to `blogData.en` array:
```ts
{
  slug: 'my-new-post',
  title: "My New Post Title",
  excerpt: "Brief description...",
  tag: "Category",
  date: "Mar 1, 2026",
  content: `
## Heading
Content in markdown...
  `
}
```
3. Add Arabic translation to `blogData.ar` array
4. Save file - Next.js will hot reload

#### **Add New Project**
1. Open `src/lib/projects.ts`
2. Add new object to `projectsData.en` array:
```ts
{
  slug: 'new-project',
  title: 'New Project',
  description: '...',
  tech: ['Next.js', 'React', 'Tailwind'],
  links: { live: 'https://...', code: 'https://github.com/...' },
  logo: '/images/project-logo.png',
  metrics: 'Key Metric',
  verified_outcome: 'Outcome',
  timeframe: '2 Weeks',
  category: { en: 'Category', ar: 'فئة', icon: '🚀', color: 'bg-...' },
  caseStudy: {
    problem: '...',
    role: '...',
    solution: '...',
    outcome: '...',
  }
}
```
3. Add Arabic translation to `projectsData.ar`
4. Upload project logo to `public/images/`

#### **Update Translations**
1. Open `src/lib/dictionaries.ts`
2. Navigate to relevant section (e.g., `nav`, `hero`, `contact`)
3. Update both `en` and `ar` objects
4. Save file

#### **Add New Component**
1. Create file in `src/components/` (e.g., `NewComponent.tsx`)
2. Use `'use client'` directive if component needs interactivity
3. Import and use in page or other component
4. Consider dynamic import if component is heavy

---

## 🚀 Deployment

### **Vercel (Recommended)**

**Steps:**
1. Push code to GitHub repository
2. Import repository in Vercel dashboard
3. Configure environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `RESEND_API_KEY`
4. Deploy! Vercel auto-detects Next.js and builds

**Automatic Deployments:**
- Every push to `main` branch triggers production deployment
- Pull requests get preview deployments
- Custom domains: `mubx.dev`, `contact.mubx.dev`

**Vercel Configuration:**
- Build Command: `next build --webpack`
- Output Directory: `.next`
- Install Command: `pnpm install` (auto-detected)

---

### **Self-Hosting**

**Build & Run:**
```bash
# 1. Build
npm run build

# 2. Start server
npm start
```

**Production Server:**
- Use PM2 or systemd to keep process running
- Set up reverse proxy (Nginx/Caddy)
- Configure SSL certificate (Let's Encrypt)
- Set environment variables in server environment

**Docker (Optional):**
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📊 Analytics & Monitoring

### **Vercel Analytics**
- Enabled via `@vercel/analytics` package
- Tracks: page views, unique visitors, geographic data
- Dashboard: Vercel project → Analytics tab

### **Speed Insights**
- Real User Monitoring (RUM) via `@vercel/speed-insights`
- Tracks: LCP, FID, CLS, TTFB
- Dashboard: Vercel project → Speed Insights tab

### **Custom Event Tracking**
- Use `/api/events` endpoint for custom analytics
- Track: form submissions, button clicks, scroll depth, etc.

---

## 🔒 Security

### **Headers Configuration**

**Content Security Policy (CSP):**
```ts
'Content-Security-Policy': "default-src 'self'; connect-src 'self' https://*.supabase.co; script-src 'self' 'unsafe-inline' 'unsafe-eval'; ..."
```

**Security Headers:**
- `Strict-Transport-Security` (HSTS)
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (disabled camera, microphone, geolocation)

**CORS:**
- API routes restricted to same origin
- Supabase configured with row-level security (RLS)

---

## 🐛 Debugging & Troubleshooting

### **Common Issues**

#### **Build Fails with TypeScript Errors**
- Check `tsconfig.json` paths are correct
- Ensure all imports use proper aliases (`@/`)
- Run `npm run lint` to catch issues early

#### **Env Variables Not Working**
- Ensure `.env.local` exists in root directory
- Restart dev server after adding new variables
- Prefix client-side variables with `NEXT_PUBLIC_`

#### **Supabase Connection Issues**
- Verify URL and ANON_KEY are correct
- Check Supabase project is active (not paused)
- Ensure RLS policies allow anonymous inserts to `contact_submissions` table

#### **Framer Components Not Rendering**
- Check `framer-mock.ts` is properly mapped in `tsconfig.json`
- Ensure patched components are imported dynamically
- Verify all Framer component props are passed correctly

#### **Styles Not Applying**
- Run `npm run dev` to regenerate Tailwind classes
- Check Tailwind config includes all content paths
- Ensure CSS variables are defined in `globals.css`

---

## 📚 Additional Resources

### **Documentation**
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Supabase Docs](https://supabase.com/docs)
- [Resend API](https://resend.com/docs)

### **Tools**
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [WebPageTest](https://www.webpagetest.org/)
- [Can I Use](https://caniuse.com/) (Browser compatibility)

---

## 📝 Changelog

### **v2.6 (Current)**
- ✅ Fixed hero typewriter animation (complete words)
- ✅ Updated FAQ with 6 relevant questions
- ✅ Improved form placeholders for better UX
- ✅ Added accessibility improvements to buttons
- ✅ Fixed footer home link navigation
- ✅ Ensured "WEB DEVELOPER IN AMMAN" stays on one line

### **v2.5**
- Added contract template page
- Improved Arabic translations
- Added website cost calculator tool

### **v2.4**
- Migrated to Tailwind CSS v4
- Enhanced SEO with JSON-LD schema
- Added PWA manifest

### **v2.3**
- Implemented Supabase contact form
- Added Resend email notifications
- Removed dependency on third-party form services

### **v2.2**
- Added bilingual support (English/Arabic)
- Implemented RTL layout support
- Created LanguageContext

### **v2.1**
- Initial production release
- Core homepage sections complete
- Project case studies added

---

## 👨‍💻 Credits

**Developer:** Omar Mubaidin (عمر مبيضين)  
**Website:** [mubx.dev](https://mubx.dev)  
**GitHub:** [github.com/Omarmubx7](https://github.com/Omarmubx7)  
**LinkedIn:** [linkedin.com/in/omarmubaidin](https://www.linkedin.com/in/omarmubaidin)

**Built with:**
- Next.js 16, React 19, TypeScript 5
- Tailwind CSS v4, Framer Motion
- Supabase, Resend
- Deployed on Vercel

---

## 📄 License

© 2026 Omar Mubaidin (MUBX). All rights reserved.

This codebase is proprietary and confidential. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited without explicit written permission.

---

**End of Documentation**

For questions or support, contact: mubxdev@proton.me
