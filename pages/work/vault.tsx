import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'
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

        html[data-prefers-color-scheme="light"] {
          --theme-heading-color: ${summary.theme.backgroundColor};
        }
      `}</style>
    
      <Intro
        title={summary.title}
        meta={summary.meta}
      />

      <div className={`article-body`}>
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
            Vault summary image. Enabling a secrets engine?
          </figcaption>
        </figure>

        <section>
          <div className="section-title">Research</div>
          <h2>The importance of Zero-Trust Security</h2>
          <p>
            One of my favorite parts of my job
            is that I get to build things for engineers.
            They're incredibly smart, they care a lot about their workflows, <mark>and boy do they have opinions</mark>.
            Before HashiCorp I had experience working with Google's Design Sprint framework,
            but 
          </p>
        </section>

        <section>
          <h3>Redesign</h3>
          <p>
            I joined the Vault team as its first designer
            and as the the second product designer at HashiCorp.
          </p>
          <p>
            HashiCorp [had just announced Vault Enterprise](https://sports.yahoo.com/news/hashicorp-vault-enterprise-release-enables-150000673.html)
            which marked an huge milestone.
            Vault's open source project was already becoming the standard among open source users,
            and it had quite a fan base.
            The new Enterprise offering had a very exciting new UI
            built by their (amazing) front-end developer
            that was a straightforward representation of the API.
            HashiCorp knew that the security engineers, platform engineers, and compliance officers,
            that would be using the Enterprise version
            needed a user interface that gave them more discoverability and visibility
            into their secrets management environment.
          </p>
          <p>

          </p>
          <p>
            Part of designing systems is spending time thinking about how to make things reusable and composable.
            
            You don't get to start from scratch every day, so I think you should take advantage of it and do it right.
            These designs weren't just the future of Vault, it was the future of our whole design team.
            To help our next designers and help keep our products consistent,
            I <Link href="structure">created our first design system which I named Structure</Link>.
          </p>
        </section>

        <section>
          <h3>UI Guide</h3>
          <p>
            It should be no surprise that Vault does have a bit of a learning curve.
            Getting everything configured and integrated into your application takes hours
            (many people even split it up over several days!).
            You may be learning about how secrets engines, authentication methods, and access control policies for the firs time
            and are nervous about whether you're doing things right.
            We want people to <mark>use best practices by default</mark> and feel confident that their data is safe.
          </p>

          <p>
            I designed a new "Guide" component that helps you learn about how to use Vault.
            I had a few important rules for the Guide:
          </p>
      
          <ul>
            <li>Greet first-time users but be easily dismissed</li>
            <li>Onboarding with a carousel of images or videos isn't good enough.</li>
            <li>Stay with them as you they the real application and build muscle memory.</li>
            <li>Don't expect them to remember next time, so make it easy to find after it is closed.</li>
            <li>Our users are smart! <mark>Don't talk down to them.</mark></li>
          </ul>

          {/* Show the guide greeting and in use */}
        </section>

        <section>
          <h3>HCP Vault</h3>
          <p>
            {/* Start with why HCP is exciting and what Vault could become */}
            {/* Mention research */}
            {/* Show how easy it is */}
            {/* Mention the future with VSS */}
          </p>
        </section>

        <section>
          <div className="section-title">Results and reflection</div>
          <h2>Workflow-driven design</h2>
          <p>
            {/* The importance of thinking in workflows */}
            {/* Cybersecurity is important */}
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default VaultCaseStudy;