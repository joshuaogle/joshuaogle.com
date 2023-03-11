import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const ArticleTitle = ({ children }: Props) => {
  return (
    <h1>
      {children}
    </h1>
  )
}

export default ArticleTitle
