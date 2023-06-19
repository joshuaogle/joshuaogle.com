import styles from '../styles/components/_welcome.module.css'

type Props = {
  title: string,
  date: string,
}

const Welcome = ({ title, date }: Props) => {
  return (
    <header className={styles.container + " centered"}>
      <div className={styles.portrait}>
        <img src="/images/portrait.png" />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Hi, I'm Joshua
        </h1>
        <p>
          I am a designer working on infrastructure automation tools at <a href="http://hashicorp.com" target="_new">Hashicorp</a> so we can make the cloud a <mark>better place to live</mark>.
        </p>
      </div>
    </header>
  )
}

export default Welcome
