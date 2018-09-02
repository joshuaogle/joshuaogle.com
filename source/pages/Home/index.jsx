import React from 'react';
import {Link} from 'react-router';
import './style.sass';

import {featuredArticles} from '../../data/articles';
import {featuredCaseStudies} from '../../data/case-studies';
import BodyClass from '../../components/BodyClass';
import Intro from '../../components/Intro';
import ArticleSummary from '../Articles/Summary';

class Home extends React.Component {
  caseStudyPath(study) {
    return study.url ? study.url : `/work/${study.shortName}`;
  }

  caseStudyTarget(study) {
    return study.url ? "_new" : "";
  }

  renderCaseStudies() {
    return featuredCaseStudies.map((study) =>
      <div
        key={study.shortName}
        className={`home-work-item home-work-item--${study.shortName}`}
      >
        <Link to={this.caseStudyPath(study)} target={this.caseStudyTarget(study)} >
          <div className="home-work-thumbnail">
            <div className="home-work-thumbnail-image" style={{backgroundImage: `url(${study.thumbnail})`}}></div>
          </div>
          <h3>{study.title}</h3>
          <p>{study.role}</p>
        </Link>
      </div>
    );
  }

  renderArticles() {
    return featuredArticles.map((article) =>
      <ArticleSummary key={`article-${article.title}`} article={article} />
    );
  }

  render() {
    return (
      <BodyClass className="home" hasIntro="true">
        <Intro>
          <div className="home-intro--portrait">
            <img src="/source/images/portrait.png" />
          </div>
          <div className="home-intro--copy">
            <h1>Joshua Ogle</h1>
            <p>
              I’m a Product Designer at <a href="http://hashicorp.com" target="_new">Hashicorp</a>, living in Denver.
              Previously at <a href="http://thoughtbot.com" target="_new">thoughtbot</a>.
              I help companies of all sizes bring their ideas to life and make their customers happy.
            </p>
          </div>
        </Intro>

        <section className="home-work">
          <div className="section-title">
            Work
          </div>
          <h2>Selected Projects</h2>
          <p>
            I have a passion for visual communication, problem-solving, usability, and storytelling.
            Designing with code and working side-by-side with developers helps to create a better product, and I like to encourage designers to get into code and vice versa.
          </p>
          <Link to="/work" className="more">More work</Link>

          <div className="home-work--list">
            {this.renderCaseStudies()}
          </div>
        </section>

        <section className="home-articles">
          <div className="home-articles--copy">
            <div className="section-title">
              Latest Articles
            </div>
            <h2>Some light reading</h2>
            <p>
              I occasionally write about design basics, leadership, and front-end tips for designers and developers.
            </p>
            <Link to="/articles" className="more">More articles</Link>
          </div>
          <div className="home-articles--list">
            {this.renderArticles()}
          </div>
        </section>
      </BodyClass>
    );
  }
}

export default Home;
