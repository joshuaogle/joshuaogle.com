import React from 'react';
import {Link} from 'react-router';

import InlineSVG from '../../components/InlineSVG';
import CaseStudyItem from '../../components/CaseStudyItem';
import SharespostCaseStudy from '../case-studies/Sharespost';
import SummitCaseStudy from '../case-studies/Summit';
import EmberCaseStudy from '../case-studies/Ember';
import ArmadaCaseStudy from '../case-studies/Armada';
import OOOCaseStudy from '../case-studies/OOO';
import SchoolkeepCaseStudy from '../case-studies/Schoolkeep';


class InteractionDesign extends React.Component {
  componentDidMount() {
    const animates = document.getElementsByClassName("animate");

    function isOnScreen(element) {
      var elementPosition = element.getBoundingClientRect();
      var elementTop = elementPosition.top;
      var scrollTop = window.pageYOffset;
      var screenHeight = document.documentElement.clientHeight;
      var screenBottom = scrollTop + screenHeight;
      var offset = 150;

      return screenBottom > (elementTop + offset);
    }

    var markAnimated = function() {
      for (var element of animates) {
        if (!element.classList.contains("animated")) {
          if (isOnScreen(element)) {
            element.classList.add("animated");
          }
        }
      }
    };

    if (animates.length > 0) {
      markAnimated();
      window.addEventListener("scroll", markAnimated);
    }
  }

  renderItems() {
    const caseStudyProps = [
      SharespostCaseStudy,
      SummitCaseStudy,
      EmberCaseStudy,
      ArmadaCaseStudy,
      OOOCaseStudy,
      SchoolkeepCaseStudy,
    ];
    return caseStudyProps.map((item) => <CaseStudyItem item={item} key={item.defaultProps.shortName} />);
  }

  render() {
    return (
      <section className="portfolio">
        <div className="portfolio-intro">
          <div className="section-title">User Experience & Interface Design</div>
          <h2>Some projects I've worked on</h2>
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
