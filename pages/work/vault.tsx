import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import Intro from '../../components/intro'
import Example from '../../components/example'

export const summary = {
  title: "Vault",
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
    thumbnail: "/images/work/vault-home.png"
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
            Modern software development requires a lot of moving parts
            from APIs to databases and infrastructure that changes by the minute.
            And to make things worse,
            engineering teams at large companies can grow to hundreds or thousands of people.
            That's a lot of passwords, credentials, and other secrets to keep track of.
          </p>
          <p>
            We have a whole host of password managers these days,
            that doesn't mean that people use them like they should.
            Vault was made to allow developers
            to integrate secure secrets management
            into their application from day 1
            and grow with them as they adopt more dynamic infrastructure.
          </p>
          <p>
            This means that a lot of Vault's users technically aren't even human.
            The applications and bots that retrieve and store sensitive information
            all need to talk to each other and be sure of each other's identities.
            An application can authenticate to Vault,
            check that it has the right permissions to access this data,
            and get back a one-time password that expires in seconds.
            Vault can do this up to millions of times a day,
            and every single time the identity is checked again
            and the action is logged so it can be reviewed later.
          </p>
        </section>

        <Example
            image="work/vault-home.png"
            caption="Secrets Engines"
          />

        <Example
            image="work/vault-mounts.png"
            caption="Mounting Secrets Engines"
          />

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
            They've got everything you a designer would want
            in an ideal user/customer.
            They're incredibly smart,
            they care a lot about their workflows,
            <mark>and boy do they have opinions</mark>.
            I have some coding experience
            and always appreciate when a library or framework is simple and powerful.
            Before HashiCorp,
            I had experience working with Google's Design Sprint framework,
            spending a week taking something from initial concept and discovery on Monday
            to prototyping ideas with real users by Friday.
            This kind of lean user testing worked well for consulting clients,
            but was going to need adjusting to match our long product release cycles
            where a new version of the product comes out every three to four months.
          </p>
        </section>

        <Example
            image="work/vault-idgroups.png"
            caption="Identity groups"
          />

        <section>
          <h3>Hello 1.0</h3>
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
          <p>
            I joined the Vault team as its first designer
            and as the the second product designer at HashiCorp.
          </p>
          <p>

          </p>
          <p>
            Part of designing systems is spending time thinking about how to make things reusable and composable.
            
            You don't get to start from scratch every day, so I think you should take advantage of it and do it right.
            These designs weren't just the future of Vault, it was the future of our whole design team.
            To help our next designers and help keep our products consistent,
            We <Link href="structure">created our first design system which I named Structure</Link>.
            I suggested the name because I wanted it
            to feel so intrinsic to how we worked
            that it felt like the frame that we fill with what we care about,
            that we couldn't imagine how to build without it.
          </p>
        </section>

        <Example
            image="work/hcpvault-wireframe.png"
            caption="HCP Vault Wireframe"
          />

        <Example
            image="work/hcpvault-overview.png"
            caption="HCP Vault Overview"
          />

        <Example
            image="work/hcpvault-seal.png"
            caption="HCP Vault Seal"
          />

        <section>
          <h3>Everybody could use a Guide</h3>
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
          <h3>Easy, easier, easiest</h3>
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
          {/* HCP Vault diagram */}
          <p>
            Our Product Manager and I
            started with dozens of customer interviews
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
            We made the hard decision to use HCP as a managed service provider,
            without creating that fully embedded model quite yet.
            I designed a simple workflow for provisioning a Vault cluster
            and a friendly dashboard where you could see the cluster's status on HCP.
          </p>
          {/* HCP Vault dashboard */}
          <p>
            We launched HCP Vault in January 2021.
            Within a week there were hundreds of new Vault clusters,
            created by customers varying from retail businesses and banks
            to government entities I can't mention.
            Secrets management was more accessible than ever.
            I'm also excited that we're now bringing
            that embedded secrets management dream
            with Vault Secrets Sync.
          </p>
        </section>

        <section>
          <div className="section-title">Results and reflection</div>
          <h2>Workflow-driven design</h2>
          <p>
            If you are a product designer,
            I can't overemphasize the importance
            of learning systems design.
            Whether it is a simple mobile app
            or sophisticated access controls for highly dynamic infrastructure,
            contextualizing your design based on specific needs and workflows
            helps to ensure all of the parts work together.
            It also helps your development team
            understand what they are building,
            making it possible to plan ahead
            and 
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