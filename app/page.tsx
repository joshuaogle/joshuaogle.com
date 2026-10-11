import Welcome from '@/components/welcome'
import Timeline from '@/components/timeline'
import CaseStudies from '@/components/case-studies'
import Consulting from '@/components/consulting'
import ArticleList from '@/components/article-list'
import { getAllArticles } from '@/lib/api'

export default function Home() {
  const allArticles = getAllArticles()

  return (
    <>
      <Welcome />
      <Timeline />
      <CaseStudies />
      <Consulting />
      <ArticleList allArticles={allArticles} />
    </>
  )
}
