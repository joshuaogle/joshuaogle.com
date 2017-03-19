import React from 'react';

import BodyClass from '../../../components/BodyClass';
import Intro from '../../../components/Intro';

class CaseStudy extends React.Component {
  getYear() {
    const date = new Date(this.props.introProps.date);
    return date.getFullYear();
  }

  render() {
    const introProps = this.props.introProps;
    return (
      <BodyClass className={`case_study--${introProps.shortName}`} hasIntro="true">
        <Intro className="case-studies--intro">
          <h1>
            {introProps.title}
          </h1>
          <p className="intro-meta">
            {this.getYear()} • {introProps.role}
          </p>
        </Intro>
        <article className="content case-studies--content">
          {this.props.children}
        </article>
      </BodyClass>
    );
  }
}

export default CaseStudy;
