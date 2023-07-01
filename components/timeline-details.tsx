import Image from 'next/image'
import styles from '../styles/components/_timeline-details.module.css'

type Props = {
  icon: string,
  company: string,
  title: string,
  when: string,
  children: React.ReactNode
}

const TimelineDetails = ({ icon, company, title, when, children }: Props) => {
  return (
    <>
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
    </>
  )
}

export default TimelineDetails
