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
  preview: "/source/images/portfolio-ember-screen.png",
  preview_type: "screen",
  url: "https://guides.emberjs.com/v2.7.0/",
  summary: "thoughtbot volunteered some time to help work on a redesign of the Ember.js Guides. Ember is my favorite Javascript framework, mainly because of its amazing community, so I was happy to help out with their guides. It's a fairly simple Middleman set up, but I'm proud that we produced one of the best looking guides of any open-source project."
}

export default EmberCaseStudy;
