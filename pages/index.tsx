import Head from 'next/head'
import Layout from '../components/layout'
import Welcome from '../components/welcome'
import Timeline from '../components/timeline'
import CaseStudies from '../components/caseStudies'
import Consulting from '../components/consulting'
import ArticleList from '../components/article-list'
import { getAllArticles } from '../lib/api'
import Article from '../interfaces/article'

type Props = {
  allArticles: Article[]
}

export default function Index({ allArticles }: Props) {
  return (
    <Layout>
      <Head>
        <title>Joshua Ogle</title>
      </Head>

      <Welcome />
      <Timeline />
      <CaseStudies />
      <Consulting />
      <ArticleList allArticles={allArticles} />
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