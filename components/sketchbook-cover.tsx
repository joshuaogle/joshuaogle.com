import Image from 'next/image'
import Link from 'next/link'
import { readableOn } from '../lib/color'
import LogoStack from './logo-stack'
import { caseStudyHref, type CaseStudy } from '../lib/case-studies'
import styles from '../styles/components/_sketchbook-cover.module.css'

type Props = {
  study: CaseStudy
}

// A case study as a sketchbook cover: the project's colors on leatherette, a spine
// hinge, an elastic band, a ribbon in the brand color and the work pasted on as a print.
// On hover the band slides off the edge and the arrow follows; the arrow is liquid glass
// drawn by lib/sketchbook-lens.ts from the print beneath it.
const SketchbookCover = ({ study }: Props) => {
  const { theme } = study
  // The brand color, lightened just enough to pass WCAG AA (with a little margin for the grain)
  const eyebrow = readableOn(theme.colorPrimary, theme.colorBGLight, 4.8)

  return (
    <Link
      href={caseStudyHref(study)}
      className={styles.cover}
      aria-label={`${study.name}: ${study.title}, ${study.meta.date}`}
      data-sketch-id="cover"
      data-sketch-reveal
      data-lens
      style={{
        '--bg-start': theme.colorBGLight,
        '--bg-end': theme.colorBGDark,
        '--brand': theme.colorPrimary,
        '--eyebrow': eyebrow,
      } as React.CSSProperties}>
      <span className={styles.texture} aria-hidden="true" />
      <span className={styles.shade} aria-hidden="true" />
      <span className={styles.spine} aria-hidden="true" />

      <span className={styles.head}>
        <span className={styles.eyebrow}><LogoStack study={study} /><span>{study.name} &bull; {study.meta.date}</span></span>
        <span className={styles.title}>{study.title}</span>
      </span>

      <span className={styles.print}>
        <Image
          src={theme.cover ?? theme.preview}
          alt=""
          fill
          sizes="(max-width: 540px) 80vw, (max-width: 860px) 40vw, 400px"
          className={styles.printImage}
          data-lens-print
        />
      </span>

      {/* The band is trimmed to the cover's rounded shape wherever it slides */}
      <span className={styles.bandClip} aria-hidden="true"><span className={styles.band} /></span>
      <span className={styles.ribbon} aria-hidden="true" />
      <span className={styles.ribbonTop} aria-hidden="true" />
      <span className={styles.arrow} aria-hidden="true" data-lens-button>
        <canvas className={styles.lens} />
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </span>
    </Link>
  )
}

export default SketchbookCover
