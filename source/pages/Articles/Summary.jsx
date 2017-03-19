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

  prettyDate(articleDate) {
    const date = new Date(articleDate);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthName = monthNames[date.getMonth()];
    return `${monthName} ${date.getDate()}, ${date.getFullYear()}`;
  }

  render() {
    const article = this.props.article;

    return (
      <Link to={article.url} target="_new" className="article article-summary card">
        <article>
          <header>
            <h3 className="article-title">{article.title}</h3>
            <div className="article-meta">
              {this.prettyDate(article.date)}
            </div>
          </header>
        </article>
      </Link>
    );
  }
}

export default Summary;
