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
      as={`/articles/${article.slug}`}
      href="/articles/[slug]"
      className={styles.container}
    >
      <Surface className={styles.surface}>
        <div className={styles.imageContainer}>
          <Image 
            src={article.meta.thumbnail}
            alt={article.title}
            priority
            className={styles.image}
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
      </Surface>
    </Link>
  )
}

export default ArticleFeature
