import DateFormatter from './date-formatter'
import styles from '../styles/components/_intro.module.css'

type Props = {
  title: string,
  date: string,
}

const Intro = ({ title, date }: Props) => {
  return (
    <>
      <header className={styles.container} >
        <div className={styles.content} >
          <h1>{title}</h1>
          <DateFormatter dateString={date} />
        </div>
      </header>
    </>
  )
}

export default Intro
