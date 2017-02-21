import React from 'react';
import {Link} from 'react-router';
import './style.sass';

class CaseStudyItem extends React.Component {
  getYear(item) {
    const date = new Date(item.date);
    return date.getFullYear();
  }

  viewMoreLink(item) {
    if (item.body) {
      return (
        <Link href={item.url} className="button">Case Study</Link>
      )
    }
    if (item.url) {
      return (
        <Link href={item.url} className="button">Visit {item.title}</Link>
      )
    }
  }

  phone(item) {
    if (item.preview_type == "phone") {
      return (
        <InlineSVG src="phone.svg" />
      )
    }
  }

  render() {
    const item = this.props.item;

    return (
      <article className={`animate portfolio-section ${item.shortName}`}>
        <div className="portfolio-description">
          <h3 className="portfolio-title">
            {item.title}
            <time className="year">{this.getYear(item)}</time>
          </h3>
          <div className="section-title">
            {item.role}
          </div>
          <p>
            {item.summary}
          </p>
          <p>
            {this.viewMoreLink(item)}
          </p>
        </div>

        <div className="portfolio-preview">
          <div className="portfolio-{item.preview_type}">
            {this.phone(item)}
            <img src={item.preview} />
          </div>
        </div>
      </article>
    );
  }
}

export default CaseStudyItem;
