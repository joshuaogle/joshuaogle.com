import { useState } from 'react'
import { Switch } from '@headlessui/react'
import styles from '../styles/components/_theme-toggle.module.css';

const ThemeToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <>
      <Switch checked={isEnabled} onChange={setIsEnabled}>
        <p>
          {isEnabled && "I am enabled!"}
          {!isEnabled && "I am not enabled!"}
        </p>
      </Switch>
    </>
  )
}

export default ThemeToggle
