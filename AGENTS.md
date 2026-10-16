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
  header/footer, and Heap analytics. `sitemap.ts` and `robots.ts` are generated.
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
  function (defined at module level) that returns guides and notes, and mark
  elements with `data-sketch-id` (to measure) and `data-sketch-reveal` (to wipe in).
- `DESIGN.md`: design reasoning and inspiration for the redesign; its images
  live in `docs/inspiration/` (outside `public/`, so they aren't deployed).

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
- Motion (tilt, autoplay video, pencil drawing) is skipped for `prefers-reduced-motion`.
- Text in a brand color on a project's colors goes through `readableOn()` in
  `lib/color.ts`, which lightens it just enough to pass WCAG contrast.
- Kebab-case file names; component names match the file.
