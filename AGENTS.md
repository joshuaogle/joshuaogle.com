# joshuaogle.com

Personal portfolio site. Next.js App Router, fully static, deployed on
Netlify (with `@netlify/plugin-nextjs`) behind Cloudflare. Production is
`main`; the 2027 redesign happens on the `2027` branch.

## Commands

- `npm run dev`: local dev server
- `npm run check`: lint + typecheck + tests (CI also runs `npm run build`)
- `npm test`: Vitest unit tests (`*.test.ts` next to the code they cover)
- `npm run build`: production build; every route is prerendered

Node 22 (`.nvmrc`). Builds use webpack (`--webpack`) because SVGs are
imported as React components through SVGR, configured in `next.config.js`.

## Layout

- `app/`: routes. `layout.tsx` holds site metadata, the theme script, fonts,
  header/footer. There's no analytics script; traffic comes from Cloudflare.
  `sitemap.ts` and `robots.ts` are generated.
- `app/work/<slug>/page.tsx`: one page per case study, with the copy inline in JSX.
- `lib/case-studies.ts`: case study data (title, meta, theme colors, preview
  image) and metadata. The home page carousel reads it in order.
- `_articles/*.md`: articles; frontmatter typed by `interfaces/article.ts`,
  loaded by `lib/api.ts`, rendered with remark.
- `components/`: server components by default; files starting with
  `'use client'` are the interactive pieces.
- `styles/`: global CSS plus CSS modules in `styles/components/`.
- `lib/pencil/`: the pencil drawing library. `geometry.ts` is pure, tested math
  (construction lines, tapered strokes, arrows, loops); `draw.ts` animates it into
  SVG. `components/sketch-layer.tsx` wraps a section: give it a `plan(measure)`
  function (defined at module level) that returns guides (graphite construction
  lines with tapered ends), hatches (brand-colored skeletons, drawn as HTML and CSS
  so they stay cheap to animate) and notes, and mark elements with `data-sketch-id`
  (to measure) and `data-sketch-reveal` (to wipe in). The whole sequence, from the
  first guide drawn to the last drawn back out, is 2 seconds; the timings are the
  constants at the top of the file. `components/case-studies-sketch.tsx` is the one
  plan so far. Keep SVG filters and animated masks out of anything that moves:
  Safari repaints them every frame.
- `DESIGN.md`: design reasoning and inspiration for the redesign. Full-size
  captures live in the JoshuaOgle.com Figma file, not in the repo.

## Conventions

- Theme: `lib/color-scheme.ts` is the only place that reads or writes it. An
  inline script sets `data-prefers-color-scheme` on `<html>` before first paint;
  CSS keys off that attribute, so don't drive theme visuals from React state.
- Browser-only values (time, media queries, theme) use `useSyncExternalStore`
  hooks (`lib/use-is-client.ts`, `lib/use-prefers-reduced-motion.ts`) rather
  than `setState` in an effect, which the lint config rejects.
- Images: use `next/image`. Case study `<Example>` images take a filename under
  `public/images/` and read their dimensions at build time (`lib/images.ts`),
  so a missing file fails the build.
- Motion (autoplay video, pencil drawing, hover lifts) is skipped for `prefers-reduced-motion`.
- Case study images and videos go through `<Example>` (`components/example.tsx`), shown
  plainly with a hairline edge. It places a figure by its images' size: big photos run
  edge to edge, big screens and rows of related images break out wider than the text,
  and small or tall captures stay in the column. Company and product logos come from
  `lib/case-studies.ts` and render through `components/logo-stack.tsx`.
