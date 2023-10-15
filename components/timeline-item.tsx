import Image from 'next/image'
import styles from '../styles/components/_timeline-item.module.css'

type Props = {
  icon: string,
  company: string,
  title: string,
  when: string,
  children: React.ReactNode
}

const TimelineItem = ({ icon, company, title, when, children }: Props) => {
  return (
    <div className={styles.details}>
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
  )
}

export default TimelineItem
