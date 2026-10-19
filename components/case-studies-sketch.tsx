'use client'

import type { ReactNode } from 'react'
import SketchLayer, { type Guide, type Measure } from './sketch-layer'

// What the pencil draws over the case studies grid: column guides and the heading's
// baseline in graphite, and each cover outlined in its own brand color
function plan(m: Measure) {
  const heading = m.rect('heading'), grid = m.rect('grid'), covers = m.rects('cover')
  if (!heading || !grid) return {}
  const guides: Guide[] = []
  const columns = [...new Set(covers.map(c => Math.round(c.x)))]
  const top = heading.y - 20, bottom = grid.y + grid.h + 20
  ;[...columns, grid.x + grid.w].forEach(x => guides.push({ from: [x, top], to: [x, bottom] }))
  guides.push({ from: [grid.x - 20, heading.y + heading.h - 6], to: [grid.x + grid.w + 20, heading.y + heading.h - 6] })
  covers.forEach(c => {
    const color = getComputedStyle(c.el).getPropertyValue('--brand').trim()
    m.outline(c).forEach(([from, to]) => guides.push({ from, to, color }))
  })
  return { guides }
}

export default function CaseStudiesSketch({ children }: { children: ReactNode }) {
  return <SketchLayer plan={plan}>{children}</SketchLayer>
}
