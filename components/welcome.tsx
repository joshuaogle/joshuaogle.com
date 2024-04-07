import Image from 'next/image'
import styles from '../styles/components/_welcome.module.css'

const Welcome = () => {
  return (
    <header className={styles.container + " centered"}>
      <div className={styles.portrait}>
        <Image
          src="/images/portrait.jpg"
          height="1200"
          width="1200"
          alt="Joshua Ogle"
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Joshua Ogle
        </h1>
        <p>
          I'm a Product Designer, making the
          <br/>internet a <mark>better place to live</mark>
        </p>
      </div>
    </header>
  )
}

export default Welcome
