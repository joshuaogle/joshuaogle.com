import Link from 'next/link'
import DateFormatter from './date-formatter'
import styles from '../styles/components/_article-preview.module.css'

type Props = {
  title: string,
  meta: {
    date: string,
    thumbnail?: string
  },
  slug: string,
}

const ArticlePreview = ({title, meta, slug}: Props) => {
  return (
    <div>
      <Link
        href={`/articles/${slug}`}
        className={styles.container}
      >
        <div className={styles.title}>
          {title}
        </div>
        <small className={styles.date}>
          <DateFormatter dateString={meta.date} />
        </small>
      </Link>
    </div>
  )
}

export default ArticlePreview
