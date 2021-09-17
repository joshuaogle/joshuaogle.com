import React from 'react';
import {Link} from 'react-router';
import InlineSVG from '../../components/InlineSVG';

class TimelineItem extends React.Component {
  render() {
    return (
      <li>
        <h3 className="timeline-company">
          <InlineSVG src={this.props.icon} />
          {this.props.company}
        </h3>
        <div className="timeline-span">
          {this.props.title}, {this.props.when}
        </div>
        <p className="timeline-summary">
          {this.props.children}
        </p>
      </li>
    );
  }
}

export default TimelineItem;
