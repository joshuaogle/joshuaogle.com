import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import Intro from '../../components/intro'
import Example from '../../components/example'

export const summary = {
  title: "Vault Secrets Manager",
  meta: {
    date: "2021",
    role: "Design/Research Lead",
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
    thumbnail: "/images/case-studies/vault-home.png"
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
          
          <Example
            images={["case-studies/vault-loader-dark.gif"]}
            caption="Vault"
          />

          <p>
            There are a whole host of user-friendly password managers these days,
            that doesn't mean that people use them like they should.
            Vault was made so that developers could integrate secrets management
            into their application from day 1
            and grow with them as they adopt more dynamic infrastructure.
            This means that a lot of Vault's users technically were't even human.
            The applications and bots that retrieve and store sensitive information
            all need to talk to each other and be sure of each other's identities.
            An application can authenticate to Vault,
            check that it has the right permissions to access this data,
            and get back a one-time password that expires in seconds.
            Vault can do this up to millions of times a day,
            and every single time the identity is checked again
            and the action is logged so it can be reviewed later.
          </p>
          <p>
            In 2017, I joined HashiCorp as the second product designer at the company
            and got to work on the Vault team as its first designer.
          </p>
        </section>

        <section>
          <div className="section-title">Research</div>
          <h2>The importance of Zero-Trust Security</h2>
          <p>
            You do use a password manager, right?
            Keeping your own passwords secure is important
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
            <mark>and boy do they have strong opinions</mark>.
            I have years of coding experience
            and always appreciate when a library or framework is simple and powerful.
            Before HashiCorp,
            I had experience leading customers through Google's Design Sprint framework,
            spending a week taking something from initial concept and discovery on Monday
            to prototyping ideas with real users by Friday.
            This kind of lean user testing worked well for consulting clients,
            but would to be adjusted to match our long product release cycles
            where a new version of the product comes out every three to four months.
          </p>

          <Example
            images={["case-studies/vault-idgroups.png"]}
            caption="Identity groups"
          />

          <p>
            Our customers were understandably very protective of their secrets environments.
            We weren't going to get access to real data to see how they were using Vault,
            and because the software runs in secure private networks,
            we don't have any tracking or analytics in the app at all.
            We relied on our network of enterprise customers and open-source users,
            who range from experts in cybersecurity operations
            to brand new developers using a secrets manager for the first time.
            We used clickable prototypes in Figma to mock up workflows,
            including flows between Vault and other apps like a terminal or services like AWS.
            Our plan included lots of questions about their work,
            how their teams are organized,
            and how permissions are reviewed and approved.
            We used all of this to build a map of personas that help us build a clear picture
            of who they are and how they work.
          </p>
          <p>
            HashiCorp is a remote-first company, all the way from founding to today,
            through incredible growth and an IPO.
            We embraced remote user research but also acknowledged its limitations.
            That's why we also took opportunities
            to do resarch in-person when we could
            at our big events like HashiConf or our smaller HashiDays.
            We would run small studies by appointment
            or inviting people to participate between talks.
            With our remote interviews giving us plenty of *qualitative* data,
            we used these events to give us more *quantitiative* insight.
            We had users go through several of our most important flows,
            including onboarding and configuration,
            storing and retrieving secrets,
            and managing permissions for end-users.
            If things weren't absolutely clear and obvious,
            they would waste time going back to check and recheck that they did the right thing.
            We refined and refined our designs to make sure they got things right the first time
            and felt confident knowing that their data was secure,
            comparing these results across many studies
            which helped us prove that our efforts were working.
          </p>
        </section>

        <section>
          <div className="section-title">Vault Web UI</div>
          <h2>Hello 1.0</h2>
          <p>
            HashiCorp <a href="https://sports.yahoo.com/news/hashicorp-vault-enterprise-release-enables-150000673.html">had just announced Vault Enterprise</a>,
            which marked a big milestone.
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
          
          <Example
            images={["case-studies/vault-home.png", "case-studies/vault-mounts.png"]}
            caption="Secrets Engines"
          />

          <p>
            Part of designing systems is spending time thinking about how to make things reusable and composable.
            You don't get to start from scratch every day, so I think you should take advantage of it and do it right.
            These designs weren't just the future of Vault, it was the future of our whole design team.
            To help our next designers and help keep our products consistent,
            I led the working group that created <Link href="structure">our first design system named Structure</Link>.
            I suggested the name because I wanted it
            to feel so intrinsic to how we worked
            that it felt like the frame that we fill with what we care about,
            that we couldn't imagine building without it.
          </p>
        </section>

        <section>
          <div className="section-title">UI Guide</div>
          <h2>Everybody could use a Guide</h2>
          <p>
            It should be no surprise that Vault does have a bit of a learning curve.
            Getting everything configured and integrated into your application takes hours
            (many people even split it up over several days!).
            You may be learning about how secrets engines, authentication methods, and access control policies for the firs time
            and are nervous about whether you're doing things right.
            We want people to <mark>use best practices by default</mark> and feel confident that their data is safe.
          </p>
          <p>
            I designed a new "Guide" component
            that helps you learn about how to use Vault.
            I had a few important rules for the Guide:
          </p>
          <ul>
            <li>Greet first-time users but be easily dismissed</li>
            <li>Onboarding with a carousel of images or videos isn't good enough.</li>
            <li>Stay with them as you they the real application and build muscle memory.</li>
            <li>Don't expect them to remember next time, so make it easy to find after it is closed.</li>
            <li>Our users are smart! <mark>Don't talk down to them.</mark></li>
          </ul>
        </section>

        <section>
          <div className="section-title">Vault Cloud</div>
          <h2>Easy, easier, easiest</h2>
          <p>
            The HashiCorp Cloud Platform (HCP) brings our multicloud automation tools into one place.
            This was especially exciting for Vault because this means
            you wouldn't have to worry about privisioning, installing, and deploying Vault,
            we could do that for you.
            We had grown the Vault product design team to four,
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
            The long-term vision would be a Cloud Platform
            that has secrets management fully integrated,
            but leaving behind Vault's existing authentication
            and access management policies.
            And of course, we already had a deadline
            without knowing what it was we were going to build yet.
            We made the decision to use HCP as a managed service provider,
            without creating that fully embedded model quite yet.
            I designed a simple workflow for provisioning a Vault cluster
            and a friendly dashboard where you could see the cluster's status on HCP.
          </p>
          <p>
            HCP Vault launched in January 2021.
            Within a week there were hundreds of new Vault clusters
            created by customers varying from retail businesses and banks
            to government entities I'm not allowed to mention.
            <mark>Secrets management was more accessible than ever.</mark>
          </p>
        </section>

        <section>
          <div className="section-title">Results and reflection</div>
          <h2>Workflow-driven design</h2>
          <p>
            If you build or design software,
            I can't overemphasize the importance
            of learning systems design.
            Whether it is a simple mobile app
            or sophisticated access controls for highly dynamic infrastructure,
            contextualizing your design based on specific needs and workflows
            helps to ensure all of the parts work together.
            I'm proud of our team
            and I'm excited to see great UX design
            making highly technical software
            like infrastructure automation tools.
            I think we'd all sleep better if we knew
            that cybersecurity was easy.
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default VaultCaseStudy;