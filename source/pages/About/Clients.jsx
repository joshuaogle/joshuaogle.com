import React from 'react';
import {Link} from 'react-router';
import InlineSVG from '../../components/InlineSVG';
import './clients.sass';

class Clients extends React.Component {
  render() {
    return (
      <section className="clients">
        <div className="section-title">Clients</div>
        <h2>I've worked with companies of all sizes</h2>
        <p>
          I've been lucky enough to work with some of the biggest companies in the world,
          but most of my career has been spent working with startups and small businesses
          making their start in the world and bringing their ideas to life.
          The beginning of a venture is a truly exciting time, where every decision is important
          and everyone on the project makes a huge impact.
          I believe in starting small, iterating quickly, and listening to what your users are telling you.
          I bring that same approach to projects no matter the size to make every project succeed.
        </p>

        <p>
          Here are a few clients you might have heard of:
        </p>
        <div className="clients-logos">
          <InlineSVG src="client-expedia.svg" />
          <InlineSVG src="client-amex.svg" />
          <InlineSVG src="client-dollarshaveclub.svg" />
          <InlineSVG src="client-att.svg" />
          <InlineSVG src="client-sharespost.svg" />
        </div>
      </section>
    );
  }
}

export default Clients;
