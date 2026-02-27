export const siteConfig = {
    name: "MUBX",
    title: "Omar Mubaidin | Technical Consultant & Web Developer in Jordan — MUBX",
    description: "Omar Mubaidin (عمر مبيضين) is the founder of MUBX — a revenue-focused web consultancy in Amman, Jordan. Expert in Next.js, E-commerce, Zain Cash & CliQ payments, and high-performance SEO for startups.",
    url: "https://mubx.dev",
    author: {
        name: "Omar Mubaidin | عمر مبيضين",
        url: "https://mubx.dev",
        twitter: "@omarmubx",
        email: "mubxdev@proton.me",
    },
    keywords: [
        // — Brand & Identity —
        'Omar Mubaidin',
        'عمر مبيضين',
        'MUBX',
        'mubx.dev',
        'Omar Mubaidin developer',
        'Omar Mubaidin Jordan',
        'Omar Mubaidin Amman',
        'Omar Mubaidin portfolio',
        'Omar Mubaidin web developer',
        'MUBX developer',
        'MUBX web development',
        'MUBX consultancy',

        // — Core Services —
        'web developer Jordan',
        'web developer Amman',
        'Next.js developer Jordan',
        'Next.js developer Amman',
        'freelance web developer Jordan',
        'freelance developer Amman',
        'full stack developer Jordan',
        'React developer Jordan',
        'TypeScript developer Amman',
        'frontend developer Amman',

        // — Consultancy & Authority —
        'technical consultant Jordan',
        'startup advisor Amman',
        'startup tech consultant Jordan',
        'startup tech consultant Middle East',
        'web consultant Jordan',
        'software consultant Jordan',
        'best web developer Amman',
        'top freelancer Jordan',
        'top web developer Jordan',

        // — E-commerce & Payments —
        'e-commerce developer Jordan',
        'Zain Cash integration',
        'Zain Cash developer Jordan',
        'CliQ payment integration',
        'online store Jordan',
        'e-commerce Jordan',

        // — SEO & Performance —
        'SEO expert Jordan',
        'web performance optimization',
        'Core Web Vitals optimization',
        'high-performance websites Jordan',
        'revenue focused web design',

        // — Arabic SEO —
        'مطور ويب الأردن',
        'مطور ويب عمان',
        'مستشار تقني الأردن',
        'تطوير مواقع الأردن',
        'مطور Next.js الأردن',
        'تصميم مواقع عمان',
        'تجارة إلكترونية الأردن',
        'مبرمج أردني',
    ],
    ogImage: "/og-image.png",
    links: {
        github: "https://github.com/Omarmubx7",
        linkedin: "https://www.linkedin.com/in/omarmubaidin",
        instagram: "https://www.instagram.com/mubx.dev",
        whatsapp: "https://wa.me/962780090453",
        calendly: "https://calendly.com/omarmubaidincs/30min",
    },
    locale: 'en_US',
    metadata: {
        en: {
            title: "Omar Mubaidin | Technical Consultant & Web Developer in Jordan — MUBX",
            description: "Scale your startup with revenue-focused technical solutions. Omar Mubaidin (MUBX) is an expert in custom web systems, Zain Cash & CliQ payments, and high-performance SEO for Jordanian brands.",
        },
        ar: {
            title: "عمر مبيضين | مستشار تقني ومطور ويب في الأردن — MUBX",
            description: "توسّع بشركتك الناشئة من خلال حلول تقنية تركز على العائد. عمر مبيضين (MUBX) خبير في الأنظمة المخصصة ودفع الزين كاش وتحسين محركات البحث للعلامات التجارية الأردنية.",
        }
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mubx.dev',
        siteName: 'MUBX — Omar Mubaidin',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'MUBX — Omar Mubaidin | Web Developer & Technical Consultant in Jordan',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@omarmubx',
        site: '@omarmubx',
        images: ['/og-image.png'],
    },
};

export type SiteConfig = typeof siteConfig;
