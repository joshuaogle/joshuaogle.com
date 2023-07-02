import Link from 'next/link'
import DateFormatter from './date-formatter'
import styles from '../styles/components/_article-preview.module.css'

type Props = {
  title: string
  meta: string
  slug: string
}

const ArticlePreview = ({
  title,
  meta,
  slug,
}: Props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <Link
          as={`/articles/${slug}`}
          href="/articles/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className={styles.date}>
        &mdash; <DateFormatter dateString={meta.date} />
      </div>
    </div>
  )
}

export default ArticlePreview
