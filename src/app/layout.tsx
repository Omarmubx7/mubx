import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';

import SmoothScroll from '@/components/SmoothScroll';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import dynamic from 'next/dynamic';

import DynamicChatWidget from '@/components/DynamicChatWidget';

import SkipToContent from '@/components/SkipToContent';
import { ThemeProvider } from '@/components/ThemeProvider';
import JsonLd from '@/components/JsonLd';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import SocialSidebar from '@/components/SocialSidebar';
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

import { Cairo } from 'next/font/google';

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
});

import { siteConfig } from '@/config/seo';

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
    icon: '/favicon.ico',
    apple: '/mubxlogo.svg',
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
        <link rel="dns-prefetch" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />


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
          <LoadingScreen />
          <SkipToContent />
          <JsonLd data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "name": "Omar Mubaidin | عمر مبيضين",
                "url": "https://mubx.dev",
                "image": "https://mubx.dev/mubxlogo.svg",
                "jobTitle": "Web Developer",
                "sameAs": [
                  "https://github.com/Omarmubx7",
                  "https://www.linkedin.com/in/omarmubaidin"
                ]
              },
              {
                "@type": "ProfessionalService",
                "name": "MUBX",
                "image": "https://mubx.dev/mubxlogo.svg",
                "logo": "https://mubx.dev/mubxlogo.svg",
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
          <SmoothScroll>
            <main id="main-content">
              {children}
            </main>
          </SmoothScroll>
          <SpeedInsights />
          <Analytics />
          <Suspense fallback={null}>
            <DynamicChatWidget />
          </Suspense>

        </ThemeProvider>
      </body>
    </html>
  );
}
