import Layout from '../../components/layout'
import Head from 'next/head'
import Intro from '../../components/intro'

export const summary = {
  title: "Structure Design System",
  meta: {
    date: "2020-10-31",
    role: "Design System Lead",
    time: "4 years",
    team: "12 Designers",
    client: "HashiCorp",
    client_url: "http://hashicorp.com",
  },
  theme: {
    color: "#2e71e5",
    background: "",
    icon: "/images/case-study-logo-structure.svg",
    thumbnail: "",
  },
  intro: "Description.",
}

const Structure = () => {
  return (
    <>
      <Head>
        <title>{`Joshua Ogle | Work`}</title>
      </Head>

      <Layout>
        <style jsx global>{`
          :root {
            --theme-background-color: ${summary.theme.color};
          }
        `}</style>
      
        <Intro
          title={summary.title}
          date={summary.meta.date}
        />

        <div className="inset inset--desktop">
          <section>
            <img src="case-studies/armada-home.png" />
          </section>
        </div>

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

          <figure>
            <img src="/source/images/case-studies/armada-device.png" />
            <figcaption>
              A device plugs into the car's data (OBD2) port to send readings and location data via a cellular chip
            </figcaption>
          </figure>
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

        <div className="inset inset--desktop">
          <section>
            <img src="case-studies/armada-users.png" />
          </section>
        </div>

        <section>
          <p>
            I think this process of iterative design is a powerful tool that not enough people get comfortable with.
            A "waterfall" approach (one that starts with wireframes and then high-fidelity mockups before code even begins) ignores the fluid nature of the web and discourages experimentation.
            Around this time, the device prototypes were ready and we were able to start testing them on our own cars.
            Seeing the data and maps populate in real-time was <mark>magical</mark>, and not something you get to experience on every project.
          </p>
        </section>

        <div className="inset inset--desktop">
          <section>
            <img src="case-studies/armada-user.png" />
          </section>
        </div>

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

        <div className="inset inset--desktop">
          <section>
            <img src="case-studies/armada-trips.png" />
          </section>
        </div>

        <section>
          <div className="section-title">In Summary</div>
          <h2>Never underestimate a small team</h2>
          <p>
            I'm really proud of the design work that we were able to accomplish and that they were on board with all of my crazy ideas.
            The Armada team were fantastic to work with, and they've grown their operations and are doing well attracting new organizations.
            We were able move efficiently thanks to a clear vision and a team that understood that <mark>you can build amazing things if you start small and iterate</mark>.
          </p>
        </section>
      </Layout>
    </>
  )
}

export default Structure