import React from 'react';
import {Link} from 'react-router';

import InlineSVG from '../../components/InlineSVG';

class Summary extends React.Component {
  render() {
    const article = this.props.article;

    return (
      <Link to={article.url} target="_new">
        <article className="article article-summary card">
          <header>
            <h2 className="article-title">{article.title}</h2>
            <time className="year">{article.date}</time>
            <div className="article-meta">
              Published by
              <InlineSVG src={article.source_icon} className="article-source-icon" />
              {article.source}
            </div>
          </header>
          <section>
            {article.summary}
          </section>
        </article>
      </Link>
    );
  }
}

export default Summary;
