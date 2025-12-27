import Link from 'next/link'
import Tilt from 'react-parallax-tilt';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import styles from '../styles/components/_case-study-card.module.css'

const TimelineCaseStudy = ({study, active}) => {

  return (
    <div className={`${styles.cardContainer} ${active ? styles.active : ''}`}>
      <Tilt
        scale={1.05}
        tiltMaxAngleX={5}
        tiltMaxAngleY={15}
        perspective={2000}
        transitionSpeed={10000}
        glareEnable={true}
        glareMaxOpacity={0.2}
        glarePosition="top"
        >
        <Link
          href={study.href} 
          className={styles.card}
          style={{
            "--bg-start": study.summary.theme.colorBGLight,
            "--bg-end": study.summary.theme.colorBGDark,
            "--primary": study.summary.theme.colorPrimary
          } as React.CSSProperties}>
          <div className={styles.textContent}>
            <h3 className={styles.title}>
              {study.summary.title}
            </h3>

            <small className={styles.meta}>
              {study.summary.name} • {study.summary.meta.date} • {study.summary.meta.role}
            </small>
          </div>

          <img
            src={study.summary.theme.preview}
            className={styles.image}
          />

          <div
            className={styles.arrow}
            style={{
              backgroundColor: study.summary.theme.colorPrimary
            } as React.CSSProperties}>
            <ArrowRightIcon />
          </div>
          <div className={styles.staples}></div>
        </Link>
      </Tilt>
    </div>
  )
}

export default TimelineCaseStudy