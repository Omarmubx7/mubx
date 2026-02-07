export type Locale = 'en' | 'ar';

export const dictionary = {
    en: {
        nav: {
            services: 'Services',
            projects: 'Projects',
            lab: 'From the Lab',
            testimonials: 'Testimonials',
            contact: 'Contact',
            resume: 'Resume',
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
            badge: 'Full Stack Developer based in Amman, Jordan',
            titleStart: 'BUILDING DIGITAL',
            titleHighlight: 'EXPERIENCES',
            titleEnd: 'THAT MATTER',
            description: 'I help businesses and startups build high-performance web systems. From simple landing pages to complex SaaS platforms.',
            ctaPrimary: 'Book a FREE Call',
            ctaSecondary: 'View My Work',
        },
        services: {
            title: 'SERVICES &',
            titleHighlight: 'PRICING',
            subtitle: 'Clear packages. No hidden fees. Delivered on time.',
            popular: 'Most Popular',
            packages: {
                linkBio: {
                    label: 'Link Bio',
                    title: 'CUSTOM LINK TREE',
                    desc: 'Advanced designing and custom domain for your social media presence.',
                    timeline: 'Timeline: 2–3 Days',
                    deliverables: 'Includes: Custom Domain Setup, Advanced Design, Unlimited Links, Analytics.',
                    details: ['Custom Domain', 'Advanced Design', 'Social Integration', 'Analytics'],
                    price: '50 JD'
                },
                landing: {
                    label: 'Quick Launch',
                    title: 'LANDING PAGE',
                    desc: 'High-conversion, lightning-fast single page designed to turn ads & visitors into leads.',
                    timeline: 'Timeline: 5–7 Days',
                    deliverables: 'Includes: Copywriting, Speed Optimization (90+), Basic Analytics, Hosting Setup.',
                    details: ['Responsive Design', 'Speed Optimization', 'SEO Basics', 'Analytics Setup'],
                    price: 'From 200 JD'
                },
                business: {
                    label: 'Growth',
                    title: 'BUSINESS WEBSITE',
                    desc: 'A robust multi-page platform to establish authority. Includes a CMS so you can edit content.',
                    timeline: 'Timeline: 1–2 Weeks',
                    deliverables: 'Includes: 5-Page Custom Design, CMS Integration, Advanced SEO, Contact Forms.',
                    details: ['CMS Integration', 'Advanced SEO', 'Blog / News Section', 'Contact Forms', 'Free Hosting & Domain'],
                    price: 'From 350 JD'
                },
                system: {
                    label: 'Scale',
                    title: 'CUSTOM WEB SYSTEM',
                    desc: 'E-commerce or SaaS. Scalable architecture with secure local payments (Zain Cash/CliQ).',
                    timeline: 'Timeline: 2–3 Weeks',
                    deliverables: 'Includes: Custom DB, Secure Auth, Payment Gateway, Admin Dashboard.',
                    details: ['Product Catalog', 'Shopping Cart', 'Zain Cash / CliQ', 'Order Management', 'Admin Dashboard'],
                    price: 'From 550 JD'
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
                    desc: 'Pages load in under 1.5s, improving extensive Google ranking.'
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
                whatsapp: "WhatsApp: Best for quick voice notes"
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
                budget: "Budget",
                deadline: "Deadline",
                email: "Your Email",
                details: "Project Details",
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
                    year: '2024',
                    outcome: 'Vynex Media — +20% leads in first month',
                    text: "Omar helped us launch faster and look more professional by building a high-performance landing page. He was reliable, proactive, and delivered on time."
                },
                {
                    client: 'Ali Hiasat',
                    role: 'Club Manager @ HTU Martial Arts',
                    project: 'Club Management System',
                    year: '2025',
                    outcome: 'Club Portal — Managed 100+ students',
                    text: "Our old process for members was messy; after Omar’s system, managing bookings and payments became seamless. I’d recommend him to any club that needs solid web systems."
                },
                {
                    client: 'Hassan Emad',
                    role: 'Founder @ BloB.JO',
                    project: 'E-commerce Store',
                    year: '2025',
                    outcome: 'BloB Store — 200% online sales boost',
                    text: "Customers can now explore designs and track orders online, turning what used to be manual communication into a smoother digital flow. The print-on-demand store he built is a game changer."
                }
            ]
        },
    },
    ar: {
        nav: {
            services: 'الخدمات',
            projects: 'المشاريع',
            lab: 'المختبر',
            testimonials: 'أراء العملاء',
            contact: 'تواصل معي',
            resume: 'السيرة الذاتية',
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
            badge: 'مطور مواقع متكامل في عمان، الأردن',
            titleStart: 'بناء تجارب رقمية',
            titleHighlight: 'استثنائية',
            titleEnd: 'ذات قيمة',
            description: 'أساعد الشركات والناشئة في بناء أنظمة ويب عالية الأداء. من صفحات الهبوط البسيطة إلى منصات SaaS المعقدة.',
            ctaPrimary: 'احجز مكالمة مجانية',
            ctaSecondary: 'شاهد أعمالي',
        },
        services: {
            title: 'الخدمات و',
            titleHighlight: 'الأسعار',
            subtitle: 'باقات واضحة. بدون رسوم مخفية. تسليم في الموعد.',
            popular: 'الأكثر طلباً',
            packages: {
                linkBio: {
                    label: 'رابط البايو',
                    title: 'شجرة روابط مخصصة',
                    desc: 'تصميم متقدم ونطاق مخصص لتعزيز تواجدك على وسائل التواصل الاجتماعي.',
                    timeline: 'المدة: 2–3 أيام',
                    deliverables: 'يشمل: إعداد النطاق، تصميم متقدم، روابط غير محدودة، تحليلات.',
                    details: ['نطاق مخصص', 'تصميم متقدم', 'ربط سوشيال ميديا', 'تحليلات'],
                    price: '50 دينار'
                },
                landing: {
                    label: 'انطلاق سريع',
                    title: 'صفحة هبوط',
                    desc: 'صفحة واحدة عالية التحويل وسريعة، مصممة لتحويل الزيارات والإعلانات إلى عملاء محتملين.',
                    timeline: 'المدة: 5–7 أيام',
                    deliverables: 'يشمل: كتابة المحتوى، تحسين السرعة (90+)، تحليلات أساسية، استضافة.',
                    details: ['تصميم متجاوب', 'تحسين السرعة', 'تحسين محركات البحث', 'إعداد التحليلات'],
                    price: 'من 200 دينار'
                },
                business: {
                    label: 'نمو',
                    title: 'موقع شركات',
                    desc: 'منصة قوية متعددة الصفحات لترسيخ الهوية. تشمل نظام إدارة محتوى (CMS) لتعديل النصوص والمقالات.',
                    timeline: 'المدة: 1–2 أسبوع',
                    deliverables: 'يشمل: تصميم 5 صفحات، نظام إدارة، تحسين SEO متقدم، نماذج تواصل.',
                    details: ['نظام إدارة محتوى', 'SEO متقدم', 'مدونة / أخبار', 'نماذج تواصل', 'استضافة ونطاق مجاني'],
                    price: 'من 350 دينار'
                },
                system: {
                    label: 'توسع',
                    title: 'نظام ويب مخصص',
                    desc: 'متجر الكتروني أو SaaS. بمارية قابلة للتوسع مع دفع محلي آمن (Zain Cash/CliQ).',
                    timeline: 'المدة: 2–3 أسابيع',
                    deliverables: 'يشمل: قاعدة بيانات مخصصة، مصادقة آمنة، بوابة دفع، لوحة تحكم.',
                    details: ['كتالوج منتجات', 'سلة تسوق', 'Zain Cash / CliQ', 'إدارة الطلبات', 'لوحة تحكم'],
                    price: 'من 550 دينار'
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
            brandDesc: 'تم التطوير بواسطة عمر عبيدات — مطور ويب وطالب علوم حاسوب في عمان، الأردن. أصمم أنظمة ويب آمنة وعالية الأداء.',
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
            name: 'عمر عبيدات',
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
                    desc: 'صفحات سريعة جداً، مما يحسن ترتيبك في جوجل.'
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
                whatsapp: "واتساب: الأفضل للملاحظات الصوتية السريعة"
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
                budget: "الميزانية",
                deadline: "الموعد النهائي",
                email: "بريدك الالكتروني",
                details: "تفاصيل المشروع",
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
                    role: 'قائد الوكالة @ Vynex Media',
                    project: 'صفحة هبوط للوكالة',
                    year: '2024',
                    outcome: 'Vynex Media — زيادة 20% في العملاء',
                    text: "ساعدنا عمر في الانطلاق بشكل أسرع والمظهر بشكل أكثر احترافية من خلال بناء صفحة هبوط عالية الأداء. كان موثوقاً ومبادراً وسلم العمل في الوقت المحدد."
                },
                {
                    client: 'علي حياصات',
                    role: 'مدير النادي @ HTU Martial Arts',
                    project: 'نظام إدارة النادي',
                    year: '2025',
                    outcome: 'بوابة النادي — إدارة 100+ طالب',
                    text: "كانت عمليتنا القديمة فوضوية؛ بعد نظام عمر، أصبحت إدارة الحجوزات والدفعات سلسة للغاية. أنصح به لأي نادٍ يحتاج أنظمة ويب قوية."
                },
                {
                    client: 'حسن عماد',
                    role: 'المؤسس @ BloB.JO',
                    project: 'متجر الكتروني',
                    year: '2025',
                    outcome: 'متجر BloB — زيادة 200% في المبيعات',
                    text: "يمكن للعملاء الآن استكشاف التصاميم وتتبع الطلبات اونلاين، مما حول التواصل اليدوي إلى تدفق رقمي سلس. المتجر الذي بناه غيّر قواعد اللعبة."
                }
            ]
        },
    }
};
