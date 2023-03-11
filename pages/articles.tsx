import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroArticle from '../components/hero-article'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllArticles } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Article from '../interfaces/article'

type Props = {
  allArticles: Article[]
}

export default function Articles({ allArticles }: Props) {
  const heroArticle = allArticles[0]
  const moreArticles = allArticles.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
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
          {moreArticles.length > 0 && <MoreStories articles={moreArticles} />}
        </Container>
      </Layout>
    </>
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
