import React from 'react';

import CaseStudy from '../CaseStudy';
import Example from '../../../components/Example';

class VaultCaseStudy extends React.Component {
  render() {
    return (
      <CaseStudy introProps={this.props}>
        <div className="inset inset--desktop">
          <section>
            <Example
              image="case-studies/armada-home.png"
            />
          </section>
        </div>

        <section>
          <div className="section-title">Zero trust security</div>
          <h2>Title</h2>
          <p>
            Text
          </p>

          <p>
            Text
          </p>

          <figure>
              <img src="/source/images/case-studies/armada-device.png" />
            <figcaption>
              Caption
            </figcaption>
          </figure>
        </section>

        <section>
          <div className="section-title">The Solution</div>
          <h2>Title</h2>
          <p>
            Text
          </p>
        </section>

        <section>
          <div className="section-title">In Summary</div>
          <h2>Title</h2>
          <p>
            Text
          </p>
        </section>
      </CaseStudy>
    );
  }
}

VaultCaseStudy.defaultProps = {
  title: "Vault",
  date: "2021/10/31",
  shortName: "vault",
  time: "4 years",
  team: "1 Designer, 1 Developer",
  role: "Product Design Lead, User Research",
  background: "",
  icon: "case-study-logo-vault.svg",
  client: "HashiCorp",
  client_url: "http://vaultproject.io",
  intro: "Description.",
  thumbnail: ""
}

export default VaultCaseStudy;
