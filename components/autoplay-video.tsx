'use client'

import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../lib/use-prefers-reduced-motion'

type Props = {
  src: string
  label: string
}

// React doesn't write `muted` into server-rendered HTML, and browsers only
// autoplay muted video, so mute and start playback after hydration. Visitors
// who prefer reduced motion get a paused video with controls instead.
const AutoplayVideo = ({ src, label }: Props) => {
  const ref = useRef<HTMLVideoElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const video = ref.current
    if (!video) return
    // Check the media query directly: on the first pass the hook hasn't
    // caught up yet, and playback must not start even briefly
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
      return
    }
    video.muted = true
    video.play().catch(() => {
      // Autoplay can still be refused (e.g. data saver); the first frame stays visible
    })
  }, [prefersReducedMotion])

  return (
    <video
      ref={ref}
      src={src}
      aria-label={label}
      muted
      playsInline
      controls={prefersReducedMotion}
    />
  )
}

export default AutoplayVideo
