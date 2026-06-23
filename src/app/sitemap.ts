import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/seo';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    // Static Routes with differentiated priorities
    const routes = [
        { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
        { path: '/links', priority: 0.7, changeFrequency: 'monthly' as const },
    ].map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));

    return routes;
}
