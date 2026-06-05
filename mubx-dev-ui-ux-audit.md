# mubx.dev — UI/UX & Technical Audit

## Overview

This is a comprehensive audit of [mubx.dev](https://mubx.dev/) covering UI/UX, content strategy, accessibility, performance signals, and technical issues. Issues are categorized by severity and type to enable prioritized remediation.

---

## 🔴 Critical Issues

### Broken Animated Text in the Hero

The hero headline reads "Scale your startup with SCALABLE SY... technical solutions." This is a truncated/broken text animation. The word cycle appears to be cutting off mid-word ("SCALABLE SYSTEMS" is being clipped), which is the very first thing a visitor sees and immediately signals a broken site.

### Missing Section 05

The site jumps from section 04 (Journey) directly to section 06 (Contact), skipping 05 entirely. This creates confusion and breaks the visual numbering system the site relies on for its editorial identity.

### Light Mode Toggle is Broken

The nav shows a static text label "LIGHT MODE" rather than a functioning icon toggle. This suggests the dark/light mode switch was not properly implemented as an interactive element — possibly just a placeholder text.

---

## 🟠 Layout & Composition Problems

### Hero is Doing Too Much

The hero contains: a status badge, two taglines, a name/title, two CTA buttons, a portrait image, a scroll prompt, AND a marquee of client logos — all before the fold. This violates the "one primary action per view" principle. The visitor's eye has nowhere to land.

### Duplicate Hero Copy

The subtitle "Most web developers build slow websites that look like templates..." appears twice on the page: once in the nav/header area and again in the hero body text. This is a content duplication bug that makes the page feel unpolished.

### Section 02 (About) Layout Fragmentation

The "Why Entrepreneurs Choose Me" section uses a 4-block grid of bold labels (REVENUE-DRIVEN DESIGN, LOCAL PAYMENT EXPERTISE, etc.) but the descriptions are extremely thin — they feel like placeholders, not real value propositions.

### Stats Ticker Lacks Context

The stats ticker (DEV / 100% / JO / UI/UX) lacks context — these floating labels (e.g., "100% LIGHTHOUSE SCORE") are presented as ambient text without any visual framing, making them easy to miss and hard to understand.

---

## 🟡 UX & Information Architecture Issues

### Overcrowded Navigation

The navigation has 6 items + 3 utility items crammed together — WELCOME, PROJECTS, ABOUT, TECH STACK, JOURNEY, CONTACT + RESUME + LIGHT MODE + GitHub + LinkedIn — which is cognitively overwhelming for a single nav bar. The utility links (GitHub, LinkedIn) should be separated or moved to the footer.

### "WELCOME" is a Meaningless Nav Label

Linking the first nav item to `#hero` and calling it "WELCOME" is a lost opportunity. A more purposeful label like "HOME" or "INTRO" would be clearer, but ideally the hero section link should simply be the logo.

### Contact Form Has Confusing Multi-Step Structure

The form shows tabs for "Details / DETAILS", "Scope / SCOPE", and "Brief / BRIEF" but the labels are duplicated (both the regular and uppercase version appear side by side), suggesting a rendering bug in the tab labels.

### Projects Section Lacks Filtering or Hierarchy

Eight projects are listed sequentially with no way to filter by type (Academic, E-commerce, AI, etc.). As the portfolio grows, this will become unmanageable.

### No Active State on Nav Links

When scrolling through sections, there is no indication of which section the user is currently in. Scroll-spy highlighting is expected behavior for single-page portfolios.

---

## 🔵 Visual Design & Typography Issues

### ALL CAPS Overuse

Almost every heading, label, nav item, tag, and section title is in all-caps. While this is a stylistic choice, the excessive use flattens the typographic hierarchy and makes it harder to scan. All-caps should be reserved for labels and tags only.

### Icon Labels are Rendered Twice

In the Tech Stack section, every tech icon has both the icon AND its name displayed twice: "Next.jsNext.js", "ReactReact", "TypeScriptTypeScript". This is clearly a rendering bug where the alt text or a label is being doubled.

### Hero Overlay Text Reads as Placeholder

"PORTRAIT // AMMAN, JORDAN / SCROLL TO EXPLORE // TRUSTED BY" — these floating overlay texts on the hero image read as raw template placeholder strings, not designed UI elements. They clutter the portrait area instead of adding context.

### Section Numbering Skips 05

Beyond being a content gap, the numbering itself signals carelessness to clients who are evaluating the developer as an attention-to-detail professional.

---

## ♿ Accessibility Gaps

### Form Inputs Use aria-label Instead of Visible Labels

The "Business Details" form inputs use `aria-label` for placeholder text (e.g., `aria-label="Full Name"`) rather than having proper visible `<label>` elements. `aria-label` should not substitute for a real `<label>` tag.

### Non-Descriptive "VISIT HERE" Link Text

All 8 project cards use the same CTA text "VISIT HERE". Screen readers will read a list of 8 identical "VISIT HERE" links with no context. Each should be descriptive: "Visit MUBXAI", "Visit MUBXBot", etc.

### Theme Toggle Has No Accessible Label

The "LIGHT MODE" text toggle likely has no `aria-label` describing its function (switch to dark/light mode), and no state indication (`aria-pressed`).

---

## ⚡ Content & Credibility Issues

### Stale Availability Notice

"Accepting 2 New Projects (Q3 2026)" is great specificity, but if this isn't updated regularly it becomes stale and misleading. A dynamic or at least easily-editable mechanism should be considered.

### No Pricing or Process Overview

A consultant's site benefits from at least a vague sense of how engagements work. Visitors currently have no idea whether they should be expecting a $100 or a $10,000 quote.

### No Testimonials Section

The site mentions "client results" (there's a CTA "See client results") but there is no dedicated testimonials section with actual quotes. The marquee of logos alone is insufficient social proof for a B2B consultant.

### "See Client Results" CTA Leads Nowhere

This button appears next to "Book a 15-min call" but there is no corresponding case studies page or results section on the current page that it visibly links to.

