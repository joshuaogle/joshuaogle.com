import DateFormatter from './date-formatter'
import styles from '../styles/components/_welcome.module.css'

type Props = {
  title: string,
  date: string,
}

const Welcome = ({ title, date }: Props) => {
  return (
    <header className={styles.intro}>
      <div className={styles.portrait}>
        <img src="/images/portrait.png" />
      </div>
      <div className={styles.introCopy}>
        <h1 className={styles.introTitle}>
          Hi, I'm Joshua
        </h1>
        <p>
          I am a Product Designer at <a href="http://hashicorp.com" target="_new">Hashicorp</a>, living in Denver, Colorado.
          I help make the cloud a better place to live and <mark>build things that people love</mark>.
        </p>
      </div>
    </header>
  )
}

export default Welcome
