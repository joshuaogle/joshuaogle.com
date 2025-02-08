import Head from 'next/head'
import Layout from '../components/layout'
import ArticleList from '../components/article-list'
import { getAllArticles } from '../lib/api'
import Article from '../interfaces/article'

type Props = {
  allArticles: Article[]
}

export default function Articles({ allArticles }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Joshua Ogle | Articles`}</title>
        </Head>
        
        <ArticleList allArticles={allArticles} />
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allArticles = getAllArticles([
    'title',
    'date',
    'meta',
    'slug',
    'excerpt',
  ])

  return {
    props: { allArticles },
  }
}