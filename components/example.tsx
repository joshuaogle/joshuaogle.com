import Image from 'next/image'
import AutoplayVideo from './autoplay-video'
import { getImageSize } from '../lib/images'
import styles from '../styles/components/_example.module.css'

type ExampleProps = {
  images?: string[];
  video?: string;
  caption: string;
}

// How a figure sits in the article, magazine style, decided by its images' size and kind:
// big photos run edge to edge, big screens break out of the text column, small or tall
// captures hang in the margin beside the text, and anything else stays in the column
type Layout = 'bleed' | 'wide' | 'inset' | 'column'

type Size = { width: number, height: number }

const isPhoto = (filename: string) => /\.jpe?g$/i.test(filename)

function layoutFor(filename: string, { width, height }: Size): Layout {
  if (isPhoto(filename) && width >= 2400) return 'bleed'
  if (width < 1000 || width / height < 0.9) return 'inset'
  if (width >= 1400) return 'wide'
  return 'column'
}

// A group takes the layout of its largest member, but never the margin: side by side
// they need the room. Small images together stay in the column.
function groupLayout(layouts: Layout[]): Layout {
  if (layouts.length === 1) return layouts[0]
  if (layouts.every(l => l === 'inset')) return 'column'
  if (layouts.every(l => l === 'bleed')) return 'bleed'
  return 'wide'
}

const SIZES: Record<Layout, string> = {
  bleed: '100vw',
  wide: '(max-width: 1200px) 100vw, 1152px',
  inset: '(max-width: 1280px) 22rem, 18rem',
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
  const layout = groupLayout(images.map((filename, i) => layoutFor(filename, sizes[i])))
  // Each column is as wide as its image's aspect ratio, so a row of images shares one height
  const columns = sizes.map(({ width, height }) => `${(width / height).toFixed(3)}fr`).join(' ')
  const imageSizes = images.length > 1 && layout !== 'bleed'
    ? `(max-width: 600px) 100vw, ${Math.round(1152 / images.length)}px`
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
