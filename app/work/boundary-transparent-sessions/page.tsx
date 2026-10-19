import type { Metadata } from 'next'
import CaseStudyTheme from '@/components/case-study-theme'
import Intro from '@/components/intro'
import LogoStack from '@/components/logo-stack'
import Example from '@/components/example'
import { caseStudyMetadata, getCaseStudy } from '@/lib/case-studies'

const study = getCaseStudy('boundary-transparent-sessions')

export const metadata: Metadata = caseStudyMetadata(study)

export default function TransparentSessionsCaseStudy() {
  return (
    <>
      <CaseStudyTheme theme={study.theme} />

      <Intro
        title={study.title}
        meta={study.meta}
        theme={study.theme}
        logos={<LogoStack study={study} />}
      />

      <div className={`article-body centered`}>
        <section>
          <div className="section-title">Background</div>
          <h2>The best security is invisible</h2>
          <p>
            The traditional approach to secure access involves a painful trade-off: 
            either compromise security for convenience, or force users through 
            cumbersome authentication workflows. Every time users need to access a 
            protected resource, they face the friction of launching a client, 
            finding their target, establishing a connection, and copying proxy 
            addresses. We saw an opportunity to eliminate this friction entirely.
          </p>

          <Example
            images={[
              "case-studies/boundary-ts-researchplan.png",
              "case-studies/boundary-ts-workflows.png"
            ]}
            caption="Traditional access workflow vs. Transparent Sessions"
          />

          <p>
            Our vision was ambitious: what if secure access could be so seamless 
            that users wouldn't even know they were using it? <mark>Instead of 
            building another tool that users have to think about, we could create 
            invisible infrastructure that just works</mark>. This would transform 
            Boundary from a security tool into essential infrastructure that IT 
            teams could deploy across their organizations.
          </p>
        </section>

        <section>
          <div className="section-title">Strategic vision</div>
          <h2>Access that just works</h2>
          <p>
            The key insight came from watching users interact with protected 
            resources. They didn't want to think about proxy addresses or 
            connection protocols - they just wanted to access their tools using 
            familiar URLs. This led to the concept of aliases, allowing users to 
            create simple nicknames for their targets that work just like regular 
            web addresses.
          </p>

          <Example
            images={[
              "case-studies/boundary-ts-admin.png"
            ]}
            caption="Admin creating an alias for a target"
          />

          <p>
            This wasn't just about simplifying URLs - it represented a fundamental 
            shift in how organizations could approach access management. IT teams 
            could now configure secure access patterns that would feel completely 
            natural to their users. <mark>Security could finally get out of the 
            way while still maintaining complete control</mark>.
          </p>
        </section>

        <section>
          <div className="section-title">Technical innovation</div>
          <h2>Making complex things simple</h2>
          <p>
            Implementing this vision required solving complex technical challenges. 
            We needed to hijack DNS resolution to make our aliases work like 
            regular domains, but this meant careful coordination with other 
            enterprise security tools. We conducted extensive compatibility testing 
            with common enterprise tools like ZScaler and Cisco AnyConnect, 
            ensuring our solution would work reliably in real-world environments.
          </p>

          <Example
            images={[
              "case-studies/boundary-ts-prototype.png"
            ]}
            caption="I built a prototype simulating switching between apps"
          />

          <Example
            images={[
              "case-studies/boundary-ts-prototype-section.png",
              "case-studies/boundary-ts-prototype-screen.png"
            ]}
            caption="I took users through several workflows to see what they thought"
          />

          <p>
            The desktop client needed to handle these connections seamlessly while 
            maintaining security and performance. Through careful collaboration 
            between design and engineering teams, we created an architecture that 
            could manage complex networking operations while presenting a simple, 
            intuitive interface to users.
          </p>
        </section>

        <section>
          <div className="section-title">User impact</div>
          <h2>From complexity to clarity</h2>
          <p>
            Early feedback from users validated our approach. One tester described 
            the alias feature as "magical," noting how it transformed their daily 
            workflow. IT teams particularly appreciated how it simplified onboarding, 
            with one admin sharing that "users don't even realize they're using a 
            security tool - they just know their stuff works."
          </p>

          <Example
            images={[
              "case-studies/boundary-ts-quotes.png"
            ]}
            caption="The team loves hearing about research results"
          />

          <Example
            images={[
              "case-studies/boundary-ts-stats.png"
            ]}
            caption="The team loves hearing about research results"
          />

          <p>
            As large engineering teams begin rolling out Transparent Sessions, 
            we're seeing how this feature transforms Boundary's role in their 
            infrastructure. Rather than being yet another security tool to manage, 
            it becomes an invisible layer that <mark>just handles secure access 
            without anyone having to think about it</mark>.
          </p>
        </section>

        <section>
          <div className="section-title">Future vision</div>
          <h2>Beyond traditional boundaries</h2>
          <p>
            Transparent Sessions represents more than just a feature - it's a new 
            paradigm for how security tools can operate. By making security 
            invisible, we've opened up possibilities for deeper integration with 
            enterprise infrastructure and workflows.
          </p>

          <Example
            images={[
              "case-studies/boundary-ts-menubar.png",
              "case-studies/boundary-ts-spotlight.png"
            ]}
            caption="We reimagined new form factors that Transparent Sessions enables"
          />

          <Example
            images={[
              "case-studies/boundary-ts-blog.png"
            ]}
            caption="Announcement for Transparent Sessions"
          />

          <p>
            Looking ahead, we're exploring how this approach could extend to other 
            aspects of infrastructure security. <mark>When security tools can fade 
            into the background while maintaining rigorous controls, organizations 
            can finally achieve both security and usability</mark>. This positions 
            Boundary as a pioneer in the next generation of security infrastructure.
          </p>
        </section>
      </div>
    </>
  )
}
