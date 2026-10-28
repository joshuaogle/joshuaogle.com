'use client'

import { useEffect, useRef, useState } from 'react'
import styles from '../styles/components/_session-waveform.module.css'

// A working version of the waveform timeline from the Session Recording concept, drawn as in
// the design: each bar is one 15-second tick of a recorded session, bytes sent up (green)
// above the line and bytes coming back (blue, or red for an error) below it, with heights
// on a log scale. The red playhead plays through bursts of activity, and the Skip bands
// jump over the quiet stretches between them.

type Tick = { up: number, down: number, error: boolean }

const TICK_SECONDS = 15
const TICKS = 80
const STEP = 9        // viewBox units per tick
const BAR = 4.5
const PER_DIGIT = 4   // bar height per digit of the byte count, as in the design
const MIDDLE = 25
const HEIGHT = MIDDLE * 2
const PLAY_MS = 90
const MIN_SKIP = 6    // quiet stretches at least this long get a Skip band

// Bursts of activity, by tick; the rest of the session is quiet
const BURSTS: [number, number][] = [[1, 6], [17, 19], [29, 37], [47, 49], [58, 65], [73, 76]]

// The same made-up session on the server and in the browser, so nothing shifts on load
function makeSession(): Tick[] {
  let seed = 11
  const random = () => (seed = (seed * 16807) % 2147483647) / 2147483647
  return Array.from({ length: TICKS }, (_, i) => {
    const busy = BURSTS.some(([from, to]) => i >= from && i <= to)
    if (!busy) return { up: 0, down: 0, error: false }
    return {
      up: Math.round(10 ** (random() * 4.5)),
      down: Math.round(10 ** (random() * 5.5)),
      error: random() < 0.08,
    }
  })
}

const SESSION = makeSession()

const isActive = ({ up, down }: Tick) => up > 0 || down > 0
const barHeight = (bytes: number) => bytes > 0 ? String(bytes).length * PER_DIGIT : 0

// The quiet stretches between bursts that are long enough to skip
const GAPS: { from: number, to: number }[] = []
for (let i = 0, start = -1; i <= TICKS; i++) {
  const quiet = i < TICKS && !isActive(SESSION[i])
  if (quiet && start < 0) start = i
  if (!quiet && start >= 0) {
    if (i - start >= MIN_SKIP && start > 0 && i < TICKS) GAPS.push({ from: start, to: i })
    start = -1
  }
}

function formatBytes(bytes: number) {
  if (bytes < 1000) return `${bytes}b`
  if (bytes < 1e6) return `${(bytes / 1e3).toFixed(1)}kb`
  return `${(bytes / 1e6).toFixed(1)}mb`
}

function formatDuration(ticks: number) {
  const seconds = ticks * TICK_SECONDS
  return `${Math.floor(seconds / 60)}m${String(seconds % 60).padStart(2, '0')}s`
}

