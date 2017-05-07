import React from 'react';
import {Link} from 'react-router';
import './style.sass';

import {featuredArticles} from '../../data/articles';
import {featuredCaseStudies} from '../../data/case-studies';
import Footer from '../../components/Footer';
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
      <Link
        key={study.shortName}
        to={this.caseStudyPath(study)}
        target={this.caseStudyTarget(study)}
        className={`home-work--${study.shortName}`}
      >
        <h3>{study.title}</h3>
        <p>{study.role}</p>
      </Link>
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
              I’m a Product Designer & Developer. I help companies of all sizes
              to bring their ideas to life and make their customers happy.
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
            You can see more of my work in interaction design and branding
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
              I occassionally write about design basics and front-end tips for
              designers and developers. Done with these?&nbsp;
            </p>
            <Link to="/articles" className="more">More articles</Link>
          </div>
          <div className="home-articles--list">
            {this.renderArticles()}
          </div>
        </section>
        <Footer />
      </BodyClass>
    );
  }
}

export default Home;
