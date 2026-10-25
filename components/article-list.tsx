import Image from 'next/image'
import Link from 'next/link'
import Article from '../interfaces/article'
import DateFormatter from './date-formatter'
import styles from '../styles/components/_article-list.module.css'

type Props = {
  allArticles: Article[]
  // h1 when the list is the whole page (/articles), h2 when it's a home page section
  headingLevel?: 'h1' | 'h2'
}

// The newest article gets its image; the rest are set as a quiet two-column list
const ArticleList = ({ allArticles, headingLevel: Heading = 'h2' }: Props) => {
  // allArticles arrives sorted newest-first from lib/api
  const [featured, ...rest] = allArticles

  return (
    <section className="centered">
      <Heading>Articles</Heading>
      <p>
        I love mentoring new designers
        and helping them learn the craft,
        especially if it involves getting designers to be more technical
        or our partners to get more creative.
      </p>

      {featured && (
        <Link href={`/articles/${featured.slug}`} className={styles.feature}>
          <div className={styles.featureImage}>
            <Image
              src={featured.meta.thumbnail}
              alt=""
              sizes="(max-width: 700px) 100vw, 420px"
              fill
            />
          </div>
          <div className={styles.featureText}>
            <small className={styles.meta}>
              <DateFormatter dateString={featured.meta.date} />
              <span aria-hidden> &middot; </span>
              {featured.meta.source}
            </small>
            <h3 className={styles.featureTitle}>{featured.title}</h3>
            {featured.summary && <p className={styles.summary}>{featured.summary}</p>}
          </div>
        </Link>
      )}

      <ol className={styles.list}>
        {rest.map((article) => (
          <li key={article.slug}>
            <Link href={`/articles/${article.slug}`} className={styles.item}>
              <small className={styles.meta}>
                <DateFormatter dateString={article.meta.date} />
              </small>
              <span className={styles.itemTitle}>{article.title}</span>
              {article.summary && <span className={styles.summary}>{article.summary}</span>}
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default ArticleList
