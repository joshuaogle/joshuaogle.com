import React from 'react';
import {Link} from 'react-router';

import {prettyDate} from '../utils';

class BlogPostSummary extends React.Component {
  render() {
    const article = this.props.article;

    return (
      <Link to={`/articles/${article.path}`} target="_new" className="article article-summary card">
        <article>
          <header>
            <div className="article-meta">
              {prettyDate(article.date)}
            </div>
            <h3 className="article-title">{article.title}</h3>
          </header>
        </article>
      </Link>
    );
  }
}

export default BlogPostSummary;
