import React from 'react';

import BodyClass from '../../components/BodyClass';
import Intro from '../../components/Intro';

class Exercise extends React.Component {
  render() {
    const exerciseProps = this.props.introProps;

    return (
      <BodyClass className={`exercise--${exerciseProps.shortName}`} hasIntro="true">
        <Intro>
          <h1>{exerciseProps.title}</h1>
          <p>
            {exerciseProps.subtitle}
          </p>
        </Intro>
        <div className="content">
          {this.props.children}
        </div>
      </BodyClass>
    );
  }
}

export default Exercise;
