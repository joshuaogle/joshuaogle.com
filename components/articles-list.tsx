import ArticlePreview from './article-preview'
import Article from '../interfaces/article'
import Surface from '../components/surface'
import styles from '../styles/components/_article-list.module.css'


type Props = {
  allArticles: Article[]
}

const ArticlesList = ({ allArticles }: Props) => {
  return (
    <section className="centered">
      <h2>Articles</h2>
      <p>
        I love mentoring new designers
        and helping them learn the craft,
        especially if it involves getting designers to be more technical
        or our partners to get more creative.  
      </p>

      <Surface>
        <nav className={styles.list}>
          {allArticles.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()).map((article) => (
            <ArticlePreview
              key={article.slug}
              title={article.title}
              meta={article.meta}
              slug={article.slug}/>
          ))}
        </nav>
      </Surface>
    </section>
  )
}

export default ArticlesList
