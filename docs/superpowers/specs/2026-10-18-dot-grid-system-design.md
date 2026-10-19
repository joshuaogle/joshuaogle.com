# Dot grid system

Status: draft for review · Branch: `2027-grid` · Date: 2026-10-18

## Goal

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

## Prior art and why it isn't enough on its own

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

## 1. The unit

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

## 2. The dot grid

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

## 3. Type

Sizes follow an eased modular scale. Line heights snap to the grid. Font sizes
themselves don't need to be on the grid.

### Scale

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

### Line heights

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

### Details that change with size

- Letter spacing tightens on large steps: 0 on body, −0.01em on step 3, −0.02em on
  steps 4 and 5.
- Heading weight stays 600, unless the display steps look heavy during tuning.
- No `text-box` trim on flowing text, because trimming changes block heights by
  fractions of a row. It may be used inside components where padding compensates, such
  as buttons.

## 4. Space

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

## 5. Column and layout

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

## 6. Images and covers

- An image's height rounds to whole rows so the block below it stays on the grid. The
  wrapper is a size container. The image height is
  `round(nearest, calc(100cqi / var(--ratio)), var(--u))` with `object-fit: cover`,
  which crops at most half a row.
- `--ratio` is set inline from the dimensions `lib/images.ts` already reads at build
  time.
- Sketchbook frames: the padding is `u/2`, so the frame's outer edge is on the grid and
  the image inside sits on a half row.
- Home page covers drop `aspect-ratio: 1 / 1.36` in favor of
  `height: round(nearest, calc(100cqi * 1.36), var(--u))`.
- Videos follow the same rule as images.

## 7. Components

- **What must align:** a component's outer edges, and the start of any text row
  inside it that belongs to the page's flow.
- **What may break the grid:** internal padding (`--space-¼`, `--space-½`), icon
  sizes, borders, the pencil marks, ribbons, the elastic band and hover offsets.
- Buttons are `1.5u` tall, or `1u` for compact ones such as the round arrow buttons.
- The pencil sketch layer measures elements at runtime, so its guides follow the grid
  automatically. No changes are needed there.

## 8. Fallback

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

## 9. Source of truth and testing

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

## Out of scope

- New components, and any redesign of component looks beyond what alignment requires.
- Pencil drawing changes, View Transitions, and the case study page header with
  stickers.
- Changing fonts.
