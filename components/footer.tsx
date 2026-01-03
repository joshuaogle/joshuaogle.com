import Link from 'next/link'
import { Switch } from '@headlessui/react'
import { SunIcon } from '@heroicons/react/24/solid'
import { MoonIcon } from '@heroicons/react/24/solid'
import IconGithub from '../public/images/icon-github.svg'
import IconMastodon from '../public/images/icon-mastodon.svg'
import IconDribbble from '../public/images/icon-dribbble.svg'
import IconLinkedIn from '../public/images/icon-linkedin.svg'
import { switchColorScheme, getColorScheme } from '../lib/colorSchemeProvider'
import styles from '../styles/components/_footer.module.css'

const GithubLink = ({children}) => {
  return (
    <Link
      href="https://github.com/joshuaogle/joshuaogle.com"
      target="_new">
      {children}
    </Link>
  )
}

const Footer = ({ isDarkMode, setIsDarkMode }) => {
  const socialLinks = [
    {label: "Mastodon", icon: IconMastodon, href: "https://mastodon.social/@joshuaogle"},
    {label: "Dribbble", icon: IconDribbble, href: "http://dribbble.com/joshuaogle"},
    {label: "LinkedIn", icon: IconLinkedIn, href: "http://linkedin.com/in/joshuaogle"},
    {label: "Github", icon: IconGithub, href: "http://github.com/joshuaogle"}
  ]

  // called when theme button is pressed
  const toggleColorScheme = () => {
    switchColorScheme();
    const newScheme = getColorScheme();
    setIsDarkMode(newScheme === "dark");
  };

  const ifSwitchIsOn = (cssClass) => {
    return !isDarkMode ? cssClass : '';
  }

  return (
    <footer className={styles.container + " centered"}>
      <div className={styles.leftColumn}>
        <div className={styles.socialLinks}>
          {socialLinks.map((socialLink) => (
            <a
              key={socialLink.label}
              className={styles.socialLink}
              href={socialLink.href}
              target="_new"
              title={socialLink.label}>
              <socialLink.icon/>
            </a>
          ))}
        </div>
        
        <small className={styles.copyright}>
          &copy;
          All rights reserved.
          &nbsp;
          <GithubLink>Made by hand*</GithubLink> in Colorado.
        </small>
      </div>

      <div className={styles.switchContainer}>
        <MoonIcon className={styles.switchLabel}/>
        <Switch
          checked={isDarkMode}
          onChange={toggleColorScheme}
          className={`${styles.switch} ${ifSwitchIsOn(styles.switchBgOn)}`}
        >
          <span
            aria-hidden="true"
            className={`${styles.switchIndicator} ${ifSwitchIsOn(styles.switchIndicatorOn)}`}
          >
          </span>
          <span className={styles.srOnly}>
            Switch theme
          </span>
        </Switch>
        <SunIcon className={styles.switchLabel}/>
      </div>
    </footer>
  )
}

export default Footer
