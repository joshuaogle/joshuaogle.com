import type { Metadata } from 'next'
import type { StaticImageData } from 'next/image'
import boundaryTsPrototypeScreenPreview from '@/public/images/case-studies/boundary-ts-prototype-screen.png'
import boundarySrRdpPreview from '@/public/images/case-studies/boundary-sr-rdp.png'
import vaultHomePreview from '@/public/images/case-studies/vault-home.png'
import structureTreePreview from '@/public/images/case-studies/structure-tree.png'
import sharespostHomePreview from '@/public/images/case-studies/sharespost-home.png'
import armadaUserPreview from '@/public/images/case-studies/armada-user.png'
import { openGraphDefaults } from './site'

export type CaseStudyTheme = {
  colorPrimary: string
  colorBGLight: string
  colorBGDark: string
  colorHeading: string
  colorHighlight: string
  preview: StaticImageData
}

export type CaseStudy = {
  slug: string
  pageTitle: string
  title: string
  name: string
  description?: string
  meta: {
    date: string
    role: string
    time: string
    team: string
    client: string
    client_url: string
  }
  theme: CaseStudyTheme
}

const transparentSessions: CaseStudy = {
  slug: 'boundary-transparent-sessions',
  pageTitle: 'Boundary Transparent Sessions',
  title: "Transparent Sessions",
  name: "Boundary",
  meta: {
    date: "2024",
    role: "Product Design Lead",
    time: "3 years",
    team: "3 Designers, 30+ Engineers",
    client: "HashiCorp",
    client_url: "http://boundaryproject.io"
  },
  theme: {
    colorPrimary: "rgb(223, 70, 76)",
    colorBGLight: "#252937",
    colorBGDark: "#0C0C0E",
    colorHighlight: "rgb(96, 212, 220)",
    colorHeading: "rgba(255, 255, 255, 0.33)",
    preview: boundaryTsPrototypeScreenPreview,
  }
}

const sessionRecording: CaseStudy = {
  slug: 'boundary-session-recording',
  pageTitle: 'Boundary Session Recording',
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
    preview: boundarySrRdpPreview,
  }
}

const vault: CaseStudy = {
  slug: 'vault',
  pageTitle: 'Vault',
  title: "Keeping your secrets safe",
  name: "Vault",
  meta: {
    date: "2021",
    role: "Product Design Lead",
    time: "4 years",
    team: "2 Designers, 30+ Engineers",
    client: "HashiCorp",
    client_url: "http://vaultproject.io"
  },
  theme: {
    colorPrimary: "rgb(255, 207, 37)",
    colorBGLight: "#272C31",
    colorBGDark: "#000",
    colorHighlight: "rgb(96, 212, 220)",
    colorHeading: "#6A7786",
    preview: vaultHomePreview,
  }
}

const structure: CaseStudy = {
  slug: 'structure',
  pageTitle: 'Structure Design System',
  title: "Infrastructure in style",
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
    colorPrimary: "rgb(92, 78, 229)",
    colorBGLight: "#272C38",
    colorBGDark: "#030507",
    colorHeading: "#6F7682",
    colorHighlight: "rgb(96, 212, 220)",
    preview: structureTreePreview,
  }
}

const sharespost: CaseStudy = {
  slug: 'sharespost',
  pageTitle: 'Sharespost',
  title: "Securities made simple",
  name: "Sharespost",
  meta: {
    date: "2016",
    role: "Design & Front-End",
    time: "9 months",
    team: "2 Designers, 3 Developers",
    client: "Sharespost",
    client_url: "http://sharespost.com",
  },
  theme: {
    colorPrimary: "#00B7F1",
    colorBGLight:"#2A254A",
    colorBGDark:"#171139",
    colorHeading: "#00B7F1",
    colorHighlight: "rgb(0, 182, 242)",
    preview: sharespostHomePreview,
  },
  description: "At thoughtbot, we helped one of the largest private securities firms make the process of buying and selling shares easy. Their existing process was very manual, relying on brokers to do almost everything. To help them scale even bigger, they would need to find a way to automate as much of the process. This would free up the brokers to provide better service to even more users.",
}

const armada: CaseStudy = {
  slug: 'armada',
  pageTitle: 'Armada',
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
    preview: armadaUserPreview,
  }
}

// Newest first; this is the order the home page carousel shows them in
export const caseStudies: CaseStudy[] = [
  transparentSessions,
  sessionRecording,
  vault,
  structure,
  sharespost,
  armada,
]

export function getCaseStudy(slug: string) {
  const study = caseStudies.find((study) => study.slug === slug)
  if (!study) {
    throw new Error(`Unknown case study: ${slug}`)
  }
  return study
}

export function caseStudyHref(study: CaseStudy) {
  return `/work/${study.slug}`
}

export function caseStudyMetadata(study: CaseStudy): Metadata {
  const description = study.description ?? `${study.title}: a ${study.name} case study by Joshua Ogle.`
  return {
    title: study.pageTitle,
    description,
    openGraph: {
      ...openGraphDefaults,
      type: 'article',
      title: study.pageTitle,
      description,
      images: [study.theme.preview.src],
    },
    twitter: { card: 'summary_large_image' },
  }
}
