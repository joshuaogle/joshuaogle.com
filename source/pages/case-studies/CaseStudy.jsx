import React from 'react';

import BodyClass from '../../components/BodyClass';
import Intro from '../../components/Intro';

class CaseStudy extends React.Component {
  getYear() {
    const date = new Date(this.props.introProps.date);
    return date.getFullYear();
  }

  getIcon() {
    if (this.props.introProps.icon) {
      return <img src={this.props.introProps.icon} className="intro-icon" />;
    }
  }

  render() {
    const introProps = this.props.introProps;
    return (
      <BodyClass className={`case_study--${introProps.shortName}`}>
        <Intro className="case-studies--intro">
          <h1>
            {introProps.title}
          </h1>
          <div className="section-title">
            {introProps.role}
          </div>
          <div className="year">
            {this.getYear()}
          </div>
        </Intro>
        {this.getIcon()}

        <article className="content case-studies--content card">
          {this.props.children}
        </article>
      </BodyClass>
    );
  }
}

export default CaseStudy;
