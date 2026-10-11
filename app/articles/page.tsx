import type { Metadata } from 'next'
import ArticleList from '@/components/article-list'
import { getAllArticles } from '@/lib/api'
import type Article from '@/interfaces/article'

export const metadata: Metadata = {
  title: 'Articles',
}

export default function Articles() {
  const allArticles = getAllArticles(['title', 'meta', 'slug']) as Article[]

  return <ArticleList allArticles={allArticles} />
}
