import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/seo';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/contract', '/client', '/api/'],
            },
            // AI crawlers — explicitly allow for AEO/GEO discoverability
            { userAgent: 'GPTBot', allow: '/' },
            { userAgent: 'Google-Extended', allow: '/' },
            { userAgent: 'CCBot', allow: '/' },
            { userAgent: 'anthropic-ai', allow: '/' },
            { userAgent: 'ClaudeBot', allow: '/' },
            { userAgent: 'PerplexityBot', allow: '/' },
            { userAgent: 'Bytespider', allow: '/' },
            // Newer AI bots (2024-2025)
            { userAgent: 'Applebot-Extended', allow: '/' },
            { userAgent: 'Meta-ExternalAgent', allow: '/' },
            { userAgent: 'FacebookBot', allow: '/' },
            { userAgent: 'YouBot', allow: '/' },
            { userAgent: 'Diffbot', allow: '/' },
            { userAgent: 'Amazonbot', allow: '/' },
            { userAgent: 'OAI-SearchBot', allow: '/' },
        ],
        sitemap: `${siteConfig.url}/sitemap.xml`,
        host: siteConfig.url,
    };
}
