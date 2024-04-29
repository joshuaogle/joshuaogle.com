import styles from '../styles/components/_timeline.module.css'

type Props = {
  timelineEvents: Array,
  activeStudyIndex: integer,
  setActive: any
}
const TimelineNav = ({timelineEvents, activeStudyIndex, setActive}: Props) => {
  return (
    <div className={styles.timelineNav}>
      {timelineEvents.map((employer, employerIndex) =>
        employer.caseStudies.map((study, studyIndex) => (
          <button
            key={study.summary.title}
            className={`${styles.timelineNavButton} ${activeStudyIndex == studyIndex ? 'active' : ''}`}
            style={{ backgroundColor: study.summary.theme.color }}
            onClick={() => setActive(employerIndex, studyIndex)}
          >
            <img src={study.summary.theme.icon} alt={study.summary.title} />
            <span className={styles.timelineNavLabel}>
              {employer.when}
            </span>
          </button>
        ))
      )}
    </div>
  )
}

export default TimelineNav