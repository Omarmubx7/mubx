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
        'MUB Mubaidin',
        'MUBX',
        'MUB',
        'Mubaidin',
        'Web Developer Amman',
        'Web Developer Jordan',
        'Software Engineer Jordan',
        'Next.js Developer',
        'React Developer',
        'Full Stack Developer',
        'Computer Science Student',
        'Custom Web Development',
        'E-commerce Jordan',
        'Zain Cash Integration'
    ],
    ogImage: "/icon.png", // Recommended size 1200x630
    links: {
        github: "https://github.com/Omarmubx7",
        linkedin: "https://www.linkedin.com/in/omarmubaidin",
    },
    locale: 'en_US',
    metadata: {
        en: {
            title: "Omar Mubaidin | Full Stack Web Developer in Amman, Jordan",
            description: "Build fast, secure web systems in Amman with MUBX. I help startups and businesses launch high-performance Next.js websites and custom e-commerce stores.",
        },
        ar: {
            title: "عمر مبيضين | مطور ويب شامل في عمان، الأردن",
            description: "صمم موقعك مع MUBX في عمان. نحن نطور أنظمة ويب آمنة ومتاجر إلكترونية مخصصة تدعم الدفع المحلي. ابدأ رحلتك الرقمية مع حلول Next.js السريعة والقابلة للتوسع.",
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
