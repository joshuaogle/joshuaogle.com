'use client'

import type { ReactNode } from 'react'
import SketchLayer, { type Guide, type Hatch, type Measure } from './sketch-layer'

// Each value once, in order: the distinct edges of a set of boxes
const edges = (values: number[]) => [...new Set(values.map(Math.round))].sort((a, b) => a - b)

// What the pencil draws over the case studies grid: both edges of every column and the top
// and bottom of every row in faint graphite, just past the grid, then each cover's shape
// shaded in with hatching in its brand color, which the cover wipes in over
function plan(m: Measure) {
  const grid = m.rect('grid'), covers = m.rects('cover')
  if (!grid) return {}
  const guides: Guide[] = []
  const top = grid.y - 20, bottom = grid.y + grid.h + 20, left = grid.x - 20, right = grid.x + grid.w + 20
  edges(covers.flatMap(c => [c.x, c.x + c.w])).forEach(x => guides.push({ from: [x, top], to: [x, bottom] }))
  edges(covers.flatMap(c => [c.y, c.y + c.h])).forEach(y => guides.push({ from: [left, y], to: [right, y] }))
  const hatches: Hatch[] = covers.map(c => {
    const style = getComputedStyle(c.el)
    const radii: Hatch['radii'] = [style.borderTopLeftRadius, style.borderTopRightRadius, style.borderBottomRightRadius, style.borderBottomLeftRadius]
    return { box: c, color: style.getPropertyValue('--brand').trim(), radii }
  })
  return { guides, hatches }
}

export default function CaseStudiesSketch({ children }: { children: ReactNode }) {
  return <SketchLayer plan={plan}>{children}</SketchLayer>
}
