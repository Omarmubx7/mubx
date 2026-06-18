import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono, Cairo } from 'next/font/google';
import './globals.css';

import SmoothScroll from '@/components/SmoothScroll';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";


import SkipToContent from '@/components/SkipToContent';
import { ThemeProvider } from '@/components/ThemeProvider';
import JsonLd from '@/components/JsonLd';
import ScrollProgress from '@/components/ui/ScrollProgress';
import LoadingScreen from '@/components/LoadingScreen';




const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});



const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
});

import { siteConfig } from '@/config/seo';

export const viewport: Viewport = {
  themeColor: '#D71C1C',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: '/mubxlogoloader.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/mubxlogoloader.svg',
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    locale: siteConfig.locale,
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.author.twitter,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { headers } from 'next/headers';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = 'en';
  const dir = 'ltr';

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />

        {/* Hreflang — Language Alternates for SEO */}
        <link rel="alternate" hrefLang="en" href="https://mubx.dev" />
        <link rel="alternate" hrefLang="x-default" href="https://mubx.dev" />

        {/* Calendly Widget */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>

        {/* PWA Meta Tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D71C1C" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="mubx" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${cairo.variable} bg-background text-foreground antialiased selection:bg-neon selection:text-black font-sans`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="noise-overlay" />
          <LoadingScreen />
          <SkipToContent />
          <JsonLd data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://mubx.dev/#person",
                "name": "Omar Mubaidin",
                "alternateName": ["MUBX", "Omar Mubx"],
                "url": "https://mubx.dev",
                "image": "https://mubx.dev/og-images.png",
                "description": "Omar Mubaidin is a freelance full-stack web developer based in Amman, Jordan. He specializes in Next.js, e-commerce, and local payment integration for Jordanian startups.",
                "jobTitle": "Freelance Full Stack Web Developer",
                "nationality": {
                  "@type": "Country",
                  "name": "Jordan"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Amman",
                  "addressCountry": "JO"
                },
                "alumniOf": {
                  "@type": "CollegeOrUniversity",
                  "name": "Princess Sumaya University for Technology",
                  "url": "https://www.psut.edu.jo"
                },
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "Full Stack Web Developer",
                  "occupationLocation": {
                    "@type": "Country",
                    "name": "Jordan"
                  },
                  "skills": "Next.js, React, TypeScript, Node.js, PostgreSQL, Tailwind CSS, E-commerce, Zain Cash Integration, CliQ Payments, SEO"
                },
                "knowsAbout": [
                  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL",
                  "Tailwind CSS", "Web Performance", "Core Web Vitals",
                  "E-commerce", "Zain Cash", "CliQ Payments",
                  "SEO", "Technical Consulting", "Startup Advisory",
                  "Framer Motion", "Docker", "Git"
                ],
                "sameAs": [
                  "https://github.com/Omarmubx7",
                  "https://www.linkedin.com/in/omarmubaidin",
                  "https://www.instagram.com/mubx.dev",
                  "https://wa.me/962780090453",
                  "https://mubx.dev/links"
                ]
              },

              {
                "@type": "BreadcrumbList",
                "@id": "https://mubx.dev/#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://mubx.dev"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "About",
                    "item": "https://mubx.dev/about"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Services",
                    "item": "https://mubx.dev/services"
                  }
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://mubx.dev/#website",
                "name": "MUBX",
                "url": "https://mubx.dev",
                "description": "Omar Mubaidin's portfolio — freelance web development for startups in Jordan.",
                "publisher": { "@id": "https://mubx.dev/#person" },
                "creator": { "@id": "https://mubx.dev/#person" },
                "inLanguage": ["en"]
              }
            ]
          }} />
          <ScrollProgress />
          <SmoothScroll>
            <main id="main-content" tabIndex={-1} className="outline-none">
              {children}
            </main>
          </SmoothScroll>
          <SpeedInsights />
          <Analytics />

        </ThemeProvider>
      </body>
    </html>
  );
}
