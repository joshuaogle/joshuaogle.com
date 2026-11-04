import Image from 'next/image'
import AutoplayVideo from './autoplay-video'
import { getImageSize } from '../lib/images'
import styles from '../styles/components/_example.module.css'

type ExampleProps = {
  images?: string[];
  video?: string;
  caption: string;
}

// Where a figure sits, decided by its images' size and kind: big photos run edge to edge,
// big screens break out of the text column, and small or tall captures stay in it
type Layout = 'bleed' | 'wide' | 'column'

type Size = { width: number, height: number }

const isPhoto = (filename: string) => /\.jpe?g$/i.test(filename)
const isSmall = ({ width, height }: Size) => width < 1000 || width / height < 1

function layoutFor(filename: string, size: Size): Layout {
  if (isPhoto(filename) && size.width >= 2400) return 'bleed'
  if (isSmall(size) || size.width < 1400) return 'column'
  return 'wide'
}

// Related images go in a row at one height, which needs room: a group breaks out of the
// column unless every image in it is small
function groupLayout(filenames: string[], sizes: Size[]): Layout {
  const layouts = filenames.map((filename, i) => layoutFor(filename, sizes[i]))
  if (layouts.length === 1) return layouts[0]
  if (layouts.every(l => l === 'bleed')) return 'bleed'
  if (sizes.every(isSmall)) return 'column'
  return 'wide'
}

const SIZES: Record<Layout, string> = {
  bleed: '100vw',
  wide: '(max-width: 1200px) 100vw, 1152px',
  column: '(max-width: 800px) 100vw, 760px',
}

const Example = async ({ images, video, caption }: ExampleProps) => {
  if (video) {
    return (
      <figure className={styles.example} data-layout="wide">
        <div className={styles.images}>
          <AutoplayVideo src={`/images/${video}`} label={caption} />
        </div>
        {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
      </figure>
    )
  }

  if (!images?.length) return null

  const sizes = await Promise.all(images.map((filename) => getImageSize(`images/${filename}`)))
  const layout = groupLayout(images, sizes)
  // Each column is as wide as its image's aspect ratio, so a row of images shares one height
  const columns = sizes.map(({ width, height }) => `${(width / height).toFixed(3)}fr`).join(' ')
  const imageSizes = images.length > 1 && layout !== 'bleed'
    ? `(max-width: 600px) 100vw, ${Math.round((layout === 'wide' ? 1152 : 760) / images.length)}px`
    : SIZES[layout]

  return (
    <figure className={styles.example} data-layout={layout}>
      <div className={styles.images} style={{ gridTemplateColumns: columns }}>
        {images.map((filename, index) => (
          <Image
            key={filename}
            src={`/images/${filename}`}
            width={sizes[index].width}
            height={sizes[index].height}
            sizes={imageSizes}
            alt={images.length > 1 ? `${caption} (${index + 1} of ${images.length})` : caption}
          />
        ))}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}

export default Example;
