import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const ArticleBody = ({ content }: Props) => {
  return (
    <div
      className={`article-body centered ${markdownStyles['markdown']}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default ArticleBody
