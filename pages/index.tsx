import Head from 'next/head'
import Layout from '../components/layout'
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

      <header className={styles.intro}>
        <div className={styles.portrait}>
          <img src="/images/portrait.png" />
        </div>
        <div className={styles.introCopy}>
          <h1 className={styles.introTitle}>
            Hi, I'm Joshua
          </h1>
          <p>
            I am a Product Designer at <a href="http://hashicorp.com" target="_new">Hashicorp</a>, living in Denver, Colorado.
            I help make the cloud a better place to live and <mark>build things that people love</mark>.
          </p>
        </div>
      </header>

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