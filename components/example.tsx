import Image from 'next/image'
import AutoplayVideo from './autoplay-video'
import SketchbookFrame from './sketchbook-frame'
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
  caption: string;
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
            <ExampleImage key={index} filename={filename} index={index} of={images.length} caption={caption} />
          ))}
        </div>
      )}

      {video && (
        <figure>
          <SketchbookFrame>
            <AutoplayVideo src={`/images/${video}`} label={caption} />
          </SketchbookFrame>
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

const ExampleImage = async ({filename, index, of, caption}: ExampleImageProps) => {
  const { width, height } = await getImageSize(`images/${filename}`)

  return (
    <div
      className={styles.area}
      data-number={`${index + 1}-of-${of}`}
    >
      <figure>
        <SketchbookFrame>
          <Image
            src={`/images/${filename}`}
            width={width}
            height={height}
            sizes={EXAMPLE_IMAGE_SIZES}
            alt={of > 1 ? `${caption} (${index + 1} of ${of})` : caption}
          />
        </SketchbookFrame>
      </figure>
    </div>
  )
}

export default Example;
