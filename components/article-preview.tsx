import Link from 'next/link'
import DateFormatter from './date-formatter'
import styles from '../styles/components/_article-preview.module.css'

type Props = {
  title: string,
  meta: {
    date: string,
    thumbnail?: string
  },
  slug: string
}

const ArticlePreview = ({title, meta, slug}: Props) => {
  return (
    <Link
      as={`/articles/${slug}`}
      href="/articles/[slug]"
      className={styles.container}>
      <img
        src={meta.thumbnail}
        alt={title}
        className={styles.thumbnail} />
      <small className={styles.date}>
        <DateFormatter dateString={meta.date} />
      </small>
      <h3 className={styles.title}>
        {title}
      </h3>
    </Link>
  )
}

export default ArticlePreview
