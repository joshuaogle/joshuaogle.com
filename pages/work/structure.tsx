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
    icon: "/images/case-study-logo-structure.svg"
  }
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
            <div className="section-title">The challenge</div>
            <h2>Who designs the design system?</h2>
            <p>
              When most people think of design systems
              they think about a colorful grid of buttons and typography.
              What I think about is long noisy meetings
              full of collaboration, long comment threads, and friendly debate.
              Design systems are living things,
              and only survive and grow if they are nurtured.
              I led our Design System Working Group at HashiCorp,
              a thriving collaborative that included designers
              from all of our products.
            </p>
            <p>
              Design systems aren't cops.
              {/* More about how I think about design systems */}
            </p>
          </section>

          {/* Example: buttons, colors, components */}

          <section>
            <div className="section-title">Background</div>
            <h2>Growing grassroots</h2>

            <p>
              I joined HashiCorp as the 2nd product designer
              coming in to help make sense of these massive
              (and massively popular) developer tools.
              We planned to grow the team by 2x each year,
              and knew that would require a shared language,
              and more importantly allow us to lean on each other
              to make all of our products better
              while still delivering our individual roadmaps.
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

              {/* TODO: Describe meetings, cadence */}
              {/* Example: RFCs? */}
              {/* TODO: More about tierred system */}
              {/* TODO: Collaboration model example? */}

              <p>
                We would need a tiered design system,
                one that could bridge all of the products
                and also ensure that we could start components
                in our individual products
                and then work on standardizing them
                <mark>without slowing down feature delivery.</mark>
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
              {/* Example: Component examples */}
              {/* Sketch: Sketch -> Figma */}
              {/* Example: Figma example */}
          </section>

          <section>
            <div className="section-title">Results and reflection</div>
            <h2>This is your captain speaking, prepare for handoff</h2>
            <p>
              If you have a design team with up to twenty designers,
              I would highly recommend doing things this way.
              This grassroots approach worked well
              until we grew big enough to need proper design ops
              and could convince leadership to invest in a full-time team.
              As design systems have become a standard for product design,
              so too have accessibility standards
              and a shared community of people
              who care about this side of the craft.
              The HashiCorp Design System Team now
              includes designers and engineers,
              working full-time on <a href="https://helios.hashicorp.design">our new design system called Helios</a>.
            </p>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default Structure