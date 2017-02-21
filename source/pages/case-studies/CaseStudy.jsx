import React from 'react';

import Intro from '../../components/Intro';

class CaseStudy extends React.Component {
  getYear() {
    const date = new Date(this.props.introProps.date);
    return date.getFullYear();
  }

  render() {
    const introProps = this.props.introProps;
    return (
      <div className={`case_study--${introProps.shortName}`}>
        <Intro>
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
        <img src={introProps.icon} className="intro-icon" />

        <article className="content">
          {this.props.children}
        </article>
      </div>
    );
  }
}

export default CaseStudy;
