'use client'

import { useSyncExternalStore } from 'react'
import { Switch } from '@headlessui/react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { getColorScheme, setColorScheme, subscribeToColorScheme } from '../lib/color-scheme'
import styles from '../styles/components/_footer.module.css'

const ThemeSwitch = () => {
  // The source of truth is the <html> attribute set by the inline script in
  // app/layout.tsx. The server snapshot is a placeholder; the switch's
  // position comes from CSS, so it's right before hydration either way.
  const isDarkMode = useSyncExternalStore(
    subscribeToColorScheme,
    () => getColorScheme() === 'dark',
    () => true,
  )

  return (
    <div className={styles.switchContainer}>
      <MoonIcon className={styles.switchLabel}/>
      <Switch
        checked={isDarkMode}
        onChange={(dark: boolean) => setColorScheme(dark ? 'dark' : 'light')}
        className={styles.switch}
      >
        <span
          aria-hidden="true"
          className={styles.switchIndicator}
        >
        </span>
        <span className={styles.srOnly}>
          Dark mode
        </span>
      </Switch>
      <SunIcon className={styles.switchLabel}/>
    </div>
  )
}

export default ThemeSwitch
