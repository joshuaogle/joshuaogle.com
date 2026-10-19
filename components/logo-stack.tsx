import type { CaseStudy } from '../lib/case-studies'
import styles from '../styles/components/_logo-stack.module.css'

type Props = {
  study: Pick<CaseStudy, 'company' | 'product'>
  className?: string
}

// The company's logo in a circle, with the product's logo overlapping it when there is one.
// Sizes are in em, so the stack scales with the text beside it. Set --logo-ring to the
// color behind the stack so the overlap reads as a cut-out.
const LogoStack = ({ study: { company, product }, className }: Props) => {
  return (
    <span className={[styles.stack, className].filter(Boolean).join(' ')}>
      <span className={styles.circle} style={{ background: company.background } as React.CSSProperties} title={company.name}>
        {/* eslint-disable-next-line @next/next/no-img-element -- small SVG, nothing to optimize */}
        <img src={company.src} alt={company.name} style={{ width: `${(company.scale ?? 1) * 100}%`, height: `${(company.scale ?? 1) * 100}%` }} />
      </span>
      {product && (
        <span
          className={`${styles.circle} ${styles.product}`}
          role="img"
          aria-label={product.name}
          title={product.name}
          style={{
            '--glyph': `url(${product.src})`,
            '--glyph-color': product.glyph,
            background: product.color,
          } as React.CSSProperties}
        />
      )}
    </span>
  )
}

export default LogoStack
