import Link from "next/link";

export default function Header() {
  return (
	<header>
		<h1 className="title">Joshua Ogle</h1>
		<nav>
      		<Link href="/">Home</Link>
      		<Link href="/about">About</Link>
			<Link href="/work">Work</Link>
			<Link href="/articles">Articles</Link>
		</nav>
	</header>
  )
}
