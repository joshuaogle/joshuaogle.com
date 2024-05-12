import styles from '../styles/components/_timeline.module.css'

type Props = {
  timelineEvents: Array<any>,
  activeStudyIndex: number,
  setActive: any
}

const TimelineNav = ({timelineEvents, activeStudyIndex, setActive}: Props) => {
  let order = 0;
  return (
    <div className={styles.timelineNav}>
      {timelineEvents.map((employer, employerIndex) =>
        employer.caseStudies.map((study, studyIndex) => {
          const currentOrder = order;
            const button = (
            <div
              className={activeStudyIndex === currentOrder ? styles.timelineNavActive : ''}
              key={study.summary.title}>
              <button
                className={styles.timelineNavButton}
                style={{ backgroundColor: study.summary.theme.colorPrimary }}
                onClick={() => setActive(
                  employerIndex,
                  currentOrder,
                  study.summary.theme.colorBGLight,
                  study.summary.theme.colorBGDark
                )}
              >
              <img src={study.summary.theme.icon} alt={study.summary.title} />
              </button>
            </div>
            );
          order++;
          return button;
        })
      )}
    </div>
  );
}

export default TimelineNav;