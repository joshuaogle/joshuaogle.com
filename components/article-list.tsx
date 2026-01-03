import ArticlePreview from './article-preview'
import Article from '../interfaces/article'
import styles from '../styles/components/_article-list.module.css'
import ArticleFeature from './article-feature'

type Props = {
  allArticles: Article[]
}

const ArticleList = ({ allArticles }: Props) => {
  const sortedArticles = allArticles.sort((a, b) => 
    new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  )
  
  const firstTwoArticles = sortedArticles.slice(0, 2)
  const nextThreeArticles = sortedArticles.slice(2, 5)
  const remainingArticles = sortedArticles.slice(5)

  return (
    <section className="centered">
      <h2>Articles</h2>
      <p>
        I love mentoring new designers
        and helping them learn the craft,
        especially if it involves getting designers to be more technical
        or our partners to get more creative.
      </p>

      <div className={styles.primaryRow}>
        {firstTwoArticles.map((article) => (
          <ArticleFeature key={article.slug} article={article} />
        ))}
      </div>

      <div className={styles.secondaryRow}>
        {nextThreeArticles.map((article) => (
          <ArticleFeature key={article.slug} article={article} />
        ))}
      </div>

      <nav className={styles.articleList}>
        {remainingArticles.map((article) => (
          <ArticlePreview
            key={article.slug}
            title={article.title}
            meta={article.meta}
            slug={article.slug}
          />
        ))}
      </nav>
    </section>
  )
}

export default ArticleList
