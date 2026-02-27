import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono, Cairo } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';

import SmoothScroll from '@/components/SmoothScroll';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";


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

        {/* Hreflang — Language Alternates for SEO */}
        <link rel="alternate" hrefLang="en" href="https://mubx.dev" />
        <link rel="alternate" hrefLang="ar" href="https://mubx.dev?lang=ar" />
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
          <LoadingScreen />
          <SkipToContent />
          <JsonLd data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://mubx.dev/#person",
                "name": "Omar Mubaidin",
                "alternateName": ["عمر مبيضين", "MUBX", "Omar Mubx"],
                "url": "https://mubx.dev",
                "image": "https://mubx.dev/omarmubpic.webp",
                "description": "Omar Mubaidin is a full-stack web developer and technical consultant based in Amman, Jordan. Founder of MUBX, he specializes in Next.js, e-commerce, and local payment integration for Jordanian startups.",
                "jobTitle": "Full Stack Developer & Technical Consultant",
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
                "@type": "Organization",
                "@id": "https://mubx.dev/#organization",
                "name": "MUBX",
                "alternateName": "MUBX Development",
                "url": "https://mubx.dev",
                "logo": "https://mubx.dev/mubxlogoloader.svg",
                "image": "https://mubx.dev/mubxlogoloader.svg",
                "description": "MUBX is a revenue-focused web consultancy in Amman, Jordan, founded by Omar Mubaidin. Specializing in high-performance websites, e-commerce, local payment integration (Zain Cash, CliQ), and technical SEO for startups.",
                "founder": { "@id": "https://mubx.dev/#person" },
                "foundingDate": "2024",
                "foundingLocation": {
                  "@type": "Place",
                  "name": "Amman, Jordan"
                },
                "areaServed": ["Jordan", "Middle East", "Remote"],
                "serviceType": [
                  "Web Development",
                  "E-commerce Development",
                  "Technical Consulting",
                  "SEO Optimization",
                  "Dashboard Development",
                  "Zain Cash Integration",
                  "CliQ Payment Integration"
                ],
                "knowsAbout": [
                  "Next.js", "React", "TypeScript", "E-commerce",
                  "Zain Cash", "CliQ", "Web Performance", "SEO"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "mubxdev@proton.me",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Arabic"]
                },
                "priceRange": "$$"
              },
              {
                "@type": "WebSite",
                "@id": "https://mubx.dev/#website",
                "name": "MUBX",
                "url": "https://mubx.dev",
                "description": "Omar Mubaidin's portfolio and web consultancy — MUBX. High-performance web development for startups in Jordan.",
                "publisher": { "@id": "https://mubx.dev/#organization" },
                "creator": { "@id": "https://mubx.dev/#person" },
                "inLanguage": ["en", "ar"],
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://mubx.dev/blog?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
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
