import React from 'react';
import './style.sass';

import {featuredArticles} from '../../data/articles';
import ArticleSummary from '../../sections/BlogPosts/Summary';
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

	      <Page>
          <section>
            <p>
              For over fifteen years, I've been helping companies of all sizes to establish their brand and <mark>improve their connection to their users</mark>.
              I live in Denver, where I help companies of all sizes realize their ideal product.
              I previously worked a a Senior Product Designer at <a href="http://citrusbyte.com" target="_new">Citrusbyte</a> and <a href="http://thoughtbot.com" target="_new">thoughtbot</a>, and before that I was co-founder and Creative Director of a consultancy in OKC called Brightbit.
            </p>
          </section>

          <Timeline />
          
          <Clients />

          <Testimonial />

          <BlogPosts />
        </Page>
      </BodyClass>
    );
  }
}

export default Home;
