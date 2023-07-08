import ThemeToggle from './theme-toggle';
import styles from '../styles/components/_footer.module.css';

const Footer = () => {
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

      <ThemeToggle />

      <small className={styles.copyright}>
        &copy;
        All rights reserved.
      </small>
    </footer>
  )
}

export default Footer
