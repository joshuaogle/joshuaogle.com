import type { Metadata } from 'next'
import ArticleList from '@/components/article-list'
import { getAllArticles } from '@/lib/api'

export const metadata: Metadata = {
  title: 'Articles',
}

export default function Articles() {
  const allArticles = getAllArticles()

  return <ArticleList allArticles={allArticles} headingLevel="h1" />
}
