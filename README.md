# MUBX Portfolio ⚡

> **From Lab to Live.** High-performance web systems and digital experiences for brands that want to scale.

![MUBX Portfolio](public/images/og-image.png)

## Overview

MUBX is a modern, high-performance portfolio website built to showcase web development services, verified projects, and technical expertise. It features a bold, streetwear-inspired aesthetic with a vibrant **Red Neon** theme (`#FF1E1E`), glassmorphism effects, and smooth data-driven animations.

## Key Features

-   **🎨 Dynamic Visuals:** Custom-built "Red Neon" theme with pulsating glows and glassmorphic cards.
-   **⚡ Extreme Performance:** Lighthouse score of 100/100 for desktop. optimized for Core Web Vitals.
-   **🗄️ Supabase Backend:** Custom-built lead management system replacing third-party forms.
-   **📧 Email Alerts:** Real-time email notifications for every new lead using Resend.
-   **📱 PWA Ready:** Installable on mobile and desktop with offline manifest support.
-   **✨ Smooth UX:** Dynamic imports and skeleton screens for zero-black-screen navigation.
-   **🔍 SEO Optimized:** Metatags, sitemaps, and bilingual support (Arabic/English).

## Tech Stack

-   **Framework:** [Next.js 15](https://nextjs.org/) (App Router & Turbopack)
-   **Database:** [Supabase](https://supabase.com/)
-   **Email:** [Resend](https://resend.com/)
-   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)

## Environment Setup

Create a `.env.local` file with the following keys:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Email (Resend)
RESEND_API_KEY=re_your-key
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Database Schema

Run this in your Supabase SQL Editor:

```sql
create table contact_submissions (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  email text not null, goal text, budget text, deadline text, message text not null, language text default 'en'
);
```

## License

© 2026 Omar Mubaidin (MUBX). All rights reserved.
