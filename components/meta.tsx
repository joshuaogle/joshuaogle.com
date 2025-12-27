import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon.png"
      />
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <meta name="msapplication-TileColor" content="#F1DAA9" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`Portfolio of Joshua Ogle, Principal Product Designer at HashiCorp, an IBM company.`}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
  )
}

export default Meta
