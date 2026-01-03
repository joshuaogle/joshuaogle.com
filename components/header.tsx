import { useRouter } from 'next/router'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
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

const BackLink = () => {
  const router = useRouter()
  if (router.pathname != "/") {
    return (
      <Link href="/" className={styles.backButton}>
        <ArrowLeftIcon className={styles.backIcon}/>
      </Link>
    )
  }
}


export default Header
