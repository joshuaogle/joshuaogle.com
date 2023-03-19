import Header from './header';
import Footer from './footer';
import Meta from './meta';
import styles from '../styles/components/_layout.module.css';

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <div className={styles.app}>
      <Meta />
      <Header />

      <main className={styles.page}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
