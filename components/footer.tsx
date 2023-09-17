import { Switch } from '@headlessui/react'
import IconGithub from '../public/images/icon-github.svg'
import IconMastodon from '../public/images/icon-mastodon.svg'
import IconDribbble from '../public/images/icon-dribbble.svg'
import IconLinkedIn from '../public/images/icon-linkedin.svg'
import IconColorScheme from '../public/images/color-scheme.svg'
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
    <footer className={styles.footer + " centered"}>
      <h2 className={styles.title}>
        You've got good taste, get in touch sometime
      </h2>

      <div className={ styles.icons }>
        <span>
          Say hi at <a href="mailto:joshua@joshuaogle.com">joshua@joshuaogle.com</a>.
        </span>

        <nav className={styles.links}>
          <a href="https://mastodon.social/@joshuaogle">
            <IconMastodon />
          </a>
          <a href="http://dribbble.com/joshuaogle">
            <IconDribbble />
          </a>
          <a href="http://linkedin.com/in/joshuaogle">
            <IconLinkedIn />
          </a>
          <a href="http://github.com/joshuaogle">
            <IconGithub />
          </a>
        </nav>

        <Switch
          checked={isDarkMode}
          onChange={toggleColorScheme}
          className={`surface ${styles.switchBg} ${ifSwitchIsOn(styles.switchBgOn)}`}
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
      </div>

      <small className={styles.copyright}>
        &copy;
        All rights reserved.
      </small>
    </footer>
  )
}

export default Footer
