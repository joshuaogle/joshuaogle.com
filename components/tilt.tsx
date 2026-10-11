'use client'

import { useEffect, useState, type ComponentProps } from 'react'
import ParallaxTilt from 'react-parallax-tilt'

// react-parallax-tilt measures the DOM and injects glare elements, which
// doesn't match the server-rendered HTML. Render the children untilted until
// after hydration, then wrap them.
const Tilt = ({ children, ...props }: ComponentProps<typeof ParallaxTilt>) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return <ParallaxTilt {...props}>{children}</ParallaxTilt>
}

export default Tilt
