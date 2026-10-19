// Turns pencil geometry into animated SVG. Browser-only.
import { arrow, loop, polyline, ruledLine, taper, type Point, type Rand } from './geometry'

const NS = 'http://www.w3.org/2000/svg'

export function svgEl<K extends keyof SVGElementTagNameMap>(name: K, attrs: Record<string, string | number> = {}, parent?: Element): SVGElementTagNameMap[K] {
  const el = document.createElementNS(NS, name)
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, String(v))
  parent?.appendChild(el)
  return el
}

export type Timeline = {
  at: (ms: number, fn: () => void) => void
  // Draws a stroked path along its length
  stroke: (path: SVGPathElement, ms: number, duration?: number) => void
  show: (el: SVGElement | HTMLElement, ms: number) => void
  clear: () => void
}

// Schedules drawing steps. With instant set, every step happens at once.
export function createTimeline(instant: boolean): Timeline {
  const timers: number[] = []
  const at = (ms: number, fn: () => void) => {
    if (instant) fn()
    else timers.push(window.setTimeout(fn, ms))
  }
  return {
    at,
    stroke(path, ms, duration = 520) {
      const len = path.getTotalLength()
      path.style.strokeDasharray = `${len} ${len}`
      path.style.strokeDashoffset = instant ? '0' : String(len)
      at(ms, () => {
        path.getBoundingClientRect() // commit the starting offset before animating
        path.style.transition = instant ? 'none' : `stroke-dashoffset ${duration}ms cubic-bezier(.45, .05, .25, 1)`
        path.style.strokeDashoffset = '0'
      })
    },
    show(el, ms) { at(ms, () => { el.style.opacity = '1' }) },
    clear() { timers.forEach(clearTimeout); timers.length = 0 },
  }
}

export type Ink = {
  svg: SVGSVGElement
  defs: SVGDefsElement
  group: SVGGElement
  idPrefix: string
  inkClass: string
  noteClass: string
}

let maskCount = 0

// A filled, tapered pencil stroke, revealed along its centerline by an animated mask
export function inkStroke(ink: Ink, tl: Timeline, centerline: Point[], outline: string, ms: number, duration: number, maskWidth = 14) {
  const id = `${ink.idPrefix}-m${++maskCount}`
  const mask = svgEl('mask', { id, maskUnits: 'userSpaceOnUse', x: -500, y: -500, width: 10000, height: 10000 }, ink.defs)
  const reveal = svgEl('path', { d: polyline(centerline), fill: 'none', stroke: '#fff', 'stroke-width': maskWidth, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, mask)
  svgEl('path', { d: outline, class: ink.inkClass, mask: `url(#${id})` }, ink.group)
  tl.stroke(reveal, ms, duration)
}

// A construction line in the given group; returns when it starts drawing
export function guide(group: SVGGElement, className: string, tl: Timeline, from: Point, to: Point, ms: number, { color, overshoot = 14, rand }: { color?: string, overshoot?: number, rand?: Rand } = {}) {
  const path = svgEl('path', { d: ruledLine(from[0], from[1], to[0], to[1], { overshoot, rand }), class: className }, group)
  if (color) path.style.stroke = color
  tl.stroke(path, ms, 560)
}

export type NoteSpec = {
  text: string
  at: Point                         // where the text sits (its baseline start, or end for anchor 'end')
  to: Point                         // what the arrow points at
  anchor?: 'start' | 'middle' | 'end'
  bend?: number
}

// A handwritten note with a natural arrow; returns the time the next step can start
export function note(ink: Ink, tl: Timeline, spec: NoteSpec, ms: number, rand?: Rand): number {
  const { text, at, to, anchor = 'start', bend = .2 } = spec
  const label = svgEl('text', { x: at[0], y: at[1], class: ink.noteClass, 'text-anchor': anchor }, ink.group)
  label.textContent = text
  label.style.opacity = '0'
  const startX = anchor === 'end' ? at[0] + 6 : anchor === 'middle' ? at[0] : at[0] - 6
  const a = arrow([startX, at[1] - 8], to, { bend, rand })
  inkStroke(ink, tl, a.shaft, a.shaftOutline, ms, 560)
  inkStroke(ink, tl, a.head, a.headOutline, ms + 520, 200, 10)
  tl.show(label, ms + 560)
  return ms + 700
}

// A hand-drawn loop around a box
export function circle(ink: Ink, tl: Timeline, box: { x: number, y: number, w: number, h: number }, ms: number, rand?: Rand): number {
  const pts = loop(box.x + box.w / 2, box.y + box.h / 2, box.w / 2 + 10, box.h / 2 + 8, { rand })
  inkStroke(ink, tl, pts, taper(pts, t => 1.9 * (.45 + .55 * Math.sin(Math.PI * t))), ms, 800)
  return ms + 900
}
