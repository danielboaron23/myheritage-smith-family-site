# MyHeritage — Smith Family Site · Project Summary

A high-fidelity, responsive front-end built from the MyHeritage Figma design and
the **MH design system** (`reference/design.md`), created step-by-step from a
series of prompts.

- **Live preview:** https://danielboaron23.github.io/myheritage-smith-family-site/
- **Repository:** https://github.com/danielboaron23/myheritage-smith-family-site
- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4
- **Figma source:** `GCghbA9rvcKP61vgfrcsBl` (home `1-14372`, profile `1-17801`)
- **Status:** Work in progress

---

## What was requested, and what was delivered

Organized by each prompt / request.

### 1. "Implement this MyHeritage design one by one, like the Figma — all icons, images, spacing — and use the design.md style guide. Ask questions first."
- Reviewed the Figma home page (`1-14372`) and `design.md`, then asked 4 questions.
  Chosen: **Next.js + Tailwind v4**, **fully responsive**, **real Figma assets**,
  **static visual replica**.
- Wired the full `design.md` token system into Tailwind v4 (`app/globals.css`):
  colors, spacing `S0–S16`, radius, elevation, the complete type ramp; Inter as
  the Helvetica Neue substitute.
- Built reusable UI: `Button`, `Card`, `TextField`, `Avatar`, `Badge`,
  `IconButton`, `TextLink`, plus an inline icon set.
- Built the **home page**: dark utility bar + white nav, peach hero, sidebar
  (creator/stats/upgrade/search), the 4 onboarding CTA rows, "Matches to close
  relatives", "Bring your photos to life", "Recent activity", and the footer —
  with real assets extracted from Figma.

### 2. "Write me back the prompt I sent you, as an MD file."
- Saved the original prompt verbatim to **`original-prompt.md`**.

### 3. "Build the profile page exactly like the Figma; clicking Christopher Smith opens it, with a way back home."
- Created the **`/profile`** route (Figma `1-17801`): peach gradient header
  (avatar + ribbon, name, religious/former name, born/died with icons), action
  buttons, breadcrumb, the tab bar, the Facts timeline, the consistency-issue
  card, the "Johannes's trail" map, "10 saved records" and "Immediate family".
- Wired navigation: home sidebar creator → `/profile`; logo, Home tab and the
  breadcrumb → `/` (nav highlights "Family tree" on the profile).

### 4. "Save this to a GitHub repo."
- Created the repository **`myheritage-smith-family-site`** and pushed the code.
  (Private at first per your choice; later made public for Pages.)

### 5. "Fill in all the other profile tabs with real info and great UI — on the design system."
- Made the tab bar interactive and built four new tabs with realistic,
  record-consistent content:
  - **Matches (26):** Smart + Record matches, filter chips, confidence pills,
    "new info" chips, confirm/reject actions.
  - **Biography:** editorial article + an "At a glance" aside.
  - **Photos (13):** responsive gallery with hover captions.
  - **Sources (3):** citation cards with extracted fields and quality tags.

### 6. "Add an Enhance feature: clicking the Enhance card opens an upload-and-enhance flow; integrate the before/after `ImageComparison` slider — in the card and in the flow."
- Added a typed **`ImageComparison`** slider to `components/ui/` (drag behavior
  intact; extended with filters + compact/preview modes).
- Built the **`/enhance`** flow: upload (drag-drop / browse / sample) → simulated
  enhancement → a full before/after comparison with canvas-filtered download.
  (Enhancement is a front-end simulation — no backend, as agreed.)

### 7. "Don't change the whole strip — bring back the original cards; only change the Enhance card."
- Restored the original Figma artwork for Animate / Colorize / Restore colors /
  Repair (sliced from the exported strip); only **Enhance** is the interactive
  slider card linking to `/enhance`.

### 8. "Make the Enhance card match the design of the other cards."
- Removed the accent ring and extra link line so the Enhance card is visually
  identical to its neighbors, keeping only the draggable slider as its image.

### 9. "Fix the broken male avatar — use this SVG."
- `avatar-male` was SVG content with a `.png` extension (which Next's image
  optimizer can't render). Replaced it with the provided **`avatar-male.svg`**
  and repointed the Immediate Family card.

### 10. "Create a client link via GitHub Pages, write me a client message, keep the repo in sync — I'm still working on this."
- Configured static export with base-path-aware assets (`lib/asset.ts`,
  `components/ui/AppImage.tsx`) so everything works under the Pages sub-path.
- Made the repo public and published the build to the **`gh-pages`** branch;
  GitHub Pages serves it live. Added **`npm run deploy`** for future updates.
- Provided a ready-to-send, work-in-progress client message with the live link.

---

## Run & deploy

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> out/
npm run deploy   # build + publish to the gh-pages branch (live in ~30–60s)
```

## Project map

```
app/                     home (/), profile (/profile), enhance (/enhance)
components/ui/           Button, Card, TextField, Avatar, Badge, IconButton,
                         TextLink, AppImage, image-comparison-slider
components/layout/       Header (UtilityBar + MainNav), Footer
components/sections/     home sections (Hero, Sidebar, CtaRows, Matches,
                         PhotosToLife, RecentActivity)
components/sections/profile/        ProfileHeader, ProfileBody, tabs/*
components/sections/enhance/        EnhanceFlow
lib/                     cn, asset (base-path helper)
public/assets/           logos, icons, images (real Figma assets)
reference/               design.md + original Figma screenshot
```
