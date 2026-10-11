type ArticleType = {
  slug: string
  title: string
  meta: {
    date: string
    source: string
    source_icon: string
    url: string
    role?: string
    time?: string
    team?: string
    thumbnail?: string
  }
  content: string
}

export default ArticleType
