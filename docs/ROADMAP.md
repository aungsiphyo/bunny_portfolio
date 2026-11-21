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

- Improve pink primary CTA text/icon contrast using Deep Olive.
- Review mobile eyebrow and navigation readability.
- Perform GSAP motion and reduced-motion QA.
- Recheck keyboard accessibility.

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

- Final content and link review
- Cross-browser and responsive QA
- Accessibility review with keyboard and screen-reader spot checks
- Performance, metadata, social image, sitemap, and robots review
- Production build verification

Deployment, domain configuration, analytics, and pushing changes require separate approval.

## Content still required

- Profile photo
- Original screenshots for each featured project
- Any additional approved case-study narrative
- Work experience entries and dates
- Skills grouping and preferred ordering
- Any approved demo URLs or additional project links
- Final About and Contact copy
