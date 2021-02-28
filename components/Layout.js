import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>Joshua Ogle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
		 {children}
      </main>

      <Footer />
    </div>
  )
}
