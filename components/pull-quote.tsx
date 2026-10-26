import styles from '../styles/components/_pull-quote.module.css'

type Props = {
  children: React.ReactNode
  // Who said it, as a line under the quote
  by: string
}

// A quote set large in the text column, its opening mark hanging in the margin in the
// project's color
const PullQuote = ({ children, by }: Props) => {
  return (
    <figure className={styles.pullQuote}>
      <blockquote className={styles.quote}>
        <p>{children}</p>
      </blockquote>
      <figcaption className={styles.by}>{by}</figcaption>
    </figure>
  )
}

export default PullQuote
