import Image from 'next/image'
import Link from 'next/link'
import { DocumentArrowDownIcon } from '@heroicons/react/24/solid'
import IconLinkedIn from '../public/images/icon-linkedin.svg'
import styles from '../styles/components/_timeline.module.css'

const EmployerLogo = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    src={src}
    alt={alt}
    width={32}
    height={32}
    className={styles.employerLogo}
  />
);

const Timeline = () => {
  return (
    <section className="centered">
      <p className={styles.textContent}>
        I lead UX design for
        <EmployerLogo src="/images/timeline-hashicorp.svg" alt="HashiCorp" />
        <span className={styles.employerTitle}>HashiCorp's</span> most trusted infrastructure automation tools and helped grow our design team to 40+ designers.
        Before that I was at
        <EmployerLogo src="/images/timeline-thoughtbot.svg" alt="thoughtbot" />
        <span className={styles.employerTitle}>thoughtbot </span>
        helping startups find their market,
        and co-fouded a consultancy called
        <EmployerLogo src="/images/timeline-brightbit.svg" alt="Brightbit" />
        <span className={styles.employerTitle}>Brightbit</span>.
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
          target="_blank">
          <DocumentArrowDownIcon className={styles.actionIcon}/>
          Resume
        </a>
      </div>
    </section>
  )
}

export default Timeline