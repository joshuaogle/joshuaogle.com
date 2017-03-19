import React from 'react';
import {Link} from 'react-router';

import caseStudyProps from '../../data/case-studies';
import CaseStudyItem from '../../components/CaseStudyItem';
import Intro from '../../components/Intro';

import './interactiondesign.sass';

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
      Array.from(animates).forEach(function(element, index, array) {
        const isMarked = element.classList.contains("animated");
        if (!isMarked && isOnScreen(element)) {
          element.classList.add("animated");
        }
      });
    };

    window.addEventListener("scroll", markAnimated);
    markAnimated();
  }

  renderItems() {
    return caseStudyProps.map((props) => <CaseStudyItem item={props} key={props.shortName} />);
  }

  render() {
    return (
      <div>
        <Intro>
          <h1>Make them fall in love</h1>
          <p>
            It's not enough to make something pretty, and you can't just make it functional either.
            A great experience is making the user feel at home, showing them a better way to get things done.
            A great design isn't even about you.
            &nbsp;<mark>It's about them.</mark>
          </p>
        </Intro>

        <section className="case-study--list">
          {this.renderItems()}
        </section>
      </div>
    );
  }
}

export default InteractionDesign;
