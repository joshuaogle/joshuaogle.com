import styles from '../styles/components/_pull-quote.module.css'

type Props = {
  children: React.ReactNode
  // Who said it, as a line under the quote
  by: string
}

// A quote in the text column with a bar down its left in the project's color, like a
// quote in a chat or notes app
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
