import Link from 'next/link'
import DateFormatter from './date-formatter'

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

const ArticlePreview = ({
  title,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <div>
      <h3>
        <Link
          as={`/articles/${slug}`}
          href="/articles/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div>
        <DateFormatter dateString={date} />
      </div>
      <p>{excerpt}</p>
    </div>
  )
}

export default ArticlePreview
