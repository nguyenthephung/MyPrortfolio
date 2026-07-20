# Nguyen The Phung — Portfolio

Personal portfolio site built with **Next.js 15** (App Router), **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Geist** font.

## Stack

- **Framework**: Next.js 15 (App Router) + Turbopack
- **UI**: Tailwind CSS v4 + custom design tokens (light/dark)
- **Theme**: `next-themes` with system default, dark preferred
- **Icons**: `lucide-react` (monochrome only, no gradient boxes)
- **Fonts**: Geist Sans + Geist Mono
- **Language**: TypeScript strict mode

## Structure

```
src/
├── app/
│   ├── layout.tsx           # Metadata, theme provider, fonts
│   ├── page.tsx             # Composes all sections
│   └── globals.css          # Design tokens + typography
├── components/
│   ├── nav.tsx              # Sticky top nav
│   ├── mobile-menu.tsx      # Mobile drawer
│   ├── theme-toggle.tsx     # Dark / light switch
│   ├── theme-provider.tsx   # next-themes wrapper
│   ├── sections/
│   │   ├── hero.tsx         # Landing headline + bio + short/long-term
│   │   ├── experience.tsx   # Nested company / position timeline
│   │   ├── projects.tsx     # Featured + earlier projects grid
│   │   ├── skills.tsx       # Skill groups (backend-first)
│   │   ├── contact.tsx      # Social + contact rows
│   │   └── footer.tsx       # Small footer
│   └── ui/                  # Primitives: Button, Card, Badge, Section
└── lib/
    ├── data/                # Single source of truth for content
    │   ├── site.ts          # Bio + goals + socials
    │   ├── experiences.ts   # Companies + positions + bullets + tech
    │   ├── projects.ts      # Projects (featured + earlier)
    │   └── skills.ts        # Skill groups
    ├── types.ts             # Shared types
    └── utils.ts             # cn() helper
```

All content lives in `src/lib/data/*` — update those files to change bio, roles, projects, or skills without touching component code.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Scripts

- `npm run dev` — start dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — run ESLint

## Design notes

- **One accent color** (`hsl(217 91% 60%)` — Tailwind `blue-500`), no gradient chains.
- **Border-based cards** (not gradient backgrounds) — hover reveals accent border.
- **Fade-in animations only** — no scroll-triggered scale/rotate, no typing effect.
- **Icons are monochrome** — never wrapped in colored gradient boxes.
- **Font hierarchy**: Geist Sans for body, Geist Mono for periods, tech badges, and eyebrow labels.
