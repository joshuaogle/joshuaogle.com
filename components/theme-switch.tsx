'use client'

import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { getColorScheme, setColorScheme } from '../lib/color-scheme'
import styles from '../styles/components/_footer.module.css'

const ThemeSwitch = () => {
  // The real value comes from the <html> attribute set by the inline script in
  // app/layout.tsx; read it after mount so server and client markup match
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    setIsDarkMode(getColorScheme() === 'dark')
  }, [])

  const handleChange = (dark: boolean) => {
    setColorScheme(dark ? 'dark' : 'light')
    setIsDarkMode(dark)
  }

  return (
    <div className={styles.switchContainer}>
      <MoonIcon className={styles.switchLabel}/>
      <Switch
        checked={isDarkMode}
        onChange={handleChange}
        className={styles.switch}
      >
        <span
          aria-hidden="true"
          className={styles.switchIndicator}
        >
        </span>
        <span className={styles.srOnly}>
          Switch theme
        </span>
      </Switch>
      <SunIcon className={styles.switchLabel}/>
    </div>
  )
}

export default ThemeSwitch
