import Layout from '@components/Layout'
import { useRouter } from 'next/router'

export default function Article() {
  const router = useRouter()
  const { article } = router.query

  return (
	<Layout>
	  <h1>Article</h1>
	  <p>{article}</p>
	</Layout>
  )
}