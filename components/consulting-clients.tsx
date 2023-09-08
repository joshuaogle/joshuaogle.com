import React from 'react';
import LogoAmex from '../public/images/client-amex.svg'
import LogoATT from '../public/images/client-att.svg'
import LogoDollarShaveClub from '../public/images/client-dollarshaveclub.svg'
import LogoExpedia from '../public/images/client-expedia.svg'
import LogoSharespost from '../public/images/client-sharespost.svg'
import styles from '../styles/components/_consulting-clients.module.css'

class Clients extends React.Component {
  render() {
    return (
      <section>
        <h2>Design consulting</h2>
        <p>
          I have led design projects from startups to big enterprise companies.
          No matter the size of the project, I believe in starting small, iterating quickly, and listening to what your users are telling you.
        </p>
        <div className={styles.logos}>
            <LogoExpedia />
            <LogoDollarShaveClub />
            <LogoSharespost />
            <LogoAmex />
            <LogoATT />
        </div>
      </section>
    );
  }
}

export default Clients;