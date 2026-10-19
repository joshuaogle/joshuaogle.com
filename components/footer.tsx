import IconGithub from '../public/images/icon-github.svg'
import IconMastodon from '../public/images/icon-mastodon.svg'
import IconDribbble from '../public/images/icon-dribbble.svg'
import IconLinkedIn from '../public/images/icon-linkedin.svg'
import ThemeSwitch from './theme-switch'
import styles from '../styles/components/_footer.module.css'

const socialLinks = [
  {label: "Mastodon", icon: IconMastodon, href: "https://mastodon.social/@joshuaogle"},
  {label: "Dribbble", icon: IconDribbble, href: "http://dribbble.com/joshuaogle"},
  {label: "LinkedIn", icon: IconLinkedIn, href: "http://linkedin.com/in/joshuaogle"},
  {label: "Github", icon: IconGithub, href: "http://github.com/joshuaogle"}
]

const Footer = () => {
  return (
    <footer className={styles.container + " centered"}>
      <div className={styles.leftColumn}>
        <div className={styles.socialLinks}>
          {socialLinks.map((socialLink) => (
            <a
              key={socialLink.label}
              className={styles.socialLink}
              href={socialLink.href}
              target="_blank"
              rel="noopener noreferrer"
              title={socialLink.label}
              aria-label={socialLink.label}>
              <socialLink.icon aria-hidden="true"/>
            </a>
          ))}
        </div>

        <small className={styles.copyright}>
          &copy;
          All rights reserved.
          &nbsp;
          Made in Colorado.
        </small>
      </div>

      <ThemeSwitch />
    </footer>
  )
}

export default Footer
