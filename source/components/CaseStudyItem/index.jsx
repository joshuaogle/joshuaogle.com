import React from 'react';
import {Link} from 'react-router';
import './style.sass';

import InlineSVG from '../InlineSVG';

class CaseStudyItem extends React.Component {
  getYear(props) {
    const date = new Date(props.date);
    return date.getFullYear();
  }

  viewMoreText(props) {
    if (props.url) {
      return `Visit ${props.title}`;
    } else {
      return "Case Study";
    }
  }

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

  phone(props) {
    if (props.preview_type == "phone") {
      return (
        <InlineSVG src="phone.svg" />
      )
    }
  }

  render() {
    const props = this.props.item;

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
            <Link to={this.viewMorePath(props)} className="button" target={this.viewMoreTarget(props)}>
              {this.viewMoreText(props)}
            </Link>
          </p>
        </div>

        <Link to={this.viewMorePath(props)} className="portfolio-preview" target={this.viewMoreTarget(props)}>
          <div className={`portfolio-${props.preview_type}`}>
            {this.phone(props)}
            <img src={props.preview} />
          </div>
        </Link>
      </article>
    );
  }
}

export default CaseStudyItem;