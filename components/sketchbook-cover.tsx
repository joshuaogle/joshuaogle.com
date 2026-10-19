import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { readableOn } from '../lib/color'
import LogoStack from './logo-stack'
import { caseStudyHref, type CaseStudy } from '../lib/case-studies'
import styles from '../styles/components/_sketchbook-cover.module.css'

type Props = {
  study: CaseStudy
}

// A case study as a sketchbook cover: the project's colors on leatherette, a spine
// hinge, an elastic band, a ribbon in the brand color and the work pasted on as a print
const SketchbookCover = ({ study }: Props) => {
  const { theme } = study
  // The brand color, lightened just enough to pass WCAG AA (with a little margin for the grain)
  const eyebrow = readableOn(theme.colorPrimary, theme.colorBGLight, 4.8)

  return (
    <Link
      href={caseStudyHref(study)}
      className={styles.cover}
      data-sketch-id="cover"
      data-sketch-reveal
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
          sizes="(max-width: 560px) 80vw, (max-width: 900px) 40vw, 300px"
          className={styles.printImage}
        />
      </span>

      <span className={styles.band} aria-hidden="true" />
      <span className={styles.ribbonTop} aria-hidden="true" />
      <span className={styles.ribbon} aria-hidden="true" />
      <span className={styles.arrow} aria-hidden="true"><ArrowRightIcon /></span>
    </Link>
  )
}

export default SketchbookCover
