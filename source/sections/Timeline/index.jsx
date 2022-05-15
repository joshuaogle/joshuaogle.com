import React from 'react';
import TimelineItem from '../../components/TimelineItem';
import './style.sass';

// Case Study Files
import SharespostCaseStudy from '../../pages/Work/CaseStudies/Sharespost';
import SummitCaseStudy from '../../pages/Work/CaseStudies/Summit';
import ArmadaCaseStudy from '../../pages/Work/CaseStudies/Armada';
import VaultCaseStudy from '../../pages/Work/CaseStudies/Vault';
import StructureCaseStudy from '../../pages/Work/CaseStudies/Structure';
import PasswordProtected from '../../components/PasswordProtected';

class Timeline extends React.Component {
  render() {
    return (
      <div className="timeline-section">
        <section>
          <div className="section-title">
            Case studies
          </div>
          <h2>A little bit of my work</h2>

          <ul className="timeline">
            <PasswordProtected contentName="hashicorp">
              <TimelineItem
                company="HashiCorp"
                when="2017-Present"
                title="Sr Product Designer"
                icon="timeline-hashicorp.svg"
                caseStudies={[VaultCaseStudy, StructureCaseStudy]}
              >
                HashiCorp makes developer-focused infrastructure software, with products that span everything from secrets management to mesh networking. 
                I joined as the second product designer in what would soon become a 20+ person product design team.
                I helped hire our designers, define our process, and created our Product Design System named "Structure".
                Throughout my time at HashiCorp, I have been the design lead for <a href="http://hashicorp.com/products/vault" target="_new">Vault</a>, <a href="https://cloud.hashicorp.com/" target="_new">Vault Cloud</a>, and <a href="http://boundaryproject.io" target="_new">Boundary</a>.
              </TimelineItem>
            </PasswordProtected>

            <TimelineItem
              company="thoughtbot"
              when="2014-2016"
              title="Sr Product Designer"
              icon="timeline-thoughtbot.svg"
              caseStudies={[SharespostCaseStudy, SummitCaseStudy]}
            >
              One of the biggest names in Ruby development and a model for how a consulting company should be run,
              thoughtbot is known for their dedication to open-source and the startup community.
              That love for openness and pride in their craft really does run through everything we did together.
              I helped mentor other designers and develop best practices such as thoughtbot's influential Product Design Sprint.
              Advising projects while leading design for client projects helped further my love for working with talented and multidisciplinary people.
            </TimelineItem>

            <TimelineItem
              company="Brightbit"
              when="2010-2014"
              title="Co-Founder & Design Lead"
              icon="timeline-brightbit.svg"
              caseStudies={[ArmadaCaseStudy]}
            >
              I co-founded the company and led design and front-end development for a team of seven.
              We focused on Ruby on Rails, Javascript and hybrid mobile apps, folding best practices from companies like thoughtbot into our own.
              Brightbit was one of the leading development shops in the region and I'm really proud of the company and team we built.
            </TimelineItem>
            <li>
              <p className="timeline-more">
                <a href="/files/joshuaogle-resume.pdf" target="_new">Read more work history on my resume</a>
              </p>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Timeline;
