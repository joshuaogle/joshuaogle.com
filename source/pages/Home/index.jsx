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
  renderCaseStudies() {
    return featuredCaseStudies.map((study) =>
      <Link to={`/work/${study.shortName}`} className={`home-work--${study.shortName}`}>
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
              Follow along on Dribbble and Twitter.
            </p>
          </div>
        </Intro>

        <section className="home-work">
          <div className="section-title">
            Work
          </div>
          <h2>Selected Projects</h2>
          <p>
            I’m a Product Designer & Developer. I help companies of all sizes
            to bring their ideas to life and make their customers happy.&nbsp;
            <Link to="/work">
              More work
            </Link>
          </p>

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
              <Link to="/articles">There's lots more.</Link>
            </p>
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
