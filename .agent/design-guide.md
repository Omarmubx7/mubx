# Design Guide: MUBX Portfolio

## Design Philosophy

Typography & style for this site follows a **dark, high-contrast developer portfolio style** similar to `redoyanulhaque.me`.

## Color Palette

- **Background**: Near-black (`#050505`)
- **Text**: White/Light grey (`#F9FAFB` / `#9CA3AF`)
- **Accent**: Bright neon red (`#FF1E1E`) for links, buttons, and key highlights

## Typography System

### Hero & Main Headings
- **Font**: Monospaced-style (Space Grotesk / JetBrains Mono)
- **Style**: Uppercase, bold
- **Size**: Large (48px - 72px)
- **Line Height**: Tight (1.1 - 1.2)
- **Letter Spacing**: Slightly increased (-0.02em)

### Section Titles
Examples: `01 EXPERIENCE`, `02 PROJECTS`
- **Size**: 18–28px
- **Style**: Uppercase, bold
- **Spacing**: Generous vertical separation between sections

### Body Text
- **Font**: Clean sans-serif (Inter / Helvetica)
- **Size**: 14–16px
- **Line Height**: 1.5 for readability
- **Color**: Light grey for secondary content

## Layout Structure

### Minimal & Clean
- Strong hero block at the top
- Clearly separated sections:
  - About
  - Services
  - Projects
  - Tech Stack
  - Contact
- Consistent vertical rhythm
- Simple visual dividers (subtle borders/spacing)

## Implementation Notes

Current implementation uses:
- **Headings**: `Space Grotesk` (via `--font-display`)
- **Code/Tech**: `JetBrains Mono` (via `--font-mono`)
- **Body**: `Inter` (via `--font-sans`)
- **Accent**: `#FF1E1E` (via `--neon` CSS variable)
- **Background**: `#050505` in dark mode
