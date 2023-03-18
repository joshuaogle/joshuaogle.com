import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import ArticleBody from '../../components/article-body'
import ArticleHeader from '../../components/article-header'
import Layout from '../../components/layout'
import { getArticleBySlug, getAllArticles } from '../../lib/api'
import ArticleTitle from '../../components/article-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import type ArticleType from '../../interfaces/article'

type Props = {
  article: ArticleType
  moreArticles: ArticleType[]
  preview?: boolean
}

export default function Article({ article, moreArticles, preview }: Props) {
  const router = useRouter()
  const title = `${article.title} | Next.js Blog Example with ${CMS_NAME}`
  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <ArticleTitle>Loading…</ArticleTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>{title}</title>
              <meta property="og:image" content={article.ogImage.url} />
            </Head>
            <ArticleHeader
              title={article.title}
              coverImage={article.coverImage}
              date={article.date}
              author={article.author}
            />
            <ArticleBody content={article.content} />
          </article>
        </>
      )}
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const article = getArticleBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(article.content || '')

  return {
    props: {
      article: {
        ...article,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const articles = getAllArticles(['slug'])

  return {
    paths: articles.map((article) => {
      return {
        params: {
          slug: article.slug,
        },
      }
    }),
    fallback: false,
  }
}
