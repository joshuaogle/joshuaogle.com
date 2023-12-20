import Tilt from 'react-parallax-tilt';
import styles from '../styles/components/_example.module.css'

type Props = {
  caption: string,
  images: object,
  transparent?: boolean,
}

const Example = ({ caption, images }: Props) => {
  const of = images.length;
  return (
    <div className={styles.container}>
      <div
        className={styles.grid}
        data-examples={of}
      >
        {images.map((filename, index) => (
          <div
            key={index}
            className={styles.area}
            data-number={`${index + 1}-of-${of}`}
          >
            <Tilt
              scale={1.05}
              tiltMaxAngleX={5}
              tiltMaxAngleY={15}
              perspective={2000}
              transitionSpeed={5000}
            >
              <figure key={filename} className='surface'>
                <img src={`/images/${filename}`}/>
              </figure>
            </Tilt>
          </div>
        ))}
      </div>
      {caption && (
        <small className={styles.caption}>
          {caption}
        </small>
      )}
    </div>
  )
}

export default Example;