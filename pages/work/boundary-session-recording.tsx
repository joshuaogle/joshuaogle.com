import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import Intro from '../../components/intro'
import Example from '../../components/example'

export const summary = {
  title: "Session Recording",
  name: "Boundary",
  meta: {
    date: "2023",
    role: "Product Design Lead",
    time: "3 years",
    team: "3 Designers, 30+ Engineers",
    client: "HashiCorp",
    client_url: "http://boundaryproject.io"
  },
  theme: {
    colorPrimary: "rgb(223, 70, 76)",
    colorBGLight: "#2A0A0D",
    colorBGDark: "#180507",
    colorHighlight: "rgb(96, 212, 220)",
    colorHeading: "rgb(239, 239, 241)",
    icon: "/images/case-study-logo-boundary.svg",
    preview: "/images/case-studies/boundary-sr-rdp.png",
  }
}

const BoundaryCaseStudy = () => {
  return (
    <Layout>
      <Head>
        <title>{`Joshua Ogle | Boundary Session Recording`}</title>
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
        <div className="section-title">Background</div>
          <h2>Beyond access management</h2>
          <p>
            Providing access isn't enough anymore - organizations need to understand how that 
            access is being used and identify anomalous behavior. While Boundary had 
            established itself as a powerful solution for secure access to dynamic 
            infrastructure, security teams were still relying on separate tools for 
            monitoring and investigation, which are required for some of our biggest customers.
            This created workflow friction and missed opportunities for deeper security insights.
          </p>

          <p>
            We saw an opportunity to expand Boundary's role beyond basic access management 
            through conversations with customers and market analysis. By taking a design-led 
            approach to session recording and monitoring, we could make sophisticated security 
            workflows more accessible while positioning Boundary as a <mark>comprehensive 
            platform for infrastructure security</mark>. Most importantly, if this feature 
            existed but was difficult to use, that would create a significant hurdle in 
            getting teams to take security seriously.
          </p>
        </section>

        <section>
          <div className="section-title">Growing design leadership</div>
          <h2>Elevating design's impact</h2>
          <p>
            When I joined Boundary in 2021, the product was being run primarily 
            by Engineering and Product Management, with design notably absent from strategic planning. 
            I worked to elevate design's role, ensuring we had an equal voice in roadmap 
            planning and strategy discussions. As the team grew from one to three designers, 
            I implemented a philosophy I've used successfully in early-stage design teams: 
            developing broad product knowledge before specializing.
          </p>

          <p>
            This approach proved particularly valuable for complex features like session recording. 
            Each designer could contribute meaningful feedback across the entire user journey, 
            having deep context about both access workflows and security requirements. 
            We became equal partners in the Boundary Leadership Team (BLT 🥪), helping shape 
            not just design execution but product strategy and direction.
          </p>
        </section>

        <section>
          <div className="section-title">Strategic research</div>
          <h2>Understanding investigation workflows</h2>
          <p>
            Rather than simply matching competitor features, we needed to understand the 
            complex needs of incident response teams. I developed a comprehensive research plan 
            combining qualitative interviews and detailed metrics. We conducted several major 
            studies throughout the year, carefully crafting interview questions to dig deep 
            into specific features while gathering broader insights about security workflows.
          </p>

          <Example
            images={[
              "case-studies/boundary-sr-researchplan.png"
            ]}
            caption="Research synthesis and journey mapping"
          />

          <p>
            Our research revealed how incident response teams work like detectives, following 
            trails of activity across their infrastructure. They need to expand their investigation 
            by examining other targets that share credentials, tracing user activities across 
            systems, and analyzing patterns that might indicate a breach. Most critically, they 
            need to correlate seemingly unrelated events that could reveal a larger security 
            incident. These insights pushed our strategy <mark>beyond basic recording functionality 
            to build tools supporting sophisticated investigation workflows</mark>.
          </p>

          <Example
            images={[
              "case-studies/boundary-sr-recordingfile.png"
            ]}
            caption="I worked with engineering team on a new recording file format"
          />

          <p>
            We would also need a new recording file format,
            based on the SSH protocol which is highly detailed
            and convoluted. We needed to be able to recover the recording
            even if disconnected in the middle of a session.
            There are a lot of things that can go wrong during
            SSH sessions and we needed to handle them gracefully
            and explain to the users what happened and support playback
            for partial recordings when possible. I helped with these discussions
            to think through edge cases and learn more about the SSH spec.
          </p>
        </section>

        <section>
          <div className="section-title">System design & innovation</div>
          <h2>From conversation to innovation</h2>
          <p>
            Sometimes the best design solutions come from unexpected moments. During a cab ride 
            to the airport after an offsite meeting, our backend lead and I found ourselves 
            brainstorming ways to help users identify patterns in session activity. As engineers 
            and designers often do, we started nerding out about data visualization possibilities. 
            This impromptu conversation led to our most innovative feature - a waveform timeline 
            visualization that would transform how teams analyze session recordings, helping them 
            gain insights our competitors haven't yet explored.
          </p>

          <Example
            images={[
              "case-studies/boundary-sr-waveforms.png"
            ]}
            caption="Timeline visualization showing session activity patterns"
          />

          <p>
            The waveform concept was more than just a visual flourish. It was a whole new way
            to represent what happened during a session at a glance, allowing the investigators
            to move quickly and find related patterns at a glance. This collaboration exemplified 
            how <mark>cross-functional partnerships can lead to solutions that go beyond what 
            competitors offer</mark>, creating unique value for our users.
          </p>
        </section>

        <section>
          <div className="section-title">Enterprise impact</div>
          <h2>Leading market growth</h2>
          <p>
            The session recording feature has transformed Boundary's market position, helping us 
            achieve recognition in Gartner's PAM category. We've attracted major enterprise 
            customers including several big banks and organizations like Takeda Pharmaceuticals 
            and DuckDuckGo. These customers are scaling Boundary in ways we never anticipated, 
            pushing us to prepare for even broader market adoption.
          </p>

          <Example
            video="case-studies/boundary-sr-recording.mp4"
            caption="Transparent Sessions in action"
          />

          <p>
            Most significantly, Boundary has become a "deal leader" for HashiCorp's product suite. 
            Its approachable design makes it an excellent entry point for teams just starting 
            with dynamic infrastructure who might not yet need Vault or Terraform. From a design 
            leadership perspective, this demonstrates how our user-centered approach shapes not 
            just product features, but company strategy.
          </p>

          <Example
            images={[
              "case-studies/boundary-sr-blog.png"
            ]}
            caption="Session Recording announcement"
          />
        </section>

        <section>
          <div className="section-title">Future vision</div>
          <h2>Scaling for tomorrow</h2>
          <p>
            Our research revealed numerous opportunities to enhance investigation workflows, 
            and we continue gathering insights as customers push the boundaries of what's 
            possible with session recording. We're seeing patterns in how organizations scale 
            their access management, bringing on more simultaneous users connecting to an 
            ever-expanding set of targets.
          </p>

          <Example
            images={[
              "case-studies/boundary-sr-rdp.png"
            ]}
            caption="Preparing for the future and RDP support"
          />

          <p>
            This feature's success has influenced our broader product strategy, showing how 
            Boundary can serve as an entry point for organizations beginning their journey 
            into dynamic infrastructure while scaling to meet sophisticated enterprise security 
            needs. <mark>This positions us perfectly for the next phase of growth</mark> 
            as more organizations adopt dynamic infrastructure and need comprehensive security 
            solutions that are both powerful and approachable.
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default BoundaryCaseStudy;