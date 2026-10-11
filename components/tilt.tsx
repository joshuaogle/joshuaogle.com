'use client'

import { useEffect, useState, type ComponentProps } from 'react'
import ParallaxTilt from 'react-parallax-tilt'
import { usePrefersReducedMotion } from '../lib/use-prefers-reduced-motion'

// react-parallax-tilt measures the DOM and injects glare elements, which
// doesn't match the server-rendered HTML. Render the children untilted until
// after hydration, then wrap them (unless the visitor prefers reduced motion).
const Tilt = ({ children, ...props }: ComponentProps<typeof ParallaxTilt>) => {
  const [mounted, setMounted] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || prefersReducedMotion) {
    return <>{children}</>
  }

  return <ParallaxTilt {...props}>{children}</ParallaxTilt>
}

export default Tilt
