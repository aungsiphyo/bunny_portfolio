# Ko Si Portfolio — Design System

## Design principles

- **Editorial hierarchy:** use scale, rhythm, and whitespace before decoration.
- **Experimental with restraint:** asymmetry and expressive typography should support the story, not obscure navigation or content.
- **Project-aware:** portfolio chrome uses Ko Si's core palette; individual projects retain their own visual identities.
- **Accessible by construction:** color contrast, visible focus, semantic structure, and motion preferences are foundation requirements.

## Color palette

| Token | Value | Intended use |
| --- | --- | --- |
| Deep Olive | `#2A3922` | Primary text, strong graphic fields |
| Moss | `#464313` | Secondary text and supporting details |
| Soft Olive | `#B8B367` | Highlight surfaces and decorative accents |
| Blush Pink | `#FBC0C1` | Soft surfaces and editorial blocks |
| Dusty Rose | `#B9535C` | Decorative accent; large text only on cream |
| Burgundy | `#4C041A` | Primary actions and focus treatment |
| Warm Cream | `#EDE8E4` | Default page background and light text on dark fields |

Semantic CSS variables in `src/app/globals.css` map the palette to roles such as `background`, `foreground`, `surface`, `primary`, `border`, and `focus-ring`. Components should consume those roles instead of raw hex values.

Key contrast pairings:

- Deep Olive on Warm Cream: `10.11:1`
- Moss on Warm Cream: `8.33:1`
- Warm Cream on Burgundy: `12.89:1`
- Deep Olive on Blush Pink: `7.86:1`
- Deep Olive on Soft Olive: `5.67:1`

Dusty Rose on Warm Cream is `3.88:1`, so it must not be used for normal-size body copy. Soft Olive and Blush Pink are also surface colors, not text colors on Warm Cream.

### Project color rules

- Uni Yatwon retains its yellow identity.
- Prime City retains its black-and-yellow identity.
- Project identity colors must be scoped to their case study or card rather than added as global portfolio semantics.
- Real screenshots are presented faithfully. Never tint, blend, recolor, or place a color filter over them.

## Typography

The Phase 1 foundation uses the variable Geist Sans and Geist Mono fonts already configured through `next/font`. A Myanmar-capable system fallback is included for Burmese project names. A future editorial display face can be evaluated after real content and imagery are available.

Typography roles:

- **Display:** hero statement and major editorial moments; fluid scale with tight leading
- **Heading:** section and case-study headings; fluid but more compact than display
- **Body:** default reading size with comfortable line height
- **Body large:** introductory copy and project summaries
- **Label:** navigation, eyebrows, metadata, and technical annotations; may use mono

Use sentence case for headings. Keep long-form copy near `65ch`; display text may use balanced wrapping where supported. Avoid using font weight alone to communicate hierarchy.

## Layout and spacing

- Start with a single-column mobile layout and add complexity only at wider breakpoints.
- Use the shared `Container` primitive for consistent page gutters and a maximum content width.
- Prefer fluid spacing with `clamp()` for large section gaps.
- Preserve generous negative space around major headings and images.
- Keep touch targets at least `44px` in either dimension when they represent controls or primary links.

## Motion and interaction

- Start with readable, complete static content; animation is progressive enhancement.
- Respect `prefers-reduced-motion` in CSS and future JavaScript timelines.
- Keep keyboard focus visible and ensure animated transforms never hide the focus target.
- Do not make hover the only way to discover information.

## Imagery

- Use original project screenshots without recoloring or filters.
- Use `next/image` with accurate dimensions and responsive `sizes` once assets arrive.
- Preserve each image's natural aspect ratio unless an explicitly art-directed crop is approved.
- Provide concise, contextual alt text. Use `alt=""` only when an image is genuinely decorative and adjacent text conveys all of its meaning.
- The homepage portrait cutout lives at `public/images/aung-si-phyo-portrait.png` and is referenced from `src/content/profile.ts`. Its current source dimensions are `1254 × 1254`; future replacements should be transparent PNG or WebP assets at approximately `1600 × 2000` or larger, with the full upper body retained and comfortable space around the hair and shoulders.
