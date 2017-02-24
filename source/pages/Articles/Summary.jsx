import React from 'react';
import {Link} from 'react-router';

import InlineSVG from '../../components/InlineSVG';

class Summary extends React.Component {
  render() {
    const article = this.props.article;

    return (
      <article className="article article-summary">
        <header>
          <h2>{article.title}</h2>
          <time className="year">{article.date}</time>
          <div>
            <Link to={article.url} target="_new">
              Published by
              <InlineSVG src={article.source_icon} />
              {article.source}
            </Link>
          </div>
        </header>
        <section>
          {article.summary}
        </section>
      </article>
    );
  }
}

export default Summary;
