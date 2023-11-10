import Image from 'next/image'
import TimelineCard from './timeline-card'
import styles from '../styles/components/_timeline-item.module.css'

type Props = {
  icon: string,
  company: string,
  title: string,
  when: string,
  caseStudies: array,
  children: React.ReactNode
}

const TimelineItem = ({ icon, company, title, when, caseStudies, children }: Props) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>
          <Image
            src={icon}
            height="32"
            width="32"
            className={styles.icon}
            alt={company}
          />
          {company}
        </h3>
        <small className={styles.subtitle}>
          {title} • {when}
        </small>
        <p>
          {children}
        </p>
      </div>

      {caseStudies &&
        <div className={styles.cardContainer}>
          {caseStudies.map((study) => (
            <TimelineCard summary={study.summary} href={study.href} />
          ))}
        </div>
      }
    </div>
  )
}

export default TimelineItem
