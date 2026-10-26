import type { Metadata } from 'next'
import type { StaticImageData } from 'next/image'
import boundaryTsPrototypeScreenPreview from '@/public/images/case-studies/boundary-ts-prototype-screen.png'
import boundarySrRdpPreview from '@/public/images/case-studies/boundary-sr-rdp.png'
import vaultHomePreview from '@/public/images/case-studies/vault-home.png'
import structureTreePreview from '@/public/images/case-studies/structure-tree.png'
import sharespostHomePreview from '@/public/images/case-studies/sharespost-home.png'
import armadaUserPreview from '@/public/images/case-studies/armada-user.png'
import boundarySrWaveformsCover from '@/public/images/case-studies/boundary-sr-waveforms.png'
import { openGraphDefaults } from './site'

export type CaseStudyTheme = {
  colorPrimary: string
  // The brand's second color, for titles on light paper when the primary doesn't read there
  colorSecondary?: string
  colorBGLight: string
  colorBGDark: string
  colorHeading: string
  colorHighlight: string
  preview: StaticImageData
  // The image on the home page sketchbook cover, when it should differ from the preview
  cover?: StaticImageData
}

// A logo shown in a circle. Company marks are used as-is; product glyphs (white on
// transparent) are drawn as a mask in `glyph` color on the product's `color`.
export type CompanyLogo = { name: string, src: string, background?: string, scale?: number }
export type ProductLogo = { name: string, src: string, color: string, glyph: string }

export type CaseStudy = {
  slug: string
  pageTitle: string
  title: string
  name: string
  description?: string
  // One line under the title: what Joshua did and what changed
  dek?: string
  meta: {
    date: string
    // The span of the work, like "2017–2021", shown in place of the date when known
    years?: string
    // The kind of product, like "Enterprise security"
    field?: string
    role: string
    time: string
    team: string
    // What the work covered, and who it was for
    scope?: string
    users?: string
    client: string
    client_url: string
  }
  theme: CaseStudyTheme
  company: CompanyLogo
  // The product or client within the company, when there's a logo for it
  product?: ProductLogo
}

const transparentSessions: CaseStudy = {
  slug: 'boundary-transparent-sessions',
  company: { name: 'HashiCorp', src: '/images/timeline-hashicorp.svg' },
  product: { name: 'Boundary', src: '/images/case-studies/case-study-logo-boundary.svg', color: 'rgb(223, 70, 76)', glyph: '#FFFFFF' },
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
  company: { name: 'HashiCorp', src: '/images/timeline-hashicorp.svg' },
  product: { name: 'Boundary', src: '/images/case-studies/case-study-logo-boundary.svg', color: 'rgb(223, 70, 76)', glyph: '#FFFFFF' },
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
    cover: boundarySrWaveformsCover,
  }
}

const vault: CaseStudy = {
  slug: 'vault',
  company: { name: 'HashiCorp', src: '/images/timeline-hashicorp.svg' },
  product: { name: 'Vault', src: '/images/case-studies/case-study-logo-vault.svg', color: 'rgb(255, 207, 37)', glyph: '#000000' },
  pageTitle: 'Vault',
  title: "Keeping the cloud’s secrets",
  name: "Vault",
  dek: "How I led design for Vault’s first web UI and its launch as a managed cloud service, making secrets management usable by the people who run it.",
  meta: {
    date: "2021",
    field: "Enterprise security",
    role: "Product Design Lead",
    time: "4 years",
    team: "2 Designers, 30+ Engineers",
    scope: "Vault Web UI, UI Guide, HCP Vault",
    users: "Security, platform & compliance engineers",
    client: "HashiCorp",
    client_url: "http://vaultproject.io"
  },
  theme: {
    colorPrimary: "rgb(255, 207, 37)",
    colorSecondary: "#000000",
    colorBGLight: "#272C31",
    colorBGDark: "#000",
    colorHighlight: "rgb(96, 212, 220)",
    colorHeading: "#6A7786",
    preview: vaultHomePreview,
  }
}

const structure: CaseStudy = {
  slug: 'structure',
  company: { name: 'HashiCorp', src: '/images/timeline-hashicorp.svg' },
  product: { name: 'Structure', src: '/images/case-studies/case-study-logo-structure.svg', color: 'rgb(92, 78, 229)', glyph: '#FFFFFF' },
  pageTitle: 'Structure Design System',
  title: "Structure Design System",
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
  company: { name: 'thoughtbot', src: '/images/timeline-thoughtbot.svg' },
  product: { name: 'Sharespost', src: '/images/case-studies/case-study-logo-sharespost.svg', color: '#00B7F1', glyph: '#FFFFFF' },
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
  company: { name: 'Brightbit', src: '/images/timeline-brightbit.svg', background: '#1C1A19', scale: .62 },
  product: { name: 'Armada', src: '/images/case-studies/case-study-logo-armada.svg', color: '#1BA9EF', glyph: '#FFFFFF' },
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

// The line over a case study's title: the product, the kind of product, and when
export function caseStudyKicker({ name, meta }: CaseStudy) {
  const product = meta.client.includes(name) ? meta.client : `${meta.client} ${name}`
  return [product, meta.field, meta.years ?? meta.date].filter(Boolean).join(' · ')
}

// The one after it in the home page order, back to the first after the last
export function nextCaseStudy(study: CaseStudy) {
  return caseStudies[(caseStudies.indexOf(study) + 1) % caseStudies.length]
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