- Case study pages share one structure (see `DESIGN.md`): `<Intro>` with `kicker` and
  `dek`, then inside `<div className="article-body centered case-study">` the hero
  `<Example>`, sections with a `.section-title` eyebrow and an `h2`, and the parts built
  as components: `RoleSplit`, `Findings`, `PullQuote`, `Stats`, `Outcomes` and
  `NextCaseStudy`. A case study with several projects (Vault, Boundary) tells one story
  in chapters: the shared context and role once at the top, a `Chapters` contents line
  under the hero, then a `<section id>` per project with a "Project · Year" eyebrow. Their styles are in `styles/_case-study.css` and the components'
  modules; add `className="wide"` to break something out of the text column. A page
  leaves out any part it has no real content for yet (no placeholder sections); Vault's
  bracketed text marks copy still to write. Numbers go in `Stats` as text, not in images.
- Project title colors come from `titleColors()` in `lib/color.ts`, set per theme by
  `components/case-study-theme.tsx` as `--theme-color-title`. Light paper never gets a
  darkened primary: give a brand whose primary fails there a `colorSecondary`, or it
  falls back to ink. A test checks every case study passes AA in both themes.
- Text in a brand color on a project's colors goes through `readableOn()` in
  `lib/color.ts`, which lightens it just enough to pass WCAG contrast.
- Type sizes: text other than headings is sized in rem (or the `--*-font-size`
  tokens, which are rem multiples), so it all keeps the same proportions as the root
  size grows and caps at 18px. Headings are sized in `--heading-unit`, which grows a
  little further on big screens. Don't use `--base-font-size` outside `<html>`.
- Kebab-case file names; component names match the file.

## Dot grid system (planned)

A plan, not yet built: a draft from 2026-10-18, awaiting review. Until it lands, the site
still uses the golden-ratio tokens in `styles/_variables.css`. Since this was written,
body text was capped at 18px (`--base-font-size`), because it grew too large on big
screens; retune the type scale below to that before building it.

### Goal

The page background is a dot grid, like a dot-grid sketchbook. Everything laid on the
page should sit on that grid, at every screen size, so the dots read as the paper the
site was designed on rather than as wallpaper.

What Joshua asked for:

- Content aligns to the background dots at every size.
- Sizes may change as the screen grows, but at any one size everything agrees.
- A screen-based ("techy") unit comes first; type is fitted to it.
- Body text is 17px on phones and grows in an elegant, organic way, with no
  noticeable ceiling.
- Modern CSS is welcome, with a correct fallback where it isn't supported.

Strictness (decided): block edges and column edges land on dots, and body text lines
sit in dot rows. Component internals and individual lines of multi-line headings may
fall between rows.

### Prior art and why it isn't enough on its own

- Utopia: organic fluid ramps, but its values are fractional pixels, so nothing stays on
  a grid.
- 4/8px systems: pixel-exact, but fixed sizes.
- George Francis, "Fluid design with CSS round()": snaps fluid line heights with
  `round()`, but to a fixed 4px grid.
- Bernat and Coudeville: vertical rhythm from `rlh`, including images rounded to whole
  rows. Rhythm only.
- Capsize / `text-box` trim: optical trimming of text to cap height and baseline.

This system combines them: Utopia's eased ramp drives one grid unit, the unit is
snapped to whole pixels with `round()`, and every measure is a multiple of it.

### 1. The unit

One custom property, `--u`, is the dot pitch and the body line height.

```css
--u: round(nearest,
  clamp(1.75rem, min(1.603rem + 0.652vw, 1.875rem + 0.3125vw), 2.25rem),
  2px);
```

- 28px at 360px wide, 34px at 1280px, 36px from 1920px.
- `min()` of two lines gives an ease-out: most growth happens between phone and
  laptop, then it creeps.
- Snapping to 2px keeps the dots crisp and makes `u / 2` a whole pixel.
- Limits are in rem, so a larger browser default text size grows the grid too.

Rules:

- `u` is the only length that alignment depends on.
- Avoid dividing a length by a length: Firefox doesn't support typed arithmetic. The
  system only multiplies and divides lengths by plain numbers, and rounds lengths to
  steps.

### 2. The dot grid

