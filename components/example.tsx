import AutoplayVideo from './autoplay-video'
import Tilt from './tilt'
import Surface from './surface'
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
  return (
    <div className={styles.container}>
      {images && (
        <div
          className={styles.grid}
          data-examples={images.length}
        >
          {images.map((filename, index) => (
            <ExampleImage key={index} filename={filename} index={index} of={images.length} />
          ))}
        </div>
      )}

      {video && (
        <figure>
          <Surface>
            <AutoplayVideo src={`/images/${video}`} />
          </Surface>
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
        transitionSpeed={10000}
      >
        <figure>
          <Surface>
            <img src={`/images/${filename}`} />
          </Surface>
        </figure>
      </Tilt>
    </div>
  )
}

export default Example;
