import Image from 'next/image'
import styles from '../styles/components/_timeline.module.css'

type Props = {
  employer: any,
}

const TimelineEmployers = ({employer}: Props) => {
  return (
    <div className={styles.employerContainer}>
        <h2 className={styles.employerTitle}>
          {employer.title}
        </h2>
        <div className={styles.employerMeta}>
          <small>
            {employer.role}
            <Image
              src={employer.icon}
              alt={employer.company}
              height="20"
              width="20"
              className={styles.employerIcon}
            />
            {employer.company}
          </small>
        </div>
        <p className={styles.employerCopy}>
          {employer.copy}
        </p>
    </div>
  )
}

export default TimelineEmployers