- The dot grid lives on `.app::after` as now. `background-size` is `u u`.
- Horizontally the grid is centered on the page, so a dot column runs down the middle.
- Vertically, dot rows sit at `0, u, 2u…` from the top of `.app`. Dots mark row
  boundaries: block tops land on dots, and lines of text sit in the band between two
  rows of dots, like writing on lined paper.
- This fixes two existing bugs:
  - The pitch is 25.16px, which is fractional.
  - `background-origin: 50% 0` is invalid, so the grid anchors to the left edge while
    the content is centered.
- The body font is the system sans, whose metrics vary by operating system. That's
  why the dots mark rows rather than baselines.

### 3. Type

Sizes follow an eased modular scale. Line heights snap to the grid. Font sizes
themselves don't need to be on the grid.

#### Scale

There are eight steps, −2 to 5. Each step is generated as its own two-segment clamp,
eased like `u` and anchored at 360, 1280 and 1920px. Body (step 0) is 17 → 20.5 →
21.5px. The ratio grows from 1.2 (a minor third) through 1.2375 to 1.25 (a major
third), so headings gain contrast on larger screens.

| Step | Use | 360px | 1280px | 1920px |
|---|---|---|---|---|
| −2 | single-line labels | 11.8 | 13.4 | 13.8 |
| −1 | small text, dates, captions | 14.2 | 16.6 | 17.2 |
| 0 | body | 17 | 20.5 | 21.5 |
| 1 | h3 | 20.4 | 25.4 | 26.9 |
| 2 | h2 | 24.5 | 31.4 | 33.6 |
| 3 | h1 | 29.4 | 38.8 | 42.0 |
| 4 | large display | 35.3 | 48.1 | 52.5 |
| 5 | hero display | 42.3 | 59.5 | 65.6 |

Tokens are named `--step--2` through `--step-5`.

#### Line heights

- **Body, small text and labels (steps −2 to 0):** the line height is exactly `1u`.
  Small text is airy as a result, around 2× at step −1. Keep multi-line text at
  step −2 out of the design.
- **Headings (steps 1 to 5):** the line height snaps to half rows:

  ```css
  line-height: max(
    round(nearest, calc(1em * var(--leading)), calc(var(--u) / 2)),
    round(up, 1em, calc(var(--u) / 2))
  );
  ```

  `--leading` is per step: 1.3, 1.2, 1.15, 1.1 and 1.05. The floor stops lines from
  colliding.
- **Constraint:** across every width from 320px to 2560px, each heading's resulting
  leading stays between 1.0 and 1.45. Steps whose computed sizes break this get their
  anchor sizes nudged, which is an expected part of tuning. A test enforces it.
- **Block heights:** headings occupy whole half-rows. Heading margins are chosen so
  the heading block plus its margin is a whole number of rows when the heading is one
  line. A two-line heading may end on a half row. That's the declared exception.

#### Details that change with size

- Letter spacing tightens on large steps: 0 on body, −0.01em on step 3, −0.02em on
  steps 4 and 5.
- Heading weight stays 600, unless the display steps look heavy during tuning.
- No `text-box` trim on flowing text, because trimming changes block heights by
  fractions of a row. It may be used inside components where padding compensates, such
  as buttons.

### 4. Space

- Spacing tokens are multiples of `u`: `--space-½` (u/2), `--space-1` (u),
  `--space-2`, `--space-3`, `--space-4`, `--space-6`.
- Spacing that affects layout (margins between blocks, section padding, grid gaps,
  page padding) uses whole or half units only.
- `--space-¼` (u/4) exists for component internals only. It may be a half pixel and is
  never used between blocks.
- Paragraph spacing is `1u`. A heading after a paragraph gets `2u` above it. Sections
  get `3u` or `4u`.
- The golden-ratio tokens (`--bigger`, `--smaller`, `--*-spacing`, `--*-font-size`) are
  removed. About 57 spacing usages and 14 font-size usages are each reassigned to a grid
  token by judgement and checked visually, not by a mechanical mapping. The border radii
  that derive from them get their own plain values.

