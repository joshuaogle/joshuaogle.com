import styles from '../styles/components/_welcome.module.css'

const Welcome = () => {
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
          Staff Product Designer at <a href="http://hashicorp.com" target="_new">Hashicorp</a>,
          creating developer tools and making the cloud a <mark>better place to live</mark>.
        </p>
      </div>
    </header>
  )
}

export default Welcome
