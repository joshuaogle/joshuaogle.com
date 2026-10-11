import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Tilt from './tilt'
import { caseStudyHref, type CaseStudy } from '../lib/case-studies'
import styles from '../styles/components/_case-study-card.module.css'

type Props = {
  study: CaseStudy
  active: boolean
}

const CaseStudyCard = ({ study, active }: Props) => {
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
          href={caseStudyHref(study)}
          className={styles.card}
          style={{
            "--bg-start": study.theme.colorBGLight,
            "--bg-end": study.theme.colorBGDark,
            "--primary": study.theme.colorPrimary
          } as React.CSSProperties}>
          <div className={styles.textContent}>
            <h3 className={styles.title}>
              {study.title}
            </h3>

            <small className={styles.meta}>
              {study.name} • {study.meta.date} • {study.meta.role}
            </small>
          </div>

          <Image
            src={study.theme.preview}
            className={styles.image}
            sizes="(max-width: 600px) 100vw, 430px"
            alt=""
          />

          <div
            className={styles.arrow}
            style={{
              backgroundColor: study.theme.colorPrimary
            } as React.CSSProperties}>
            <ArrowRightIcon />
          </div>
          <div className={styles.staples}></div>
        </Link>
      </Tilt>
    </div>
  )
}

export default CaseStudyCard
