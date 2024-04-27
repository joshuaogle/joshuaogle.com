import Image from 'next/image'
import Surface from './surface'
import styles from '../styles/components/_welcome.module.css'

const Welcome = () => {
  const timeFormat = {  hour: 'numeric', minute: 'numeric'}
  const currentTime = new Date().toLocaleTimeString('en-US', timeFormat);
 
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Hi, I'm
        <span class={styles.nameInTitle}>
          Joshua Ogle
        </span>
      </h1>
      <div className={styles.cardContainer}>
        <Surface>
          <div className={styles.card}>
            <Image
              src="/images/portrait.jpg"
              height="1200"
              width="1200"
              alt="Joshua Ogle"
              className={styles.portrait}
            />
            <div className={styles.textContainer}>
              <div className={styles.nameContainer}>
                <span className={styles.name}>
                  Joshua Ogle
                </span>

                {currentTime && (
                  <span className={styles.meta}>
                    <span className={styles.status}>
                      Active
                    </span>

                    <span className={styles.time}>
                      {currentTime} local time
                    </span>
                  </span>
                )}
              </div>

              <p>
                Product Designer working at <a href="https://hashicorp.com" target="_new">HashiCorp</a>,
                making the internet a better place to live
              </p>
            </div>
          </div>
        </Surface>
      </div>
    </header>
  )
}

export default Welcome
