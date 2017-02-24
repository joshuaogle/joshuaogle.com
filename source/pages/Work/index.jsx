import React from 'react';

import BodyClass from '../../components/BodyClass';
import InteractionDesign from './InteractionDesign';
import Branding from './Branding';

class Work extends React.Component {
  render() {
    return (
      <BodyClass className="work">
        <div className="content card">
          <InteractionDesign />
          <Branding />
        </div>
      </BodyClass>
    );
  }
}

export default Work;
