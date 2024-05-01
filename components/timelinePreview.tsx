import styles from '../styles/components/_timeline.module.css'
import Surface from './surface'

type Props = {
  timelineEvents: Object,
  activeStudyIndex: number
}

const TimelinePreview = ({timelineEvents, activeStudyIndex}: Props) => {
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
              className={styles.preview}
          >
            <Surface>
              <img
                src={study.summary.theme.preview}
                alt={study.summary.title}
                className={activeStudyIndex === studyIndex ? 'active' : ''}
              />
            </Surface>
          </div>
        ))
      )}
    </div>
  )
}

export default TimelinePreview