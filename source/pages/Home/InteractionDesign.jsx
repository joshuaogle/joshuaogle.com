import React from 'react';
import {Link} from 'react-router';
import './style.sass';

import InlineSVG from '../../components/InlineSVG';
import CaseStudyItem from '../../components/CaseStudyItem';
import ArmadaCaseStudy from '../case-studies/Armada';
import EmberCaseStudy from '../case-studies/Ember';
import OOOCaseStudy from '../case-studies/OOO';
import SchoolkeepCaseStudy from '../case-studies/Schoolkeep';
import SharespostCaseStudy from '../case-studies/Sharespost';


class InteractionDesign extends React.Component {
  renderItems() {
    const caseStudyProps = [
      ArmadaCaseStudy.defaultProps,
      EmberCaseStudy.defaultProps,
      OOOCaseStudy.defaultProps,
      SchoolkeepCaseStudy.defaultProps,
      SharespostCaseStudy.defaultProps,
    ];
    return caseStudyProps.map((item) => <CaseStudyItem item={item} key={item.shortName} />);
  }

  render() {
    return (
      <section className="portfolio">
        <div className="portfolio-intro">
          <div className="section-title">
            User Experience & Interface Design
          </div>
          <h2>It's a love story, really</h2>
          <p>
            Great experience design is what makes a user fall in love with your product.
            It's not enough to make something pretty, and you can't just make it functional either.
            A great experience is making the user feel at home, showing them a better way to get things done.
            A great design isn't even about your product.
            &nbsp;<mark>It's about them.</mark>
          </p>
        </div>

        {this.renderItems()}
      </section>
    );
  }
}

export default InteractionDesign;
