import React from 'react';
import {Link} from 'react-router';
import './style.sass';

import InlineSVG from '../InlineSVG';

class CaseStudyItem extends React.Component {
  getYear(props) {
    const date = new Date(props.date);
    return date.getFullYear();
  }

  viewMoreLink(props) {
    if (props.url) {
      return (
        <Link to={props.url} className="button" target="_new">
          Visit {props.title}
        </Link>
      )
    } else {
      return (
        <Link to={`/case-studies/${props.shortName}`} className="button">
          Case Study
        </Link>
      )
    }
  }

  phone(props) {
    if (props.preview_type == "phone") {
      return (
        <InlineSVG src="phone.svg" />
      )
    }
  }

  render() {
    const props = this.props.item.defaultProps;

    return (
      <article className={`animate portfolio-section ${props.shortName}`}>
        <div className="portfolio-description">
          <h3 className="portfolio-title">
            {props.title}
            <time className="year">{this.getYear(props)}</time>
          </h3>
          <div className="section-title">
            {props.role}
          </div>
          <p>
            {props.summary}
          </p>
          <p>
            {this.viewMoreLink(props)}
          </p>
        </div>

        <div className="portfolio-preview">
          <div className="portfolio-{props.preview_type}">
            {this.phone(props)}
            <img src={props.preview} />
          </div>
        </div>
      </article>
    );
  }
}

export default CaseStudyItem;
