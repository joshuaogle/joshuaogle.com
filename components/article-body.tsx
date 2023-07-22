import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const ArticleBody = ({ content }: Props) => {
  return (
    <div
      className={`article-body ${markdownStyles['markdown']}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default ArticleBody
