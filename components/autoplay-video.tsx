'use client'

import { useEffect, useRef } from 'react'

type Props = {
  src: string
}

// React doesn't write `muted` into server-rendered HTML, and browsers only
// autoplay muted video, so mute and start playback after hydration
const AutoplayVideo = ({ src }: Props) => {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    video.muted = true
    video.play().catch(() => {
      // Autoplay can still be refused (e.g. data saver); the first frame stays visible
    })
  }, [])

  return <video ref={ref} src={src} muted playsInline />
}

export default AutoplayVideo
