import Image from 'next/image'
import Surface from './surface'
import styles from '../styles/components/_welcome.module.css'

const currentTime = new Date();
const formattedTime = new Date().toLocaleTimeString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  timeZone: 'America/Denver'
});

const Status = () => {
  const currentTime = new Date();
  const isWorkweek = currentTime.getDay() !== 0 && currentTime.getDay() !== 6;
  const currentHour = currentTime.getHours();
  const isWorkingHours = currentHour >= 9 && currentHour < 17;
  const isOnline = isWorkingHours && isWorkweek;

  return (
    <span className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>
      {isOnline ? 'Online' : 'Offline'}
    </span>
  );
};

const Welcome = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Hi, I'm
        <span className={styles.nameInTitle}>
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
                &nbsp;
                <span className={styles.meta}>
                  <Status />
                  <span className={styles.time}>
                    ({formattedTime} local time)
                  </span>
                </span>
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
