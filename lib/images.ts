import { join } from 'path'
import { imageSizeFromFile } from 'image-size/fromFile'

// Intrinsic size of an image in public/, read at build time so next/image can
// reserve space and pick the right srcset without hand-written dimensions
export async function getImageSize(publicPath: string) {
  const { width, height, orientation } = await imageSizeFromFile(join(process.cwd(), 'public', publicPath))

  if (!width || !height) {
    throw new Error(`Couldn't read the size of public/${publicPath}`)
  }

  // EXIF orientations 5-8 are rotated 90°, so the displayed size is swapped
  return orientation && orientation >= 5
    ? { width: height, height: width }
    : { width, height }
}
