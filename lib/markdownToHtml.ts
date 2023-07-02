import { remark } from 'remark'
import html from 'remark-html'
import remarkFrontmatter from 'remark-frontmatter'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkFrontmatter)
    .use(html)
    .use(() => (tree) => {
      console.dir(tree)
    })
    .process(markdown)
  return result.toString()
}
