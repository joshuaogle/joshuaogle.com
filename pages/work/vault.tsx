import Layout from '../../components/layout'
import Head from 'next/head'
import Intro from '../../components/intro'

export const summary = {
  title: "Vault",
  meta: {
    date: "2021",
    role: "Design Lead, UX Research",
    time: "4 years",
    team: "1 Designer, 1 Developer",
    client: "HashiCorp",
    client_url: "http://vaultproject.io"
  },
  theme: {
    backgroundColor: "rgb(114, 114, 116)",
    backgroundImage: "",
    highlightRGB: "255, 236, 110",
    icon: "/images/case-study-logo-vault.svg",
    thumbnail: ""
  },
  intro: "Description."
}

const VaultCaseStudy = () => {
  return (
    <Layout>
      <Head>
        <title>{`Joshua Ogle | Vault`}</title>
      </Head>
      <style jsx global>{`
        :root {
          --theme-background-color: ${summary.theme.backgroundColor};
          --theme-highlight-rgb: ${summary.theme.highlightRGB};
        }
      `}</style>
    
      <Intro
        title={summary.title}
        meta={summary.meta}
      />

      <section>
        <div className="section-title">Background</div>
        <h2>It's hard to keep a secret</h2>
        <p>
          Modern software development requires a lot of moving parts
          from APIs to databases and infrastructure that changes by the minute.
          And to make things worse,
          engineering teams at large companies can grow to hundreds or thousands of people.
          That's a lot of passwords, credentials, and other secrets to keep track of.
        </p>
      </section>

      <figure>
          <img src="/source/images/case-studies/armada-device.png" />
        <figcaption>
          Vault summary image
        </figcaption>
      </figure>

      <section>
        <div className="section-title">Research</div>
        <h2>Who watches the watchmen?</h2>
        <p>
          Text
        </p>
      </section>

      <section>
        <h3>Design System</h3>
        <p>text</p>
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
        <h3>UI Guide</h3>
        <p>text</p>
      </section>

      <section>
        <h3>HCP Vault</h3>
        <p>
          In 2020, 
        </p>
      </section>

      <section>
        <div className="section-title">Results and reflection</div>
        <h2>Workflow-driven design</h2>
        <p>
          Text
        </p>
      </section>
    </Layout>
  );
}

export default VaultCaseStudy;