import { Suspense } from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/config/seo';
import { Locale } from '@/lib/dictionaries';
import HomeClient from '@/components/HomeClient';

type Props = {
  searchParams: { lang?: string }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;
  const meta = siteConfig.metadata[lang];

  return {
    title: {
      absolute: meta.title,
    },
    description: meta.description,
    openGraph: {
      ...siteConfig.openGraph,
      title: meta.title,
      description: meta.description,
      locale: lang === 'ar' ? 'ar_QA' : 'en_US',
      type: 'website',
    },
    twitter: {
      ...siteConfig.twitter,
      title: meta.title,
      description: meta.description,
    }
  }
}

export default function Home({ searchParams }: Props) {
  const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

  return (
    <Suspense fallback={null}>
      <HomeClient lang={lang} />
    </Suspense>
  );
}
