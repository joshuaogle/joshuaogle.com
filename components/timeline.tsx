import Image from 'next/image'
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
    </section>
  )
}

export default Timeline