import Image from 'next/image'
import AutoplayVideo from './autoplay-video'
import Tilt from './tilt'
import Surface from './surface'
import { getImageSize } from '../lib/images'
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

// Case study images never render wider than the article column
const EXAMPLE_IMAGE_SIZES = '(max-width: 800px) 100vw, 760px'

const ExampleImage = async ({filename, index, of}: ExampleImageProps) => {
  const { width, height } = await getImageSize(`images/${filename}`)

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
            <Image
              src={`/images/${filename}`}
              width={width}
              height={height}
              sizes={EXAMPLE_IMAGE_SIZES}
              alt=""
            />
          </Surface>
        </figure>
      </Tilt>
    </div>
  )
}

export default Example;
