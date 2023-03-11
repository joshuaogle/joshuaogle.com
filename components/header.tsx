import Link from 'next/link'

const Header = () => {
  return (
    <nav>
      <Link href="/">
        Home
      </Link>
      <Link href="/articles">
        Articles
      </Link>
    </nav>
  )
}

export default Header
