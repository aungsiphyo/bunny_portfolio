<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Ko Si Portfolio engineering conventions

- Treat `src/app` as the routing layer. Keep reusable UI in `src/components`.
- Favor Server Components. Add `"use client"` only for browser APIs, stateful interaction, or animation, and keep that boundary as small as possible.
- Store site-wide facts in `src/data`, project narratives in `src/content/projects`, and shared content contracts in `src/types`. Do not duplicate content inside components.
- Do not infer or invent achievements, metrics, dates, URLs, screenshots, or technical claims. Leave unknown fields absent until Ko Si verifies them.
- Consume semantic design tokens rather than raw palette values. Project identity colors may be scoped to that project, and real screenshots must never be recolored.
- Build mobile-first with semantic landmarks, logical heading order, visible keyboard focus, descriptive accessible names, and comfortable touch targets.
- Every motion feature must have a meaningful static state and respect `prefers-reduced-motion`. Keep future GSAP code isolated in small Client Components.
- Optimize supplied images with `next/image`, preserve their natural aspect ratios, and provide accurate alt text (or empty alt text for purely decorative imagery).
- Before changing Next.js APIs or conventions, read the relevant guide in the installed `node_modules/next/dist/docs/` directory. Before handoff, run `npm run lint`, `npm run typecheck`, and `npm run build`.
