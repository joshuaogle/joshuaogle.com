'use client'

import { useSyncExternalStore } from 'react'
import styles from '../styles/components/_welcome.module.css'

const TIME_ZONE = 'America/Denver'
const MINUTE = 60_000

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, MINUTE / 4)
  return () => clearInterval(id)
}

// The current time, updated each minute, or null during server rendering and
// hydration (the static HTML is built ahead of time, so the server can't know
// when the visitor arrives). The snapshot is a whole-minute timestamp so it
// stays stable between ticks.
const useDenverNow = () => {
  const minute = useSyncExternalStore(
    subscribe,
    () => Math.floor(Date.now() / MINUTE),
    () => null,
  )
  return minute === null ? null : new Date(minute * MINUTE)
}

const isWorkingHours = (date: Date) => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    weekday: 'short',
    hour: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(date)
  const weekday = parts.find((part) => part.type === 'weekday')?.value
  const hour = Number(parts.find((part) => part.type === 'hour')?.value)
  const isWorkweek = weekday !== 'Sat' && weekday !== 'Sun'
  return isWorkweek && hour >= 9 && hour < 17
}

export const Status = () => {
  const now = useDenverNow()
  const isOnline = now ? isWorkingHours(now) : false

  return (
    <span className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>
      {isOnline ? 'Online' : 'Offline'}
    </span>
  )
}

export const LocalTime = () => {
  const now = useDenverNow()
  const time = now?.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: TIME_ZONE,
  })

  return (
    <span className={styles.time}>
      {time ?? 'Loading...'} local time
    </span>
  )
}
