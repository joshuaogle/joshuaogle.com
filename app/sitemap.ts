import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/api'
import { featuredCaseStudies, caseStudyHref } from '@/lib/case-studies'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles()

  return [
    { url: SITE_URL },
    { url: `${SITE_URL}/articles` },
    ...featuredCaseStudies.map((study) => ({ url: `${SITE_URL}${caseStudyHref(study)}` })),
    ...articles.map((article) => ({
      url: `${SITE_URL}/articles/${article.slug}`,
      lastModified: article.meta.date,
    })),
  ]
}
