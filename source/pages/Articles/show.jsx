import React from 'react';
import './style.sass';

import {Link} from 'react-router';
import {renderSource} from '../../utils';
import BodyClass from '../../components/BodyClass';
import Page from '../../components/Page';
import Intro from '../../components/Intro';

class Articles extends React.Component {
  render() {
    const article = this.props.route.article;

    return (
      <BodyClass className="articles">
	<Page>
          <Intro className="work-intro">
            <h1>{article.title}</h1>
            {renderSource(article)}
          </Intro>
          <section
            className="content article-content"
            dangerouslySetInnerHTML={{__html: article.__content}}
          />
          <script
            src="https://static.cruton.app/js/cruton.js"
            data-tags={article.tags.join(",")}
            defer
          >
          </script>
	</Page>
      </BodyClass>
    );
  }
}

export default Articles;
