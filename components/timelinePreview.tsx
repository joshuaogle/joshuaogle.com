import styles from '../styles/components/_timeline.module.css'
import Link from 'next/link'
import Surface from './surface'

type Props = {
  timelineEvents: Array<any>,
  activeStudy: any,
  activeStudyIndex: number
}

const TimelinePreview = ({timelineEvents, activeStudy, activeStudyIndex}: Props) => {
  let order = 0;
  return (
    <div className={styles.previewContainer}>
      {(timelineEvents as Array<any>).map((employer) =>
        employer.caseStudies.map((study, studyIndex) => (
          <div
            className={styles.preview}
            data-order={order++}
            data-relative-order={order - activeStudyIndex - 1}
            key={order}
          >
            <Surface className={styles.surface}>
              <img
                src={study.summary.theme.preview}
                alt={study.summary.title}
                className={activeStudyIndex === studyIndex ? 'active' : ''}
              />
            </Surface>
          </div>
        ))
      )}
      <Link
        href={activeStudy.href}
        className={styles.previewLink}
        style={{ backgroundColor: activeStudy.summary.theme.color }}
      >
        {activeStudy.summary.title}
        &nbsp;
        &rarr;
      </Link>
    </div>
  )
}

export default TimelinePreview