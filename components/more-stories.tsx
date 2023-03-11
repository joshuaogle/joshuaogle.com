import ArticlePreview from './article-preview'
import type Article from '../interfaces/article'

type Props = {
  articles: Article[]
}

const MoreStories = ({ articles }: Props) => {
  return (
    <section>
      <h2>
        More Stories
      </h2>
      <div>
        {articles.map((article) => (
          <ArticlePreview
            key={article.slug}
            title={article.title}
            coverImage={article.coverImage}
            date={article.date}
            author={article.author}
            slug={article.slug}
            excerpt={article.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
