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
    <div
      className={styles.grid}
      data-examples={of}
    >
      {images.map((filename, index) => (
        <div
          className={styles.area}
          data-number={`${index + 1}-of-${of}`}
        >
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.02}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={2000}
            transitionSpeed={2000}
          >
            <figure key={filename} className='surface'>
              <img src={`/images/${filename}`}/>
            </figure>
          </Tilt>
        </div>
      ))}
    </div>
  )
}

export default Example;