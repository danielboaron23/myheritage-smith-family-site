# MyHeritage — Smith Family Site

A pixel-faithful, responsive implementation of the MyHeritage home page from
[Figma](https://www.figma.com/design/GCghbA9rvcKP61vgfrcsBl/MyHeritage?node-id=1-14372),
built on the **MH design** system documented in `reference/design.md`.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — all design tokens wired as CSS variables in `app/globals.css`
- **Inter** (Google Fonts) as the documented substitute for Helvetica Neue

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (type-checked, static)
```

## Pages / routes

- **`/`** — Home (Smith Family Site) — Figma node `1-14372`
- **`/profile`** — Christopher Smith profile page — Figma node `1-17801`.
  All five tabs are interactive: **Details** (Figma), plus **Matches**,
  **Biography**, **Photos** and **Sources** designed on the same system with
  realistic, record-consistent content.
- **`/enhance`** — "Bring your photos to life → Enhance" flow: upload (drag/drop,
  browse, or a sample) → simulated enhancement → an interactive before/after
  comparison slider, with download (canvas-filtered) and "enhance another".
  Reached from the **Enhance** card on the home page, whose preview is a live
  before/after slider (`components/ui/image-comparison-slider.tsx`).

Navigation: clicking the creator (Christopher Smith) in the home sidebar opens
`/profile`. The MyHeritage logo, the nav **Home** tab, and the profile
breadcrumb ("Family tree") all link back to `/`.

## Structure

```
app/
  globals.css            design.md tokens -> Tailwind v4 @theme (colors, spacing
                         S0-S16, radius, elevation, typography scale)
  layout.tsx  page.tsx           (home)
  profile/page.tsx               (profile)
components/
  ui/        Button  Card  TextField  Avatar  Badge  IconButton  TextLink
  layout/    Header (UtilityBar + MainNav, active-tab aware)  Footer
  sections/            Hero  Sidebar  CtaRow(s)  MatchesToCloseRelatives
                       PhotosToLife  RecentActivity  MainContent
  sections/profile/    ProfileHeader  ProfileBody (client, tab switching)
                       ProfileTabs  Facts  ConsistencyIssue  TrailMap
                       SavedRecords  ImmediateFamily
  sections/profile/tabs/   DetailsTab  MatchesTab  BiographyTab  PhotosTab
                           SourcesTab
  icons.tsx  inline SVG chrome icons
lib/cn.ts
public/assets/  logos  icons  images (real assets extracted from Figma)
reference/      design.md + original Figma screenshot
scripts/        Playwright screenshot helpers (visual verification)
```

## Fidelity notes / decisions

- **Tokens:** colors, spacing, radius, elevation, and the full type ramp come
  straight from `reference/design.md`, exposed as Tailwind utilities
  (`bg-primary`, `text-t6`, `p-s5`, `rounded-r4`, `shadow-card`, ...).
- **Primary color:** the system primary is `#F56932` (design.md Amber100). The
  Figma file renders some buttons/links with a legacy `#d14900`; per the
  instruction to follow the style guide, the documented `#F56932` is used. The
  active nav tab keeps the Figma's exact `#F2994A`. To match the legacy orange
  instead, change `--color-primary` in `app/globals.css`.
- **Real assets:** logos, avatars, the DNA-kit / photo-discovery art, the
  "Bring your photos to life" effect cards, and the activity-timeline photos
  are the actual images exported from Figma. The composite illustrations and
  diagonal before/after photo cards are captured as flat images for exact
  fidelity; everything else is real markup + tokens.
- **Icons:** the dark utility-bar glyphs ship as CSS sprites in Figma, so they
  are reproduced as crisp inline SVGs (`components/icons.tsx`).
- **Responsive:** desktop matches the 1680px frame; below `lg` the layout
  stacks (sidebar on top, nav collapses to a menu button, card rows scroll).
  The Figma only defines desktop, so smaller breakpoints are inferred.
- **Static replica:** hover/focus states work; forms, search, and nav are
  non-functional by design.
