import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'
import ScrollProgress from '@/components/ui/ScrollProgress'
import JsonLd from '@/components/JsonLd'
import { ScrollSpyProvider } from '@/context/ScrollSpyContext'
import { LanguageProvider } from '@/context/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mubx.dev'),
  title: 'Omar Mubaidin — Web Developer & AI Engineer | mubx.dev',
  description:
    'Omar Mubaidin builds AI-powered products and web experiences that ship, scale, and solve real problems. Based in Amman, Jordan.',
  keywords: [
    'Omar Mubaidin',
    'MUBX',
    'web developer',
    'AI engineer',
    'Jordan',
    'Next.js',
    'full-stack',
    'Amman',
  ],
  authors: [{ name: 'Omar Mubaidin', url: 'https://mubx.dev' }],
  creator: 'Omar Mubaidin',
  openGraph: {
    title: 'Omar Mubaidin — Web Developer & AI Engineer',
    description:
      'Omar builds AI-powered products and web experiences that ship, scale, and solve real problems.',
    url: 'https://mubx.dev',
    siteName: 'mubx.dev',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Omar Mubaidin — mubx.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar Mubaidin — Web Developer & AI Engineer',
    description:
      'Omar builds AI-powered products and web experiences that ship, scale, and solve real problems.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="canonical" href="https://mubx.dev" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/mubxlogoloader.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#E63946" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bitcount+Prop+Single:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Loader />
        <LanguageProvider>
        <ScrollSpyProvider>
          <Navbar />
          <ScrollProgress />
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Omar Mubaidin',
            alternateName: 'MUBX',
            url: 'https://mubx.dev',
            image: 'https://mubx.dev/og-image.jpg',
            jobTitle: 'Web Developer & AI Engineer',
            description:
              'Omar builds AI-powered products and web experiences that ship, scale, and solve real problems.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Amman',
              addressCountry: 'JO',
            },
            alumniOf: {
              '@type': 'CollegeOrUniversity',
              name: 'Hussein Technical University',
              url: 'https://htu.edu.jo',
            },
            sameAs: [
              'https://github.com/Omarmubx7',
              'https://www.linkedin.com/in/omarmubaidin',
              'https://www.instagram.com/mubx.dev',
            ],
          }}
        />
        <main id="main-content">{children}</main>
        </ScrollSpyProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
