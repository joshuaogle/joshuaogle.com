import React from 'react';
import {Link} from 'react-router';
import './style.sass';

class InteractionDesign extends React.Component {
  viewMoreLink(item) {
    if (item.body) {
      return (
        <Link href={item.url} className="button">Case Study</Link>
      )
    }
    if (item.data.url) {
      return (
        <Link href={item.data.url} className="button">Visit {item.title}</Link>
      )
    }
  }

  phone(item) {
    if (item.data.preview_type == "phone") {
      return (
        Phone.svg
      )
    }
  }

  portfolioItem(item) {
    <article className="animate portfolio-section {item.data.short_name}">
      <div className="portfolio-description">
        <h3 className="portfolio-title">
          {item.title}
          <time className="year">{item.date.strftime("%Y")}</time>
        </h3>
        <div className="section-title">
          {item.data.role}
        </div>
        <p>
          {item.data.summary}
        </p>
        <p>
          {this.viewMoreLink(item)}
        </p>
      </div>

      <div className="portfolio-preview">
        <div className="portfolio-{item.data.preview_type}">
          {this.phone}
          <img src={item.data.preview} />
        </div>
      </div>
    </article>
  }

  renderItems() {
    return false;
  }

  render() {
    return (
      <section className="portfolio">
        <div className="portfolio-intro">
          <div className="section-title">
            User Experience & Interface Design
          </div>
          <h2>It's a love story, really</h2>
          <p>
            Great experience design is what makes a user fall in love with your product.
            It's not enough to make something pretty, and you can't just make it functional either.
            A great experience is making the user feel at home, showing them a better way to get things done.
            A great design isn't even about your product.
            &nbsp;<mark>It's about them.</mark>
          </p>
        </div>

        {this.renderItems()}
      </section>
    );
  }
}

export default InteractionDesign;
