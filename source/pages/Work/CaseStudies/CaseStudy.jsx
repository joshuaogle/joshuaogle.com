import React from 'react';

import BodyClass from '../../../components/BodyClass';
import Intro from '../../../components/Intro';
import Footer from '../../../components/Footer';

class CaseStudy extends React.Component {
  getYear() {
    const date = new Date(this.props.introProps.date);
    return date.getFullYear();
  }

  clientLink(studyProps) {
    if (studyProps.client_url) {
      return (
        <a href={`${studyProps.client_url}`}>{studyProps.client}</a>
      )
    } else {
      return studyProps.client;
    }
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
            <ul>
              <li>
                <div className="section-title">Client</div>
                {this.clientLink(studyProps)}
              </li>
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
            </ul>
            <p>{studyProps.intro}</p>
          </section>
          {this.props.children}
        </article>
        <Footer />
      </BodyClass>
    );
  }
}

export default CaseStudy;
