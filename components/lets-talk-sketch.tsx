'use client'

import type { ReactNode } from 'react'
import SketchLayer, { type Guide, type Hatch, type Measure } from './sketch-layer'

// Each value once, in order: the distinct edges of a set of boxes
const edges = (values: number[]) => [...new Set(values.map(Math.round))].sort((a, b) => a - b)

// What the pencil draws over the Let's talk buttons: the top and bottom of the row and both
// edges of every button in faint graphite, then each button's shape shaded in with graphite
// hatching (the buttons have no brand color), which the button wipes in over
function plan(m: Measure) {
  const buttons = m.rects('button')
  if (!buttons.length) return {}
  const guides: Guide[] = []
  const top = Math.min(...buttons.map(b => b.y)) - 20, bottom = Math.max(...buttons.map(b => b.y + b.h)) + 20
  const left = Math.min(...buttons.map(b => b.x)) - 20, right = Math.max(...buttons.map(b => b.x + b.w)) + 20
  edges(buttons.flatMap(b => [b.x, b.x + b.w])).forEach(x => guides.push({ from: [x, top], to: [x, bottom] }))
  edges(buttons.flatMap(b => [b.y, b.y + b.h])).forEach(y => guides.push({ from: [left, y], to: [right, y] }))
  const hatches: Hatch[] = buttons.map(b => {
    const style = getComputedStyle(b.el)
    const radii: Hatch['radii'] = [style.borderTopLeftRadius, style.borderTopRightRadius, style.borderBottomRightRadius, style.borderBottomLeftRadius]
    return { box: b, color: 'var(--pencil-graphite)', radii }
  })
  return { guides, hatches }
}

export default function LetsTalkSketch({ children }: { children: ReactNode }) {
  return <SketchLayer plan={plan}>{children}</SketchLayer>
}
