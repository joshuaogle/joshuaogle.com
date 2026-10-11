import Image from 'next/image'
import Link from 'next/link'
import Article from '../interfaces/article'
import DateFormatter from './date-formatter'
import Surface from './surface'
import styles from '../styles/components/_article-feature.module.css'

type Props = {
  article: Article
}

const ArticleFeature = ({ article }: Props) => {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className={styles.container}
    >
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image 
            src={article.meta.thumbnail}
            alt={article.title}
            className={styles.image}
            sizes="(max-width: 600px) 100vw, 400px"
            fill
          />
        </div>
        <div className={styles.textContainer}>
          <small className={styles.date}>
            <DateFormatter dateString={article.meta.date} />
          </small>
          <div className={styles.title}>
            {article.title}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ArticleFeature
