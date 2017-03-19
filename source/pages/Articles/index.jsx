import React from 'react';
import './style.sass';

import {Link} from 'react-router';
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

  prettyDate(articleDate) {
    const date = new Date(articleDate);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthName = monthNames[date.getMonth()];
    return `${monthName} ${date.getDate()}, ${date.getFullYear()}`;
  }

  render() {
    const latestArticle = articles.slice(0, 1)[0];
    const olderArticles = articles.slice(1);

    return (
      <BodyClass className="articles">
        <Intro className="work-intro">
          <h1>Articles by Joshua Ogle</h1>
        </Intro>
        <section className="content">
          <Link to={latestArticle.url} target="_new" className="article article-summary article-summary__featured">
            <article>
              <header>
                <h3 className="article-title">{latestArticle.title}</h3>
                <div className="article-meta">
                  {this.prettyDate(latestArticle.date)}
                </div>
                <p>
                  {latestArticle.summary}
                </p>
              </header>
            </article>
          </Link>

          <div className="article-summary__list">
            {this.summarize(olderArticles)}
          </div>
        </section>
      </BodyClass>
    );
  }
}

export default Articles;
