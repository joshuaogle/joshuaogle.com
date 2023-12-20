import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import Intro from '../../components/intro'
import Example from '../../components/example'

export const summary = {
  title: "Vault",
  meta: {
    date: "2021",
    role: "Design Lead",
    time: "4 years",
    team: "1 Designer, 1 Developer",
    client: "HashiCorp",
    client_url: "http://vaultproject.io"
  },
  theme: {
    backgroundColor: "rgb(114, 114, 116)",
    backgroundImage: "",
    highlightRGB: "255, 236, 110",
    icon: "/images/case-study-logo-vault.svg"
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

      <div className={`article-body centered`}>
        <section>
          <div className="section-title">Background</div>
          <h2>It's hard to keep a secret</h2>
          <p>
            Modern web applications require a dizzying number of moving parts,
            including dyanamic resources like servers, databases, and applications
            that are deployed or changed every minute.
            And to make things more complicated,
            engineering teams at large companies can grow to hundreds or thousands of people
            all needing access to passwords and other secrets.
            So how do you keep anything secure?
          </p>

          {/* Vault diagram */}

          <p>
            There are a host of user-friendly password managers these days,
            that doesn't mean that people use them like they should.
            Vault was made so that developers could integrate secrets management
            into their application from Day 1
            and grow with them as they adopt more dynamic infrastructure.
            This means that <mark>Vault's most frequent users aren't human</mark>.
            An application can authenticate to Vault,
            check that it has the right permissions to access this data,
            and get back a one-time password that expires in just milliseconds.
            Vault can do this up to millions of times a day,
            and every single time the identity is checked again
            and the action is logged so it can be reviewed later.
          </p>
        </section>

        <section>
          <div className="section-title">Research</div>
          <h2>The importance of Zero-Trust Security</h2>
          <p>
            You do use a password manager, right?
            Keeping your personal passwords secure is important
            to protect against fraud and identity theft,
            so imagine how much more important it is
            for companies like banks and healthcare providers
            where they are handling sensitive information
            that is even more important than our credit card numbers.
          </p>
          <p>
            One of my favorite parts of my job
            is that I get to build things for engineers.
            They've got everything a designer would want
            in an ideal user/customer.
            They're incredibly smart,
            they care a lot about how they work,
            and boy do <mark>they have strong opinions</mark>.
            I have years of coding experience
            and always appreciate when a library or framework feels intuitive and powerful.
            Before HashiCorp,
            I had experience at thoughtbot
            leading customers through Google's Design Sprint framework,
            spending a week taking something from initial concept and discovery on Monday
            to prototyping ideas with real users by Friday.
            This kind of lean user testing worked well for consulting clients,
            but would need a few changes to match our long product release cycles
            where a new version of the product comes out every three to four months.
          </p>
          
          <Example
            images={[
              "case-studies/vault-home.png",
              "case-studies/vault-mounts.png
            ]}
            caption="Secrets Engines in Vault"
          />

          <p>
            User Research for cybersecurity products is a challenge.
            Our customers were understandably very protective
            of their secrets environments.
            We weren't going to get access to real data
            to see how they were using Vault,
            and because the software runs in secure private networks,
            we didn't have any tracking or analytics in the app at all
            (and still don't).
            We relied on our network of enterprise customers and open-source users
            who range from experts in cybersecurity operations
            to brand new developers using a secrets management tool for the first time.
            We used clickable prototypes in Figma to mock up workflows,
            including flows between Vault and other apps
            like a terminal or services like AWS.
            Our plan included lots of questions about their work,
            how their teams are organized,
            and how permissions are reviewed and approved.
            We used all of this to build a map of personas
            that help us build a clear picture
            of who they are and how they work.
          </p>

          <p>
            As a remote-first company,
            HashiCorp embraced remote user research
            and also acknowledged its limitations.
            That's why we took opportunities
            to do resarch in-person at HashiConf,
            our annual conference attended
            by some of our smartest and most invested users.
            I ran small studies by appointment
            and also invited people to come talk to us between talks.
            We made it easy to drop in, give us feedback, and get back to socializing.
            Participants went through several
            of our most important user workflows
            including onboarding,
            storing and retrieving secrets,
            and managing permissions for end-users.
            One of the biggest things impacting the user experience
            was that if things weren't absolutely clear and obvious,
            they would spend time going back to check and recheck
            that they did what they thought they did.
            I took our observations and refined the small details like clear actions,
            adding a confirmation step, and included helpful info
            to make sure they felt confident making changes.
          </p>
        </section>
          
        <Example
          images={[
            "case-studies/vault-crowd.jpg",
            "case-studies/vault-stage.jpg",
            "case-studies/vault-booth.png",
          ]}
          caption="Vault 1.0 Announcement & UX Research at HashiConf 2018"
        />

        <section>
          <div className="section-title">
            Vault Web UI
          </div>
          <h2>Hello 1.0</h2>
          <p>
            HashiCorp <a href="https://sports.yahoo.com/news/hashicorp-vault-enterprise-release-enables-150000673.html">had just announced Vault Enterprise</a>.
            Vault's open source project was already becoming the standard among open source users,
            and it had quite a fan base.
            HashiCorp knew that the security engineers, platform engineers, and compliance officers,
            that would be using the Enterprise version
            needed a user interface that gave them more discoverability and visibility
            into their secrets management environment.
          </p>

          <p>
            Designing complex systems means spending quite a lot of time thinking
            about how to make things reusable and composable.
            After all, you don't get to start from scratch every day
            so I think you should take advantage of it and do it right.
            These designs weren't just the future of Vault,
            it was the future of our whole design team.
            To help our next designers and help keep our products consistent,
            I led the working group that created <Link href="structure">our first design system named Structure</Link>.
          </p>
        </section>

        <section>
          <div className="section-title">UI Guide</div>
          <h2>Everybody could use a Guide</h2>
          <p>
            It's no surprise that a tool like Vault has a bit of a learning curve.
            Getting everything configured and integrated into your application could take hours
            (many people even split it up over several days!).
            The user may be learning about how secrets engines, authentication methods,
            and access control policies work for the first time,
            and are anxious about doing things right.
          </p>
          <p>
            We want best practices the be the default
            and organizations to feel confident that their data is safe,
            so I designed a new "UI Guide" component
            that helps you learn about how to use Vault and the Web UI.
            I had a few important rules for this new experience:
          </p>
          <ul>
            <li>Greet first-time users but be easily dismissed</li>
            <li>Onboarding with a carousel of images or videos isn't good enough.</li>
            <li>Stay with them as you they get to know the real application and build muscle memory.</li>
            <li>Don't expect them to remember next time, so make it easy to find after it is closed.</li>
            <li>Our users are smart! <mark>Don't talk down to them.</mark></li>
          </ul>
        </section>

        <section>
          <div className="section-title">
            Vault Cloud
          </div>
          <h2>Easy, easier, easiest</h2>
          <p>
            The HashiCorp Cloud Platform (HCP) brings our multicloud automation tools all into one place.
            This was especially exciting for Vault because this means
            you wouldn't have to worry about privisioning, installing, and deploying Vault,
            we could do that for you.
            The Vault product design team had grown to four
            and we needed someone who understood the complexities
            of how our products fit together,
            so I moved my focus to HCP Vault
            and left the core product in their good hands.
          </p>

          <Example
            images={[
              "case-studies/hcpvault-overview.png",
              "case-studies/hcpvault-seal.png",
              "case-studies/hcpvault-wireframe.png"
            ]}
            caption="HCP Vault Wireframe"
          />

          <p>
            Our Product Manager joined me for dozens of customer interviews
            where we heard a consistent story:
          </p>
          <blockquote>
            We want the confidence of using Vault,
            but without the headache of setting it up ourselves.
          </blockquote>
          <p>
            We wanted to bring Vault to the cloud platform
            but se also wanted to time the release with our HashiDays event
            and the platform wasn't quite ready to support all of Vault's capabilities quite yet.
            We made the decision to use HCP as a managed service provider,
            hosting and managing Vault for them but serving as a portal
            to the already popular Vault Web UI.
          </p>
          <p>
            HCP Vault launched in January 2021.
            I had designed a simple workflow for provisioning a Vault cluster
            and a friendly dashboard where you could see the cluster's status on HCP.
            Within a week there were hundreds of new Vault clusters
            created by customers varying from retail businesses and banks
            to government entities I'm not allowed to mention.
            <mark>Secrets management was more accessible than ever.</mark>
          </p>
        </section>
          
        <Example
          images={["case-studies/vault-loader-dark.gif"]}
          caption="Vault"
        />

        <section>
          <div className="section-title">Results and reflection</div>
          <h2>Workflow-driven design</h2>
          <p>
            I think we'd all sleep better if we knew
            that cybersecurity was easy.
            If you design or build software,
            I can't overemphasize the importance
            of learning systems design.
            Whether it is a simple mobile app
            or sophisticated access controls for highly dynamic infrastructure,
            contextualizing your design based on specific needs and workflows
            helps to ensure all of the parts work together.
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default VaultCaseStudy;