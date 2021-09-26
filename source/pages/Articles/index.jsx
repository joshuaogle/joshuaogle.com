import React from 'react';
import './style.sass';

import articles from '../../data/articles';
import BlogPosts from '../../sections/BlogPosts';
import BodyClass from '../../components/BodyClass';
import Page from '../../components/Page';
import Intro from '../../components/Intro';

class Articles extends React.Component {
  render() {
    const latestArticle = articles.slice(0, 1)[0];
    const olderArticles = articles.slice(1);

    return (
      <BodyClass className="articles">
        <Page>
          <Intro className="work-intro">
            <h1>Articles by Joshua Ogle</h1>
            <p>
              I want the next generation of designers and developers to have an easier time learning than we did when I got getting started.
              That's why I spend time speaking at conferences and running workshops. I also worked on a book on Design for the Web (now a blog series) while working at thoughtbot.
            </p>
          </Intro>

          <BlogPosts />
        </Page>
      </BodyClass>
    );
  }
}

export default Articles;
