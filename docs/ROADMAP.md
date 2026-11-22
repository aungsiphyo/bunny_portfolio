# Bunny Portfolio — Roadmap

## Phase 1 — Foundation

- Preserve version-specific Next.js guidance and add repository conventions
- Document the product brief, design system, and delivery roadmap
- Establish semantic color and fluid typography tokens
- Establish typed site data and project-summary contracts
- Create a minimal, accessible Server Component shell
- Validate lint, TypeScript, and the production build

Phase 1 deliberately excludes full page sections, case-study implementation, GSAP, a CMS, and final imagery.

## Phase 2 — Content and core layout

- Collect and verify About, Experience, Skills, and project copy
- Receive the profile photo and original project screenshots
- Build the responsive site header and all six homepage sections
- Build reusable detailed and compact project-card patterns
- Add real image dimensions, responsive image behavior, and alt text
- Review heading order, keyboard flow, contrast, and content at mobile through desktop widths

Exit criteria: the full static portfolio is complete, accurate, responsive, and usable without animation.

### Deferred Phase 2 visual and motion QA

- [x] Improve pink primary CTA text/icon contrast using Deep Olive.
- [x] Review mobile eyebrow and navigation readability.
- [x] Perform GSAP motion and reduced-motion QA.
- [x] Recheck keyboard accessibility.

Resolved during the Phase 5 visual-polish pass. The primary CTA now uses the
semantic Deep Olive foreground, small mobile labels have stronger contrast, the
mobile menu exposes explicit expanded state, and motion keeps a fully visible
reduced-motion state.

## Phase 3 — Case studies

- Build `/projects/uni-yatwon` and `/projects/prime-city`
- Define case-study content modules after the narrative is approved
- Preserve Uni Yatwon and Prime City project identities within the broader system
- Add project navigation and descriptive metadata
- Test direct entry, back navigation, and no-JavaScript rendering

Exit criteria: both case studies communicate verified context, process, responsibilities, and outcomes without duplicated content.

## Phase 4 — Motion and refinement

- Approve a motion concept for hero typography
- Add GSAP only to the smallest necessary Client Component boundary
- Provide reduced-motion equivalents and interruption-safe behavior
- Refine hover, focus, and route-transition feedback
- Measure bundle impact and runtime performance

Exit criteria: motion improves hierarchy without delaying access to content or weakening accessibility.

## Phase 5 — Quality and launch readiness

- [x] Final content and link review
- [x] Responsive QA at 375px, 395px, 768px, 1024px, and 1440px
- [x] Accessibility review with keyboard spot checks and reduced-motion implementation review
- [x] Refine temporary Uni Yatwon and Prime City cover artwork
- [ ] Cross-browser QA outside the in-app Chromium browser
- [ ] OS-level reduced-motion emulation outside the in-app browser
- Performance, metadata, social image, sitemap, and robots review
- Production build verification

Deployment, domain configuration, analytics, and pushing changes require separate approval.

## Content still required

- Original screenshots for each featured project
- Any additional approved case-study narrative
- Any approved demo URLs or additional project links
- Final approval of the draft About copy
