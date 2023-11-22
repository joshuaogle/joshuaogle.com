import { useState } from 'react'
import { Tab, Transition } from '@headlessui/react'
import TimelineItem from './timeline-item'
import styles from '../styles/components/_timeline.module.css'

import {summary as VaultSummary} from '../pages/work/vault';
import {summary as StructureSummary} from '../pages/work/structure';
import {summary as SharespostSummary} from '../pages/work/sharespost';
import {summary as ArmadaSummary} from '../pages/work/armada';

const Timeline = () => {
  const [tabIndex, setTabIndex] = useState(2);
  return (
    <section>
      <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
        <Tab.Panels>
          <Tab.Panel className={`${styles.tabPanel} surface`}>
            <TimelineItem
              company="Brightbit"
              when="2010-2014"
              title="Co-Founder & Design Lead"
              icon="/images/timeline-brightbit.svg"
              caseStudies={[
                {summary: ArmadaSummary, href: "/work/armada"}
              ]}>
              I co-founded the company and led design for a team of seven.
              We focused on Ruby on Rails, Javascript and hybrid mobile apps, folding best practices from companies like thoughtbot into our own.
            </TimelineItem>
          </Tab.Panel>

          <Tab.Panel className={`${styles.tabPanel} surface`}>
            <TimelineItem
              company="thoughtbot"
              when="2014-2016"
              title="Sr Product Designer"
              icon="/images/timeline-thoughtbot.svg"
              caseStudies={[
                {summary: SharespostSummary, href: "/work/sharespost"}
              ]}>
              thoughtbot is known for their dedication to open-source, openness, and pride in their craft.
              I helped mentor other designers and develop best practices such as their influential Product Design Sprint.
            </TimelineItem>
          </Tab.Panel>

          <Tab.Panel className={`${styles.tabPanel} surface`}>
            <TimelineItem
              company="HashiCorp"
              when="2017-Present"
              title="Staff Product Designer"
              icon="/images/timeline-hashicorp.svg"
              caseStudies={[
                {summary: VaultSummary, href: "/work/vault"},
                {summary: StructureSummary, href: "/work/structure"}
              ]}>
              HashiCorp makes developer-focused infrastructure software. 
              I lead design for some of our most popular products and helped grow our design team from 2 designers to 30+ across seven teams.
            </TimelineItem>
          </Tab.Panel>
        </Tab.Panels>

        <Tab.List>
          <Tab>1
          </Tab>

          <Tab>2
          </Tab>

          <Tab>3
          </Tab>
        </Tab.List>
      </Tab.Group>
    </section>
  )

}

export default Timeline