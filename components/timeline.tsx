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
        I lead design for some of
        <EmployerLogo src="/images/timeline-hashicorp.svg" alt="HashiCorp" />
        <span className={styles.employerTitle}>HashiCorp's</span> most popular infrastructure automation products and helped grow our design team to 30+ designers across a dozen projects.
        Before that I was at
        <EmployerLogo src="/images/timeline-thoughtbot.svg" alt="thoughtbot" />
        <span className={styles.employerTitle}>thoughtbot</span>,
        where I led dozens of design sprints and helped clients get from zero to launch, and even co-founded my own consultancy
        <EmployerLogo src="/images/timeline-brightbit.svg" alt="Brightbit" />
        <span className={styles.employerTitle}>Brightbit</span>.
      </p>
    </section>
  )
}

export default Timeline