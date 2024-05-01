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
  const timelineBackground = activeStudy.summary.theme.backgroundColor;

  const setActive = (employerIndex, studyIndex) => {
    setActiveEmployer(employerIndex);
    setActiveStudy(studyIndex);
  }

  return (
    <section>
      <Surface className={styles.surface}>
        <div
          className={styles.timelineContainer}
          style={{ backgroundColor: timelineBackground }}
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