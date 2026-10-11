import Image from 'next/image'
import Surface from './surface'
import { LocalTime, Status } from './denver-clock'
import styles from '../styles/components/_welcome.module.css'

const Welcome = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Hi, I'm<br/>
        Joshua
      </h1>
      <div className={styles.cardContainer}>
        <Surface>
          <div className={styles.card}>
            <div className={styles.portraitContainer}>
              <Image
                src="/images/portrait.png"
                height="1200"
                width="1200"
                alt="Joshua Ogle"
                className={styles.portrait}
                sizes="120px"
                priority
              />
              <Status />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.nameContainer}>
                <span className={styles.name}>
                  Joshua Ogle
                </span>
                &nbsp;
                <LocalTime />
              </div>

              <p>
                Principal Product Designer at <a href="https://ibm.com" target="_blank" rel="noopener noreferrer">IBM</a>{' '}
                making the cloud a better place to live
              </p>
            </div>
          </div>
        </Surface>
      </div>
    </header>
  )
}

export default Welcome
