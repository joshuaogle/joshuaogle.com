import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from '@headlessui/react'
import IconGithub from '../public/images/icon-github.svg'
import IconMastodon from '../public/images/icon-mastodon.svg'
import IconDribbble from '../public/images/icon-dribbble.svg'
import IconLinkedIn from '../public/images/icon-linkedin.svg'
import { DocumentArrowDownIcon } from '@heroicons/react/24/solid'
import styles from '../styles/components/_header.module.css'

const Header = () => {
  const menuLinks = [
    {label: "Mastodon", icon: IconMastodon, href: "https://mastodon.social/@joshuaogle"},
    {label: "Dribbble", icon: IconDribbble, href: "http://dribbble.com/joshuaogle"},
    {label: "LinkedIn", icon: IconLinkedIn, href: "http://linkedin.com/in/joshuaogle"},
    {label: "Github", icon: IconGithub, href: "http://github.com/joshuaogle"},
    {label: "Resumé", icon: DocumentArrowDownIcon, href: "/files/joshuaogle-resume.pdf"}
  ]

  return (
    <header className={styles.header}>
      <BackLink />

      <Menu
        as="nav"
        className={styles.menu}>
        <MenuLink/>

        <Menu.Items className={`${styles.menuList} surface`}>
          <h2
            className={styles.menuTitle}
            key="menuItemTitle">
            You've got good taste, let's chat
          </h2>

          <Menu.Item key="menuItemEmail">
            <a
              className={styles.menuLink}
              href="mailto:joshua@joshuaogle.com">
              joshua@joshuaogle.com
            </a>
          </Menu.Item>

          {menuLinks.map((menuLink) => (
            <Menu.Item key={menuLink.label}>
              <a
                className={styles.menuLink}
                href={menuLink.href}
                target="_new">
                <menuLink.icon/>
                {menuLink.label}
              </a>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
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

const MenuLink = () => {
  return (
    <Menu.Button className={styles.menuButton}>
      <Image
        src="/images/menu.png"
        height="40"
        width="59"
        alt="Back"
        className="sketch"
      />
    </Menu.Button>
  )
}

export default Header
