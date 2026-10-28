'use client'

import { useEffect, useRef, useState } from 'react'
import styles from '../styles/components/_session-waveform.module.css'

// A working sketch of the waveform timeline from the Session Recording concept work. Each
// bar is one 15-second tick of a recorded session: bytes sent up from the user above the
// line, bytes coming back below it, and red where the response was an error. Heights are
// logarithmic, as in the design (4px per digit), so small and huge transfers both read.

type Tick = { up: number, down: number, error: boolean }

const TICK_SECONDS = 15
const TICKS = 72
const STEP = 10      // viewBox units per tick
const BAR = 4
const MIDDLE = 34
const PLAY_MS = 110

// Stretches of activity, by tick; the rest of the session is idle
const BURSTS: [number, number][] = [[1, 5], [14, 19], [29, 38], [47, 50], [58, 66]]

// The same made-up session on the server and in the browser, so nothing shifts on load
function makeSession(): Tick[] {
  let seed = 11
  const random = () => (seed = (seed * 16807) % 2147483647) / 2147483647
  return Array.from({ length: TICKS }, (_, i) => {
    const busy = BURSTS.some(([from, to]) => i >= from && i <= to)
    if (!busy) return { up: random() < 0.06 ? 24 : 0, down: 0, error: false }
    return {
      up: Math.round(10 ** (1 + random() * 3)),
      down: Math.round(10 ** (1.5 + random() * 4)),
      error: random() < 0.1,
    }
  })
}

const SESSION = makeSession()

const isActive = ({ up, down }: Tick) => up > 0 || down > 0
const height = (bytes: number) => bytes > 0 ? String(bytes).length * 4 : 0

function formatBytes(bytes: number) {
  if (bytes < 1000) return `${bytes} B`
  if (bytes < 1e6) return `${(bytes / 1e3).toFixed(1)} kB`
  return `${(bytes / 1e6).toFixed(1)} MB`
}

