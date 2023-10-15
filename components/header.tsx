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
      <Link href="/" className={styles.backLink}>
        &#8592; <span className={styles.backText}>Home</span>
      </Link>
    )
  }
}

const Header = () => {
  const Links = [
    {label: "Mastodon", icon: IconMastodon, href: "https://mastodon.social/@joshuaogle"},
    {label: "Dribbble", icon: IconDribbble, href: "http://dribbble.com/joshuaogle"},
    {label: "LinkedIn", icon: IconLinkedIn, href: "http://linkedin.com/in/joshuaogle"},
    {label: "Github", icon: IconGithub, href: "http://github.com/joshuaogle"}
  ]

  return (
    <header className={styles.header}>
      <BackLink />

      <Menu as="nav" className={styles.menu}>
        <Menu.Button className={styles.menuButton}>
          👋
        </Menu.Button>

        <Menu.Items className={`${styles.menuItems} surface`}>
          <h2 className={styles.title} key="menuItemTitle">
            You've got good taste, let's chat
          </h2>

          <Menu.Item key="menuItemEmail">
            <a className={styles.link} href="mailto:joshua@joshuaogle.com">
              joshua@joshuaogle.com
            </a>
          </Menu.Item>

          {Links.map((Link) => (
            <Menu.Item key={Link.label}>
              <a className={styles.link} href={Link.href} target="_new">
                <Link.icon/>
                {Link.label}
              </a>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </header>
  )
}

export default Header
