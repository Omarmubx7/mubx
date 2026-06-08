import { Metadata } from 'next';
import { siteConfig } from '@/config/seo';
import HomeClient from '@/components/HomeClient';

export async function generateMetadata(): Promise<Metadata> {
  const meta = siteConfig.metadata.en;

  return {
    title: {
      absolute: meta.title,
    },
    description: meta.description,
    alternates: {
      canonical: siteConfig.url
    },
    openGraph: {
      ...siteConfig.openGraph,
      title: meta.title,
      description: meta.description,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      ...siteConfig.twitter,
      title: meta.title,
      description: meta.description,
    }
  }
}

export default async function Home() {
  return <HomeClient />;
}

