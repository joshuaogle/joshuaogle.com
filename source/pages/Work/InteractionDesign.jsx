import React from 'react';
import {Link} from 'react-router';

import caseStudyProps from '../../data/case-studies';
import CaseStudyItem from '../../components/CaseStudyItem';
import Intro from '../../components/Intro';

import './interactiondesign.sass';

class InteractionDesign extends React.Component {
  isOnScreen(element) {
    var elementPosition = element.getBoundingClientRect();
    var elementTop = elementPosition.top;
    var scrollTop = window.pageYOffset;
    var screenHeight = document.documentElement.clientHeight;
    var screenBottom = scrollTop + screenHeight;
    var offset = element.offsetHeight / 2;

    return screenBottom > (elementTop + offset);
  }

  componentDidMount() {
    const animates = document.getElementsByClassName("animate");
    const isOnScreen = this.isOnScreen;

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
      <section>
        <div className="section-title">
          Case Studies
        </div>

        <h2>Dig a little deeper</h2>
        <p>
          I wish I could show some of the bigger projects I've done, but you know how clients are with Non-Disclosure Agreements.
          Here are the ones I can show to give you a sense of my process.
        </p>

        <div className="case-study--list">
          {this.renderItems()}
        </div>
      </section>
    );
  }
}

export default InteractionDesign;
