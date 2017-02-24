import React from 'react';
import './style.sass';

import BodyClass from '../../components/BodyClass';
import Intro from '../../components/Intro';
import Summary from './Summary';

var articles = [
  require('./20170221-balance.md'),
  require('./20170214-form-and-space-on-the-web.md'),
  require('./20170207-color.md'),
  require('./20170131-disciplines-of-web-design.md'),
  require('./20141104-design-spiking.md')
];

class Articles extends React.Component {
  summarize(summaryArticles) {
    return (
      Array.from(summaryArticles).map((article) => {
        console.log(article);
        <Summary key={`article-${article.title}`} article={article} />
      })
    );
  }
  render() {
    const featured = articles.shift();
    const featuredSummaries = articles.shift();

    return (
      <BodyClass className="articles">
        <Intro className="work-intro">
          <h1>I write about design on the web</h1>
          <div className="section-title">
            Articles by Joshua Ogle
          </div>
        </Intro>
        <div className="content">
          <div className="split-layout">
            <div className="split-primary">
              {this.summarize(featured)}
            </div>
            <div className="split-secondary">
              {this.summarize(featuredSummaries)}
            </div>
          </div>
          {this.summarize(articles)}
        </div>
      </BodyClass>
    );
  }
}

export default Articles;
