export const siteConfig = {
    name: "MUBX",
    title: "Omar Mubaidin | Technical Consultant for Jordanian Startups",
    description: "Revenue-focused technical consultancy for high-growth startups in Amman. Expert in Next.js, E-commerce, and Zain Cash payments.",
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
        'Technical Consultant Jordan',
        'Startup Advisor Amman',
        'Web Consultant Jordan',
        'Zain Cash Integration Jordan',
        'CliQ Payment Integration',
        'Revenue Focused Web Design',
        'Next.js Developer Amman',
        'Software Consultant Jordan',
        'MUBX Portfolio'
    ],
    ogImage: "/og-image.png", // Recommended size 1200x630
    links: {
        github: "https://github.com/Omarmubx7",
        linkedin: "https://www.linkedin.com/in/omarmubaidin",
    },
    locale: 'en_US',
    metadata: {
        en: {
            title: "Omar Mubaidin | Technical Consultant for Jordanian Startups",
            description: "Scale your startup with revenue-focused technical solutions. Expert in custom web systems, local payments, and high-performance SEO for Jordanian brands.",
        },
        ar: {
            title: "عمر مبيضين | مستشار تقني للشركات الناشئة في الأردن",
            description: "توسّع بشركتك الناشئة من خلال حلول تقنية تركز على العائد. خبير في الأنظمة المخصصة ودفع الزين كاش وتحسين محركات البحث للعلامات التجارية الأردنية.",
        }
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mubx.dev',
        siteName: 'MUBX',
        images: [
            {
                url: '/mubxlogoloader.svg',
                alt: 'MUBX Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@omarmubx',
        images: ['/mubxlogoloader.svg'],
    },
};

export type SiteConfig = typeof siteConfig;
