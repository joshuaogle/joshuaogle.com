import DateFormatter from './date-formatter'
import styles from '../styles/components/_intro.module.css'

type Props = {
  title: string,
  coverImage: string,
  date: string,
  author: Author,
}

const Intro = ({ title, coverImage, date, author }: Props) => {
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
