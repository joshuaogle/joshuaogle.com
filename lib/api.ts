import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import type ArticleType from '../interfaces/article'

const articlesDirectory = join(process.cwd(), '_articles')

type Frontmatter = Omit<ArticleType, 'slug' | 'content'>

export function getArticleSlugs() {
  return fs.readdirSync(articlesDirectory).map((file) => file.replace(/\.md$/, ''))
}

export function getArticleBySlug(slug: string): ArticleType {
  const fullPath = join(articlesDirectory, `${slug}.md`)
  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'))

  return { ...(data as Frontmatter), slug, content }
}

// Newest first
export function getAllArticles(): ArticleType[] {
  return getArticleSlugs()
    .map(getArticleBySlug)
    .sort((article1, article2) => (article1.meta.date > article2.meta.date ? -1 : 1))
}
