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
          <BlogPosts />
        </Page>
      </BodyClass>
    );
  }
}

export default Articles;
