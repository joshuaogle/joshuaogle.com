import ArticlePreview from './article-preview'
import Article from '../interfaces/article'

type Props = {
  allArticles: Article[]
}

const ArticlesList = ({ allArticles }: Props) => {
  return (
    <nav>
      {allArticles.map((article) => (
        <ArticlePreview
          key={article.slug}
          title={article.title}
          date={article.date}
          slug={article.slug}
          excerpt={article.excerpt}
        />
      ))}
    </nav>
  )
}

export default ArticlesList
