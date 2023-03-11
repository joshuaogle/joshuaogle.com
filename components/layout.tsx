import Header from './header';
import Footer from './footer';
import Meta from './meta';

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <div className="app">
      <Meta />
      <Header />
      <main className="page">
        {children}
      </main>
      <Footer />

      <style jsx>{`
        .page {
          margin: 0 auto;
          max-width: var(--page-max-width);
          overflow: hidden;
        }
        `}</style>
    </div>
  )
}

export default Layout
