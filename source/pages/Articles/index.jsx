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
    const primarySummary = articles.slice(0, 1);
    const secondarySummaries = articles.slice(1, 2);
    const otherSummaries = articles.slice(0);

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
              {this.summarize(primarySummary)}
            </div>
            <div className="article-summary__featured__other">
              {this.summarize(secondarySummaries)}
            </div>
          </div>
          <div className="article-summary__list">
            {this.summarize(otherSummaries)}
          </div>
        </div>
      </BodyClass>
    );
  }
}

export default Articles;
