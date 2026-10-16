import localFont from 'next/font/local'
import { Architects_Daughter } from 'next/font/google'

export const tiempos = localFont({
  src: [
    { path: '../styles/fonts/tiempos-headline-web-light.woff', weight: '300', style: 'normal' },
    { path: '../styles/fonts/tiempos-headline-web-light-italic.woff', weight: '300', style: 'italic' },
    { path: '../styles/fonts/tiempos-headline-web-regular.woff', weight: '400', style: 'normal' },
    { path: '../styles/fonts/tiempos-headline-web-regular-italic.woff', weight: '400', style: 'italic' },
    { path: '../styles/fonts/tiempos-headline-web-semibold.woff', weight: '600', style: 'normal' },
    { path: '../styles/fonts/tiempos-headline-web-black.woff', weight: '800', style: 'normal' },
  ],
  variable: '--font-tiempos',
  adjustFontFallback: 'Times New Roman',
})

// Stand-in for handwriting in the pencil notes
export const hand = Architects_Daughter({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-hand',
  display: 'swap',
})
