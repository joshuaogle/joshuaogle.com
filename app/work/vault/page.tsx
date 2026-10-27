import type { Metadata } from 'next'
import CaseStudyTheme from '@/components/case-study-theme'
import Intro from '@/components/intro'
import LogoStack from '@/components/logo-stack'
import Example from '@/components/example'
import RoleSplit from '@/components/role-split'
import Findings from '@/components/findings'
import PullQuote from '@/components/pull-quote'
import Outcomes from '@/components/outcomes'
import NextCaseStudy from '@/components/next-case-study'
import { caseStudyKicker, caseStudyMetadata, getCaseStudy } from '@/lib/case-studies'

const study = getCaseStudy('vault')

export const metadata: Metadata = caseStudyMetadata(study)

export default function VaultCaseStudy() {
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
          images={["case-studies/hcpvault-overview.png"]}
          caption="HCP Vault cluster overview, shipped January 2021"
        />

        <section>
          <div className="section-title">Context</div>
          <h2>It’s hard to keep a secret</h2>
          <p>
            Modern web applications require a dizzying number of moving parts,
            including dynamic resources like servers, databases, and applications
            that are constantly being deployed and changed.
            And to make things more complicated,
            engineering teams at large companies can grow to hundreds or thousands of people
            all needing access to passwords and other secrets.
            So how do you keep anything secure?
          </p>
          <p>
            Vault’s most frequent users aren’t human:
            applications authenticate to it, check their permissions,
            and get back short-lived credentials.
            Its CLI and API already had a devoted open source following,
            and today HashiCorp’s tools are used by 85% of the Fortune 500.
            So a UI had to earn its place by helping the humans who configure and audit Vault,
            without getting in the way of the machines.
          </p>

          <Example
            images={[
              "case-studies/vault-loader-dark.gif",
              "case-studies/vault-keys.png"
            ]}
            caption="Vault’s first product color was slate gray"
          />

          <Example
            video="case-studies/vault-ui-011.mp4"
            caption="Vault 0.11"
          />
        </section>

        <section>
          <div className="section-title">My role</div>
          <h2>A UI for a CLI people already loved</h2>
          <p>
            As Product Design Lead for Vault, I owned the design of its web UI and, later, of HCP Vault.
            I worked alongside one other designer and a team of more than 30 engineers.
          </p>
          <RoleSplit
            led={[
              'UI strategy for Vault and Vault Enterprise',
              'In-person research at HashiConf',
              'The UI Guide, from concept to shipped component',
              'The HCP Vault provisioning workflow and dashboard',
            ]}
            partners={[
              'Product Manager: dozens of customer interviews for HCP Vault',
            ]}
          />
        </section>

        <section>
          <div className="section-title">Research</div>
          <h2>Listening at HashiConf</h2>
          <p>
            I took the incredibly valuable opportunity
            to do research in-person at HashiConf,
            our annual conference attended
            by some of our smartest and most invested users.
            I ran small studies by appointment
            and also invited people to come talk to us between talks.
            We made it easy to drop in, give us feedback, and get back to socializing.
          </p>

          <Example
            images={["case-studies/vault-booth.jpg"]}
            caption="Vault UX research at HashiConf"
          />
        </section>

        <section>
          <div className="section-title">Findings &amp; decisions</div>
          <h2>What we learned from research</h2>
          <p>
            Each study started with a hypothesis.
            Here is what held up, what didn’t, and what we did about it.
          </p>
          <Findings
            items={[
              {
                hypothesis: 'Vault’s experts live in the CLI, so a web UI would mostly serve newcomers.',
                verdict: 'new',
                learning: 'The UI’s real audience was the people who configure and audit Vault: security, platform, and compliance engineers who needed visibility a terminal couldn’t give them.',
                decision: 'Built the Vault UI around discoverability, with secrets engines and auth methods in plain view.',
              },
              {
                hypothesis: 'Good documentation is enough to get a team set up.',
                verdict: 'disproved',
                learning: 'Setup took hours, and many people split it over several days. Help had to live inside the workflow, not in another tab.',
                decision: 'Designed the UI Guide, which walks people through each workflow the first time and every time after.',
              },
              {
                hypothesis: 'Teams want Vault, but running it themselves holds them back.',
                verdict: 'confirmed',
                learning: 'Setup, not Vault itself, was the barrier. Customers wanted its confidence without the headache of running it.',
                decision: 'Designed HCP Vault’s provisioning workflow and cluster dashboard. Hundreds of clusters followed in the first week.',
              },
            ]}
          />
        </section>

        <section>
          <div className="section-title">Vault Web UI</div>
          <h2>Launching Vault 1.0 at HashiConf</h2>
          <p>
            HashiCorp <a href="https://sports.yahoo.com/news/hashicorp-vault-enterprise-release-enables-150000673.html">had just announced Vault Enterprise</a>.
            Vault’s open source project was already becoming the standard among open source users,
            and it had quite a fan base.
            HashiCorp knew that the security engineers, platform engineers, and compliance officers
            that would be using the Enterprise version
            needed a user interface that gave them more discoverability and visibility
            into their secrets management environment.
          </p>

          <Example
            images={[
              "case-studies/vault-home.png",
              "case-studies/vault-secret-schema.png",
              "case-studies/vault-methods.png",
            ]}
            caption="Secrets engines & auth methods in Vault"
          />

          <Example
            images={[
              "case-studies/vault-crowd.jpg",
              "case-studies/vault-stage.jpg"
            ]}
            caption="Vault 1.0 announcement at HashiConf 2018"
          />
        </section>

        <section>
          <div className="section-title">UI Guide</div>
          <h2>Everybody could use a Guide</h2>
          <p>
            It’s no surprise that a tool like Vault has a bit of a learning curve.
            Getting everything configured and integrated into your application could take hours
            (many people even split it up over several days!).
            So I designed a new “UI Guide” component
            that helps you learn about how to use Vault and the Web UI,
            guiding the user through new workflows,
            whether it is their first time doing it
            or to help make sure they remember the next time.
          </p>

          <Example
            images={[
              "case-studies/vault-guide-methods.png",
              "case-studies/vault-guide-mobile.png",
            ]}
            caption="Vault Guide in action"
          />

          <Example
            images={["case-studies/vault-guide-flow.png"]}
            caption="Designing a workflow for flexibility"
          />
        </section>

        <section>
          <div className="section-title">HCP Vault</div>
          <h2>Making easy even easier</h2>
          <p>
            In 2020, the HashiCorp Cloud Platform (HCP) was created
            to bring our multicloud automation tools all into one place.
            At this point, the Vault product design team had grown to four
            and we needed someone who understood the complexities
            of how our products fit together,
            so I moved my focus to HCP Vault
            and left the core product in their good hands.
          </p>
          <p>
            Our Product Manager joined me for dozens of customer interviews
            where we heard a consistent story:
          </p>

          <PullQuote by="Vault customers, in dozens of interviews">
            We want the confidence of using Vault,
            but without the headache of setting it up ourselves.
          </PullQuote>

          <Example
            images={[
              "case-studies/hcpvault-wireframe.png",
              "case-studies/hcpvault-overview.png"
            ]}
            caption="From wireframe to shipped cluster overview"
          />

          <p>
            HCP Vault launched in January 2021.
            I had designed a simple workflow for provisioning a Vault cluster
            and a friendly dashboard where you could see the cluster’s status on HCP.
            Within a week there were hundreds of new Vault clusters
            created by customers varying from retail businesses and banks
            to government entities I’m not allowed to mention.
            <mark>Secrets management was more accessible than ever.</mark>
          </p>
        </section>

        <section>
          <div className="section-title">Outcomes</div>
          <h2>What changed</h2>
          <Outcomes
            results={[
              { value: 'Hundreds', label: 'of Vault clusters created in HCP Vault’s first week' },
            ]}
            customers={[
              'Provisioning Vault became a guided workflow instead of a self-hosted setup',
            ]}
            business={[
              'Hundreds of HCP Vault clusters in the first week',
              'Customers from retail and banking to government',
            ]}
          />
        </section>

        <NextCaseStudy study={study} />
      </div>
    </>
  )
}
