'use client'

import type { PointerEvent, ReactNode } from 'react'
import styles from '../styles/components/_sketchbook-frame.module.css'

type Props = {
  children: ReactNode
}

// The inside of a sketchbook cover: the cover material wraps around the edge of a
// page pasted onto it. The light catching the material follows the pointer; it's
// set as CSS variables, not React state, so moving the mouse never re-renders.
const SketchbookFrame = ({ children }: Props) => {
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const box = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--light-x', `${((event.clientX - box.left) / box.width) * 100}%`)
    event.currentTarget.style.setProperty('--light-y', `${((event.clientY - box.top) / box.height) * 100}%`)
  }

  return (
    <div className={styles.frame} onPointerMove={onPointerMove}>
      <div className={styles.page}>{children}</div>
    </div>
  )
}

export default SketchbookFrame
