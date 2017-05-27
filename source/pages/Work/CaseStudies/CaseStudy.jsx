import React from 'react';

import BodyClass from '../../../components/BodyClass';
import Intro from '../../../components/Intro';
import Footer from '../../../components/Footer';

class CaseStudy extends React.Component {
  getYear() {
    const date = new Date(this.props.introProps.date);
    return date.getFullYear();
  }

  render() {
    const studyProps = this.props.introProps;

    return (
      <BodyClass className={`case_study--${studyProps.shortName}`} hasIntro="true">
        <Intro className="case-studies--intro" styles={{backgroundImage: `url(/source/images/${studyProps.background})`}}>
          <h1>
            {studyProps.title}
          </h1>
          <p className="intro-meta">
            {this.getYear()}
          </p>
        </Intro>
        <article className="content case-studies--content">
          <section className="case-studies--meta">
            <li>
              <div className="section-title">My Role</div>
              {studyProps.role}
            </li>
            <li>
              <div className="section-title">Full Team</div>
              {studyProps.team}
            </li>
            <li>
              <div className="section-title">Time Frame</div>
              {studyProps.time}
            </li>
          </section>
          {this.props.children}
        </article>
        <Footer />
      </BodyClass>
    );
  }
}

export default CaseStudy;
