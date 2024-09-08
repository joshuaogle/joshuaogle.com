import Layout from '../../components/layout'
import Head from 'next/head'
import Intro from '../../components/intro'
import Example from '../../components/example'

export const summary = {
  title: "Tracking the whole fleet",
  name: "Armada",
  description: "I co-founded a consultancy in OKC and led design for a team of seven. We helped Armada create a world class fleet management and tracking app.",
  meta: {
    date: "2015",
    role: "Brand & Design",
    time: "1 year",
    team: "1 Designer, 1 Developer",
    client: "Armada Telematics",
    client_url: "http://armadatracking.com"
  },
  theme: {
    colorPrimary: "#1BA9EF",
    colorBGLight: "#2D363A",
    colorBGDark: "#21262D",
    colorHighlight: "rgb(2, 169, 242)",
    colorHeading: "#12A6EE",
    icon: "/images/case-study-logo-armada.svg",
    preview: "/images/case-studies/armada-user.png",
  }
}

const VaultCaseStudy = () => {
  return (
    <Layout>
      <Head>
        <title>{`Joshua Ogle | Armada`}</title>
      </Head>
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
        theme={summary.theme}
      />

      <div className={`article-body centered`}>
        <section>
          <Example
            images={[
              "case-studies/armada-home.png"
            ]}
            caption="Armada helps you track your feet in real-time"
          />
        </section>

        <section>
          <div className="section-title">The Challenge</div>
          <h2>Find your fleet</h2>
          <p>
            <mark>Tracking assets and vehicles isn't easy.</mark>
            The companies want as much information about their fleet as they can get, and they want it displayed in a simple way.
            Armada was working on developing a set of tracking devices for several different scenarios.
          </p>

          <p>
            Assets like trailers just need GPS tracking, but don't typically have their own battery power, so they were developing a device with a long-lasting rechargable battery.
            Modern vehicles have a data port that can power a small GPS tracker and also provides it with some vehicle information like maintenance alerts.
            Both devices would have an accelerometer included too, which means you can track things like speed warnings and sudden stops.
            These devices could give you an incredible amount of insight into the location history and driver behavior.
            But <mark>all of this information is useless without an easy to understand interface</mark> that provides this information in real-time.
          </p>

          <Example
            images={["case-studies/armada-device.png"]}
            caption="An easy to install device"
          />
        </section>

        <section>
          <div className="section-title">The Solution</div>
          <h2>Getting the whole picture</h2>
          <p>
            It was important to us to get a design into the browser as soon as possible in order to feel the experience across desktop, tablet and mobile devices.
            We knew we weren't going to be ready to start on a native mobile app yet, so <mark>we wanted to make sure the mobile web was considered from the beginning</mark>.
            We started with a quick whiteboarding session with myself and the lead developer.
            Because we had a lot of experience working together, we were able to really quickly put together the structure of the app and describe the user experience.
            After that, we dove straight in and started building the core functionality while I worked on creating the views that we whiteboarded.
          </p>
        </section>

        <Example
          images={["case-studies/armada-users.png"]}
          caption="It's easy to manage your team"
        />

        <section>
          <p>
            I think this process of iterative design is a powerful tool that not enough people get comfortable with.
            A "waterfall" approach (one that starts with wireframes and then high-fidelity mockups before code even begins) ignores the fluid nature of the web and discourages experimentation.
            Around this time, the device prototypes were ready and we were able to start testing them on our own cars.
            Seeing the data and maps populate in real-time was <mark>magical</mark>, and not something you get to experience on every project.
          </p>
        </section>

        <Example
          images={["case-studies/armada-user.png"]}
          caption="User details"
        />

        <section>
          <p>
            Now that we had all of this data streaming in, we got to work on how to surface the most important parts to the users.
            We started by allowing supervisors to opt-in to text or email notifications about bad behavior as it happened, so they can make sure their drivers were being safe.
            The map view helps make the information seem immediate, and the right sidebar allows you to drill down into more specific information while keeping an eye on the big picture.
            My favorite feature though is the trip history, which shows the current location and status of all of the vehicles and assets.
            You can scrub through a timeline of activity, with the start and stop location for each trip laid out on the map.
            All of this together made for a unique experience that was miles ahead of the competition.
          </p>
        </section>

        <Example
          images={["case-studies/armada-trips.png"]}
          caption="Trip history"
        />

        <section>
          <div className="section-title">In Summary</div>
          <h2>Never underestimate a small team</h2>
          <p>
            I'm really proud of the design work that we were able to accomplish and that they were on board with all of my crazy ideas.
            The Armada team were fantastic to work with, and they've grown their operations and are doing well attracting new organizations.
            We were able move efficiently thanks to a clear vision and a team that understood that <mark>you can build amazing things if you start small and iterate</mark>.
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default VaultCaseStudy;