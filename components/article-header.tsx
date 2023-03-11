import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import ArticleTitle from './article-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const ArticleHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <ArticleTitle>{title}</ArticleTitle>
      <div>
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div>
        <CoverImage title={title} src={coverImage} />
      </div>
      <div>
        <div>
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default ArticleHeader
