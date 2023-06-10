import Head from 'next/head'
import Layout from '../components/layout'
import Welcome from '../components/welcome'
import Timeline from '../components/timeline'
import Testimonial from '../components/testimonial'
import ArticlesList from '../components/articles-list'
import styles from '../styles/pages/home.module.css'
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

      <Testimonial />

      <ArticlesList allArticles={allArticles} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allArticles = getAllArticles([
    'title',
    'date',
    'slug',
    'excerpt',
  ])

  return {
    props: { allArticles },
  }
}