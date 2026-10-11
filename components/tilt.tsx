'use client'

import { type ComponentProps } from 'react'
import ParallaxTilt from 'react-parallax-tilt'
import { useIsClient } from '../lib/use-is-client'
import { usePrefersReducedMotion } from '../lib/use-prefers-reduced-motion'

// react-parallax-tilt measures the DOM and injects glare elements, which
// doesn't match the server-rendered HTML. Render the children untilted until
// after hydration, then wrap them (unless the visitor prefers reduced motion).
const Tilt = ({ children, ...props }: ComponentProps<typeof ParallaxTilt>) => {
  const isClient = useIsClient()
  const prefersReducedMotion = usePrefersReducedMotion()

  if (!isClient || prefersReducedMotion) {
    return <>{children}</>
  }

  return <ParallaxTilt {...props}>{children}</ParallaxTilt>
}

export default Tilt
