import Header from './header';
import Footer from './footer';
import Meta from './meta';
import Welcome from '../components/welcome'
import styles from '../styles/components/_layout.module.css';

type Props = {
  preview: boolean
  showWelcome: false
  children: React.ReactNode
}

const Layout = ({ preview, showWelcome, children }: Props) => {
  return (
    <div className={styles.app}>
      <Meta />

      {showWelcome ? <Welcome /> :  <Header />}
      <main className={"centered surface"}>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout
