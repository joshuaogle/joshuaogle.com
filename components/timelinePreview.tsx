import styles from '../styles/components/_timeline.module.css'

type Props = {
  timelineEvents: Object,
  activeStudyIndex: integer
}

const TimelinePreview = ({timelineEvents, activeStudyIndex}: Props) => {
  let previewZ = 0;
  return (
    <div className={styles.previewContainer}>
      {timelineEvents.map((employer) =>
        employer.caseStudies.map((study, studyIndex) => (
          <div className={styles.preview} key={studyIndex} style={{zIndex: previewZ}}>
            <img
              src={study.summary.theme.preview}
              alt={study.summary.title}
              className={`${styles.previewImage} ${activeStudyIndex === studyIndex ? 'active' : ''}`}
            />
            {previewZ++}
          </div>
        ))
      )}
    </div>
  )
}

export default TimelinePreview