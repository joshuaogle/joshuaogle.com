import { useState } from 'react'
import TimelineItem from './timeline-item'
import timelineEvents from '../lib/timelineEvents'
import styles from '../styles/components/_timeline.module.css'

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section>
      <div
        className={styles.tabPanels}
        data-is-active={activeIndex}>
        {timelineEvents.map((event, panelIndex) => {
          const tabPanelClasses = [
            `surface`,
            styles.tabPanel,
            (panelIndex === activeIndex ? styles.panelActive : '')
          ].join(' ')

          return (
            <div className={styles.tabPanelContainer} key={panelIndex}>
              <div
                onClick={() => setActiveIndex(panelIndex)}
                className={tabPanelClasses}>
                <TimelineItem
                  company={event.company}
                  when={event.when}
                  role={event.role}
                  title={event.title}
                  icon={event.icon}
                  caseStudies={event.caseStudies}
                >
                  {event.copy}
                </TimelineItem>
              </div>
            </div>
          )
        })}
      </div>

      <div className={styles.tabNavs}>
        {timelineEvents.map((event, navIndex) => {
          const navClasses = [
            styles.tabNav,
            (navIndex === activeIndex ? styles.navActive : '')
          ].join(' ')

          return (
            <div
              className={navClasses}
              onClick={() => setActiveIndex(navIndex)}
              key={navIndex}
            >
              <span className={styles.navDot} />
              <span className={styles.navLabel}>
                {event.when}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )

}

export default Timeline