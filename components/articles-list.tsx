import ArticlePreview from './article-preview'
import Article from '../interfaces/article'
import styles from '../styles/components/_article-list.module.css'


type Props = {
  allArticles: Article[]
}

const ArticlesList = ({ allArticles }: Props) => {
  const {latestArticle, olderArticles} = allArticles
  return (
    <section className="centered">
      <h2>Articles</h2>
      <p>
        I love mentoring new designers
        and helping them learn the craft,
        especially if it involves getting designers to be more technical
        or our partners to get more creative.  
      </p>

      <nav className={styles.list}>
        {allArticles.map((article) => (
          <ArticlePreview
            key={article.slug}
            title={article.title}
            meta={article.meta}
            slug={article.slug}
            excerpt={article.excerpt}
          />
        ))}
      </nav>
    </section>
  )
}

export default ArticlesList
