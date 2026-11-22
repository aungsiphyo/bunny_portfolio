# Bunny Portfolio — Project Brief

## Purpose

Bunny Portfolio is the professional portfolio of Bunny (Ko Si), positioned as a **Software Engineer | Cloud & DevOps Enthusiast**. The experience should feel editorial, experimental, and premium without sacrificing clarity, performance, or accessibility.

The site should help a visitor quickly understand Bunny's focus, review selected work in appropriate depth, learn about experience and skills, and make contact.

## Audience

- Hiring managers and recruiters evaluating engineering fit
- Engineers and technical collaborators reviewing project decisions
- Potential clients or partners looking for a direct way to connect

## Information architecture

The home page will be organized in this order:

1. Hero
2. Selected Work
3. About
4. Experience
5. Skills
6. Contact

Selected projects use two levels of presentation:

- Detailed case studies: Uni Yatwon and Prime City
- Compact project cards: Hcitepyoe Matesway (ASEAN Geo AI Fusion 2026) and Lanpya (Let's Tech Hackathon)

Case studies should eventually have dedicated routes under `/projects/[slug]`. The homepage should summarize and link to them rather than duplicate full case-study content.

## Confirmed contact details

- Email: `aungsiphyoit@gmail.com`
- GitHub: `https://github.com/aungsiphyo`
- LinkedIn: `https://www.linkedin.com/in/aung-si-phyo-958658219`

These values live in `src/data/site.ts` so presentation components do not duplicate them.

## Content integrity

Only confirmed content belongs in the repository. Do not infer or invent:

- achievement statements or project outcomes
- usage, performance, revenue, or growth metrics
- employment dates, role descriptions, or technology lists
- demo, repository, or production URLs
- screenshot paths or image captions

The project summaries in `src/content/projects/index.ts` intentionally contain only the information supplied so far. Missing fields should remain absent until verified.

## Technical approach

- Next.js App Router, TypeScript, and Tailwind CSS
- Server Components by default; small Client Component islands only for real interactivity or animation
- Static, typed modules for site and project content
- `next/font` for the current self-hosted font foundation
- Semantic HTML, mobile-first layout, keyboard access, and reduced-motion support from the start
- GSAP and Lucide React deferred until a concrete later-phase use case requires them

No database, CMS, authentication, or server API is needed for the current scope.

## Proposed source structure

```text
src/
├── app/                       # Routes, layouts, metadata, and global styles
│   └── projects/[slug]/       # Detailed case-study routes (future)
├── components/
│   ├── layout/                # Site shell, navigation, footer, skip link
│   ├── sections/              # Home-page sections (future)
│   ├── project/               # Project cards and case-study UI (future)
│   └── ui/                    # Small reusable presentation primitives
├── content/projects/          # Typed project summaries and narratives
├── data/                      # Site identity, navigation, and external links
└── types/                     # Shared content contracts
```

## Phase 1 boundary

This phase establishes documentation, tokens, typography, typed data, and a small static shell to prove the foundation. It does not include the full portfolio, case-study routes, supplied photography, project screenshots, or GSAP animation.
