'use client'

import type { ReactNode } from 'react'
import SketchLayer, { type Guide, type Measure } from './sketch-layer'

// Each value once, in order: the distinct edges of a set of boxes
const edges = (values: number[]) => [...new Set(values.map(Math.round))].sort((a, b) => a - b)

// What the pencil draws over the case studies grid: both edges of every column and the
// heading's baseline in graphite, each cover outlined in its own brand color, then the
// top and bottom of every row in graphite. The outlines come before the rows so each is
// drafted close to when its cover is revealed.
function plan(m: Measure) {
  const heading = m.rect('heading'), grid = m.rect('grid'), covers = m.rects('cover')
  if (!heading || !grid) return {}
  const guides: Guide[] = []
  const top = heading.y - 20, bottom = grid.y + grid.h + 20, left = grid.x - 20, right = grid.x + grid.w + 20
  edges(covers.flatMap(c => [c.x, c.x + c.w])).forEach(x => guides.push({ from: [x, top], to: [x, bottom] }))
  guides.push({ from: [left, heading.y + heading.h - 6], to: [right, heading.y + heading.h - 6] })
  covers.forEach(c => {
    const color = getComputedStyle(c.el).getPropertyValue('--brand').trim()
    m.outline(c).forEach(([from, to]) => guides.push({ from, to, color }))
  })
  edges(covers.flatMap(c => [c.y, c.y + c.h])).forEach(y => guides.push({ from: [left, y], to: [right, y] }))
  return { guides }
}

export default function CaseStudiesSketch({ children }: { children: ReactNode }) {
  return <SketchLayer plan={plan}>{children}</SketchLayer>
}
