import type { Metadata } from 'next'
import CaseStudyTheme from '@/components/case-study-theme'
import Intro from '@/components/intro'
import LogoStack from '@/components/logo-stack'
import Example from '@/components/example'
import RoleSplit from '@/components/role-split'
import Stats from '@/components/stats'
import SessionWaveform from '@/components/session-waveform'
import NextCaseStudy from '@/components/next-case-study'
import { caseStudyKicker, caseStudyMetadata, getCaseStudy } from '@/lib/case-studies'

const study = getCaseStudy('boundary')

export const metadata: Metadata = caseStudyMetadata(study)

export default function BoundaryCaseStudy() {
  return (
    <>
      <CaseStudyTheme theme={study.theme} />

      <Intro
        title={study.title}
        meta={study.meta}
        theme={study.theme}
        logos={<LogoStack study={study} />}
        kicker={caseStudyKicker(study)}
        dek={study.dek}
      />

      <div className="article-body centered case-study">
        <Example
          images={["case-studies/boundary-sr-playback.jpg"]}
          caption="Session Recording: playing back a recorded SSH session, with its details"
        />


        <section>
          <div className="section-title">Context</div>
          <h2>Access was only half the problem</h2>
          <p>
            Boundary had established itself as a powerful solution for secure access
            to dynamic infrastructure. But two problems kept coming up.
            Security teams still relied on separate tools to see how that access was
            being used, which some of our biggest customers required.
            And every time people needed a protected resource, they faced the friction
            of launching a client, finding their target, establishing a connection,
            and copying proxy addresses.
          </p>
        </section>

        <section>
          <div className="section-title">My role</div>
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
          <RoleSplit
            led={[
              'Product strategy and roadmapping, as an equal partner with Product and Engineering',
              'Mentoring new designers as the team grew from one to three',
              'The research plan for Session Recording',
              'The Transparent Sessions prototype and user testing',
            ]}
            partners={[
              'Backend lead: the waveform timeline concept',
              'Engineering: a recording file format that survives dropped sessions',
            ]}
          />
        </section>

        <section id="session-recording">
          <div className="section-title">Session Recording · 2023</div>
          <h2>Understanding investigation workflows</h2>
          <p>
            We saw an opportunity to expand Boundary's role beyond basic access management
            through conversations with customers and market analysis. If this feature
            existed but was difficult to use, that would create a significant hurdle in
            getting teams to take security seriously.
          </p>
          <p>
            Rather than simply matching competitor features, we needed to understand the
            complex needs of incident response teams. I developed a comprehensive research plan
            combining qualitative interviews and detailed metrics. We conducted several major
            studies throughout the year, carefully crafting interview questions to dig deep
            into specific features while gathering broader insights about security workflows.
          </p>

          <Example
            images={["case-studies/boundary-sr-researchplan.jpg"]}
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
            images={["case-studies/boundary-sr-recordingfile.png"]}
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

          <p>
            Sometimes the best design solutions come from unexpected moments. During a cab ride
            to the airport after an offsite meeting, our backend lead and I found ourselves
            brainstorming ways to help users identify patterns in session activity.
            That conversation led to our most innovative idea: a waveform timeline
            that shows what happened during a session at a glance, so investigators
            could move quickly and find related patterns. It didn’t make it into the
            product, but you can try a working sketch of it here.
          </p>

          <SessionWaveform />

          <Example
            video="case-studies/boundary-sr-recording.mp4"
            caption="Session Recording in action"
          />

          <p>
            Session Recording transformed Boundary's market position, helping us
            achieve recognition in Gartner's PAM category. We attracted major enterprise
            customers including several big banks and organizations like Takeda Pharmaceuticals
            and DuckDuckGo. Boundary became a "deal leader" for HashiCorp's product suite:
            its approachable design made it an entry point for teams just starting
            with dynamic infrastructure, who might not yet need Vault or Terraform.
          </p>

          <Example
            images={[
              "case-studies/boundary-sr-blog.jpg",
              "case-studies/boundary-sr-rdp.png"
            ]}
            caption="The Session Recording announcement, and RDP support, which came next"
          />
        </section>

        <section id="transparent-sessions">
          <div className="section-title">Transparent Sessions · 2024</div>
          <h2>Access that just works</h2>
          <p>
            Our vision was ambitious: what if secure access could be so seamless
            that users wouldn't even know they were using it? <mark>Instead of
            building another tool that users have to think about, we could create
            invisible infrastructure that just works</mark>.
          </p>

          <Example
            images={[
              "case-studies/boundary-ts-researchplan.jpg",
              "case-studies/boundary-ts-workflows.png"
            ]}
            caption="Traditional access workflow vs. Transparent Sessions"
          />

          <p>
            The key insight was simple: people didn't want to think about proxy
            addresses or connection protocols. They just wanted to reach their
            tools using familiar URLs. That led us to aliases, simple nicknames
            for targets that work just like regular web addresses.
          </p>

          <Example
            images={["case-studies/boundary-ts-admin.png"]}
            caption="Admin creating an alias for a target"
          />

          <p>
            Implementing this required solving complex technical challenges.
            We needed to hijack DNS resolution to make our aliases work like
            regular domains, which meant careful coordination with other
            enterprise security tools, and compatibility testing with tools
            like ZScaler and Cisco AnyConnect.
          </p>
          <p>
            The networking would take time to build, but the experience needed
            testing now. So I built a prototype that simulated switching between
            apps, and took users through several workflows to see where they
            got stuck.
          </p>

          <Example
            images={["case-studies/boundary-ts-prototype.jpg"]}
            caption="I built a prototype simulating switching between apps"
          />

          <Example
            images={[
              "case-studies/boundary-ts-prototype-section.jpg",
              "case-studies/boundary-ts-prototype-screen.png"
            ]}
            caption="I took users through several workflows to see what they thought"
          />

          <p>
            Early feedback validated the approach. One tester described aliases
            as "magical," noting how it transformed their daily workflow. Admins
            appreciated how it simplified onboarding, with one sharing that
            "users don't even realize they're using a security tool - they just
            know their stuff works."
          </p>

          <Example
            images={["case-studies/boundary-ts-quotes.jpg"]}
            caption="What people said about aliases in testing"
          />

          <Stats
            label="Research results"
            items={[
              { value: '100%', label: 'thought that aliases were easy to configure and use' },
              { value: '50%', label: <>stopped to ask about the <code>-name</code> and <code>-alias</code> flags in <code>alias create</code></> },
              { value: '80%', label: 'needed more help to know how and where to use aliases' },
              { value: '30%', label: <>thought <code>alias.project</code> suffixes would help organize their large org</> },
            ]}
          />

          <Example
            images={[
              "case-studies/boundary-ts-menubar.jpg",
              "case-studies/boundary-ts-spotlight.png"
            ]}
            caption="We reimagined new form factors that Transparent Sessions enables"
          />

          <Example
            images={["case-studies/boundary-ts-blog.jpg"]}
            caption="Announcement for Transparent Sessions"
          />
        </section>

        <section>
          <div className="section-title">Results</div>
          <h2>A deal leader for HashiCorp</h2>
          <p>
            Session Recording earned Boundary recognition in Gartner’s PAM category
            and brought in enterprise customers including several big banks,
            Takeda Pharmaceuticals and DuckDuckGo.
            In testing, every Transparent Sessions tester found aliases easy
            to configure and use.
            Boundary became a “deal leader” for HashiCorp’s product suite,
            and design became an equal partner in its product strategy.
          </p>
        </section>

        <NextCaseStudy study={study} />
      </div>
    </>
  )
}
