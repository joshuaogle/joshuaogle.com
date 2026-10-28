import { DocumentArrowDownIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import IconLinkedIn from '../public/images/icon-linkedin.svg'
import LetsTalkSketch from './lets-talk-sketch'
import styles from '../styles/components/_lets-talk.module.css'

// The end of the home page: a way to get in touch for someone who's just seen the work.
// The buttons are sketched in pencil and wipe in, like the case study covers above.
const LetsTalk = () => {
  return (
    <section className={`${styles.letsTalk} centered`} aria-labelledby="lets-talk-title">
      <h2 id="lets-talk-title" className={styles.title}>Let's talk</h2>
      <LetsTalkSketch>
        <div className={styles.buttons}>
          <a className={styles.button} href="mailto:joshua@joshuaogle.com" data-sketch-id="button" data-sketch-reveal>
            <EnvelopeIcon className={styles.icon} aria-hidden="true" />
            joshua@joshuaogle.com
          </a>
          <a className={styles.button} href="/files/joshuaogle-resume.pdf" target="_blank" rel="noopener noreferrer" data-sketch-id="button" data-sketch-reveal>
            <DocumentArrowDownIcon className={styles.icon} aria-hidden="true" />
            Resume
          </a>
          <a className={styles.button} href="http://linkedin.com/in/joshuaogle" target="_blank" rel="noopener noreferrer" data-sketch-id="button" data-sketch-reveal>
            <IconLinkedIn className={styles.icon} aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </LetsTalkSketch>
    </section>
  )
}

export default LetsTalk
