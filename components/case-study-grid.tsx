'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { initSketchbookLens } from '../lib/sketchbook-lens'
import styles from '../styles/components/_case-studies.module.css'

// The grid of sketchbook covers; runs the glass lens on their arrow buttons
export default function CaseStudyGrid({ children }: { children: ReactNode }) {
  const grid = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (grid.current) return initSketchbookLens(grid.current)
  }, [])

  return <div ref={grid} className={styles.grid} data-sketch-id="grid">{children}</div>
}
