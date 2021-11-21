import React from 'react';
import {Link} from 'react-router';
import './style.sass';

import InlineSVG from '../InlineSVG';

class CaseStudyItem extends React.Component {
  viewMorePath(props) {
    if (props.url) {
      return props.url;
    } else {
      return `/work/${props.shortName}`;
    }
  }

  viewMoreTarget(props) {
    if (props.url) {
      return "_new";
    }
  }

  render() {
    const props = this.props.item;

    return (
      <Link to={this.viewMorePath(props)} target={this.viewMoreTarget(props)}>
        <article
          className={`animate case-study-item case-study-item--${props.shortName}`}
          style={{backgroundImage: `url(/source/images/${props.background})`}}
        >
          <InlineSVG className="case-study-item--icon" src={props.icon} />
          <h3>
            {props.title}
          </h3>
          <p>
            {props.role}
          </p>
          <div className="case-study-thumbnail">
            <img src={props.thumbnail} />
          </div>
        </article>
      </Link>
    );
  }
}

export default CaseStudyItem;
