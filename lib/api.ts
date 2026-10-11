import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const articlesDirectory = join(process.cwd(), '_articles')

type Items = {
  [key: string]: any
}

export function getArticleSlugs() {
  return fs.readdirSync(articlesDirectory).map((file) => file.replace(/\.md$/, ''))
}

function readArticle(slug: string) {
  const fullPath = join(articlesDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return { slug, ...matter(fileContents) }
}

// Ensure only the minimal needed data is exposed
function pickFields({ slug, data, content }: ReturnType<typeof readArticle>, fields: string[]) {
  const items: Items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getArticleBySlug(slug: string, fields: string[] = []) {
  return pickFields(readArticle(slug), fields)
}

export function getAllArticles(fields: string[] = []) {
  return getArticleSlugs()
    .map(readArticle)
    // sort articles by date in descending order
    .sort((article1, article2) => (article1.data.meta.date > article2.data.meta.date ? -1 : 1))
    .map((article) => pickFields(article, fields))
}
