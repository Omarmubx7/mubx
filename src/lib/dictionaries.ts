export type Locale = 'en' | 'ar';

export const dictionary = {
    en: {
        nav: {
            services: 'Services',
            projects: 'Projects',
            lab: 'From the Lab',
            testimonials: 'Testimonials',
            contact: 'Contact',
            resume: 'Download CV (PDF)',
            estimate: 'Get Estimate',
            talk: "Let's Talk",
            home: 'Home',
            about: 'About',
            work: 'Work',
            articles: 'Articles',
            costCalc: 'Cost Calculator',
            freeTools: 'Free Tools (Open Source)',
            arabicVer: 'Arabic Version (عربي)', // Kept for legacy if needed, but toggle replaces this
        },
        hero: {
            badge: 'Full Stack Developer & CS Student',
            titleStart: 'Building fast, secure',
            titleHighlight: 'web systems',
            titleEnd: 'for ambitious startups.',
            description: 'Full Stack Developer and Computer Science student based in Amman, Jordan. Focused on performance, security, and clean architecture.',
            ctaPrimary: 'Book a free call',
            ctaSecondary: 'View my work',
            imageAlt: 'Omar Mubaidin - Full Stack Developer',
        },
        services: {
            title: 'SERVICES &',
            titleHighlight: 'PRICING',
            subtitle: 'Clear packages. No hidden fees. Delivered on time.',
            popular: 'Most Popular',
            packages: {
                linkBio: {
                    label: 'Basic',
                    title: 'Link Tree',
                    desc: 'A custom, branded link page to aggregate your social media. Better than Linktree.',
                    timeline: '2-3 Days',
                    deliverables: 'Hosting Included',
                    details: ['Custom Design', 'Social Icons', 'Contact Form', 'Fast Loading'],
                    price: '70 JD'
                },
                landing: {
                    label: 'Starter',
                    title: 'Landing Page',
                    desc: 'High-conversion single page site. Perfect for ads, events, or product launches.',
                    timeline: '5-7 Days',
                    deliverables: '1 Page',
                    details: ['Copywriting', 'SEO Basics', 'Mobile Ready', 'Analytics'],
                    price: '300 JD'
                },
                business: {
                    label: 'Growth',
                    title: 'Business Website',
                    desc: 'Complete multi-page website to establish authority and trust.',
                    timeline: '2 Weeks',
                    deliverables: '5 Pages',
                    details: ['CMS (Manage Content)', 'Bilingual (Ar/En)', 'SEO Advanced', 'Blog Setup'],
                    price: '500 JD'
                },
                system: {
                    label: 'Pro',
                    title: 'Web System',
                    desc: 'Custom functionality. E-commerce, booking systems, or SaaS MVPs.',
                    timeline: '3+ Weeks',
                    deliverables: 'Custom Scope',
                    details: ['Database Design', 'User Auth', 'Payment Integration', 'Admin Dashboard'],
                    price: '1000+ JD'
                }
            },
            howItWorks: {
                title: 'HOW IT WORKS',
                step1: {
                    title: 'Free Discovery Call',
                    desc: 'We chat for 20 mins to understand your goals. No sales pressure, just clarity.'
                },
                step2: {
                    title: 'Proposal in 24 Hours',
                    desc: 'You get a clear plan with deadline and price. 50% upfront, 50% on launch, includes 2 revision rounds.'
                },
                step3: {
                    title: 'Build & Launch',
                    desc: 'I build your system, you review it, and we go live. Simple as that.'
                }
            },
            cta: 'Get a Project Estimate'
        },
        footer: {
            brandDesc: 'Built by Omar Mubaidin — Web Developer & CS Student in Amman, Jordan. Creating secure, high-performance web systems.',
            navigation: 'Navigation',
            payments: 'Payments Supported',
            connect: 'Connect',
            selectedProjects: 'Selected Projects',
            rights: 'All rights reserved.',
            designed: 'Designed with precision in Amman.',
            bookCall: 'Book a Call',
            legal: {
                privacy: 'Privacy Policy',
                terms: 'Terms of Service'
            }
        },

        // Add other sections like About, Projects, etc. as needed
        about: {
            titleStart: 'WEB DEVELOPER IN',
            titleHighlight: 'AMMAN',
            name: 'Omar Mubaidin',
            descriptionStart: "I’m",
            descriptionMiddle: ", a Computer Science student and web developer based in Jordan.",
            descriptionEnd: "Unlike typical template-users, I engineer",
            performance: "performance",
            descriptionContext: ". My academic background in CS allows me to build secure, database-driven systems that safeguard your customer data.",
            quoteStart: "Most of my pages load in under",
            quoteHighlight: "1.5s on 4G",
            quoteEnd: "networks in Jordan.",
            whyChoose: {
                title: 'Why clients choose me',
                reason1: {
                    title: 'Performance & Speed',
                    desc: 'Pages load in under 1.5s, improving search engine ranking.'
                },
                reason2: {
                    title: 'Local Payment Expert',
                    desc: 'Official integration experience with Zain Cash & CliQ.'
                },
                reason3: {
                    title: 'Reliability',
                    desc: "100% project completion rate. I don't ghost."
                }
            },
            techStack: 'Tech Stack',
            stats: {
                dev: 'Web Developer',
                secure: 'Secure & Fast',
                location: 'Based in Amman',
                design: 'Modern Design'
            }
        },
        contact: {
            connect: "Let's Connect",
            titleStart: "Ready to build with",
            titleHighlight: "MUBX",
            desc1: "Ready to scale? I'm currently accepting new projects for Q1.",
            desc2: "Let's discuss how we can engineer your growth.",
            desc3: "Whether you need a full-stack audit, a database redesign, or a complete product build, I'm ready to architect the solution.",
            availability: {
                title: "Availability & Response",
                status: "Accepting 2 New Projects (Q1)",
                response: "I read every message myself and reply within",
                responseTime: "24 hours",
                context: "Currently prioritizing e-commerce and SaaS projects.",
                urgent: "Need a faster reply?",
                whatsapp: "WhatsApp: Best for quick voice notes",
                whatsappUrl: "https://wa.me/962791234567",
                whatsappNumber: "+962 79 123 4567"
            },
            email: "Email",
            location: "Location",
            locationVal: "Amman, Jordan (Remote Available)",
            form: {
                badge: "Projects from 200 JD",
                title: "Tell me about your project",
                fastReplies: "Fast Replies",
                security: "Security First",
                arabicSupport: "Arabic Support",
                goal: "Goal",
                goalOptions: ['New Website', 'Redesign', 'E-commerce', 'Custom App'],
                budget: "Budget",
                budgetOptions: ['200 - 500 JD', '500 - 1000 JD', '1000 - 2500 JD', '2500+ JD'],
                deadline: "Deadline",
                deadlineOptions: ['ASAP', '1 Month', 'Flexible'],
                name: "Your Name",
                namePlaceholder: "John Doe",
                business: "Business Name",
                businessPlaceholder: "Company Ltd.",
                email: "Email Address",
                emailPlaceholder: "name@company.com",
                details: "Project Details",
                detailsPlaceholder: "I need a landing page for...",
                submit: "Send Inquiry",
                sending: "Sending...",
                footer: "If we're not a fit, I'll still reply with suggestions or a direction within 24 hours.",
                success: "Thanks for your message! I'll get back to you within 24 hours.",
                error: "Oops! There was a problem submitting your form. Please try again or message me on WhatsApp."
            },
            typical: "Typical projects:",
            typicalList: "landing pages, e-commerce MVPs, and web systems",
            typicalContext: "for startups in Amman and worldwide.",
            faq: {
                title: "Common Questions",
                q1: {
                    q: "Do you work with non-tech founders?",
                    a: "Yes! I explain everything in plain English. No jargon. I handle the hosting, domains, and tech setup so you can focus on business."
                },
                q2: {
                    q: "Do you sign contracts?",
                    a: "Absolutely. Every project starts with a clear contract outlining dates, deliverables, and costs. No surprises."
                },
                q3: {
                    q: "Do you support after launch?",
                    a: "Yes. I offer a 1-month support period for bugs, and can discuss retainer packages for ongoing updates."
                }
            }
        },
        reviews: {
            title: 'WHAT CLIENTS',
            titleHighlight: 'SAY',
            list: [
                {
                    client: 'Mahmoud Hussam',
                    role: 'Agency Lead @ Vynex Media',
                    project: 'Agency Landing Page',
                    year: 'Jan 2024',
                    outcome: 'Vynex Media — +20% leads in first month',
                    text: "Omar helped us launch faster and look more professional by building a high-performance landing page. He was reliable, proactive, and delivered on time.",
                    linkLabel: "View on Instagram"
                },
                {
                    client: 'Ali Hiasat',
                    role: 'Club Manager @ HTU Martial Arts',
                    project: 'Club Management System',
                    year: 'Feb 2025',
                    outcome: 'Club Portal — Managed 100+ students',
                    text: "Our old process for members was messy; after Omar’s system, managing bookings and payments became seamless. I’d recommend him to any club that needs solid web systems.",
                    linkLabel: "Visit HTU.edu.jo"
                },
                {
                    client: 'Hassan Emad',
                    role: 'Founder @ BloB.JO',
                    project: 'E-commerce Store',
                    year: 'Jan 2025',
                    outcome: 'BloB Store — 200% online sales boost',
                    text: "Customers can now explore designs and track orders online, turning what used to be manual communication into a smoother digital flow. The print-on-demand store he built is a game changer.",
                    linkLabel: "Visit BloB.JO"
                }
            ]
        },
        projects: {
            titleStart: 'SELECTED',
            titleHighlight: 'PROJECTS',
            readCaseStudy: 'Read Case Study',
            visitLive: 'Visit Live Website'
        },
        servicesPage: {
            ecommerce: {
                titleStart: 'Sell Online in',
                titleHighlight: 'Jordan',
                titleEnd: 'Without Limits.',
                subtitleStart: 'Custom e-commerce stores designed for the Jordanian market. Accept',
                subtitleHighlight: 'Zain Cash, CliQ, and Visa',
                subtitleEnd: 'directly into your bank account. No heavy monthly fees.',
                cta: 'Get Your Store Quote',
                benefitsTitle: 'Why Custom Development?',
                benefits: [
                    { highlight: '✓', text: 'Own your data & customer list.' },
                    { highlight: '✓ Result:', text: '0% Transaction fees to platforms.' },
                    { highlight: '✓', text: 'Integrated Local Payments (Zain Cash / CliQ).' },
                    { highlight: '✓', text: 'Bilingual (Arabic & English) built-in.' }
                ],
                caseStudy: {
                    title: 'Case Study: BloB.JO',
                    desc: "We helped BloB.JO launch a custom Print-on-Demand store in Amman. Users can design products specifically on the site—something Shopify couldn't do easily.",
                    outcome: 'Outcome: Full operational flow in 3 weeks.'
                },
                faq: {
                    title: 'Frequently Asked Questions',
                    items: [
                        {
                            q: 'How much does an e-commerce website cost in Jordan?',
                            a: 'A custom, high-performance e-commerce store typically starts at 700 JOD depending on complexity. This is a one-time investment compared to paying monthly fees forever on other platforms.'
                        },
                        {
                            q: 'Can I accept Zain Cash and CliQ?',
                            a: 'Yes. We integrate local Jordanian payment methodologies so you can get paid instantly and securely without international settlement delays.'
                        },
                        {
                            q: 'Do you provide Arabic language support?',
                            a: 'Absolutely. All our e-commerce solutions are built with RTL (Right-to-Left) support from day one, ensuring a perfect experience for your Arab customers.'
                        }
                    ]
                }
            }
        },
        blog: {
            badge: 'The Lab',
            titleStart: 'WRITING &',
            titleHighlight: 'THOUGHTS',
            description: 'Behind the scenes of my projects and technical experiments.',
            readMore: 'Read Article',
            backToNotes: 'Back to Notes'
        },
        tools: {
            calculator: {
                title: 'Website Cost',
                titleHighlight: 'Calculator',
                description: 'Get an instant ballpark estimate for your next web project in Jordan. No email required to see the price.',
                howItWorks: {
                    title: 'How is this calculated?',
                    desc: 'Web development pricing in Jordan varies wildly. This calculator is based on high-quality, custom development using modern tech stacks (Next.js, React) rather than cheap WordPress templates.',
                    list: [
                        'Standard Design: Clean, professional, mobile-responsive.',
                        'Premium Design: Custom animations, unique layouts, and award-winning aesthetics.',
                        'Bilingual: Full RTL (Arabic) support and content management.'
                    ]
                },
                ui: {
                    estimatedInvestment: 'Estimated Investment',
                    disclaimer: '*This is a rough estimate based on standard requirements. Final project scope may vary.',
                    getQuote: 'Get Exact Quote',
                    reset: 'Reset Calculator'
                },
                options: [
                    {
                        id: 'pages',
                        title: 'Number of Pages',
                        choices: [
                            { label: 'One Page (Landing)', price: 300, desc: 'High conversion single page.' },
                            { label: 'Standard (5 Pages)', price: 500, desc: 'Home, About, Services, Contact, etc.' },
                            { label: 'Large (10+ Pages)', price: 800, desc: 'Complex content structure.' },
                        ]
                    },
                    {
                        id: 'design',
                        title: 'Design Style',
                        choices: [
                            { label: 'Clean & Standard', price: 0, desc: 'Professional, functional design.' },
                            { label: 'Premium & Animated', price: 250, desc: 'Award-winning visuals & logic.' },
                        ]
                    },
                    {
                        id: 'features',
                        title: 'Functionality',
                        multi: true,
                        choices: [
                            { id: 'cms', label: 'CMS (Manage Content)', price: 150 },
                            { id: 'bilingual', label: 'Bilingual (Ar/En)', price: 200 },
                            { id: 'ecommerce', label: 'E-commerce System', price: 400 },
                            { id: 'seo', label: 'Advanced SEO Setup', price: 100 },
                        ]
                    }
                ]
            }
        },
        legalPage: {
            privacy: {
                title: 'Privacy Policy',
                lastUpdated: 'Last Updated:',
                sections: [
                    {
                        title: '1. Introduction',
                        content: 'Welcome to MUBX. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.'
                    },
                    {
                        title: '2. Data We Collect',
                        content: 'We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:',
                        list: [
                            'Identity Data: includes first name, last name, username or similar identifier.',
                            'Contact Data: includes email address and telephone number (submitted via forms).',
                            'Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location.',
                            'Usage Data: includes information about how you use our website and services (e.g., analytics).'
                        ]
                    },
                    {
                        title: '3. How We Use Your Data',
                        content: 'We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:',
                        list: [
                            'To allow us to contact you regarding a project inquiry.',
                            'To improve our website, products/services, marketing of customer relationships and experiences.',
                            'To comply with a legal or regulatory obligation.'
                        ]
                    },
                    {
                        title: '4. Cookies & Analytics',
                        content: 'We use Vercel Analytics to understand how visitors interact with our website. This data is anonymized and does not directly identify you. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.'
                    },
                    {
                        title: '5. Contact Us',
                        content: 'If you have any questions about this privacy policy or our privacy practices, please contact us at:',
                        email: 'Email: mubxdev@proton.me',
                        location: 'Location: Amman, Jordan'
                    }
                ]
            },
            terms: {
                title: 'Terms of Service',
                lastUpdated: 'Last Updated:',
                sections: [
                    {
                        title: '1. Agreement to Terms',
                        content: 'These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and MUBX ("we," "us" or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).'
                    },
                    {
                        title: '2. Intellectual Property Rights',
                        content: 'Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.'
                    },
                    {
                        title: '3. Services & Payments',
                        content: 'Project Engagement: All development services are subject to a specific proposal or contract signed by both parties. Payments: We accept payments via Bank Transfer, Zain Cash, and CliQ. Refunds: Refunds are handled on a case-by-case basis as outlined in your specific Service Agreement. Generally, deposits are non-refundable once work has commenced.'
                    },
                    {
                        title: '4. Limitations of Liability',
                        content: 'In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our services, even if we have been advised of the possibility of such damages.'
                    },
                    {
                        title: '5. Governing Law',
                        content: 'These Terms shall be governed by and defined following the laws of The Hashemite Kingdom of Jordan. MUBX and yourself irrevocably consent that the courts of Jordan shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.'
                    },
                    {
                        title: '6. Contact Us',
                        content: 'To resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:',
                        email: 'Email: mubxdev@proton.me'
                    }
                ]
            }
        },
        statsStrip: {
            members: 'Members Managed – HTU Club Portal',
            leads: 'Leads – Vynex Media Landing Page',
            sales: 'Sales Boost – BloB POD Store'
        },
        skills: {
            fullStack: 'Full Stack Architecture',
            nextReact: 'Next.js & React Expertise',
            dbDesign: 'Database Design',
            auth: 'Secure Auth Systems',
            seo: 'High-Performance SEO',
            amman: 'Amman Based',
            uiux: 'UI/UX Engineering',
            ecommerce: 'E-commerce Solutions',
            scalability: 'System Scalability',
            webApps: 'Custom Web Apps',
            consulting: 'Technical Consulting',
            mobile: 'Mobile-First Design',
            api: 'API Development'
        },
        tech: {
            title: 'Technical',
            titleHighlight: 'Expertise',
            subtitle: 'Modern tools for high-performance systems.',
            categories: {
                frontend: 'Frontend & UI',
                backend: 'Backend & Database',
                tools: 'Tools & Deployment'
            }
        }
    },
    ar: {
        nav: {
            services: 'الخدمات',
            projects: 'المشاريع',
            lab: 'المختبر',
            testimonials: 'أراء العملاء',
            contact: 'تواصل معي',
            resume: 'تحميل السيرة الذاتية',
            estimate: 'اطلب عرض سعر',
            talk: "لنتحدث",
            home: 'الرئيسية',
            about: 'من نحن',
            work: 'أعمالي',
            articles: 'المقالات',
            costCalc: 'حاسبة التكلفة',
            freeTools: 'أدوات مجانية',
            arabicVer: 'English Version',
        },
        hero: {
            badge: 'مطور ويب متكامل وطالب علوم حاسوب',
            titleStart: 'بناء أنظمة ويب',
            titleHighlight: 'سريعة وآمنة',
            titleEnd: 'للشركات الطموحة.',
            description: 'مطور ويب متكامل وطالب علوم حاسوب في عمان، الأردن. أركز على الأداء العالي، الأمان، وهندسة البرمجيات النظيفة.',
            ctaPrimary: 'احجز مكالمة مجانية',
            ctaSecondary: 'شاهد أعمالي',
            imageAlt: 'عمر مبيضين - مطور ويب متكامل',
        },
        services: {
            title: 'الخدمات و',
            titleHighlight: 'الأسعار',
            subtitle: 'باقات واضحة. بدون رسوم مخفية. تسليم في الموعد.',
            popular: 'الأكثر طلباً',
            packages: {
                linkBio: {
                    label: 'أساسي',
                    title: 'شجرة روابط',
                    desc: 'صفحة روابط مخصصة لجمع كل حساباتك. أفضل وأسرع من Linktree.',
                    timeline: '2-3 أيام',
                    deliverables: 'شامل الاستضافة',
                    details: ['تصميم مخصص', 'أيقونات التواصل', 'نموذج تواصل', 'تحميل سريع'],
                    price: '70 دينار'
                },
                landing: {
                    label: 'بداية',
                    title: 'صفحة هبوط',
                    desc: 'صفحة واحدة عالية التحويل. ممتازة للإعلانات، الفعاليات، أو إطلاق منتج.',
                    timeline: '5-7 أيام',
                    deliverables: 'صفحة واحدة',
                    details: ['كتابة محتوى', 'تحسين SEO', 'متجاوب للجوال', 'تحليلات زوار'],
                    price: '300 دينار'
                },
                business: {
                    label: 'نمو',
                    title: 'موقع شركات',
                    desc: 'موقع متعدد الصفحات لبناء الثقة وعرض خدماتك باحترافية.',
                    timeline: '2 أسبوع',
                    deliverables: '5 صفحات',
                    details: ['نظام إدارة محتوى', 'لغتين (عربي/إنجليزي)', 'SEO متقدم', 'إعداد مدونة'],
                    price: '500 دينار'
                },
                system: {
                    label: 'احترافي',
                    title: 'نظام مخصص',
                    desc: 'وظائف مخصصة. متجر إلكتروني، نظام حجز، أو تطبيق ويب،',
                    timeline: '3+ أسابيع',
                    deliverables: 'حسب الطلب',
                    details: ['تصميم قواعد بيانات', 'تسجيل دخول', 'دفع إلكتروني', 'لوحة تحكم'],
                    price: '1000+ دينار'
                }
            },
            howItWorks: {
                title: 'كيف نعمل',
                step1: {
                    title: 'مكالمة استكشافية مجانية',
                    desc: 'نتحدث لمدة 20 دقيقة لفهم أهدافك. لا ضغوط بيع، فقط وضوح.'
                },
                step2: {
                    title: 'عرض خلال 24 ساعة',
                    desc: 'تتلقى خطة واضحة مع الموعد النهائي والسعر. 50% مقدم، 50% عند الإطلاق، يشمل جولتين من التعديلات.'
                },
                step3: {
                    title: 'البناء والإطلاق',
                    desc: 'أقوم ببناء نظامك، تراجعه، وننطلق مباشرة. الأمر بهذه البساطة.'
                }
            },
            cta: 'اطلب تقدير للمشروع'
        },
        footer: {
            brandDesc: 'تم التطوير بواسطة عمر مبيضين — مطور ويب وطالب علوم حاسوب في عمان، الأردن. أصمم أنظمة ويب آمنة وعالية الأداء.',
            navigation: 'التنقل',
            payments: 'وسائل الدفع المدعومة',
            connect: 'تواصل معنا',
            selectedProjects: 'مشاريع مختارة',
            rights: 'جميع الحقوق محفوظة.',
            designed: 'صُمم بدقة في عمان.',
            bookCall: 'احجز مكالمة',
            legal: {
                privacy: 'سياسة الخصوصية',
                terms: 'شروط الخدمة'
            }
        },

        about: {
            titleStart: 'مطور ويب في',
            titleHighlight: 'عمان',
            name: 'عمر مبيضين',
            descriptionStart: "أنا",
            descriptionMiddle: "، طالب علوم حاسوب ومطور ويب مقيم في الأردن.",
            descriptionEnd: "على عكس مستخدمي القوالب الجاهزة، أنا أهندس",
            performance: "الأداء",
            descriptionContext: ". خلفيتي الأكاديمية تسمح لي ببناء أنظمة آمنة وقواعد بيانات تحمي بيانات عملائك.",
            quoteStart: "معظم صفحاتي تفتح في أقل من",
            quoteHighlight: "1.5 ثانية على 4G",
            quoteEnd: "في شبكات الأردن.",
            whyChoose: {
                title: 'لماذا يختارني العملاء',
                reason1: {
                    title: 'السرعة والأداء',
                    desc: 'صفحات سريعة جداً، مما يحسن ترتيبك في محركات البحث.'
                },
                reason2: {
                    title: 'خبرة الدفع المحلي',
                    desc: 'خبرة رسمية في ربط بوابات الدفع مثل زين كاش و كليك.'
                },
                reason3: {
                    title: 'الموثوقية',
                    desc: "نسبة إنجاز مشاريع 100%. التزام كامل بالمواعيد."
                }
            },
            techStack: 'التقنيات المستخدمة',
            stats: {
                dev: 'مطور ويب',
                secure: 'آمن وسريع',
                location: 'مقيم في عمان',
                design: 'تصميم حديث'
            }
        },
        contact: {
            connect: "تواصل معي",
            titleStart: "جاهز للبناء مع",
            titleHighlight: "MUBX",
            desc1: "جاهز للتوسع؟ استقبل حالياً مشاريع جديدة للربع الأول.",
            desc2: "دعنا نناقش كيف يمكننا هندسة نمو مشروعك.",
            desc3: "سواء كنت بحاجة لتدقيق شامل، إعادة تصميم قاعدة بيانات، أو بناء منتج كامل، أنا جاهز.",
            availability: {
                title: "التوافر والرد",
                status: "متاح لمشروعين جديدين (Q1)",
                response: "أقرأ كل رسالة بنفسي وأرد خلال",
                responseTime: "24 ساعة",
                context: "الأولوية حالياً لمشاريع المتاجر الالكترونية والأنظمة.",
                urgent: "تحتاج رد أسرع؟",
                whatsapp: "واتساب: الأفضل للملاحظات الصوتية",
                whatsappUrl: "https://wa.me/962791234567",
                whatsappNumber: "+962 79 123 4567"
            },
            email: "البريد الالكتروني",
            location: "الموقع",
            locationVal: "عمان، الأردن (متاح للعمل عن بعد)",
            form: {
                badge: "مشاريع تبدأ من 200 دينار",
                title: "أخبرني عن مشروعك",
                fastReplies: "ردود سريعة",
                security: "أمان أولاً",
                arabicSupport: "دعم مخصص",
                goal: "الهدف",
                goalOptions: ['موقع جديد', 'إعادة تصميم', 'متجر إلكتروني', 'تطبيق مخصص'],
                budget: "الميزانية",
                budgetOptions: ['200 - 500 دينار', '500 - 1000 دينار', '1000 - 2500 دينار', '2500+ دينار'],
                deadline: "الموعد النهائي",
                deadlineOptions: ['بأسرع وقت', 'شهر واحد', 'مرن'],
                name: "الاسم الكامل",
                namePlaceholder: "الاسم...",
                business: "اسم الشركة / المشروع",
                businessPlaceholder: "اسم الشركة",
                email: "بريدك الالكتروني",
                emailPlaceholder: "name@company.com",
                details: "تفاصيل المشروع",
                detailsPlaceholder: "أحتاج صفحة هبوط لـ...",
                submit: "إرسال الاستفسار",
                sending: "جاري الإرسال...",
                footer: "إذا لم نكن مناسبين لبعضنا، سأرد عليك باقتراحات أو توجيه خلال 24 ساعة.",
                success: "شكراً لرسالتك! سأعود إليك خلال 24 ساعة.",
                error: "عذراً! حدثت مشكلة في التقديم. يرجى المحاولة مرة أخرى أو مراسلتي عبر واتساب."
            },
            typical: "مشاريع نموذجية:",
            typicalList: "صفحات هبوط، متاجر الكترونية، وأنظمة ويب",
            typicalContext: "للشركات الناشئة في عمان وحول العالم.",
            faq: {
                title: "أسئلة شائعة",
                q1: {
                    q: "هل تعمل مع مؤسسين غير تقنيين؟",
                    a: "نعم! أشرح كل شيء بلغة بسيطة. أتولى الاستضافة والنطاق والإعداد التقني لتركز أنت على عملك."
                },
                q2: {
                    q: "هل توقع عقود؟",
                    a: "بالتأكيد. يبدأ كل مشروع بعقد واضح يحدد التواريخ والمخرجات والتكاليف. لا مفاجآت."
                },
                q3: {
                    q: "هل توفر دعم بعد الإطلاق؟",
                    a: "نعم. أقدم فترة دعم لمدة شهر للأخطاء البرمجية، ويمكن مناقشة باقات صيانة للتحديثات المستمرة."
                }
            }
        },
        reviews: {
            title: 'ماذا يقول',
            titleHighlight: 'العملاء',
            list: [
                {
                    client: 'محمود حسام',
                    role: 'مدير وكالة @ Vynex Media',
                    project: 'صفحة هبوط للوكالة',
                    year: 'يناير 2024',
                    outcome: 'Vynex Media — زيادة 20% في العملاء',
                    text: "ساعدنا عمر في الانطلاق بشكل أسرع ومظهر أكثر احترافية من خلال بناء صفحة هبوط عالية الأداء. كان موثوقاً وسلم العمل في الوقت المحدد.",
                    linkLabel: "عرض على انستجرام"
                },
                {
                    client: 'علي حياصات',
                    role: 'مدير النادي @ HTU Martial Arts',
                    project: 'نظام إدارة النادي',
                    year: 'فبراير 2025',
                    outcome: 'بوابة النادي — إدارة 100+ طالب',
                    text: "كانت عمليتنا القديمة مع الأعضاء فوضوية؛ بعد نظام عمر، أصبحت إدارة الحجوزات والمدفوعات سلسة للغاية. أوصي به لأي نادٍ يحتاج إلى أنظمة ويب قوية.",
                    linkLabel: "زيارة الموقع"
                },
                {
                    client: 'حسن عماد',
                    role: 'مؤسس @ BloB.JO',
                    project: 'متجر إلكتروني',
                    year: 'يناير 2025',
                    outcome: 'متجر BloB — زيادة 200% في المبيعات',
                    text: "يمكن للعملاء الآن استعراض التصاميم وتتبع الطلبات عبر الإنترنت، مما حول التواصل اليدوي إلى تدفق رقمي سلس. المتجر الذي بناه غيّر قواعد اللعبة بالنسبة لنا.",
                    linkLabel: "زيارة المتجر"
                }
            ]
        },
        projects: {
            titleStart: 'أبرز',
            titleHighlight: 'المشاريع',
            readCaseStudy: 'اقرأ الحالة الدراسية',
            visitLive: 'زيارة الموقع'
        },
        servicesPage: {
            ecommerce: {
                titleStart: 'بع منتجاتك اونلاين في',
                titleHighlight: 'الأردن',
                titleEnd: 'بدون حدود.',
                subtitleStart: 'متاجر إلكترونية مخصصة للسوق الأردني. اقبل',
                subtitleHighlight: 'زين كاش، كليك، وفيزا',
                subtitleEnd: 'مباشرة في حسابك البنكي. بدون رسوم شهرية باهظة.',
                cta: 'احصل على عرض لمتجرك',
                benefitsTitle: 'لماذا التطوير المخصص؟',
                benefits: [
                    { highlight: '✓', text: 'امتلك بياناتك وقائمة عملائك.' },
                    { highlight: '✓ النتيجة:', text: '0% رسوم معاملات للمنصات.' },
                    { highlight: '✓', text: 'دفع محلي متكامل (زين كاش / كليك).' },
                    { highlight: '✓', text: 'ثنائي اللغة (عربي وإنجليزي) مدمج.' }
                ],
                caseStudy: {
                    title: 'دراسة حالة: BloB.JO',
                    desc: "ساعدنا BloB.JO في إطلاق متجر طباعة حسب الطلب مخصص في عمان. يمكن للمستخدمين تصميم المنتجات مباشرة على الموقع - وهو أمر لم يكن Shopify قادراً على فعله بسهولة.",
                    outcome: 'النتيجة: تشغيل كامل خلال 3 أسابيع.'
                },
                faq: {
                    title: 'أسئلة شائعة',
                    items: [
                        {
                            q: 'كم تكلفة إنشاء متجر إلكتروني في الأردن؟',
                            a: 'يبدأ المتجر الإلكتروني المخصص عالي الأداء عادةً من 700 دينار أردني حسب التعقيد. هذا استثمار لمرة واحدة مقارنة بدفع رسوم شهرية للأبد على منصات أخرى.'
                        },
                        {
                            q: 'هل يمكنني قبول زين كاش وكليك؟',
                            a: 'نعم. نقوم بدمج طرق الدفع المحلية الأردنية لتتمكن من استلام أموالك فوراً وبأمان دون تأخيرات التسوية الدولية.'
                        },
                        {
                            q: 'هل توفرون دعم اللغة العربية؟',
                            a: 'بالتأكيد. جميع حلولنا للتجارة الإلكترونية مبنية بدعم كامل للغة العربية (RTL) من اليوم الأول، لضمان تجربة مثالية لعملائك العرب.'
                        }
                    ]
                }
            }
        },
        blog: {
            badge: 'المختبر',
            titleStart: 'مقالات و',
            titleHighlight: 'أفكار',
            description: 'خلف الكواليس لمشاريعي وتجاربي التقنية.',
            readMore: 'اقرأ المقال',
            backToNotes: 'عودة للمقالات'
        },
        tools: {
            calculator: {
                title: 'حاسبة تكلفة',
                titleHighlight: 'الموقع',
                description: 'احصل على تقدير فوري لمشروع الويب القادم في الأردن. لا يلزم بريد إلكتروني لرؤية السعر.',
                howItWorks: {
                    title: 'كيف يتم الحساب؟',
                    desc: 'أسعار تطوير الويب في الأردن تتفاوت بشكل كبير. تعتمد هذه الحاسبة على تطوير مخصص عالي الجودة باستخدام تقنيات حديثة (Next.js, React) بدلاً من قوالب ووردبريس الرخيصة.',
                    list: [
                        'تصميم قياسي: نظيف، احترافي، ومتجاوب مع الجوال.',
                        'تصميم متميز: رسوم متحركة مخصصة، تخطيطات فريدة، وجماليات حائزة على جوائز.',
                        'ثنائي اللغة: دعم كامل للغة العربية (RTL) وإدارة المحتوى.'
                    ]
                },
                ui: {
                    estimatedInvestment: 'الاستثمار المقدر',
                    disclaimer: '*هذا تقدير تقريبي بناءً على المتطلبات القياسية. قد يختلف نطاق المشروع النهائي.',
                    getQuote: 'احصل على عرض دقيق',
                    reset: 'تصفير الحاسبة'
                },
                options: [
                    {
                        id: 'pages',
                        title: 'عدد الصفحات',
                        choices: [
                            { label: 'صفحة واحدة (هبوط)', price: 300, desc: 'تحويل عالي لصفحة واحدة.' },
                            { label: 'موقع قياسي (5 صفحات)', price: 500, desc: 'الرئيسية، من نحن، الخدمات، اتصل بنا، إلخ.' },
                            { label: 'موقع كبير (10+ صفحات)', price: 800, desc: 'هيكل محتوى معقد.' },
                        ]
                    },
                    {
                        id: 'design',
                        title: 'أسلوب التصميم',
                        choices: [
                            { label: 'نظيف وقياسي', price: 0, desc: 'تصميم احترافي وعملي.' },
                            { label: 'متميز ومتحرك', price: 250, desc: 'مرئيات ومنطق حائز على جوائز.' },
                        ]
                    },
                    {
                        id: 'features',
                        title: 'الوظائف والميزات',
                        multi: true,
                        choices: [
                            { id: 'cms', label: 'نظام إدارة محتوى (CMS)', price: 150 },
                            { id: 'bilingual', label: 'ثنائي اللغة (عربي/إنجليزي)', price: 200 },
                            { id: 'ecommerce', label: 'نظام تجارة إلكترونية', price: 400 },
                            { id: 'seo', label: 'إعداد SEO متقدم', price: 100 },
                        ]
                    }
                ]
            }
        },
        legalPage: {
            privacy: {
                title: 'سياسة الخصوصية',
                lastUpdated: 'آخر تحديث:',
                sections: [
                    {
                        title: '1. مقدمة',
                        content: 'مرحباً بك في MUBX. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية اعتنائنا ببياناتك الشخصية عند زيارتك لموقعنا وتخبرك عن حقوق الخصوصية الخاصة بك وكيف يحميك القانون.'
                    },
                    {
                        title: '2. البيانات التي نجمعها',
                        content: 'قد نقوم بجمع واستخدام وتخزين ونقل أنواع مختلفة من البيانات الشخصية عنك والتي قمنا بتجميعها معاً كما يلي:',
                        list: [
                            'بيانات الهوية: الاسم الأول، اسم العائلة، اسم المستخدم أو معرف مشابه.',
                            'بيانات الاتصال: العنوان البريدي، عنوان البريد الإلكتروني ورقم الهاتف.',
                            'البيانات التقنية: عنوان بروتوكول الإنترنت (IP)، نوع المتصفح وإصداره، المنطقة الزمنية والموقع.',
                            'بيانات الاستخدام: معلومات حول كيفية استخدامك لموقعنا وخدماتنا.'
                        ]
                    },
                    {
                        title: '3. كيف نستخدم بياناتك',
                        content: 'سنستخدم بياناتك الشخصية فقط عندما يسمح القانون لنا بذلك. الأكثر شيوعاً، سنستخدم بياناتك الشخصية في الظروف التالية:',
                        list: [
                            'للسماح لنا بالاتصال بك بشأن استفسار مشروع.',
                            'لتحسين موقعنا ومنتجاتنا/خدماتنا وتسويقنا.',
                            'للامتثال لالتزام قانوني أو تنظيمي.'
                        ]
                    },
                    {
                        title: '4. ملفات تعريف الارتباط والتحليلات',
                        content: 'نستخدم تحليلات Vercel لفهم كيفية تفاعل الزوار مع موقعنا. هذه البيانات مجهولة المصدر ولا تحدد هويتك مباشرة. يمكنك ضبط متصفحك لرفض كل أو بعض ملفات تعريف الارتباط، أو لتنبيهك عندما تقوم مواقع الويب بتعيين أو الوصول إلى ملفات تعريف الارتباط.'
                    },
                    {
                        title: '5. اتصل بنا',
                        content: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو ممارسات الخصوصية لدينا، يرجى الاتصال بنا عبر:',
                        email: 'البريد: mubxdev@proton.me',
                        location: 'الموقع: عمان، الأردن'
                    }
                ]
            },
            terms: {
                title: 'شروط الخدمة',
                lastUpdated: 'آخر تحديث:',
                sections: [
                    {
                        title: '1. الموافقة على الشروط',
                        content: 'تشكل شروط الخدمة هذه اتفاقية ملزمة قانوناً بينك، سواء شخصياً أو نيابة عن كيان ("أنت") و MUBX ("نحن")، فيما يتعلق بوصولك واستخدامك للموقع.'
                    },
                    {
                        title: '2. حقوق الملكية الفكرية',
                        content: 'ما لم يذكر خلاف ذلك، الموقع هو ملكيتنا الخاصة وجميع التعليمات البرمجية وقواعد البيانات والوظائف والبرمجيات وتصميمات الموقع والنصوص والصور والرسومات على الموقع ("المحتوى") والعلامات التجارية والشعارات مملوكة لنا أو مرخصة لنا، ومحمية بموجب قوانين حقوق النشر.'
                    },
                    {
                        title: '3. الخدمات والدفعات',
                        content: 'المشاركة في المشروع: تخضع جميع خدمات التطوير لاقتراح محدد أو عقد موقع من قبل الطرفين. الدفعات: نقبل الدفع عبر التحويل البنكي، زين كاش، وكليك. الاسترداد: يتم التعامل مع الاسترداد على أساس كل حالة على حدة كما هو موضح في اتفاقية الخدمة الخاصة بك. بشكل عام، الودائع غير قابلة للاسترداد بمجرد بدء العمل.'
                    },
                    {
                        title: '4. حدود المسؤولية',
                        content: 'لن نكون بأي حال من الأحوال نحن أو مديرينا أو موظفينا أو وكلائنا مسؤولين تجاهك أو تجاه أي طرف ثالث عن أي أضرار مباشرة أو غير مباشرة أو تبعية أو نموذجية أو عرضية أو خاصة أو عقابية، بما في ذلك خسارة الأرباح أو الإيرادات المفقودة أو فقدان البيانات أو غيرها من الأضرار الناشئة عن استخدامك للموقع أو خدماتنا، حتى لو تم إخطارنا باحتمالية حدوث مثل هذه الأضرار.'
                    },
                    {
                        title: '5. القانون الحاكم',
                        content: 'تخضع هذه الشروط وتفسر وفقاً لقوانين المملكة الأردنية الهاشمية. توافق MUBX وأنت بشكل لا رجعة فيه على أن محاكم الأردن لها الاختصاص الحصري لحل أي نزاع قد ينشأ فيما يتعلق بهذه الشروط.'
                    },
                    {
                        title: '6. اتصل بنا',
                        content: 'لحل شكوى بخصوص الموقع أو لتلقي مزيد من المعلومات حول استخدام الموقع، يرجى الاتصال بنا عبر:',
                        email: 'البريد: mubxdev@proton.me'
                    }
                ]
            }
        },
        statsStrip: {
            members: 'أعضاء تم إدارتهم – بوابة نادي HTU',
            leads: 'عملاء محتملين – صفحة هبوط Vynex Media',
            sales: 'زيادة المبيعات – متجر BloB'
        },
        skills: {
            fullStack: 'هندسة الويب المتكاملة',
            nextReact: 'خبراء Next.js & React',
            dbDesign: 'تصميم قواعد البيانات',
            auth: 'أنظمة مصادقة آمنة',
            seo: 'SEO عالي الأداء',
            amman: 'مقرنا عمان',
            uiux: 'هندسة تجربة المستخدم',
            ecommerce: 'حلول التجارة الإلكترونية',
            scalability: 'قابلية التوسع للنظام',
            webApps: 'تطبيقات ويب مخصصة',
            consulting: 'استشارات تقنية',
            mobile: 'تصميم للجوال أولاً',
            api: 'تطوير واجهات برمجة (API)'
        },
        tech: {
            title: 'الخبرة',
            titleHighlight: 'التقنية',
            subtitle: 'أدوات حديثة لبناء أنظمة عالية الأداء.',
            categories: {
                frontend: 'الواجهة الأمامية وتجربة المستخدم',
                backend: 'الأنظمة الخلفية وقواعد البيانات',
                tools: 'الأدوات والبنية التحتية'
            }
        }
    }
};
