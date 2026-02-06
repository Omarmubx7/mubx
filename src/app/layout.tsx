import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'react-loading-skeleton/dist/skeleton.css';
import SmoothScroll from '@/components/SmoothScroll';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import ChatWidget from '@/components/ChatWidget';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="bg-background text-foreground antialiased selection:bg-neon selection:text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "name": "Omar Mubaidin",
                  "url": "https://mubx.dev", // Using the preferred domain mentioned
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
            })
          }}
        />
        <SmoothScroll>{children}</SmoothScroll>
        <SpeedInsights />
        <Analytics />
        <ChatWidget />
      </body>
    </html>
  );
}
