import type { Metadata } from 'next'
import ArticleBody from '@/components/article-body'
import Intro from '@/components/intro'
import { getArticleBySlug, getArticleSlugs } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import { openGraphDefaults } from '@/lib/site'

type Props = {
  params: Promise<{ slug: string }>
}

// Only the markdown files in _articles exist; anything else is a 404
export const dynamicParams = false

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      ...openGraphDefaults,
      type: 'article',
      title: article.title,
      description: article.summary,
      publishedTime: article.meta.date,
      images: [article.meta.thumbnail],
    },
    twitter: { card: 'summary_large_image' },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  const content = await markdownToHtml(article.content)

  return (
    <article>
      <Intro
        title={article.title}
        meta={article.meta}
      />
      <ArticleBody content={content} />
    </article>
  )
}