function formatTime(tick: number) {
  const seconds = tick * TICK_SECONDS
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`
}

// The first busy tick after the next quiet one, so "Next burst" skips the rest of this one
function nextBurst(from: number) {
  let i = from + 1
  while (i < TICKS && isActive(SESSION[i])) i++
  while (i < TICKS && !isActive(SESSION[i])) i++
  return i < TICKS ? i : from
}

const totals = SESSION.reduce(
  (sum, tick) => ({ up: sum.up + tick.up, down: sum.down + tick.down, errors: sum.errors + (tick.error ? 1 : 0) }),
  { up: 0, down: 0, errors: 0 },
)

const SessionWaveform = () => {
  const [position, setPosition] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)
  const [playing, setPlaying] = useState(false)
  const trackRef = useRef<SVGSVGElement>(null)
  const dragging = useRef(false)

  // Playback moves a tick at a time through activity, and jumps straight over idle stretches
  useEffect(() => {
    if (!playing) return
    const timer = setInterval(() => {
      setPosition((current) => {
        const next = isActive(SESSION[current + 1] ?? SESSION[current]) ? current + 1 : nextBurst(current)
        if (next >= TICKS - 1 || next === current) {
          setPlaying(false)
          return TICKS - 1
        }
        return next
      })
    }, PLAY_MS)
    return () => clearInterval(timer)
  }, [playing])

  const tickAt = (clientX: number) => {
    const rect = trackRef.current?.getBoundingClientRect()
    if (!rect) return 0
    const tick = Math.floor(((clientX - rect.left) / rect.width) * TICKS)
    return Math.min(TICKS - 1, Math.max(0, tick))
  }

  const onPointerDown = (event: React.PointerEvent<SVGSVGElement>) => {
    dragging.current = true
    event.currentTarget.setPointerCapture(event.pointerId)
    setPlaying(false)
    setPosition(tickAt(event.clientX))
  }

  const onPointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    const tick = tickAt(event.clientX)
    if (dragging.current) setPosition(tick)
    else setHovered(tick)
  }

  const onKeyDown = (event: React.KeyboardEvent) => {
    const moves: Record<string, number> = { ArrowLeft: -1, ArrowRight: 1, PageDown: -4, PageUp: 4 }
    let next: number | null = null
    if (event.key in moves) next = position + moves[event.key]
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = TICKS - 1
    if (next === null) return
    event.preventDefault()
    setPlaying(false)
    setPosition(Math.min(TICKS - 1, Math.max(0, next)))
  }

  const shown = hovered ?? position
  const tick = SESSION[shown]

  return (
    <figure className={styles.example}>
      <div className={styles.player}>
        <div className={styles.header}>
          <span className={styles.session}>Session 1</span>
          <span className={styles.chip}>{formatTime(TICKS)}</span>
          <span className={styles.totals}>
            <span className={styles.error}>⚠ {totals.errors}</span>
            <span className={styles.up}>↑ {formatBytes(totals.up)}</span>
            <span className={styles.down}>↓ {formatBytes(totals.down)}</span>
          </span>
        </div>

        <svg
          ref={trackRef}
          className={styles.track}
          viewBox={`0 0 ${TICKS * STEP} ${MIDDLE * 2}`}
          preserveAspectRatio="none"
          role="slider"
          tabIndex={0}
          aria-label="Session timeline"
          aria-valuemin={0}
          aria-valuemax={TICKS - 1}
          aria-valuenow={position}
          aria-valuetext={`${formatTime(position)}, ${formatBytes(SESSION[position].up)} up, ${formatBytes(SESSION[position].down)} down${SESSION[position].error ? ', error' : ''}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={() => { dragging.current = false }}
          onPointerLeave={() => setHovered(null)}
          onKeyDown={onKeyDown}
        >
          <line className={styles.baseline} x1={0} x2={TICKS * STEP} y1={MIDDLE} y2={MIDDLE} />
          {SESSION.map(({ up, down, error }, i) => {
            const x = i * STEP + (STEP - BAR) / 2
            const played = i <= position
            return (
              <g key={i} opacity={played ? 1 : 0.45}>
                {up > 0 && <rect className={styles.barUp} x={x} y={MIDDLE - 1 - height(up)} width={BAR} height={height(up)} rx={1} />}
                {down > 0 && <rect className={error ? styles.barError : styles.barDown} x={x} y={MIDDLE + 1} width={BAR} height={height(down)} rx={1} />}
              </g>
            )
          })}
          {hovered !== null && hovered !== position && (
            <line className={styles.hover} x1={hovered * STEP + STEP / 2} x2={hovered * STEP + STEP / 2} y1={0} y2={MIDDLE * 2} />
          )}
          <line className={styles.playhead} x1={position * STEP + STEP / 2} x2={position * STEP + STEP / 2} y1={0} y2={MIDDLE * 2} />
        </svg>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.play}
            onClick={() => {
              if (position >= TICKS - 1) setPosition(0)
              setPlaying(!playing)
            }}
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? (
              <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16"><path d="M7 5h4v14H7zM13 5h4v14h-4z" fill="currentColor" /></svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
            )}
          </button>
          <button type="button" className={styles.skip} onClick={() => { setPlaying(false); setPosition(nextBurst(position)) }}>
            Next burst
            <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14"><path d="M5 6l7 6-7 6zM12 6l7 6-7 6z" fill="currentColor" /></svg>
          </button>
          <span className={styles.readout} aria-live="polite">
            <span className={styles.time}>{formatTime(shown)}</span>
            {isActive(tick) ? (
              <>
                <span className={styles.up}>↑ {formatBytes(tick.up)}</span>
                <span className={tick.error ? styles.error : styles.down}>↓ {formatBytes(tick.down)}{tick.error ? ' error' : ''}</span>
              </>
            ) : (
              <span className={styles.idle}>Idle</span>
            )}
          </span>
        </div>
      </div>
      <figcaption className={styles.caption}>
        Try it: a working sketch of the waveform concept. Drag along the timeline, or play it to skip between bursts of activity.
      </figcaption>
    </figure>
  )
}

export default SessionWaveform
