import Link from 'next/link'
import Tilt from 'react-parallax-tilt';
import styles from '../styles/components/_case-study-card.module.css'

const TimelineCaseStudy = ({study}) => {
  return (
    <Link
      href={study.href}
      className={styles.cardContainer}>
      <Tilt
        scale={1.05}
        tiltMaxAngleX={5}
        tiltMaxAngleY={10}
        perspective={2000}
        transitionSpeed={10000}
        className={styles.card}
        style={{
          "--bg-start": study.summary.theme.colorBGLight,
          "--bg-end": study.summary.theme.colorBGDark,
          "--primary": study.summary.theme.colorPrimary,
          "--shadow-length": "100%"
        } as React.CSSProperties}>
        <div className={styles.textContent}>
          <small>
            {study.summary.meta.date}
          </small>

          <h3 className={styles.title}>
            {study.summary.title}
          </h3>

          <small>
            {study.summary.name} • {study.summary.meta.role}
          </small>
        </div>

        <img
          src={study.summary.theme.preview}
          className={styles.image}
        />
      </Tilt>
    </Link>
  )
}

export default TimelineCaseStudy