import Link from 'next/link'
import { Switch } from '@headlessui/react'
import IconColorScheme from '../public/images/color-scheme.svg'
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

      <Switch
        checked={isDarkMode}
        onChange={toggleColorScheme}
        className={`surface ${styles.switch} ${ifSwitchIsOn(styles.switchBgOn)}`}
      >
        <span
          aria-hidden="true"
          className={`${styles.switchIndicator} ${ifSwitchIsOn(styles.switchIndicatorOn)}`}
        >
          <IconColorScheme />
        </span>
        <span className={styles.srOnly}>
          Use setting
        </span>
      </Switch>
    </footer>
  )
}

export default Footer
