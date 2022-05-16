import React from 'react';
import './style.sass';

import {Link} from 'react-router';
import {prettyDate} from '../../utils';
import articles from '../../data/articles';
import BlogPostSummary from '../../components/BlogPostSummary';


class BlogPosts extends React.Component {
  summarize(summaryArticles) {
    if (!summaryArticles.length) {
      summaryArticles = [summaryArticles];
    }

    return summaryArticles.map((article) =>
      <BlogPostSummary key={`article-${article.title}`} article={article} />
    );
  }

  render() {
    const latestArticle = articles.slice(0, 1)[0];
    const olderArticles = articles.slice(1);

    return (
      <section className="content">
        <div className="section-title">
          Articles
        </div>
        <h2>Some light reading</h2>
        <p>
          I want the next generation of designers and developers to have an easier time learning than we did when I got getting started.
          That's why I spend time speaking at conferences and running workshops. I also worked on a book on Design for the Web (now a blog series) while working at thoughtbot.
        </p>
        <Link to={`/articles/${latestArticle.path}`} target="_new" className="article article-summary article-summary__featured">
          <article>
            <header>
              <div className="article-meta">
                {prettyDate(latestArticle.date)}
              </div>
              <div className="article-content">
                <h3 className="article-title">{latestArticle.title}</h3>
                <p>
                  {latestArticle.summary}
                </p>
              </div>
            </header>
          </article>
        </Link>

        <div className="article-summary__list">
          {this.summarize(olderArticles)}
        </div>
      </section>
    );
  }
}

export default BlogPosts;