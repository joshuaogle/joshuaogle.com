import Head from 'next/head'
import Layout from '../components/layout'
import Timeline from '../components/timeline'
import ArticlesList from '../components/articles-list'
import { getAllArticles } from '../lib/api'
import Article from '../interfaces/article'

type Props = {
  allArticles: Article[]
}

export default function Index({ allArticles }: Props) {
  return (
    <Layout showWelcome={true}>
      <Head>
        <title>Joshua Ogle</title>
      </Head>

      <Timeline />

      <div className="centered">
        <ArticlesList allArticles={allArticles} />
      </div>
    </Layout>
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