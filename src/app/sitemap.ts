
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
        '/services',
        '/services/ecommerce',
        '/blog',
        '/tools/website-cost-calculator-jordan',
        '/client/demo',
        '/tools/neon-gradient-card',
        '/links',
        '/legal/privacy',
        '/legal/terms',
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
        priority: 0.9,
    }));

    // Dynamic Blog Routes
    // Using import from blog-data
    const { blogPosts } = require('@/lib/blog-data');
    const blogRoutes = blogPosts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [...routes, ...projectRoutes, ...blogRoutes];
}
