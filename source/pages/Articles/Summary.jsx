import React from 'react';
import {Link} from 'react-router';

import InlineSVG from '../../components/InlineSVG';

class Summary extends React.Component {
  sourceIcon(icon) {
    if (icon) {
      return (
        <InlineSVG src={icon} className="article-source-icon" />
      );
    }
  }

  render() {
    const article = this.props.article;

    return (
      <Link to={article.url} target="_new" className="article article-summary card">
        <article>
          <header>
            <h2 className="article-title">{article.title}</h2>
            <div className="article-meta">
              Published by {this.sourceIcon(article.source_icon)} {article.source} on {article.date}
            </div>
          </header>
          <div className="article-summary-body">
            {article.summary}
          </div>
        </article>
      </Link>
    );
  }
}

export default Summary;
