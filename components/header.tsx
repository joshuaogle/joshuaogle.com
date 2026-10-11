import BackLink from './back-link'
import styles from '../styles/components/_header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <BackLink />

      <div className={styles.headerButtons}>
        <a
          className={styles.headerButton}
          href="mailto:joshua@joshuaogle.com">
          👋 Let's talk
        </a>
      </div>
    </header>
  )
}

export default Header
