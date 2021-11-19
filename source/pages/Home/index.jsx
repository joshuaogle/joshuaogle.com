import React from 'react';
import './style.sass';

import {featuredArticles} from '../../data/articles';
import BlogPostSummary from '../../components/BlogPostSummary';
import BlogPosts from '../../sections/BlogPosts';
import BodyClass from '../../components/BodyClass';
import Clients from '../../sections/Clients';
import Intro from '../../components/Intro';
import Page from '../../components/Page';
import Timeline from '../../sections/Timeline';
import Testimonial from '../../sections/Testimonial';

class Home extends React.Component {
  renderArticles() {
    return featuredArticles.map((article) =>
      <BlogPostSummary key={`article-${article.title}`} article={article} />
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
            <h1>Hi, I'm Joshua</h1>
            <p>
              I am a Product Designer at <a href="http://hashicorp.com" target="_new">Hashicorp</a>, living in Denver, Colorado.
              I help companies of all sizes to establish their brand and <mark>build products that people love</mark>.
            </p>
          </div>
        </Intro>

	      <Page>
          <Timeline />

          <Testimonial />
          
          <Clients />

          <BlogPosts />
        </Page>
      </BodyClass>
    );
  }
}

export default Home;
