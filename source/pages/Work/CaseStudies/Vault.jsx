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
          <div className="section-title">The challenge</div>
          <h2>It's hard to keep a secret</h2>
          <p>
            Modern software development requires a lot of moving parts
            from APIs to databases and infrastructure that changes by the minute.
            That's a lot of passwords and credentials to keep track of.
            And to make things worse,
            engineering teams at large companies are often in the hundreds or thousands of people.
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
          <div className="section-title">The solution</div>
          <h2>Making the cloud a safer place to live</h2>
          <p>
            Text
          </p>
        </section>

        <section>
          <h3>Redesign</h3>
          <p>
            I joined the Vault team as its first designer
            and as the the second product designer at HashiCorp ever.
          </p>
          <p>
            Vault's open source project was already a hit among open source users
            and a UI had recently been added to Vault's new enterprise offering
            by our very talented front-end developer.
            It was more or less a visual representation of the command-line interface
            and features often launched there first
            before being supported by the web interface a few months later.
          </p>
        </section>

        <section>
          <h3>Design System</h3>
          <p>text</p>
        </section>

        <section>
          <h3>UI Guide</h3>
          <p>text</p>
        </section>

        <section>
          <h3>HCP Vault</h3>
          <p>text</p>
        </section>

        <section>
          <div className="section-title">In Summary</div>
          <h2>Workflow-driven design</h2>
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
