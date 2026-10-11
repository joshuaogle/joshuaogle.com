'use client'

import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

// False during server rendering and hydration, true afterwards. Use it to
// render browser-only output without a hydration mismatch.
export function useIsClient() {
  return useSyncExternalStore(subscribe, () => true, () => false)
}