### 5. Column and layout

- The text column (`.centered`) is

  ```css
  width: round(down, min(100% - 2 * var(--u), 66ch), calc(2 * var(--u)));
  ```

  That's about 66 characters, rounded down to an even number of dots and centered, so
  both edges land on dot columns. `ch` follows the body size, so the measure stays
  constant as type grows.
- The case studies grid uses the same rule for its outer width. Column gaps are whole
  units, and column widths are derived so every cover's left edge lands on a dot column.
  If the widths can't divide evenly, the leftover goes to the last column's right edge,
  never the left edges.
- The header, footer and timeline align their outer edges the same way.

### 6. Images and covers

- An image's height rounds to whole rows so the block below it stays on the grid. The
  wrapper is a size container. The image height is
  `round(nearest, calc(100cqi / var(--ratio)), var(--u))` with `object-fit: cover`,
  which crops at most half a row.
- `--ratio` is set inline from the dimensions `lib/images.ts` already reads at build
  time.
- Sketchbook frames: the padding is `u/2`, so the frame's outer edge is on the grid and
  the image inside sits on a half row.
- Home page covers drop `aspect-ratio: 1 / 1.27` in favor of
  `height: round(nearest, calc(100cqi * 1.27), var(--u))`.
- Videos follow the same rule as images.

### 7. Components

- **What must align:** a component's outer edges, and the start of any text row
  inside it that belongs to the page's flow.
- **What may break the grid:** internal padding (`--space-¼`, `--space-½`), icon
  sizes, borders, the pencil marks, ribbons, the elastic band and hover offsets.
- Buttons are `1.5u` tall, or `1u` for compact ones such as the round arrow buttons.
- The pencil sketch layer measures elements at runtime, so its guides follow the grid
  automatically. No changes are needed there.

### 8. Fallback

For browsers without `round()`, an `@supports not (width: round(nearest, 1px, 1px))`
block replaces the snapped values with three fixed tiers:

| Width | `u` |
|---|---|
| below 768px | 28px |
| 768–1439px | 32px |
| 1440px and up | 36px |

- Heading line heights fall back to `calc(1em * var(--leading))`, unsnapped.
- Image heights fall back to their natural aspect ratio.
- The column width falls back to `min()` without rounding.

The result is a correct grid with some drift below headings and images. All major
browsers have supported `round()` since 2024, so this is a safety net.

### 9. Source of truth and testing

- `lib/grid/scale.ts` holds the config (anchors, ratios, leadings) and pure functions:
  `unitAt(width)`, `stepAt(step, width)` and `lineHeightAt(step, width)`. These mirror
  the CSS math, including rounding. It also has `css()`, which returns the token block.
- `styles/_grid.css` is the token block, written by `npm run grid` from `css()`. It's
  committed, so the site has no build step for it.
- `lib/grid/scale.test.ts` checks the following:
  - `u` is a whole even number of pixels at every width from 320px to 2560px, and never
    decreases as width grows.
  - The ramp eases out: growth per 100px is smaller above 1280px than below it.
  - Body is 17px at 360px wide, and its line height equals `u`.
  - Every heading's leading stays between 1.0 and 1.45 at every width.
  - The committed `styles/_grid.css` matches `css()` exactly.
- **Grid debug view:** Shift+G, in development only, sets `data-grid-debug` on `<html>`.
  That shows the dots at full strength and draws row lines.
- **Visual check:** at 390, 768, 1280 and 1920px widths, in both themes, on the home
  page, a case study page and an article page. A browser script measures that the
  left edges of `.centered`, headings, paragraphs, figures and covers, and the tops of
  blocks, are all multiples of `u` from the grid origin. Exceptions are only those
  declared in sections 3 and 7.

### Out of scope

- New components, and any redesign of component looks beyond what alignment requires.
- Pencil drawing changes, View Transitions, and the case study page header with
  stickers.
- Changing fonts.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
