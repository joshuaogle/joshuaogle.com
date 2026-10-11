'use client'

import { useEffect, useState } from 'react'
import styles from '../styles/components/_welcome.module.css'

const TIME_ZONE = 'America/Denver'

// The current time in Denver, or null until mounted (the static HTML is built
// ahead of time, so the server can't know what time the visitor arrives)
const useDenverNow = () => {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
  }, [])

  return now
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
