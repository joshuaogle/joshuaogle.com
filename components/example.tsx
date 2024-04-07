import { useEffect, useState } from 'react'
import Tilt from 'react-parallax-tilt';
import ReactPlayer from 'react-player'
import styles from '../styles/components/_example.module.css'

type ExampleProps = {
  images?: string[];
  video?: string;
  caption: string;
}

type ExampleImageProps = {
  filename: string;
  index: number;
  of: number;
}

const Example = ({ images, video, caption }: ExampleProps) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className={styles.container}>
      {images && (
        <div
          className={styles.grid}
          data-examples={images.length}
        >
          {images.map((filename, index) => (
            <ExampleImage filename={filename} index={index} of={images.length} />
          ))}
        </div>
      )}

      {hasWindow && video && (
        <figure className='surface'>
          <ReactPlayer
            url={`/images/${video}`}
            playing
            muted
          />
        </figure>
      )}

      {caption && (
        <small className={styles.caption}>
          {caption}
        </small>
      )}
    </div>
  )
}

const ExampleImage = ({filename, index, of}: ExampleImageProps) => {
  return (
    <div
      className={styles.area}
      data-number={`${index + 1}-of-${of}`}
    >
      <Tilt
        scale={1.05}
        tiltMaxAngleX={5}
        tiltMaxAngleY={10}
        perspective={2000}
        transitionSpeed={5000}
      >
        <figure key={filename} className='surface'>
          <img src={`/images/${filename}`} />
        </figure>
      </Tilt>
    </div>    
  )
}

export default Example;