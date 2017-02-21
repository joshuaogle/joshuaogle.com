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
  preview: "/source/images/portfolio-schoolkeep-screen.png",
  preview_type: "screen",
  url: "http://schoolkeep.com",
  summary: "The world of online learning is exploding, and Schoolkeep is leading the way by offering custom-branded school sites. While at thoughtbot, I got the chance to help them build their product to MVP and help onboard their first few hires. My history designing CMS sites and admin sections came in handy to create a great experience for both teachers and students."
}

export default SchoolkeepCaseStudy;
