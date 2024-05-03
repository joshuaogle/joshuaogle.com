import { useState } from 'react'  
import timelineEvents from '../lib/timelineEvents'
import Surface from './surface'
import TimelineNav from './timelineNav'
import TimelineEmployer from './timelineEmployer'
import TimelinePreview from './timelinePreview'
import styles from '../styles/components/_timeline.module.css'

const Timeline = () => {
  const allStudies = timelineEvents.flatMap((employer) => employer.caseStudies);
  const [activeEmployerIndex, setActiveEmployer] = useState(timelineEvents.length - 1);
  const [activeStudyIndex, setActiveStudy] = useState(allStudies.length - 1);
  const activeEmployer = timelineEvents[activeEmployerIndex];
  const activeStudy = allStudies[activeStudyIndex];
  const [timelineBGStart, setTimelineBGStart] = useState(activeStudy.summary.theme.backgroundStart);
  const [timelineBGEnd, setTimelineBGEnd] = useState(activeStudy.summary.theme.backgroundEnd);

  const setActive = (employerIndex, studyIndex, bgStart, bgEnd) => {
    setActiveEmployer(employerIndex);
    setActiveStudy(studyIndex);
    setTimelineBGStart(bgStart);
    setTimelineBGEnd(bgEnd);
  }

  return (
    <section>
      <Surface className={styles.surface}>
        <div
          className={styles.timelineContainer}
          style={{
            "--bg-start": timelineBGStart,
            "--bg-end": timelineBGEnd
          } as React.CSSProperties}
        >
          <TimelineNav
            timelineEvents={timelineEvents}
            activeStudyIndex={activeStudyIndex}
            setActive={setActive}
          />

          <div className={styles.timelineContent}>
            <TimelineEmployer employer={activeEmployer} />
            <TimelinePreview
              timelineEvents={timelineEvents}
              activeStudy={activeStudy}
              activeStudyIndex={activeStudyIndex}
            />
          </div>
        </div>
      </Surface>
    </section>
  )
}

export default Timeline