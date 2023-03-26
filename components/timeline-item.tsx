import Image from 'next/image'
import styles from '../styles/components/_timeline-item.module.css'

type Props = {
  icon: String,
  company: String,
  title: String,
  when: String,
  children: React.ReactNode
}

const TimelineItem = ({ icon, company, title, when, children }: Props) => {
  return (
    <li className={styles.place}>
      <div className={styles.details}>
        <h3 className={styles.company}>
          <Image
            src={icon}
            height="32"
            width="32"
            className={styles.icon}
            alt={company}
          />
          {company}
        </h3>
        <small className={styles.employment}>
          {title}, {when}
        </small>
        <div className={styles.summary}>
          {children}
        </div>
      </div>
    </li>
  )
}

export default TimelineItem
