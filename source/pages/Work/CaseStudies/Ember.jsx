import React from 'react';

import CaseStudy from './CaseStudy';

class EmberCaseStudy extends React.Component {
  render() {
    return (
      <CaseStudy introProps={this.props} />
    );
  }
}

EmberCaseStudy.defaultProps = {
  title: "Ember Guides",
  date: "2015/07/15",
  shortName: "ember",
  role: "Design & Front-end Development",
  url: "https://guides.emberjs.com/v2.7.0/",
  icon: "case-study-logo-ember.svg"
}

export default EmberCaseStudy;