function formatTime(tick: number) {
  const seconds = tick * TICK_SECONDS
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`
}

// The first busy tick after the quiet stretch that follows `from`
function nextBurst(from: number) {
  let i = from + 1
  while (i < TICKS && isActive(SESSION[i])) i++
  while (i < TICKS && !isActive(SESSION[i])) i++
  return i < TICKS ? i : from
}

const TOTALS = SESSION.reduce(
  (sum, tick) => ({ up: sum.up + tick.up, down: sum.down + tick.down, errors: sum.errors + (tick.error ? 1 : 0) }),
  { up: 0, down: 0, errors: 0 },
)

const percent = (tick: number) => `${(tick / TICKS) * 100}%`

const SessionWaveform = () => {
  const [position, setPosition] = useState(0)
  const [playing, setPlaying] = useState(false)
  const trackRef = useRef<SVGSVGElement>(null)
  const dragging = useRef(false)

  // Playback moves a tick at a time through activity and jumps straight over quiet stretches
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
    return Math.min(TICKS - 1, Math.max(0, Math.floor(((clientX - rect.left) / rect.width) * TICKS)))
  }

  const onPointerDown = (event: React.PointerEvent<SVGSVGElement>) => {
    dragging.current = true
    event.currentTarget.setPointerCapture(event.pointerId)
    setPlaying(false)
    setPosition(tickAt(event.clientX))
  }

  const onKeyDown = (event: React.KeyboardEvent) => {
    const moves: Record<string, number> = { ArrowLeft: -1, ArrowRight: 1, PageDown: -8, PageUp: 8 }
    let next: number | null = null
    if (event.key in moves) next = position + moves[event.key]
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = TICKS - 1
    if (next === null) return
    event.preventDefault()
    setPlaying(false)
    setPosition(Math.min(TICKS - 1, Math.max(0, next)))
  }

  const current = SESSION[position]

  return (
    <figure className={styles.example}>
      <div className={styles.card}>
        <div className={styles.summary}>
          <p className={styles.heading}>
            <span className={styles.session}>Session 1</span>
            <span className={styles.chip}>{formatDuration(TICKS)}</span>
          </p>
          <p className={styles.totals}>
            <span className={styles.warn}>
              <svg aria-hidden="true" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="M12 3L2 20h20L12 3z" /><path d="M12 10v4M12 17v.5" strokeLinecap="round" /></svg>
              {TOTALS.errors}
            </span>
            <span className={styles.up}>↑{formatBytes(TOTALS.up)}</span>
            <span className={styles.down}>↓{formatBytes(TOTALS.down)}</span>
          </p>
        </div>

        <div className={styles.stage}>
          <div className={styles.lane}>
            {GAPS.map(({ from, to }) => (
              <button
                key={from}
                type="button"
                className={styles.skip}
                style={{ left: percent(from), width: percent(to - from) }}
                onClick={() => { setPlaying(false); setPosition(to) }}
                aria-label={`Skip to ${formatTime(to)}`}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" width="9" height="9"><path d="M3 5l8 7-8 7zM13 5l8 7-8 7z" fill="currentColor" /></svg>
                Skip
              </button>
            ))}
          </div>

          <div className={styles.track}>
            <svg
              ref={trackRef}
              className={styles.wave}
              viewBox={`0 0 ${TICKS * STEP} ${HEIGHT}`}
              role="slider"
              tabIndex={0}
              aria-label="Session timeline"
              aria-valuemin={0}
              aria-valuemax={TICKS - 1}
              aria-valuenow={position}
              aria-valuetext={isActive(current)
                ? `${formatTime(position)}, ${formatBytes(current.up)} up, ${formatBytes(current.down)} down${current.error ? ', error' : ''}`
                : `${formatTime(position)}, quiet`}
              onPointerDown={onPointerDown}
              onPointerMove={(event) => { if (dragging.current) setPosition(tickAt(event.clientX)) }}
              onPointerUp={() => { dragging.current = false }}
              onKeyDown={onKeyDown}
            >
              {SESSION.map((tick, i) => {
                const x = i * STEP + (STEP - BAR) / 2
                if (!isActive(tick)) {
                  return <rect key={i} className={styles.dash} x={x} y={MIDDLE - 0.75} width={BAR} height={1.5} rx={0.75} />
                }
                const up = barHeight(tick.up)
                const down = barHeight(tick.down)
                return (
                  <g key={i}>
                    {up > 0 && <rect className={styles.barUp} x={x} y={MIDDLE - up} width={BAR} height={up + (down > 0 ? BAR / 2 : 0)} rx={BAR / 2} />}
                    {down > 0 && <rect className={tick.error ? styles.barError : styles.barDown} x={x} y={MIDDLE} width={BAR} height={down} rx={BAR / 2} />}
                  </g>
                )
              })}
            </svg>
          </div>

          <div className={styles.lane}>
            <div className={styles.playhead} style={{ left: `calc(${percent(position)} + ${(100 / TICKS) / 2}%)` }}>
              <button
                type="button"
                className={styles.play}
                onClick={() => {
                  if (position >= TICKS - 1) setPosition(0)
                  setPlaying(!playing)
                }}
              >
                {playing ? (
                  <svg aria-hidden="true" viewBox="0 0 24 24" width="10" height="10"><path d="M6 4h4v16H6zM14 4h4v16h-4z" fill="currentColor" /></svg>
                ) : (
                  <svg aria-hidden="true" viewBox="0 0 24 24" width="10" height="10"><path d="M6 3v18l15-9z" fill="currentColor" /></svg>
                )}
                {playing ? 'Pause' : 'Play'}
              </button>
              <span className={styles.line} />
            </div>
          </div>
        </div>
      </div>
      <figcaption className={styles.caption}>
        Try it: a working version of the waveform concept. Drag along the timeline, press Play, or skip the quiet stretches.
      </figcaption>
    </figure>
  )
}

export default SessionWaveform
