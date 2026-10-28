# joshuaogle.com design

How joshuaogle.com looks and why. This records the thinking behind the 2027 redesign as it happens, so the next redesign can start from the reasoning, not just the result.

Screenshots of past designs and full-size captures of everything below live in the JoshuaOgle.com Figma file: past designs each have a page ("2024 Dot grid", "2023 Glass Pane Design"), and this inspiration is in the Inspiration section of the "2027" page.

## Inspiration

### Rachel Chen

[rachelchen.tech](https://www.rachelchen.tech)

- **One sentence as the introduction.** A big serif headline does all the talking; everything around it is small, quiet sans.
- **Work shown as moving product.** Each project tile is a short video of the actual interface, captioned with name, type and year ("Concept 2025", "Shipped 2026").
- **A frame, not a page.** Name and side navigation stay put while the work scrolls inside the frame, with a faint noise texture over everything.

### Cooper House

[cooper-house.com/projects](https://www.cooper-house.com/projects)

- **One warm color carries the brand.** The whole page is a single deep brown; the photography supplies every other color.
- **A big, light serif title and then straight into the work.** A dense three-column grid with filter tabs (Hospitality, Destinations, Real Estate, Lifestyle) and a grid/list toggle.
- **Two-line captions.** Project name, then a one-line tagline.

### Glass buttons

[CodePen by Paco Coursey](https://codepen.io/pxco/pen/eYwNErz): "Fey.com light mode concept from @narative". Reposted by [Ridd on X](https://x.com/ridd_design/status/1892612694764904599) as "design twitter history": someone said the button was impossible to make with CSS, @tcosta said it was easy, and @pacocoursey built it.

How it's built, from the pen's source:

- **Almost no fill.** `rgba(105, 105, 105, 0.04)` with a 1px `backdrop-filter` blur. The glass is mostly the edge and the shadow.
- **A rim of light.** A 1px gradient border (white at the top, grey through the middle, white at the bottom) drawn on a `::before` with `padding` plus `mask-composite: exclude`, so only the edge shows and the corners stay round.
- **A long, soft shadow.** Six stacked shadows, from 2px to 78px offset, each at 2–10% black. Together they read as one deep, diffuse shadow, like light through glass.
- **A physical press.** On `:active` the shadow drops to its two closest layers and the button scales to 95%, over 200ms.
- **Paper behind it.** The page is `#e7e7e7` with SVG `feTurbulence` noise at 20% opacity, which gives the blur and the rim something to catch.

Notes for using it here:

- **It's tuned for a light, mid-grey background.** On a dark page, black shadows disappear and the grey parts of the rim go muddy. A dark version needs its own rim gradient and a glow or lighter shadow instead.
- **One special button, not a button style.** It's at its best as the single primary action, like "Let's talk". On every link it would stop feeling special.
- **The pen has no focus style.** It needs a `:focus-visible` treatment that fits the rim, and the press should stay subtle under `prefers-reduced-motion`.
- **Skip `will-change: transform`** on buttons that rarely animate; it costs memory for no visible gain.

## Feedback

Decisions Joshua has made while reviewing designs. Follow them in new work.

### Working in mockups

- **Explore in artifacts first.** When we're exploring layouts, mock them up as artifacts and don't change the site's code until a direction is chosen.
- **Always show light and dark.** Every mockup shows both themes.
- **Stay in the site's own style.** New directions build on the existing look (the dot-grid paper, Tiempos headings over light sans body text, project colors, logo circles), not a new visual identity.

### Themes

- **Both themes are the same notebook.** Dark is warm brown paper; light is off-white with a hint of warmth (`#F7F4EF` to `#F1ECE4`) and softly warm dots: not a cool gray-white, which reads as foggy next to the dark theme, and not cream, which was too warm.
- **Ink for headings in light, and every text color clears AA** (4.5:1) in both themes, including muted text and links.
- **Glass has a neutral edge.** Cards and buttons use `--glass-edge-rgb` (a hint of highlight on dark, ink on light) and a soft lift on light, never the yellow highlight on white.
- **Covers cast a shadow on light paper** so they sit on the page; on dark paper they don't need one.
- **The ghost letters are pressed into the paper** in light, rather than blended, which turns them into a smudge on near-white.

### Case study pages

- **Magazine-inspired, like Vogue or GQ:** a big, confident headline and photography given room, in the site's own type and colors.
- **Left-align the intro**, with the title and meta lined up with the text column.
- **Full-width image groupings:** groups of screenshots sit side by side at one height, wider than the text, and big photos run edge to edge. Place each image by its size and content rather than in one fixed collage.
- **Related images go in a row.** It works because diagrams and small UI don't need to be shown large; a row of them at one height reads as one idea. An asymmetric, offset arrangement was tried and rejected.
- **Project colors must read on the light paper.** When the brand's primary color fails there, like Vault's yellow, light theme uses the brand's secondary color instead (Vault: black), not a darkened primary; dark theme can use the primary as is.
- **Pull quotes:** large semibold Tiempos in the text column, with a big opening quote mark hanging in the margin in the project's color and an attribution line underneath. No rules.
- **Eyebrows** (section labels) are plain text, with no line before them.
- **No drop caps.**
- **Captions in sentence case**, not all caps.
- **Captions align with their image's place:** left when the image sits in the text column, right when it breaks out of it (wide rows and full-bleed photos).
- **Built for recruiters (Magazine v3, the "Principal" layout in the Case Study Layouts canvas):** every case study follows one order, so a reviewer finds the same things in the same place:
  1. A header with a kicker (product · field · years), the title, a one-line summary, and the facts (For, Role, Team, Time, Scope, Users), then a hero image of the shipped work.
  2. Context, then **My role**, split into "What I did" and "With my partners", so Joshua's own work is clear from the team's.
  3. The work, with research ending in **What we learned from research**: each hypothesis, a verdict (Confirmed, Disproved or New learning, as a word with a marker that doesn't rely on color), the learning set large, and a "So we" line with the decision it led to.
  4. **Results:** the conclusion, a short paragraph on what the work achieved and then its numbers as `Stats`, before the next case study.
  5. **Reflection** ("What I'd do differently"), then the next case study and a way to get in touch.
- **Key facts are real text**, never only in an image, so people and screening tools can both read them.
- **Weight and contrast limits:** headlines at 600, nothing lighter than 400 at any size, and every text color at 4.5:1 or better, even large text. Muted text and links use `--readable-muted-color` and `--readable-action-color`.
- **Thin rules instead of boxes:** a strong rule opens a group (role, the first finding), hairlines separate the rest.
