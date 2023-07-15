import { Switch } from '@headlessui/react'
import styles from '../styles/components/_footer.module.css'

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
    <footer className={styles.footer}>
      <h2 className={styles.title}>
        You've got good taste, get in touch sometime
      </h2>

      <p>
        Say hi at <a href="mailto:joshua@joshuaogle.com">joshua@joshuaogle.com</a>.
      </p>
      <p>
        <a href="http://github.com/joshuaogle">Github</a>
        <a href="https://mastodon.social/@joshuaogle">Mastodon</a>
        <a href="http://dribbble.com/joshuaogle">Dribbble</a>
        <a href="http://linkedin.com/in/joshuaogle">LinkedIn</a>
      </p>

      <Switch
        checked={isDarkMode}
        onChange={toggleColorScheme}
        className={`${styles.switchBg} ${ifSwitchIsOn(styles.switchBgOn)}`}
      >
        <span className={styles.srOnly}>
          Use setting
        </span>
        <span
          aria-hidden="true"
          className={`${styles.switchIndicator} ${ifSwitchIsOn(styles.switchIndicatorOn)}`}
        />
      </Switch>

      <small className={styles.copyright}>
        &copy;
        All rights reserved.
      </small>
    </footer>
  )
}

export default Footer
