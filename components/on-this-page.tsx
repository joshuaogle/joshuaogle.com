'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { usePrefersReducedMotion } from '../lib/use-prefers-reduced-motion'
import styles from '../styles/components/_on-this-page.module.css'

// A pill at the top of a case study saying where you are ("6 of 8 · UI Guide"), which opens
// into the list of its sections. It reads the sections from the page (each one's eyebrow),
// shows from the first section until the end, and has no backdrop blur: a blurred layer
// fixed over scrolling content makes Safari re-blur on every frame.

const SECTIONS = '.case-study > section'
const END = '[data-case-study-end]'

type Place = { labels: string[], current: number, visible: boolean }

const sections = () => [...document.querySelectorAll<HTMLElement>(SECTIONS)]

// The eyebrow names the section; a chapter's year ("UI Guide · 2019") is left out
const labelOf = (section: HTMLElement) =>
  (section.querySelector('.section-title')?.textContent ?? '').split(' · ')[0].trim()

function subscribe(onChange: () => void) {
  window.addEventListener('scroll', onChange, { passive: true })
  window.addEventListener('resize', onChange)
  return () => {
    window.removeEventListener('scroll', onChange)
    window.removeEventListener('resize', onChange)
  }
}

// A string, so React can tell when nothing has changed
function snapshot() {
  const all = sections()
  if (!all.length) return ''
  const reading = window.innerHeight * 0.35
  let current = 0
  all.forEach((section, i) => { if (section.getBoundingClientRect().top <= reading) current = i })
  const started = all[0].getBoundingClientRect().top < window.innerHeight * 0.6
  const end = document.querySelector(END)?.getBoundingClientRect().top ?? Infinity
  const place: Place = { labels: all.map(labelOf), current, visible: started && end > window.innerHeight * 0.5 }
  return JSON.stringify(place)
}

const OnThisPage = () => {
  const state = useSyncExternalStore(subscribe, snapshot, () => '')
  const reduceMotion = usePrefersReducedMotion()
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)

  // Close on a click elsewhere or Escape
  useEffect(() => {
    if (!open) return
    const onClick = (event: MouseEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  if (!state) return null
  const { labels, current, visible }: Place = JSON.parse(state)
  const shown = visible || open

  const jump = (index: number) => {
    setOpen(false)
    sections()[index]?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <div ref={root} className={styles.root} data-visible={shown} inert={!shown}>
      <button
        type="button"
        className={styles.pill}
        aria-expanded={open}
        aria-controls="on-this-page"
        onClick={() => setOpen(!open)}
      >
        <span className={styles.count}>{current + 1} of {labels.length}</span>
        <span className={styles.current}>{labels[current]}</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.chevron}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <nav id="on-this-page" className={styles.panel} aria-label="On this page">
          <ol>
            {labels.map((label, i) => (
              <li key={i}>
                <button
                  type="button"
                  className={styles.item}
                  aria-current={i === current ? 'location' : undefined}
                  onClick={() => jump(i)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ol>
        </nav>
      )}
    </div>
  )
}

export default OnThisPage
