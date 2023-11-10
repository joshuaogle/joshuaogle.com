import Layout from '../../components/layout'
import Head from 'next/head'
import Intro from '../../components/intro'
import Example from '../../components/example'

export const summary = {
  title: "Structure",
  meta: {
    date: "2020",
    role: "Design System Lead",
    time: "4 years",
    team: "12 Designers",
    client: "HashiCorp",
    client_url: "http://hashicorp.com",
  },
  theme: {
    backgroundColor: "#2e71e5",
    backgroundImage: "",
    highlightRGB: "96, 212, 220",
    icon: "/images/case-study-logo-structure.svg",
    thumbnail: "/images/case-studies/structure-lists.png",
  },
  intro: "Description.",
}

const Structure = () => {
  return (
    <>
      <Head>
        <title>{`Joshua Ogle | Structure Design System`}</title>
      </Head>

      <Layout>
        <style jsx global>{`
          :root {
            --theme-background-color: ${summary.theme.backgroundColor};
            --theme-background-image: ${summary.theme.backgroundImage};
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
            <h2>Who designs the design system?</h2>
            <p>
              I think when a lot of people think of design systems
              they think about colorful galleries of buttons
              and typography.
              What I think about is noisy meetings
              full of collaboration and friendly debate.
              When I started at HashiCorp,
              it was as the 2nd product designer
              coming in to help make sense of these massive
              (and massively popular)
              developer tools.
              We planned to grow the team by about 2x each year,
              and we knew that would require a shared visual language,
              and more importantly it would allow us to lean on each other
              to make our individual products better.
            </p>
          </section>

          <Example
            images={[
              "case-studies/structure-tree.png"
            ]}
            caption="Tree"
          />

          <section>
            <div className="section-title">Work</div>
            <h2>Grassroots and growth</h2>
            <p>
                I led our new Design Systems Working Group
                where we worked together to define
                and craft our visual language and rules.
                Our products do very different things,
                from secrets management to mesh networking and deployment automation,
                but at the end of the day they're still interfaces for complicated infrastructure management
                and that means the vast majority of our interfaces can be shared and improved together.
              </p>
              <p>
                We would need a tiered design system,
                one that could bridge all of the products
                and also ensure that we could start components
                in our individual products
                and then work on standardizing them
                <mark>without slowing down feature delivery.</mark>
              </p>

              {/* Collaboration model example? */}

              <p>
                Product designers have to be pragmatic,
                we know that features sometimes
                have to get designed and built quickly,
                and we don't get to do the rigor and documentation
                that we would like.
                I created our collaboration model
                to focus on getting the benefits of contribution
                without the desigers feeling like it was a burden.
                When a component was needed by a second product,
                we invested the time to review and migrate it
                to the shared design system.
                Our shared design system grew to over 30 shared components,
                not counting the many more that were in the individual products.
                We proposed, reviewed, and debated every step as a team
                and our system was better for it.
              </p>
              {/* Component examples */}
              {/* Figma example */}
          </section>

          <section>
            <div className="section-title">Results and reflection</div>
            <h2>And for our next trick</h2>
            <p>
              If have a design team with up to twenty designers,
              I would highly recommend doing things this way.
              This grassroots approach worked well
              until we grew big enough
              to need proper design ops
              and could convince leadership
              that we needed a full-time team.
              As design systems become a standard for product design,
              so too have accessibility standards
              and a shared community of people
              who care about this side of the craft.
              The design system team is approaching ten amazing people now,
              including designers and engineers,
              working on our new design system called Helios.
            </p>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default Structure