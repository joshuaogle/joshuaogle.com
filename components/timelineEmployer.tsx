import Image from 'next/image'
import styles from '../styles/components/_timeline.module.css'

type Props = {
  employer: any,
}

const TimelineEmployers = ({employer, activeStudy}: Props) => {
  return (
    <div
      className={styles.employerContainer}
      style={{ "--theme-color-heading": activeStudy.summary.theme.colorHeading }}
    >
      <div className={styles.employerMeta}>
        <small>
          {employer.when}
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
      <h2 className={styles.employerTitle}>
        {employer.title}
      </h2>
      <div className={styles.employerMeta}>
        <small>
          {employer.role}
        </small>
      </div>
      <p className={styles.employerCopy}>
        {employer.copy}
      </p>
    </div>
  )
}

export default TimelineEmployers