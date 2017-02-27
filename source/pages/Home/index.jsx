import React from 'react';
import {Link} from 'react-router';
import './style.sass';

import {latestArticle} from '../../data/articles';
import {latestCaseStudy} from '../../data/case-studies';
import BodyClass from '../../components/BodyClass';
import Intro from '../../components/Intro';
import ArticleSummary from '../Articles/Summary';

class Home extends React.Component {
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

  render() {
    return (
      <BodyClass className="home">
        <Intro className="home-intro">
          <h1>Joshua Ogle</h1>
          <p>
            I'm a Product Designer and Developer,<br />
            making the internet a better place to live.
          </p>
        </Intro>

        <div className="content home-content">
          <div className="home-section">
            <div className="section-title">
              About
            </div>
            <Link to="/about">
              <h2>Hello there</h2>
              <p>I believe strongly that blurring the lines between design and development makes for a better product, and I've been doing just that for almost 15 years.</p>
            </Link>
          </div>
          <div className="home-section">
            <div className="section-title">
              Work
            </div>
            <Link to={`/work/${latestCaseStudy.shortName}`}>
              <h2>{latestCaseStudy.title}</h2>
              <p>{latestCaseStudy.summary}</p>
            </Link>
            <Link to="/work" className="section-footer more">
              More work
            </Link>
          </div>
          <div className="home-section">
            <div className="section-title">
              Articles
            </div>
            <ArticleSummary key={`article-${latestArticle.title}`} article={latestArticle} />
            <Link to="/articles" className="section-footer more">
              More articles
            </Link>
          </div>
          </div>
      </BodyClass>
    );
  }
}

export default Home;