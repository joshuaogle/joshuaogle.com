import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import Intro from '../../components/intro'
import Example from '../../components/example'

export const summary = {
  title: "Infrastructure but in style",
  name: "Structure",
  meta: {
    date: "2020",
    role: "Design System Lead",
    time: "4 years",
    team: "12 Designers",
    client: "HashiCorp",
    client_url: "http://hashicorp.com",
  },
  theme: {
    colorPrimary: "#2e71e5",
    colorBGLight: "#252A34",
    colorBGDark: "#0C0E12",
    colorHeading: "#6F7682",
    colorHighlight: "rgb(96, 212, 220)",
    icon: "/images/case-study-logo-structure.svg",
    preview: "/images/case-studies/structure-tree.png",
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
            --theme-color-primary: ${summary.theme.colorPrimary};
            --theme-color-bg-light: ${summary.theme.colorBGLight};
            --theme-color-bg-dark: ${summary.theme.colorBGDark};
            --theme-color-heading: ${summary.theme.colorHeading};
            --theme-color-highlight: ${summary.theme.colorHighlight};
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
              I joined HashiCorp as the 2nd product designer
              to help make sense of their massive
              (and massively popular) developer tools.
              They already had several successful products,
              had strong investment,
              and were growing fast.
              We knew we would soon be joined by lots of new designers
              and so keeping things documented and organized was important.
              We also believed that time invested in a design system pays off.
              Time spent on a design system really is saved
              when you don't have to reinvent the button.
              I led our Design System Working Group at HashiCorp,
              a thriving collaborative that included designers
              from all of our products.
            </p>

            <Example
              images={[
                "case-studies/structure-summary.png"
              ]}
              caption="Tokens and components in Structure"
            />

            <p>
              When most people think of design systems
              they picture colorful grids of buttons
              and nitpicky guidelines,
              but they're really made up of long noisy meetings
              full of collaboration, long comment threads, and friendly debate.
              <mark>Design systems are living things,
              and only grow and survive if they are nurtured.</mark>
            </p>
          </section>

          <section>
            <div className="section-title">Background</div>
            <h2>Principles come included</h2>
            <p>
              The new Design System Working Group met biweekly.
              Because the product roadmaps always came first,
              and we were building the foundations ad hoc,
              we had to make the most of our time together.
              I knew I had to remove any and all obstructions
              that might prevent a designer
              from contributing whatever time they could.
              Questions and ideas came up throughout the week
              which were answered in Slack,
              and would add their longer topics
              to the agenda for the next biweekly meeting.
              We would start with these first
              to ensure that if we ran out of time on the housekeeping items,
              then we would have still made the best use of the time.
              I could chase down the status updates in Slack later
              if it meant we were having discussions
              and making decisions as a team.
              So collaboration was easy
              thanks to talented designers having a sense of ownership
              because they <em>really had it</em>.
            </p>
          </section>

          <section>
            <div className="section-title">Work</div>
            <h2>Grassroots and growth</h2>
            <p>
              I led our new Design Systems Working Group,
              where the design team worked together to craft
              and define our visual language and rules.
            </p>
            <p>
              The family of products that we were designing for
              do very different things
              ranging from secrets management
              to mesh networking and deployment automation,
              but at the end of the day they're still interfaces
              for complicated infrastructure management.
              That means the vast majority of our design patterns
              for listing, creating, and managing resources
              can be shared and improved together.
              Our design system would have to span 6 enterprise products
              with more coming soon.
              We would need a tiered design system,
              one that could be used by all of the products
              and also ensure that we could start components
              in our individual products
              and then work on standardizing them
              without risking their committed work for their product.
            </p>

            <Example
              images={[
                "case-studies/structure-welcome.png",
                "case-studies/structure-spacing.png",
                "case-studies/structure-colors.png"
              ]}
              caption="Starting in Sketch"
            />
            
            {/* Example: RFCs? */}
            {/* TODO: Collaboration model example? */}

            <p>
              Product designers are either naturally pragmatic
              or they soon learn to be.
              They are beholden to the realities
              of product development roadmaps
              that demand all of their time,
              and don't get to do everything
              with the craft and rigor that they would like.
              I drafted a collaboration model
              that focused on making it as easy as possible to contribute
              so that we could make progress
              while still delivering each of our roadmaps.
            </p>
            <p>
              Components would start in their own files
              that inherited from Structure.
              Each team was responsible for maintaining these libraries,
              for instance the Vault and Consul teams
              had their own component libraries
              where they could experiment and get feedback.
              This helped them move quicker
              and could develop it in the context of their product
              and could move as quickly as they needed to.
              The larger products that had two or three designers also got practice
              building and sharing their own components together,
              bringing some of these questions to the larger working group.
              If a designer needed something that didn't exist yet,
              they could build their own out of simpler components
              and if it seemed useful,
              other interested designers collaborated
              to bring it into the design system.
            </p>

            <Example
              images={["case-studies/structure-icons.png"]}
              caption="Structure included 120+ hand crafted icons for our product suite"
            />

            <p>
              HashiCorp creates developer tools
              and has a culture centered around craft and documentation
              built by developers who care a lot about their tools.
              Our designers were no different,
              so we paid close attention
              to how the component felt to use
              and how it worked with everything else in the system.
              When a component was needed by a second product,
              we invested the time to review and migrate it
              to the shared design system.
              Structure grew to over 30 shared components,
              not counting the many more that were in the individual products.
              We proposed, reviewed, and debated every step as a team
              and our system was better for it.
            </p>
    
            <Example
              images={["case-studies/structure-tree.png"]}
              caption="More complex components could take a month to get right"
            />


    
          </section>

          <section>
            <h2>Migration</h2>
            <p>
              In 2020, after two years of using Sketch,
              we decided to migrate to Figma.
              &nbsp;<Link href="https://figma.com" target="_blank">Figma</Link>&nbsp;
              was becoming very popular and it was easy to see why.
              The focus on collaboration would make it much easier
              to work together and with our product and engineering partners.
              I conducted a detailed comparison of our options,
              and included other tools like Adobe XD for good measure.
              Switching would mean losing our version control system,
              the key to treating the design system like code,
              but the benefits of collaboration
              would make collaboration and review much easier.
              I led the effort to rebuild our design system in Figma
              while our team continued to use Sketch,
              taking time out of my own product work
              to get all 300 components migrated
              with some improvements like autolayout and component variants
              to make maintaining things easier.
            </p>
            <p>
              <img
                src="/images/case-studies/structure-migration.png"
                width="50%" />
            </p>
            <p>
              There would be a small learning curve
              for some of our designers,
              so I hosted a walkthrough and Q&A session
              where I slowly walked through the new system
              including putting together a full screen design.
              Even designers with Figma experience found this useful
              for learning some of these new features.
              We were now starting already oriented toward collaboration,
              and as a bonus we got the designers using the features
              that would save them time every day.
              Migrating tools is an big investment both in time and energy,
              so use it as an opportunity to teach best practices
              that will make a meaningful difference.
              You don't have to think of every detached component as a crime,
              but using the design system as a highly crafted example of best practices
              can help designers learn how to use the tool
              and make the most of it.
            </p>
          </section>

          <section>
            <div className="section-title">Results and reflection</div>
            <h2>All good things&hellip;</h2>
            <p>
              Just like users of a product,
              the designers are the ones who should be driving every decision.
              The processes of using, adding to, or changing the design system
              have to be as easy as possible,
              because once it becomes a burden
              they will naturally do more things without it
              and the design system will rot.
              Don't let that happen!
              Contibuting must feel like a natural part of their design process.
              Make sure that the team is engaged and heard,
              making decisions democratically,
              and getting quick answers to their requests.
              Provide good reasoning in your documentation
              and presentation of the design system
              also helps designers learn from each other
              and raises the bar for everyone.
            </p>
            <p>
              <img src="/images/case-studies/structure-cop.png" />
            </p>
            <p>
              This grassroots approach worked well
              until we grew big enough to convince leadership
              to invest in a full-time team.
              Structure was sunset in 2024.
              The HashiCorp Design System Team now
              includes designers and engineers,
              working full-time on <Link href="https://helios.hashicorp.design">our new design system called Helios</Link>.
              As design systems have become a standard for product design,
              so too have accessibility standards
              and a shared community of people
              who care about this side of the craft.
              I'm proud of the work we did on Structure
              and the team that created it,
              and I'm just as proud of the Helios team now.
            </p>
            <p>
              So that's the story of a design system
              from beginning to end
              and I have a lot of thoughts on how I would do itall again.
              But my best advice is from the things that we did right.
              If you have a design team with up to twenty designers,
              make sure you are focusing on collaboration and inclusion.
              Let the design system be the best example
              of how you craft processes and workflows,
              and listen to the designers who are using it.
            </p>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default Structure