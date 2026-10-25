import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { colorSchemeScript } from '@/lib/color-scheme'
import { hand, tiempos } from '@/lib/fonts'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, openGraphDefaults } from '@/lib/site'
import '@/styles/index.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    ...openGraphDefaults,
    type: 'website',
    images: [{ url: '/images/og-portrait.jpg', width: 1200, height: 1200, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The inline script sets data-prefers-color-scheme on <html> before React
    // hydrates, so the attribute intentionally differs from the server HTML
    <html lang="en" className={`${tiempos.variable} ${hand.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: colorSchemeScript }} />
      </head>
      <body>
        <div className="app">
          <Header />

          <main>
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
