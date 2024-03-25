import Link from 'next/link'
import { Switch } from '@headlessui/react'
import { SunIcon } from '@heroicons/react/24/solid'
import { MoonIcon } from '@heroicons/react/24/solid'
import styles from '../styles/components/_footer.module.css'

const GithubLink = ({children}) => {
  return (
    <Link
      href="https://github.com/joshuaogle/joshuaogle.com"
      target="_new">
      {children}
    </Link>
  )
}

const Footer = ({ isDarkMode, setIsDarkMode }) => {
  // called when theme button is pressed
  const toggleColorScheme = () => {
    const oldColorScheme = localStorage.getItem("colorScheme");
    const newColorScheme = (oldColorScheme === "dark") ? "light" : "dark";
    localStorage.setItem("colorScheme", newColorScheme);
    setIsDarkMode(!isDarkMode);
  };

  const ifSwitchIsOn = (cssClass) => {
    return !isDarkMode ? cssClass : '';
  }

  return (
    <footer className={styles.container + " centered"}>
      <small className={styles.copyright}>
        &copy;
        All rights reserved.
        &nbsp;
        <GithubLink>Made by hand*</GithubLink> in Colorado.
      </small>

      <div className={styles.switchContainer}>
        <MoonIcon className={styles.switchLabel}/>
        <Switch
          checked={isDarkMode}
          onChange={toggleColorScheme}
          className={`${styles.switch} ${ifSwitchIsOn(styles.switchBgOn)}`}
        >
          <span
            aria-hidden="true"
            className={`${styles.switchIndicator} ${ifSwitchIsOn(styles.switchIndicatorOn)}`}
          >
          </span>
          <span className={styles.srOnly}>
            Switch theme
          </span>
        </Switch>
        <SunIcon className={styles.switchLabel}/>
      </div>
    </footer>
  )
}

export default Footer
