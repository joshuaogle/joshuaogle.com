import type Author from './author'

type ArticleType = {
  slug: string
  title: string
  author: Author
  meta: {
    date: string
    source: string
    source_icon: string
    url: string
    role?: string
    time?: string
    team?: string
  }
  ogImage: {
    url: string
  }
  content: string
}

export default ArticleType
