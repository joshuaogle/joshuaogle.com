import React from 'react';
import './style.sass';

import {Link} from 'react-router';
import {prettyDate} from '../../utils';
import articles from '../../data/articles';
import BodyClass from '../../components/BodyClass';
import Page from '../../components/Page';
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

          <section className="content">
            <Link to={`/articles/${latestArticle.path}`} target="_new" className="article article-summary article-summary__featured">
              <article>
                <header>
                  <h3 className="article-title">{latestArticle.title}</h3>
                  <div className="article-meta">
                    {prettyDate(latestArticle.date)}
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
        </Page>
      </BodyClass>
    );
  }
}

export default Articles;
