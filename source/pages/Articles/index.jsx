import React from 'react';
import './style.sass';

import articles from '../../data/articles';
import BodyClass from '../../components/BodyClass';
import Intro from '../../components/Intro';
import Summary from './Summary';

class Articles extends React.Component {
  summarize(summaryArticles) {
    if (!summaryArticles.length) {
      summaryArticles = [summaryArticles];
    }

    return summaryArticles.map((article) => this.renderSummary(article));
  }

  renderSummary(article) {
    return (
      <Summary key={`article-${article.title}`} article={article} />
    );
  }

  render() {
    const featured = articles.splice(0, 1);
    const featuredSummaries = articles.splice(0, 1);

    return (
      <BodyClass className="articles">
        <Intro className="work-intro">
          <h1>I write about design on the web</h1>
          <div className="section-title">
            Articles by Joshua Ogle
          </div>
        </Intro>
        <div className="content">
          <div className="article-summary__featured">
            <div className="article-summary__featured__latest">
              {this.summarize(featured)}
            </div>
            <div className="article-summary__featured__other">
              {this.summarize(featuredSummaries)}
            </div>
          </div>
          <div className="article-summary__list">
            {this.summarize(articles)}
          </div>
        </div>
      </BodyClass>
    );
  }
}

export default Articles;
