import ArticlePreview from './article-preview'
import Article from '../interfaces/article'

type Props = {
  allArticles: Article[]
}

const ArticlesList = ({ allArticles }: Props) => {
  return (
    <section>
      <h2>Articles</h2>
      <p>I want the next generation of designers and developers to have an easier time learning than we did when I got getting started. That's why I spend time speaking at conferences and running workshops. I also worked on a book on Design for the Web (now a blog series) while working at thoughtbot.</p>

      <nav>
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
