import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'MUBX - Omar Mubaidin Portfolio',
        short_name: 'MUBX',
        description: 'Building fast, secure web systems in Amman. Full Stack Developer specializing in Next.js.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
            {
                src: '/mubxlogo.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
        ],
    };
}
