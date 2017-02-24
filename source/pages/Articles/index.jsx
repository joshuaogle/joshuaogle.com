import React from 'react';

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
  render() {
    const featured = articles.shift();
    const summaries = articles.map((article) =>
      <Summary key={`article-${article.title}`} article={article} />
    );

    return (
      <BodyClass className="articles">
        <Intro className="work-intro">
          <h1>Articles</h1>
        </Intro>
        <div className="content">
          <div className="split-layout">
            <div className="split-primary">
              <div className="section-title">
                The Latest
              </div>
              <Summary key={`article-${featured.title}`} article={featured} />
            </div>
            <div className="split-secondary">
              {summaries}
            </div>
          </div>
        </div>
      </BodyClass>
    );
  }
}

export default Articles;
