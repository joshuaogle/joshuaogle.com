import { useRouter } from 'next/router'
import Link from 'next/link'
import { Menu } from '@headlessui/react'
import IconGithub from '../public/images/icon-github.svg'
import IconMastodon from '../public/images/icon-mastodon.svg'
import IconDribbble from '../public/images/icon-dribbble.svg'
import IconLinkedIn from '../public/images/icon-linkedin.svg'
import styles from '../styles/components/_header.module.css'

const BackLink = () => {
  const router = useRouter()
  if (router.pathname != "/") {
    return (
      <nav>
        <Link href="/" className={styles.backLink}>
          &#8592; <span className={styles.backText}>Home</span>
        </Link>
      </nav>
    )
  }
}

const Header = () => {
  const logo = (
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className={styles.logo}>
      <path d="M38.5 13.9c-.3-.4-.9-.5-1.3-.1-.4.3-.5.9-.1 1.3 2.3 2.8 3.6 6.3 3.6 9.9 0 4.2-1.6 8.1-4.6 11-3 2.9-6.9 4.6-11 4.6S16.9 39 14 36c-2.9-3-4.6-6.9-4.6-11 0-4.7 2.1-9.1 5.7-12.1 1.2-.9 1.9-2.2 1.9-3.8 0-2.6-2.1-4.7-4.7-4.7-1.4 0-2.6.6-3.4 1.5C3.2 10.7 0 17.6 0 25c0 3.4.7 6.6 2 9.7 1.3 3 3.1 5.7 5.4 7.9 2.3 2.3 5 4.1 7.9 5.4 3.1 1.3 6.4 2 9.7 2 3.3 0 6.6-.7 9.7-2 3-1.3 5.7-3.1 7.9-5.4 2.3-2.3 4.1-5 5.4-7.9 1.3-3.1 2-6.4 2-9.7 0-4.2-1.1-8.3-3-12l-.9-1.5c-.3-.4-.9-.6-1.3-.3s-.6.9-.3 1.3.6.9.8 1.4c.3.6.7 1.3.9 1.9.1.1.1.3.1.5 0 .5-.4.9-.9.9-.7 0-.8-.8-2.2-3.3-1.9-3.2-4.7-5.8-7.9-7.6-.5-.3-1-.1-1.3.4-.3.5-.1 1 .4 1.3 2.5 1.4 4.7 3.4 6.4 5.7.2.2.3.4.3.7 0 .5-.4.9-.9.9-.3 0-.5-.1-.7-.3" fill="currentColor"/>
      <ellipse cx="35.65" cy="12.4" rx=".9" ry=".9" fill="currentColor"/>    
    </svg>
  )
  
  return (
    <header className={styles.header}>

      <BackLink />

      <Menu className={styles.menu}>
        <Menu.Button className={styles.menuButton}>
          👋
        </Menu.Button>
        <Menu.Items className={`${styles.menuItems} surface`}>
          <h2 className={styles.title}>
            You've got good taste, let's chat
          </h2>

          <div className={ styles.icons }>
            <a href="mailto:joshua@joshuaogle.com">joshua@joshuaogle.com</a>

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
          </div>
        </Menu.Items>
      </Menu>
    </header>
  )
}

export default Header
