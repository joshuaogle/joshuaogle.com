import HeroArticle from '../components/hero-article'
import Layout from '../components/layout'
import { getAllArticles } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Article from '../interfaces/article'
import styles from '../styles/pages/home.module.css'

type Props = {
  allArticles: Article[]
}

export default function Index({ allArticles }: Props) {
  const heroArticle = allArticles[0]
  return (
    <Layout>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
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

      {heroArticle && (
        <HeroArticle
          title={heroArticle.title}
          coverImage={heroArticle.coverImage}
          date={heroArticle.date}
          author={heroArticle.author}
          slug={heroArticle.slug}
          excerpt={heroArticle.excerpt}
        />
      )}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allArticles = getAllArticles([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allArticles },
  }
}
