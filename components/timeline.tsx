import TimelineItem from './timeline-item'
import CasestudyCard from './casestudy-card'
import styles from '../styles/components/_timeline.module.css'

import {summary as VaultSummary} from '../pages/work/vault';
import {summary as StructureSummary} from '../pages/work/structure';
import {summary as SharespostSummary} from '../pages/work/sharespost';

const Timeline = () => {
  return (
    <section>
      <div className="section-title">
        Case studies
      </div>

      <h2>A little bit of my work</h2>

      <ul className={styles.list}>
        <TimelineItem
          company="HashiCorp"
          when="2017-Present"
          title="Sr Product Designer"
          icon="/images/timeline-hashicorp.svg"
        >
          HashiCorp makes developer-focused infrastructure software, with products that span everything from secrets management to mesh networking. 
          I joined as the second product designer in what would soon become a 20+ person product design team.
          I helped hire our designers, define our process, and created our Product Design System named "Structure".
          Throughout my time at HashiCorp, I have been the design lead for <a href="http://hashicorp.com/products/vault" target="_new">Vault</a>, <a href="https://cloud.hashicorp.com/" target="_new">Vault Cloud</a>, and <a href="http://boundaryproject.io" target="_new">Boundary</a>.
        
          <div className={styles.caseStudies}>
            <CasestudyCard summary={VaultSummary} href="/work/vault" />
            <CasestudyCard summary={StructureSummary} href="/work/structure" />
          </div>
        </TimelineItem>

        <TimelineItem
          company="thoughtbot"
          when="2014-2016"
          title="Sr Product Designer"
          icon="/images/timeline-thoughtbot.svg"
        >
          One of the biggest names in Ruby development and a model for how a consulting company should be run,
          thoughtbot is known for their dedication to open-source and the startup community.
          That love for openness and pride in their craft really does run through everything we did together.
          I helped mentor other designers and develop best practices such as thoughtbot's influential Product Design Sprint.
          Advising projects while leading design for client projects helped further my love for working with talented and multidisciplinary people.
        
          Summit
          <div className={styles.caseStudies}>
            <CasestudyCard summary={SharespostSummary} href="/work/sharespost" />
          </div>
        </TimelineItem>

        <TimelineItem
          company="Brightbit"
          when="2010-2014"
          title="Co-Founder & Design Lead"
          icon="/images/timeline-brightbit.svg"
        >
          I co-founded the company and led design and front-end development for a team of seven.
          We focused on Ruby on Rails, Javascript and hybrid mobile apps, folding best practices from companies like thoughtbot into our own.
          Brightbit was one of the leading development shops in the region and I'm really proud of the company and team we built.
        
          Armada
        </TimelineItem>
        <li className={styles.moreItem}>
          <p className={styles.more}>
            <a href="/files/joshuaogle-resume.pdf" target="_new">Read more work history on my resume</a>
          </p>
        </li>
      </ul>
    </section>
  )
}

export default Timeline