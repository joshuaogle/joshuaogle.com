import Welcome from '@/components/welcome'
import Timeline from '@/components/timeline'
import CaseStudies from '@/components/case-studies'
import LetsTalk from '@/components/lets-talk'
import ArticleList from '@/components/article-list'
import { getAllArticles } from '@/lib/api'

// Articles are hidden from the home page for now; they're still at /articles
const SHOW_ARTICLES = false

export default function Home() {
  return (
    <>
      <Welcome />
      <Timeline />
      <CaseStudies />
      <LetsTalk />
      {SHOW_ARTICLES && <ArticleList allArticles={getAllArticles()} />}
    </>
  )
}
