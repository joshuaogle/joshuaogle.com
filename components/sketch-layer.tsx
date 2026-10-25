'use client'

import { useEffect, useId, useLayoutEffect, useRef, type ReactNode } from 'react'
import { createTimeline, guide, hatch, note, svgEl, type Ink, type NoteSpec } from '../lib/pencil/draw'
import type { Point } from '../lib/pencil/geometry'
import styles from '../styles/components/_sketch-layer.module.css'

export type Box = { x: number, y: number, w: number, h: number, el: HTMLElement }

export type Measure = {
  width: number
  height: number
  // Elements marked data-sketch-id="name", in layer coordinates
  rect: (name: string) => Box | null
  rects: (name: string) => Box[]
  // The four sides of a box, for outlining it
  outline: (box: Box) => [Point, Point][]
}

export type Guide = { from: Point, to: Point, color?: string }
// A box shaded in with colored pencil hatching, standing in for content before it's revealed
export type Hatch = { box: { x: number, y: number, w: number, h: number }, color: string, radius?: number }
export type SketchPlan = { guides?: Guide[], hatches?: Hatch[], notes?: NoteSpec[] }

type Props = {
  // Describes what to draw, from measurements of the rendered content.
  // Pass a stable function (defined at module level), or the drawing restarts.
  plan: (m: Measure) => SketchPlan
  children: ReactNode
  className?: string
}

// The whole sequence takes TOTAL ms, from the first guide drawn to the last drawn back out.
// Guides start within SPREAD ms however many there are, and each takes LINE ms to draw in
// or out. Hatches shade in from HATCH_START, HATCH_STEP apart; revealed content wipes in
// over them from REVEAL_START, REVEAL_STEP apart.
const TOTAL = 2000, LINE = 360, SPREAD = 300
const HATCH_START = 150, HATCH_STEP = 70, HATCH_DURATION = 380
const REVEAL_START = 750, REVEAL_STEP = 70
const ERASE_START = TOTAL - SPREAD - LINE

// Pencil grain: speckles marks so they don't read as flat vector
function grain(defs: SVGDefsElement, id: string) {
  const filter = svgEl('filter', { id, x: '-5%', y: '-5%', width: '110%', height: '110%' }, defs)
  svgEl('feTurbulence', { type: 'fractalNoise', baseFrequency: 1.4, numOctaves: 1, seed: 3, result: 'n' }, filter)
  svgEl('feColorMatrix', { in: 'n', type: 'matrix', values: '0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.5 1.35', result: 'speck' }, filter)
  svgEl('feComposite', { in: 'SourceGraphic', in2: 'speck', operator: 'in' }, filter)
}

