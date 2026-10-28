import { DocumentArrowDownIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import IconLinkedIn from '../public/images/icon-linkedin.svg'
import styles from '../styles/components/_lets-talk.module.css'

// The end of the home page: a way to get in touch for someone who's just seen the work
const LetsTalk = () => {
  return (
    <section className={`${styles.letsTalk} centered`} aria-labelledby="lets-talk-title">
      <h2 id="lets-talk-title" className={styles.title}>Let's talk</h2>
      <p className={styles.text}>
        The best way to reach me is email. I'm happy to talk about any of this work.
      </p>
      <div className={styles.buttons}>
        <a className={styles.button} href="mailto:joshua@joshuaogle.com">
          <EnvelopeIcon className={styles.icon} aria-hidden="true" />
          joshua@joshuaogle.com
        </a>
        <a className={styles.button} href="/files/joshuaogle-resume.pdf" target="_blank" rel="noopener noreferrer">
          <DocumentArrowDownIcon className={styles.icon} aria-hidden="true" />
          Resume
        </a>
        <a className={styles.button} href="http://linkedin.com/in/joshuaogle" target="_blank" rel="noopener noreferrer">
          <IconLinkedIn className={styles.icon} aria-hidden="true" />
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default LetsTalk
