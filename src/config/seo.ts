export const siteConfig = {
    name: "MUBX",
    title: "Omar Mubaidin | Web Developer in Amman, Jordan",
    description: "Build fast, secure web systems in Amman with MUBX. Full Stack Dev & CS Student specializing in Next.js & E-commerce.",
    url: "https://mubx.dev",
    author: {
        name: "Omar Mubaidin | عمر مبيضين",
        url: "https://mubx.dev",
        twitter: "@omarmubx",
    },
    keywords: [
        'Omar Mubaidin',
        'عمر مبيضين',
        'MUBX',
        'Web Developer Amman',
        'Web Developer Jordan',
        'Software Engineer Jordan',
        'Next.js Developer Jordan',
        'Full Stack Developer Amman',
        'Zain Cash Integration Jordan',
        'Ecommerce Developer Amman',
        'Custom Web Systems',
        'Verified Web Systems',
        'Startup Developer Jordan'
    ],
    ogImage: "/og-image.png", // Recommended size 1200x630
    links: {
        github: "https://github.com/Omarmubx7",
        linkedin: "https://www.linkedin.com/in/omarmubaidin",
    },
    locale: 'en_US',
    metadata: {
        en: {
            title: "Omar Mubaidin — Full Stack Web Developer in Amman",
            description: "Expert Next.js developer building fast, secure web systems for startups and brands in Jordan. Specializing in E-commerce & Zain Cash integration.",
        },
        ar: {
            title: "عمر مبيضين — مطور ويب في عمان | MUBX",
            description: "مطور ويب متخصص في إنشاء أنظمة برمجية ومتاجر إلكترونية سريعة وآمنة في الأردن. خبير في ربط بوابات الدفع Zain Cash و CliQ.",
        }
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mubx.dev',
        siteName: 'MUBX',
        images: [
            {
                url: '/icon.png',
                alt: 'MUBX Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@omarmubx',
        images: ['/icon.png'],
    },
};

export type SiteConfig = typeof siteConfig;
