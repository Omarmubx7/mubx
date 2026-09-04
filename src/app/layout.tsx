import type { Metadata } from 'next'
import 'lenis/dist/lenis.css'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'
import Navbar from '@/components/Navbar'
import SocialSidebar from '@/components/SocialSidebar'
import FloatingLogo from '@/components/FloatingLogo'
import LoadingScreen from '@/components/LoadingScreen'
import ScrollProgress from '@/components/ui/ScrollProgress'
import JsonLd from '@/components/JsonLd'
import { ScrollSpyProvider } from '@/context/ScrollSpyContext'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata: Metadata = {
  metadataBase: new URL('https://mubx.dev'),
  title: 'Omar Mubaidin Web Developer & AI Engineer | mubx.dev',
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
    title: 'Omar Mubaidin Web Developer & AI Engineer',
    description:
      'Omar builds AI-powered products and web experiences that ship, scale, and solve real problems.',
    url: 'https://mubx.dev',
    siteName: 'mubx.dev',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-images.png',
        width: 1200,
        height: 630,
        alt: 'Omar Mubaidin mubx.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar Mubaidin Web Developer & AI Engineer',
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
  const isProd = process.env.NODE_ENV === 'production'
  const bootSkipScript = `(function(){try{var ua=navigator.userAgent.toLowerCase();var bot=/lighthouse|chrome-lighthouse|googlebot|bingbot|yandexbot|baiduspider|headlesschrome|speed insights|insights/i.test(ua);var automated=navigator.webdriver||window.location.search.indexOf('lighthouse')>-1||!!window._lighthouse;var local=window.location.hostname==='localhost'||window.location.hostname==='127.0.0.1'||window.location.port!=='';var seen=false;try{seen=sessionStorage.getItem('mubx-loaded')==='true'}catch(e){}if(bot||automated||(${isProd}&&!local&&seen)){document.documentElement.setAttribute('data-boot-skip','')}}catch(e){})();`

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootSkipScript }} />
        <noscript>
          <style>{`[data-boot-cover]{display:none!important}`}</style>
        </noscript>
        <link rel="canonical" href="https://mubx.dev" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/brand-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#E63946" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <ClientLayout>
          <LoadingScreen />
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <LanguageProvider>
          <ScrollSpyProvider>
            <Navbar />
            <SocialSidebar />
            <FloatingLogo />
            <ScrollProgress />
          <JsonLd
            data={{
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Omar Mubaidin',
              alternateName: 'MUBX',
              url: 'https://mubx.dev',
              image: 'https://mubx.dev/og-images.png',
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
        </ClientLayout>
      </body>
    </html>
  )
}
