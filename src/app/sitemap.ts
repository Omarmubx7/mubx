
import { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';
import { siteConfig } from '@/config/seo';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    // Static Routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/services/ecommerce',
        '/blog',
        '/tools/website-cost-calculator-jordan',
        '/blog/ecommerce-in-jordan-guide',
        '/blog/nextjs-vs-wordpress',
        '/blog/building-blob-jo',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Project Routes
    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9, // Projects are high priority
    }));

    return [...routes, ...projectRoutes];
}