// A pencil layer over its children. When it scrolls into view it drafts faint
// construction lines, shades in colored hatching where content will go, reveals
// children marked data-sketch-reveal one by one over it, draws handwritten notes, then
// draws the construction back out and clears the hatching. The notes stay.
// Reduced motion, and sections already on screen at load, get the finished state.
export default function SketchLayer({ plan, children, className }: Props) {
  const root = useRef<HTMLDivElement>(null)
  const guidesSvg = useRef<SVGSVGElement>(null)
  const inkSvg = useRef<SVGSVGElement>(null)
  const idPrefix = 'sk' + useId().replace(/[^a-zA-Z0-9]/g, '')

  // Hide revealable content before first paint, but only if it will animate
  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const r = el.getBoundingClientRect()
    const onScreen = r.top < innerHeight * .85 && r.bottom > 0
    el.dataset.sketch = reduce || onScreen ? 'done' : 'armed'
  }, [])

  useEffect(() => {
    const el = root.current, gSvg = guidesSvg.current, iSvg = inkSvg.current
    if (!el || !gSvg || !iSvg) return

    const measure = (): Measure => {
      const base = el.getBoundingClientRect()
      const box = (node: HTMLElement): Box => {
        const r = node.getBoundingClientRect()
        return { x: r.left - base.left, y: r.top - base.top, w: r.width, h: r.height, el: node }
      }
      const all = (name: string) => [...el.querySelectorAll<HTMLElement>(`[data-sketch-id="${name}"]`)].map(box)
      return {
        width: base.width, height: base.height,
        rect: (name) => all(name)[0] ?? null,
        rects: all,
        outline: ({ x, y, w, h }) => [[[x, y], [x + w, y]], [[x + w, y], [x + w, y + h]], [[x + w, y + h], [x, y + h]], [[x, y + h], [x, y]]],
      }
    }

    const reset = (svg: SVGSVGElement, w: number, h: number) => {
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`)
      svg.replaceChildren()
    }

    const makeInk = (): Ink => {
      const defs = svgEl('defs', {}, iSvg)
      grain(defs, `${idPrefix}-graphite`)
      const group = svgEl('g', { filter: `url(#${idPrefix}-graphite)` }, iSvg)
      return { svg: iSvg, defs, group, idPrefix, inkClass: styles.ink, noteClass: styles.note }
    }

    let tl = createTimeline(true)

    // The finished state: notes only, nothing hidden
    const drawFinished = () => {
      tl.clear()
      const m = measure()
      reset(gSvg, m.width, m.height)
      reset(iSvg, m.width, m.height)
      tl = createTimeline(true)
      const ink = makeInk()
      plan(m).notes?.forEach(n => note(ink, tl, n, 0))
      el.querySelectorAll<HTMLElement>('[data-sketch-reveal]').forEach(n => { n.dataset.revealed = 'true' })
      el.dataset.sketch = 'done'
    }

    const animate = () => {
      const m = measure()
      reset(gSvg, m.width, m.height)
      reset(iSvg, m.width, m.height)
      tl = createTimeline(false)
      const { guides = [], hatches = [], notes = [] } = plan(m)
      // Hatching sits under the guides, both behind the content
      const defs = svgEl('defs', {}, gSvg)
      grain(defs, `${idPrefix}-hatch-grain`)
      const shading = svgEl('g', { class: styles.hatch, filter: `url(#${idPrefix}-hatch-grain)` }, gSvg)
      hatches.forEach((h, i) => hatch(shading, defs, idPrefix, tl, h.box, h.color, HATCH_START + i * HATCH_STEP, { radius: h.radius, duration: HATCH_DURATION }))
      const g = svgEl('g', {}, gSvg)
      const step = guides.length > 1 ? SPREAD / (guides.length - 1) : 0
      const paths = guides.map((line, i) => guide(g, styles.guide, tl, line.from, line.to, i * step, { color: line.color, duration: LINE }))
      const reveals = [...el.querySelectorAll<HTMLElement>('[data-sketch-reveal]')]
      reveals.forEach((n, i) => tl.at(REVEAL_START + i * REVEAL_STEP, () => { n.dataset.revealed = 'true' }))
      let t = REVEAL_START + reveals.length * REVEAL_STEP
      const ink = makeInk()
      notes.forEach(n => { t = note(ink, tl, n, t) })
      paths.forEach((path, i) => tl.erase(path, ERASE_START + i * step, LINE))
      // The revealed content now covers the hatching; clear it so nothing shows past an edge on hover
      tl.at(TOTAL, () => { shading.remove() })
      tl.at(Math.max(TOTAL, t), () => { el.dataset.sketch = 'done' })
    }

    let started = false
    if (el.dataset.sketch === 'done') {
      started = true
      drawFinished()
    }
    const io = new IntersectionObserver((entries) => {
      if (!started && entries[0].isIntersecting) { started = true; animate() }
    }, { threshold: .3 })
    io.observe(el)

    // Keep the notes attached to the layout when it reflows
    let raf = 0, lastWidth = el.getBoundingClientRect().width
    const ro = new ResizeObserver(() => {
      const w = el.getBoundingClientRect().width
      if (!started || Math.abs(w - lastWidth) < 1) return
      lastWidth = w
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(drawFinished)
    })
    ro.observe(el)

    return () => { io.disconnect(); ro.disconnect(); cancelAnimationFrame(raf); tl.clear() }
  }, [idPrefix, plan])

  return (
    <div ref={root} className={[styles.root, className].filter(Boolean).join(' ')}>
      <svg ref={guidesSvg} className={styles.guides} aria-hidden="true" />
      <div className={styles.content}>{children}</div>
      <svg ref={inkSvg} className={styles.inkLayer} aria-hidden="true" />
    </div>
  )
}
