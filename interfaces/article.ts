import type Author from './author'

type ArticleType = {
  slug: string
  title: string
  author: Author
  excerpt: string
  meta: {
    date: string
    source: string
    source_icon: string
    url: string
  }
  ogImage: {
    url: string
  }
  content: string
}

export default ArticleType
