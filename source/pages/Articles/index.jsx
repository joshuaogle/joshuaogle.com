import React from 'react';

import BodyClass from '../../components/BodyClass';
import Intro from '../../components/Intro';

class Articles extends React.Component {
  render() {
    return (
      <BodyClass className="articles">
        <Intro className="work-intro">
          <h1>Articles</h1>
        </Intro>
        <div className="content">
          
        </div>
      </BodyClass>
    );
  }
}

export default Articles;
