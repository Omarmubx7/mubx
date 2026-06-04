import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/seo';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    // Static Routes with differentiated priorities
    const routes = [
        { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
        { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
        { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
        { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/links', priority: 0.7, changeFrequency: 'monthly' as const },
        { path: '/projects', priority: 0.9, changeFrequency: 'monthly' as const },
        { path: '/services/ecommerce', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/tools/neon-gradient-card', priority: 0.5, changeFrequency: 'monthly' as const },
        { path: '/client/demo', priority: 0.4, changeFrequency: 'monthly' as const },
        { path: '/notes', priority: 0.6, changeFrequency: 'weekly' as const },
        { path: '/legal/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
        { path: '/legal/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    ].map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));

    return routes;
}
