import React from 'react';

import CaseStudy from './CaseStudy';

class SchoolkeepCaseStudy extends React.Component {
  render() {
    return (
      <CaseStudy introProps={this.props} />
    );
  }
}

SchoolkeepCaseStudy.defaultProps = {
  title: "Schoolkeep",
  date: "2014/07/15",
  shortName: "schoolkeep",
  role: "Design & User Experience",
  url: "http://schoolkeep.com",
  icon: "case-study-logo-schoolkeep.svg"
}

export default SchoolkeepCaseStudy;
