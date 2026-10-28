import Image from 'next/image'
import { DocumentArrowDownIcon } from '@heroicons/react/24/solid'
import IconLinkedIn from '../public/images/icon-linkedin.svg'
import styles from '../styles/components/_timeline.module.css'

// Always shown next to the company name, so the logo itself is decorative
const EmployerLogo = ({ src }: { src: string }) => (
  <Image
    src={src}
    alt=""
    width={32}
    height={32}
    className={styles.employerLogo}
  />
);

const Timeline = () => {
  return (
    <section className="centered">
      <p className={styles.textContent}>
        I'm a Principal Product Designer at IBM. Before IBM acquired
        <EmployerLogo src="/images/timeline-hashicorp.svg" />
        <span className={styles.employerTitle}>HashiCorp</span>, I spent eight years leading design for its most trusted infrastructure automation tools, and helped grow our design team to 40+ designers.
      </p>
      <p className={styles.textContent}>
        Before that, I led design for clients like Expedia, American Express, AT&amp;T and Dollar Shave Club as a consultant at
        <EmployerLogo src="/images/timeline-thoughtbot.svg" />
        <span className={styles.employerTitle}>thoughtbot</span>{' '}
        and at
        <EmployerLogo src="/images/timeline-brightbit.svg" />
        <span className={styles.employerTitle}>Brightbit</span>, the consultancy I co-founded.
        Being a designer, a front-end developer and a founder taught me to see the whole product: what it takes to build, what it needs to earn, and who it's for.
      </p>
      
      <div className={styles.actionButtons}>
        <a
          className={styles.actionButton}
          href="http://linkedin.com/in/joshuaogle"
          target="_blank"
          rel="noopener noreferrer">
          <IconLinkedIn className={styles.actionIcon}/>
          LinkedIn
        </a>
        <a
          className={`${styles.actionButton} ${styles.actionButtonSecondary}`}
          href="/files/joshuaogle-resume.pdf"
          target="_blank"
          rel="noopener noreferrer">
          <DocumentArrowDownIcon className={styles.actionIcon}/>
          Resume
        </a>
      </div>
    </section>
  )
}

export default Timeline