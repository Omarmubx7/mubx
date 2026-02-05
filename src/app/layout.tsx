import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'react-loading-skeleton/dist/skeleton.css';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mubx.dev'),
  title: 'Omar Mubaidin | MUBX - Web Developer & CS Student in Amman, Jordan',
  description: 'MUBX | Portfolio of Omar Mubaidin. I build fast, secure web systems for brands that want to scale. Computer Science Student & Full Stack Web Developer based in Amman.',
  keywords: ['Omar Mubaidin', 'MUB Mubaidin', 'MUBX', 'MUB', 'Mubaidin', 'Web Developer', 'Jordan', 'Computer Science', 'Next.js', 'React', 'Tech Geek'],
  authors: [{ name: 'Omar Mubaidin', url: 'https://mubx.dev' }],
  creator: 'Omar Mubaidin',
  openGraph: {
    title: 'Omar Mubaidin (MUB) | MUBX - Computer Science & Web Developer',
    description: 'Portfolio of Omar Mubaidin (MUB). CS student and Web Developer in Jordan. Founder of MUBX.',
    siteName: 'MUBX Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar Mubaidin (MUB) | MUBX',
    description: 'Computer Science student & Web Developer in Amman, Jordan. Building secure, data-driven systems.',
    creator: '@omarmubx',
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
                  "jobTitle": "Web Developer",
                  "sameAs": [
                    "https://github.com/Omarmubx7",
                    "https://www.linkedin.com/in/omarmubaidin"
                  ]
                },
                {
                  "@type": "ProfessionalService",
                  "name": "MUBX",
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
      </body>
    </html>
  );
}
