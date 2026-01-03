type Props = {
  content: string
}

const ArticleBody = ({ content }: Props) => {
  return (
    <div
      className="article-body centered"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default ArticleBody
