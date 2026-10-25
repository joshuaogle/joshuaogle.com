'use client'

import { useEffect, useId, useLayoutEffect, useRef, type ReactNode } from 'react'
import { createTimeline, guide, note, svgEl, type Ink, type NoteSpec } from '../lib/pencil/draw'
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
export type SketchPlan = { guides?: Guide[], notes?: NoteSpec[] }

type Props = {
  // Describes what to draw, from measurements of the rendered content.
  // Pass a stable function (defined at module level), or the drawing restarts.
  plan: (m: Measure) => SketchPlan
  children: ReactNode
  className?: string
}

// The whole sequence takes TOTAL ms, from the first guide drawn to the last drawn back out.
// Guides start within SPREAD ms however many there are, and each takes LINE ms to draw in
// or out; revealed content wipes in from REVEAL_START, REVEAL_STEP apart.
const TOTAL = 2000, LINE = 380, SPREAD = 420, REVEAL_START = 350, REVEAL_STEP = 90
const ERASE_START = TOTAL - SPREAD - LINE

// A pencil layer over its children. When it scrolls into view it drafts faint
// construction lines, reveals children marked data-sketch-reveal one by one, draws
// handwritten notes, then draws the construction back out. The notes stay.
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
      // Pencil grain: speckles the graphite so it doesn't read as flat vector
      const filter = svgEl('filter', { id: `${idPrefix}-graphite`, x: '-5%', y: '-5%', width: '110%', height: '110%' }, defs)
      svgEl('feTurbulence', { type: 'fractalNoise', baseFrequency: 1.4, numOctaves: 1, seed: 3, result: 'n' }, filter)
      svgEl('feColorMatrix', { in: 'n', type: 'matrix', values: '0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.5 1.35', result: 'speck' }, filter)
      svgEl('feComposite', { in: 'SourceGraphic', in2: 'speck', operator: 'in' }, filter)
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
      const { guides = [], notes = [] } = plan(m)
      const g = svgEl('g', {}, gSvg)
      const step = guides.length > 1 ? SPREAD / (guides.length - 1) : 0
      const paths = guides.map((line, i) => guide(g, styles.guide, tl, line.from, line.to, i * step, { color: line.color, duration: LINE }))
      const reveals = [...el.querySelectorAll<HTMLElement>('[data-sketch-reveal]')]
      reveals.forEach((n, i) => tl.at(REVEAL_START + i * REVEAL_STEP, () => { n.dataset.revealed = 'true' }))
      let t = REVEAL_START + reveals.length * REVEAL_STEP
      const ink = makeInk()
      notes.forEach(n => { t = note(ink, tl, n, t) })
      paths.forEach((path, i) => tl.erase(path, ERASE_START + i * step, LINE))
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
