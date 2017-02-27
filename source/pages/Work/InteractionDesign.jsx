import React from 'react';
import {Link} from 'react-router';

import caseStudyProps from '../../data/case-studies';
import InlineSVG from '../../components/InlineSVG';
import CaseStudyItem from '../../components/CaseStudyItem';

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
    return caseStudyProps.map((props) => <CaseStudyItem item={props} key={props.shortName} />);
  }

  render() {
    return (
      <section className="portfolio">
        <div className="portfolio-intro">
          <div className="section-title">User Experience & Interface Design</div>
          <h2>Great experience design makes the user fall in love</h2>
          <p>
            It's not enough to make something pretty, and you can't just make it functional either.
            A great experience is making the user feel at home, showing them a better way to get things done.
            A great design isn't even about you.
            &nbsp;<mark>It's about them.</mark>
          </p>
        </div>

        {this.renderItems()}
      </section>
    );
  }
}

export default InteractionDesign;
