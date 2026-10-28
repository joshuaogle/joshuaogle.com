'use client'

import { useEffect, useRef, useState } from 'react'
import styles from '../styles/components/_session-waveform.module.css'

// A working version of the waveform scrubber from the Session Recording playback design,
// at the design's sizes. Each bar is one 15-second tick of a recorded session: bytes sent
// up (green) above the dotted line and bytes coming back (blue, or red for an error)
// below it, with heights on a log scale. Playing moves through bursts of activity and
// jumps over quiet stretches.

type Tick = { up: number, down: number, error: boolean }

const TICK_SECONDS = 15
const TICKS = 72
const STEP = 6        // px per tick: a 4px bar and a 2px gap
const BAR = 4
const PER_DIGIT = 2   // bar height per digit of the byte count, up to 12px a side
const HEIGHT = 28     // the track's height
const MIDDLE = HEIGHT / 2
const WIDTH = TICKS * STEP
const PLAY_MS = 90

// Bursts of activity, by tick; the rest of the session is quiet
const BURSTS: [number, number][] = [[0, 5], [15, 17], [24, 31], [38, 40], [45, 48], [60, 70]]

// The same made-up session on the server and in the browser, so nothing shifts on load
function makeSession(): Tick[] {
  let seed = 11
  const random = () => (seed = (seed * 16807) % 2147483647) / 2147483647
  return Array.from({ length: TICKS }, (_, i) => {
    const busy = BURSTS.some(([from, to]) => i >= from && i <= to)
    if (!busy) return { up: 0, down: 0, error: false }
    return {
      up: Math.round(10 ** (random() * 6)),
      down: Math.round(10 ** (random() * 5.5)),
      error: random() < 0.08,
    }
  })
}

const SESSION = makeSession()

const isActive = ({ up, down }: Tick) => up > 0 || down > 0
const barHeight = (bytes: number) => bytes > 0 ? String(bytes).length * PER_DIGIT : 0

function formatBytes(bytes: number) {
  if (bytes < 1000) return `${bytes} bytes`
  if (bytes < 1e6) return `${(bytes / 1e3).toFixed(1)} kB`
  return `${(bytes / 1e6).toFixed(1)} MB`
}

const pad = (n: number) => String(n).padStart(2, '0')

function formatTime(tick: number) {
  const seconds = tick * TICK_SECONDS
  return `${Math.floor(seconds / 60)}:${pad(seconds % 60)}`
}

function formatLength(ticks: number) {
  const seconds = ticks * TICK_SECONDS
  return `${pad(Math.floor(seconds / 3600))}:${pad(Math.floor(seconds / 60) % 60)}:${pad(seconds % 60)}`
}

// The first busy tick after the quiet stretch that follows `from`
function nextBurst(from: number) {
  let i = from + 1
  while (i < TICKS && isActive(SESSION[i])) i++
  while (i < TICKS && !isActive(SESSION[i])) i++
  return i < TICKS ? i : from
}

const SessionWaveform = () => {
  const [position, setPosition] = useState(0)
  const [playing, setPlaying] = useState(false)
  const playerRef = useRef<HTMLDivElement>(null)
  const waveRef = useRef<HTMLDivElement>(null)
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
    const rect = waveRef.current?.getBoundingClientRect()
    if (!rect) return 0
    return Math.min(TICKS - 1, Math.max(0, Math.floor(((clientX - rect.left) / rect.width) * TICKS)))
  }

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
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

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen()
    else playerRef.current?.requestFullscreen?.()
  }

  const current = SESSION[position]

  return (
    <figure className={styles.example}>
      <div ref={playerRef} className={styles.player}>
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
            <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M5 3v10M11 3v10" /></svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M4.5 2.75v10.5L13 8z" /></svg>
          )}
        </button>

        <span className={styles.time}>{formatTime(position)}</span>

        <div
          className={styles.track}
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
          <div ref={waveRef} className={styles.wave} style={{ maxWidth: WIDTH }}>
            <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} aria-hidden="true">
              <line className={styles.dots} x1={0} x2={WIDTH} y1={MIDDLE} y2={MIDDLE} />
              {SESSION.map((tick, i) => {
                if (!isActive(tick)) return null
                const x = i * STEP
                const up = barHeight(tick.up)
                const down = barHeight(tick.down)
                return (
                  <g key={i}>
                    {up > 0 && <rect className={styles.barUp} x={x} y={MIDDLE - up} width={BAR} height={up} />}
                    {down > 0 && <rect className={tick.error ? styles.barError : styles.barDown} x={x} y={MIDDLE} width={BAR} height={down} />}
                  </g>
                )
              })}
            </svg>
            <span className={styles.knob} style={{ left: `${((position * STEP + BAR / 2) / WIDTH) * 100}%` }} />
          </div>
        </div>

        <span className={styles.length}>{formatLength(TICKS)}</span>

        <button type="button" className={styles.fullscreen} onClick={toggleFullscreen} aria-label="Full screen">
          <svg aria-hidden="true" viewBox="0 0 18 18" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 1.75h5.25V7M16.25 1.75 11.5 6.5M7 16.25H1.75V11M1.75 16.25 6.5 11.5M1.75 7V1.75H7M1.75 1.75 6.5 6.5M16.25 11v5.25H11M16.25 16.25 11.5 11.5" /></svg>
        </button>
      </div>
      <figcaption className={styles.caption}>
        Try it: a working version of the waveform concept. Drag along the timeline, or press play to jump between bursts of activity.
      </figcaption>
    </figure>
  )
}

export default SessionWaveform
