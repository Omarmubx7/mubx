import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Omar Mubaidin (MUB Mubaidin) | MUBX - Computer Science & Web Developer',
  description: 'Portfolio of Omar Mubaidin (MUB). Computer Science student and Full Stack Web Developer in Amman, Jordan. Founder of MUBX, building secure, high-performance systems.',
  keywords: ['Omar Mubaidin', 'MUB Mubaidin', 'MUBX', 'MUB', 'Mubaidin', 'Web Developer', 'Jordan', 'Computer Science', 'Next.js', 'React', 'Software Engineer'],
  authors: [{ name: 'Omar Mubaidin', url: 'https://mubx.com' }],
  creator: 'Omar Mubaidin',
  openGraph: {
    title: 'Omar Mubaidin (MUB) | MUBX - Computer Science & Web Developer',
    description: 'Portfolio of Omar Mubaidin (MUB). CS student and Web Developer in Jordan. Founder of MUBX.',
    url: 'https://mubx.com',
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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
