import { Locale } from './dictionaries';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  content: string;
}

const blogData: Record<Locale, BlogPost[]> = {
  en: [],
  ar: []
};

export const getBlogPosts = (lang: Locale): BlogPost[] => [];

export const getBlogPost = (slug: string, lang: Locale): BlogPost | undefined => undefined;

export const blogPosts: BlogPost[] = [];
