import { Switch } from '@headlessui/react'
import colorSchemeProvider from '../lib/colorSchemeProvider'
import styles from '../styles/components/_footer.module.css'

const Footer = () => {
  const [ colorScheme, setColorScheme ] = colorSchemeProvider();
  const changeColorScheme = (isDark) => {
    isDark ? setColorScheme("dark") : setColorScheme("light");
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
        checked={colorScheme === "dark"}
        onChange={changeColorScheme}
        className={`${styles.switchBg} ${colorScheme === "dark" ? styles.switchBgOn : null}`}
      >
        <span className={styles.srOnly}>
          Use setting
        </span>
        <span
          aria-hidden="true"
          className={`${styles.switch} ${colorScheme === "dark" ? styles.switchOn : null}`} />
      </Switch>

      <small className={styles.copyright}>
        &copy;
        All rights reserved.
      </small>
    </footer>
  )
}

export default Footer
