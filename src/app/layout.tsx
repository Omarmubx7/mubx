import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import 'react-loading-skeleton/dist/skeleton.css';
import SmoothScroll from '@/components/SmoothScroll';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import ChatWidget from '@/components/ChatWidget';

import SkipToContent from '@/components/SkipToContent';
import { ThemeProvider } from '@/components/ThemeProvider';
import JsonLd from '@/components/JsonLd';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import SocialSidebar from '@/components/SocialSidebar';


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

import { siteConfig } from '@/config/seo';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name} - ${siteConfig.author.name}`,
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
    icon: '/favicon.png', // Updated filename
    apple: '/icon.png', // Keeping high-res for Apple if that's preferred, or switch to favicon.png if identical
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Resource hints for external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background text-foreground antialiased selection:bg-neon selection:text-black font-sans`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SkipToContent />
          <JsonLd data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "name": "Omar Mubaidin | عمر مبيضين",
                "url": "https://mubx.dev",
                "image": "https://mubx.dev/favicon-new.png",
                "jobTitle": "Web Developer",
                "sameAs": [
                  "https://github.com/Omarmubx7",
                  "https://www.linkedin.com/in/omarmubaidin"
                ]
              },
              {
                "@type": "ProfessionalService",
                "name": "MUBX",
                "image": "https://mubx.dev/favicon-new.png",
                "logo": "https://mubx.dev/favicon-new.png",
                "description": "High-performance web development for verified systems and startups.",
                "url": "https://mubx.dev",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Amman",
                  "addressCountry": "JO"
                },
                "areaServed": ["Jordan", "Remote"],
                "serviceType": ["Web Development", "E-commerce", "Dashboards"],
                "priceRange": "$$"
              }
            ]
          }} />
          <ScrollProgressBar />
          <SocialSidebar />
          <SmoothScroll>{children}</SmoothScroll>
          <SpeedInsights />
          <Analytics />
          <Suspense fallback={null}>
            <ChatWidget />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
