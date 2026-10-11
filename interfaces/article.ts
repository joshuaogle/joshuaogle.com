type ArticleType = {
  slug: string
  title: string
  summary?: string
  meta: {
    date: string
    source: string
    source_icon: string
    source_url: string
    role?: string
    time?: string
    team?: string
    thumbnail: string
  }
  content: string
}

export default ArticleType
