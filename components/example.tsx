import { ObjectBindingPattern } from "typescript"
import styles from '../styles/components/_example.module.css'

type Props = {
  caption: string,
  images: ObjectBindingPattern,
  transparent?: boolean,
}

const Example = ({ caption, images }: Props) => {
  const of = images.length;
  return (
    <div className={styles.grid} data-examples={of}>
      {images.map((filename, index) => (
        <div
          className={styles.area}
          data-number={index + 1}
          data-of={of}
        >
          <figure key={filename} className='surface'>
            <img src={`/images/${filename}`}/>
          </figure>
        </div>
      ))}
    </div>
  )
}

export default Example;