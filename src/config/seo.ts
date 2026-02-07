export const siteConfig = {
    name: "MUBX",
    title: "Omar Mubaidin | Web Developer in Amman, Jordan",
    description: "Build fast, secure web systems in Amman with MUBX. Full Stack Dev & CS Student specializing in Next.js & E-commerce.",
    url: "https://mubx.dev",
    author: {
        name: "Omar Mubaidin",
        url: "https://mubx.dev",
        twitter: "@omarmubx",
    },
    keywords: [
        'Omar Mubaidin',
        'MUBX',
        'Web Developer Amman',
        'Web Developer Jordan',
        'Software Engineer Jordan',
        'Next.js Developer',
        'Full Stack Developer',
        'Computer Science Student',
        'Custom Web Development',
        'E-commerce Jordan',
        'Zain Cash Integration',
        'Startups',
        'Secure Web Systems',
        'Fast Web Systems'
    ],
    ogImage: "/icon.png", // Recommended size 1200x630
    links: {
        github: "https://github.com/Omarmubx7",
        linkedin: "https://www.linkedin.com/in/omarmubaidin",
    },
    locale: 'en_US',
    metadata: {
        en: {
            title: "Omar Mubaidin — Web Developer & Computer Science Student",
            description: "I help startups build fast, secure web systems. Computer Science student and Full Stack Developer based in Amman, Jordan.",
        },
        ar: {
            title: "عمر مبيضين — مطور ويب شامل وطالب علوم حاسوب في عمان",
            description: "مطور ويب شامل في عمان. أساعد الشركات الناشئة في بناء أنظمة ومتاجر إلكترونية سريعة وآمنة.",
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
                width: 1200,
                height: 630,
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
