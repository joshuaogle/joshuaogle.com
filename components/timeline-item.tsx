import Image from 'next/image'
import styles from '../styles/components/_timeline-item.module.css'

type Props = {
  icon: String,
  company: String,
  title: String,
  when: String,
  children: React.ReactNode
}

const Timeline = ({ icon, company, title, when, children }: Props) => {
  return (
    <li className={styles.place}>
      <div className={styles.details}>
        <h3 className={styles.company}>
          <Image
            src={icon}
            height="32"
            width="32"
            className={styles.icon}
          />
          {company}
        </h3>
        <div className={styles.span}>
          {title}, {when}
        </div>
        <p className={styles.summary}>
          {children}
        </p>
      </div>
    </li>
  )
}

export default Timeline
