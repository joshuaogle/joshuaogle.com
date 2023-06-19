import Layout from '../../components/layout'
import Head from 'next/head'
import Intro from '../../components/intro'
import Example from '../../components/example'

export const summary = {
  title: "Sharespost",
  meta: {
    date: "2016-08-01",
    role: "Design Lead, Front-End",
    time: "9 months",
    team: "2 Designers, 3 Developers",
    client: "Sharespost",
    client_url: "http://sharespost.com",
  },
  theme: {
    backgroundColor: "#332D8D",
    backgroundImage: "url('/images/case-study-bg-sharespost.png')",
    accentRGB: "200, 200, 200",
    highlightRGB: "0, 182, 242",
    icon: "/images/case-study-logo-sharespost.svg",
    thumbnail: "/images/case-studies/sharespost-home.png",
  },
  intro: "At thoughtbot, we helped one of the largest private securities firms make the process of buying and selling shares easy. Their existing process was very manual, relying on brokers to do almost everything. To help them scale even bigger, they would need to find a way to automate as much of the process. This would free up the brokers to provide better service to even more users.",
}

const Sharespost = () => {
  return (
    <>
      <Head>
        <title>{`Joshua Ogle | Sharespost`}</title>
      </Head>

      <Layout>
        <style jsx global>{`
          :root {
            --theme-background-color: ${summary.theme.backgroundColor};
            --theme-background-image: ${summary.theme.backgroundImage};
            --theme-accent-rgb: ${summary.theme.accentRGB};
            --theme-highlight-rgb: ${summary.theme.highlightRGB};
          }
        `}</style>
      
        <Intro
          title={summary.title}
          date={summary.meta.date}
        />

        <Example
          image="case-studies/sharespost-chart.png"
          caption="The home page greets users with an up-to-date evaluation of their holdings."
        />

        <section>
          <div className="section-title">
            The Challenge
          </div>
          <h2>
            It's more interesting than it sounds
          </h2>
          <p>
            Financial apps may not sound like the most interesting thing to work on, but the thing I love most about consulting is diving deep into a new field.
            Even among financial apps, private securities are a unique challenge.
            Private securities are shares of stock in a company that isn't publically traded, so while
            it's easy to get a price for a company on the stock exchange, <mark>private companies require a lot more expertise</mark> to estimate the value with authority.
          </p>

          <Example
            image="case-studies/sharespost-wires.png"
            caption="One of the earliest 'wireflows' from our Product Design Sprint. More detail was added as we got closer to development."
          />

          <p>
            This company is the largest marketplace of private securities, and to maintain that position they approached thoughtbot to build a new platform.
            The new app would <mark>make the most of the relationships</mark> that their users have with their brokers by providing up-to-date information on companies and opportunities that might be interested them.
            So for instance, it would display investment opportunities that the broker has marked specifically for the user based on their conversations.
            It would show news stories relevant to companies they have invested in or are watching.
            And most importantly, it would make it easy to let your broker know that you are interested in acquiring or selling stock in these companies.
          </p>
        </section>

        <section>
          <div className="section-title">
            The Solution
          </div>
          <h2>
            Demystifying the strange world of stocks
          </h2>

          <p>
            As with most projects at thoughtbot, we started with a week-long Product Design Sprint.
            Two developers were with the client in our San Francisco office, while another designer and I joined remotely using Google Hangouts.
          </p>

          <Example
            image="case-studies/sharespost-sprint.jpg"
            caption="So much paper, so many ideas. Design Sprints are my favorite way to start a project"
          />

          <p>
            I had done remote design sprints where I was the only one remote, which usually ends up a little awkward.
            With half the team being remote, we were diligent about uploading photos of sketches directly to the Trello board we had set up for the sprint via the Trello mobile app.
            This has the bonus of forcing you to upload everything for documentation, which comes in handy during prototyping and even later in the project.
            You never know when that one idea from a random sketch might come in handy later.
            Having two designers on the same end also meant that we were able to quickly toss around ideas and soon all of the whiteboard walls were covered in sketches and flows.
          </p>

          <Example
            image="case-studies/sharespost-invision.png"
            caption="InVision is perfect for user testing at any stage of production"
          />

          <p>
            We usually like to start designing in the browser as soon as possible, but since the developers had some very complicated back-end code to figure out we spent time polishing the wireframes into high-fidelity mockups.
            These mockups were refined in <a href="http://invisionapp.com" target="_new">InVision</a> so we could give the client a realistic look at how the views were connected.
          </p>
        </section>
        
        <Example
          image="case-studies/sharespost-home.png"
          caption="The home page greets users with an up-to-date evaluation of their holdings."
        />

        <section>
          <p>
            Here's a look at one of those mockups.
            The home page prominently features an &ldquo;Estimated Valuation&rdquo; chart to summarize the user's portfolio over time.
            If the user is new and hasn't purchased any stocks yet, they get a friendly welcome message instead.
            Some of the tabs on company pages feature this kind of chart at the top too, <mark>giving a nice summary before they dive into the details</mark>.
          </p>

          <div className="split-layout">
            <div className="split-primary">
              <p>
                One of the repeated design patterns around the site is the use of cards to contain information related to an opportunity.
                The company name and logo give a nice visual differentiator, as well as a large graph that shows the estimated valuation of the company over time so you can tell at a glance if this is a good investment.
                Buttons on the right give easy access to actions the user might want to take, including asking their broker to start the process of buying the stock.
              </p>
            </div>

            <Example
              image="case-studies/sharespost-card.png"
              caption="An early Opportunity Card wireframe"
            />
          </div>

          <p>
            Since we started the project with two designers, <mark>we were able to create the styleguide and design patterns much quicker than most projects</mark>.
            As the developers caught up the views then came together quickly.
            It was a rather complicated user interface, so we weren't going to have all of the data ready at once.
            It's important to start getting user feedback as early as possible, so we put together a plan to deploy the pieces of the interface as they were ready.
            With a set of feature flags and a flexible layout system, we iteratively released the new system to VIP members for testing.
          </p>
        </section>

        <Example
          image="case-studies/sharespost-waterfall.png"
          caption="The &ldquo;waterfall chart&rdquo; was the most technically difficult, but also the most informative."
        />

        <section>
          <p>
            The piece that took the longest was the waterfall chart.
            Depending on the class of your shares and when you acquired them, they would be valued differently.
            It went through a few different design versions to make sure it was as clear as we could possibly make it.
            As far as I know, no one else provides this information in such a clear and interactive way.
            I designed the charts and wrote the javascript for them, and then the developers fed in the data in a simple format.
            The back-end that provides the data for this piece is extremely complicated, and frankly I'm glad I wasn't the one working on it.
          </p>
        </section>


        <Example
          image="case-studies/sharespost-admin.png"
          caption="The admin system that gives the brokers access to all of the data."
        />

        <section>
          <p>
            With all of this data, the brokers and admins needed a system to help them manage it all.
            We developed an admin system that makes it all simple <mark>and works well on mobile too</mark>.
            They could now easily edit company information, select opportunities for individual clients, and add items to the news feed from one interface.
            <mark>This made their jobs much easier</mark> and they were excited to start using it.
          </p>
        </section>

        <section>
          <div className="section-title">
            In Summary
          </div>
          <h2>
            The best of both worlds
          </h2>

          <p>
            This was probably the most complicated app that I worked on while at thoughtbot.
            The client had worked with us on another project and understood our process.
            <mark>Having someone who is able to communicate expectations to the rest of the company is a huge help.</mark>
            I'm really happy with how well the team was able to organize software with so many moving parts.
            So far the app has been a big success.
            It launches Fall 2016, just in time for their busiest season, and I can't wait to hear how it goes.
          </p>
        </section>
      </Layout>
    </>
  );
}

export default Sharespost