import {summary as VaultSummary} from '../pages/work/vault';
import {summary as StructureSummary} from '../pages/work/structure';
import {summary as SharespostSummary} from '../pages/work/sharespost';
import {summary as ArmadaSummary} from '../pages/work/armada';

const timelineEvents = [
  {
    company: "Brightbit",
    when: "2010 to 2014",
    role: "Design Director",
    icon: "/images/timeline-brightbit.svg",
    title: "Small but mighty",
    copy: "I co-founded a consultancy in OKC and led design for a team of seven. \
      We helped Armada create a world class fleet management and tracking app.",
    caseStudies: [
      {summary: ArmadaSummary, href: "/work/armada"}
    ]
  },
  {
    company: "thoughtbot",
    when: "2014 to 2016",
    role: "Sr Product Designer",
    icon: "/images/timeline-thoughtbot.svg",
    title: "Zero to launch",
    copy: "thoughtbot is for their love of open-source and pride in their craft.\
      We created a dashboard for SharesPost to help users monitor their private shares",
    caseStudies: [
      {summary: SharespostSummary, href: "/work/sharespost"}
    ]
  },
  {
    company: "HashiCorp",
    when: "2017 to Now",
    role: "Staff Product Designer",
    icon: "/images/timeline-hashicorp.svg",
    title: "Secure by design",
    copy: "HashiCorp makes developer-focused infrastructure software. \
      I lead design for some of our most popular products and helped grow our design team from 2 designers to 30+ across seven teams.",
    caseStudies: [
      {summary: VaultSummary, href: "/work/vault"},
      {summary: StructureSummary, href: "/work/structure"}
    ]
  }
]

export default timelineEvents;