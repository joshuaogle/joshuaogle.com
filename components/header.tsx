import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
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
      <Link href="/" className={styles.backLink}>
        <Image
          src="/images/back.png"
          height="36"
          width="60"
          alt="Home"
          className="sketch"
        />
      </Link>
    )
  }
}


export default Header
