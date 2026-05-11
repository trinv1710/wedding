# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A static Vietnamese wedding invitation website for Văn Trí & Mỹ Lê (ceremony June 13, 2026; reception June 7, 2026).

## Development

No build system. Open files directly in a browser:

```bash
open index.html
open dynamic-calendar.html
```

Or serve locally to avoid font/asset loading issues:

```bash
python3 -m http.server 8080
```

## Architecture

- **`index.html`** — the main invitation page. All content is hardcoded (names, dates, venue).
- **`dynamic-calendar.html`** — a standalone interactive calendar prototyping tool used to design/test the calendar widget before embedding it in `index.html`. Changes to the calendar UI should be reflected in both files.
- **`css/style.css`** — all styles for `index.html`, including custom `@font-face` declarations and splash screen.
- **`css/dynamic-calendar.css`** — styles for the `.calendar` component embedded in `index.html` (shared with `dynamic-calendar.html`).
- **`js/script.js`** — countdown timer targeting `2026-06-13T00:00:00`, updating `.vs-time-days/hours/minutes/seconds` every second.
- **`resources/`** — self-hosted fonts, images, and audio (`marry-you.mp3`).

## Key conventions

- **No framework or bundler.** TailwindCSS v4 is loaded via CDN (`@tailwindcss/browser@4`); jQuery via CDN.
- **CSS class naming:** Layout sections in `index.html` use sequential identifiers (`tri1`–`tri37`). New semantic sections should follow this pattern or use descriptive Tailwind utility classes inline.
- **Primary color:** `#631717` / `var(--color-primary)` (dark maroon).
- **Container:** Max-width 500px centered, designed for mobile portrait.
- **Fonts:** All fonts are self-hosted in `resources/fonts/`. `Great Vibes` and `Dancing Script` have multiple `@font-face` blocks for unicode subsets (Vietnamese, Latin, etc.) — keep all subset declarations when modifying.
