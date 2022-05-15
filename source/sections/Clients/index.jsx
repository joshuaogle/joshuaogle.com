import React from 'react';
import {Link} from 'react-router';
import InlineSVG from '../../components/InlineSVG';
import './style.sass';

class Clients extends React.Component {
  render() {
    return (
      <section className="clients">
        <div className="section-title">Clients</div>
        <h2>I've consulted for great companies too</h2>
        <div className="clients-logos">
          <div className="client-logo" data-name="Expedia">
            <InlineSVG src="client-expedia.svg" />
          </div>
          <div className="client-logo" data-name="American Express">
            <InlineSVG src="client-amex.svg" />
          </div>
          <div className="client-logo" data-name="Dollar Shave Club">
            <InlineSVG src="client-dollarshaveclub.svg" />
          </div>
          <div className="client-logo" data-name="AT&T">
            <InlineSVG src="client-att.svg" />
          </div>
          <div className="client-logo" data-name="Sharespost">
            <InlineSVG src="client-sharespost.svg" />
          </div>
        </div>
        <p>
          I have been lucky enough to work with some of the biggest companies in the world,
          but most of my career has been spent working with startups and small businesses
          making their start in the world and bringing their ideas to life.
          The beginning of a venture is a truly exciting time, where every decision is important
          and everyone on the project makes a huge impact.
          I believe in starting small, iterating quickly, and listening to what your users are telling you.
          I bring that same approach to projects no matter the size to make every project succeed.
        </p>
      </section>
    );
  }
}

export default Clients;
