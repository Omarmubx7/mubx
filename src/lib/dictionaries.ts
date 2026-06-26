export type Locale = 'en';

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

            tools: 'Tools',
            freeTools: 'Free Tools (Open Source)',
            arabicVer: 'Arabic Version (عربي)', // Kept for legacy if needed, but toggle replaces this
            bookCall: 'Book a Call',
            links: 'Link Tree',
            backToHome: 'Back to Home',
            myServices: 'My Services',
        },
        hero: {
            badge: 'Full-Stack Developer in Amman, Jordan',
            titleStart: "Hi, my name is Omar",
            titleHighlight: "I'm a full-stack developer",
            titleEnd: "I build high-performance web systems and AI-powered products.",
            description: "Welcome to my portfolio. I engineer custom web systems, high-speed interfaces, and secure local integrations for businesses in Jordan and beyond.",
            ctaPrimary: 'Book a 15-min call',
            ctaSecondary: 'View selected work',
            imageAlt: 'Omar Mubaidin - Full-Stack Developer in Amman, Jordan',
        },
        trustedBy: {
            line: 'Helping ambitious Jordanian brands scale through technical excellence',
        },
        services: {
            title: 'WEB DEVELOPMENT',
            titleHighlight: 'SERVICES & PRICING',
            subtitle: 'Transparent pricing for web development, e-commerce, and custom web systems in Jordan.',
            popular: 'Most Popular',
            packages: {
                linkBio: {
                    label: 'Basic',
                    title: 'Link Tree',
                    desc: 'A custom, branded link page to aggregate your social media. Better than Linktree.',
                    timeline: '1-2 Days',
                    deliverables: 'Hosting Included',
                    details: ['Custom Design', 'Social Icons', 'Contact Form', 'Fast Loading'],
                    price: 'start at 49.99 JD',
                    cta: 'Start Link Tree Project'
                },
                landing: {
                    label: 'Starter',
                    title: 'Landing Page',
                    desc: 'High-conversion single page site. Perfect for ads, events, or product launches.',
                    timeline: '5-7 Days',
                    deliverables: '1-3 Sections',
                    details: ['Copywriting', 'SEO Basics', 'Mobile Ready', 'Analytics'],
                    price: 'start at 149.99 JD',
                    cta: 'Plan My Landing Page'
                },
                business: {
                    label: 'Growth',
                    title: 'Business Website',
                    desc: 'Complete multi-page website to establish authority and trust.',
                    timeline: '2 Weeks',
                    deliverables: '5 Pages',
                    details: ['CMS (Manage Content)', 'Bilingual (Ar/En)', 'SEO Advanced', 'Blog Setup'],
                    price: 'start at 299.99 JD',
                    cta: 'Build My Business Website'
                },
                system: {
                    label: 'Pro',
                    title: 'Web System',
                    desc: 'Custom functionality. E-commerce, booking systems, or SaaS MVPs.',
                    timeline: '3+ Weeks',
                    deliverables: 'Custom Scope',
                    details: ['Database Design', 'User Auth', 'Payment Integration', 'Admin Dashboard'],
                    price: 'start at 499.99 JD',
                    cta: 'Architect My Custom System'
                }
            },
            howItWorks: {
                title: 'How It Works',
                step1: {
                    title: 'Free Discovery Call',
                    desc: 'I\'ll chat with you for 20 mins to understand your goals. No sales pressure, just clarity.'
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
            builtWith: 'Loosely designed in Figma, coded in VS Code. Built with Next.js, React 19, and Tailwind CSS. Deployed on Vercel.',
            legal: {
                privacy: 'Privacy Policy',
                terms: 'Terms of Service'
            }
        },

        // Add other sections like About, Projects, etc. as needed
        about: {
            titleStart: 'Full-Stack Developer in',
            titleHighlight: 'Amman, Jordan',
            name: 'Omar Mubaidin',
            descriptionStart: "I'm ",
            descriptionMiddle: ", a Computer Science student at HTU and full-stack developer based in Amman, Jordan. I specialize in building high-performance web systems, custom e-commerce engines, and secure local integrations.",
            descriptionEnd: "Unlike typical template-users, I engineer ",
            performance: "performance-focused",
            descriptionContext: " systems. My academic background in CS allows me to build secure, database-driven software that safeguards customer data.",
            quoteStart: "Most of my pages load in under",
            quoteHighlight: "1.5s on 4G",
            quoteEnd: "networks in Jordan.",
            whyChoose: {
                title: 'Why businesses in Jordan choose MUBX',
                reason1: {
                    title: 'Revenue-Driven Design',
                    desc: 'I align design directly with your business goals, optimizing conversions, customer flows, and landing page layouts to turn passive visitors into paying customers.'
                },
                reason2: {
                    title: 'Local Payment Expertise',
                    desc: 'I have deep expertise integrating local payment systems like Zain Cash, CliQ, and regional merchant gateways, removing transaction bottlenecks for Jordanian users.'
                },
                reason3: {
                    title: 'Speed & Performance',
                    desc: 'Websites are custom-built and optimized for fast load times on local 4G and mobile networks, eliminating latency and reducing bounce rates.'
                },
                reason4: {
                    title: 'Security & Reliability',
                    desc: 'Engineered with production-grade security, secure database design, encrypted user authentication, and data integrity safeguards to protect your intellectual property.'
                }
            },
            techStack: 'Tech Stack',
            stats: {
                dev: 'Projects Delivered',
                secure: 'Lighthouse Score',
                location: 'Response Guarantee',
                design: 'Average Load Time'
            }
        },
        process: {
            badge: 'HOW I WORK',
            title: 'My Web Development Process',
            step1: {
                title: 'Discovery',
                desc: 'I start with a strategy call to audit your current system and define ROI-focused goals.'
            },
            step2: {
                title: 'Architecture',
                desc: 'I design the technical blueprint, focusing on scalability, security, and performance.'
            },
            step3: {
                title: 'Development',
                desc: 'Clean, high-performance code written with rapid deployment cycles and transparent updates.'
            },
            step4: {
                title: 'Launch & Growth',
                desc: 'Testing, deployment, and post-launch optimization to ensure long-term stability and speed.'
            }
        },
        pricing: {
            badge: 'TRANSPARENT PRICING',
            title: 'Web Development Pricing Plans',
            desc: 'High-performance engineering for every stage of your business in Jordan.',
            cta: 'Start Project',
            popular: 'Most Popular',
            tiers: {
                launch: {
                    name: 'Launch',
                    price: '499.99',
                    currency: 'JD',
                    period: 'Start',
                    desc: 'Perfect for landing pages and simple MVPs.',
                    features: ['Custom Design', 'Performance Audit', 'SEO Setup', 'Mobile Responsive']
                },
                growth: {
                    name: 'Growth',
                    price: '899.99',
                    currency: 'JD',
                    period: 'Start',
                    desc: 'Full business systems and complex web apps.',
                    features: ['Database Integration', 'Auth Systems', 'Dashboard Build', 'Payment Gateways']
                },
                enterprise: {
                    name: 'Enterprise',
                    price: 'Custom',
                    currency: 'JD',
                    period: 'Start',
                    desc: 'High-authority audits and scaling infrastructure.',
                    features: ['Infrastructure Audit', 'Cloud Migration', 'Consultancy Pack', 'Dedicated Support']
                }
            }
        },
        faq: {
            badge: 'COMMON QUESTIONS',
            title: 'Frequently Asked Questions About Web Development',
            questions: [
                {
                    q: 'How long does a typical project take?',
                    a: 'Landing pages usually take 7-10 days. Full-scale business systems and complex web apps range from 3-6 weeks depending on scope.'
                },
                {
                    q: 'What is your primary technical stack?',
                    a: 'I specialize in Next.js, React, and TypeScript with Supabase/PostgreSQL for backends and Framer Motion for premium animations.'
                },
                {
                    q: 'Do you offer maintenance after launch?',
                    a: 'Yes, I provide monthly maintenance packages that include security updates, performance monitoring, and minor feature additions.'
                },
                {
                    q: 'How do payments work in Jordan?',
                    a: 'I accept local bank transfers (CliQ), PayPal, and crypto. Projects are usually split into 50/50 milestones.'
                }
            ]
        },
        contact: {
            connect: "START A PROJECT",
            titleStart: "Let's Build Your Next",
            titleHighlight: "Web Project",
            desc1: "Full-stack developer in Amman, Jordan. Currently accepting new projects for Q3 2026.",
            desc2: "Let's discuss how I can engineer your growth.",
            desc3: "Whether you need a full-stack audit, a database redesign, or a complete product build, I'm ready to architect the solution.",
            availability: {
                title: "Availability & Response",
                status: "Accepting 2 New Projects (Q3 2026)",
                response: "I read every message myself and reply within",
                responseTime: "24 hours",
                context: "Currently prioritizing e-commerce and SaaS projects.",
                urgent: "Need a faster reply?"

            },
            email: "Email",
            location: "Location",
            locationVal: "Amman, Jordan (Remote Available)",
            form: {
                step1Label: 'Details',
                step2Label: 'Scope',
                step3Label: 'Brief',
                badge: 'Premium Systems From 49.99 JD',
                title: 'Start your project brief',
                fastReplies: '24h Response',
                security: 'Secure Systems',
                arabicSupport: 'Arabic Support',
                goal: 'Primary Goal',
                goalOptions: ['New Website', 'Redesign', 'E-commerce', 'Custom Web App', 'Technical Audit'],
                budget: 'Budget Range',
                budgetOptions: ['49.99 JD (Link Tree)', '149.99 - 299.99 JD (Landing Page)', '499.99 - 899.99 JD (Launch)', '899.99 - 1,999.99 JD (Growth)', '1,999.99+ JD (Enterprise)'],
                deadline: 'Timeline',
                deadlineOptions: ['ASAP', '1 Month', 'Flexible'],
                name: 'Contact Person',
                namePlaceholder: 'Full Name',
                business: 'Company / Brand Name',
                businessPlaceholder: 'e.g. Acme Startup',
                website: 'Existing Website (optional)',
                websitePlaceholder: 'https://example.com',
                email: 'Business Email',
                emailPlaceholder: 'name@company.com',
                details: 'Project Objectives',
                detailsPlaceholder: 'Briefly describe your business goals and the problem you need to solve (e.g., "We need to automate our member registrations to save 5 hours/week")...',
                submit: 'Submit Inquiry',
                sending: 'Sending Brief...',
                footer: 'I will review your brief and reply with a strategic direction within 24 hours.',
                success: 'Brief received! I\'ll be in touch within 24 hours to discuss the next steps.',
                error: 'There was a problem submitting your brief. Please try again or reach out via email.'
            },
            typical: "Typical projects:",
            typicalList: "landing pages, e-commerce MVPs, and web systems",
            typicalContext: "for startups in Amman and worldwide.",
            faq: {
                title: "Common Questions",
                q1: {
                    q: "What technologies do you use?",
                    a: "I build with modern, production-grade tools: Next.js for frontend, React for UI components, TypeScript for type safety, PostgreSQL for databases, and Prisma for data management. This stack ensures fast, secure, and scalable applications."
                },
                q2: {
                    q: "How long does a typical project take?",
                    a: "Most projects take 2-6 weeks depending on scope. A simple landing page can be done in 1-2 weeks, while a full e-commerce system with custom features may need 4-6 weeks. I'll give you a detailed timeline in our first call."
                },
                q3: {
                    q: "Do you work with clients outside Jordan?",
                    a: "Yes! I work remotely with clients worldwide. As long as we can communicate effectively via video calls and messaging, location isn't a barrier. Most of my workflow is async-friendly."
                },
                q4: {
                    q: "What payment methods do you accept?",
                    a: "I accept Zain Cash, CliQ (for Jordan-based clients), and international bank transfers. A 50% deposit is required to start, with the remaining 50% due upon project completion."
                },
                q5: {
                    q: "Do you offer maintenance after launch?",
                    a: "Yes. Every project includes a 30-day bug-fix warranty. After that, I offer ongoing support packages for updates, content changes, and technical maintenance. We can discuss retainer options based on your needs."
                },
                q6: {
                    q: "What's included in your projects?",
                    a: "Every project includes: custom design tailored to your brand, full development and deployment, mobile-responsive layout, SEO optimization, performance tuning, and training on how to manage your site. You own all the code and assets."
                }
            }
        },
        reviews: {
            title: 'What My Clients',
            titleHighlight: 'Say About Working With Me',
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
                },
                {
                    client: "Majd",
                    role: "Founder @ The Glorious",
                    project: "Artistic Bio Link",
                    year: "Feb 2025",
                    outcome: "The Glorious — High-end brand integration",
                    text: "Omar transformed our social presence with a custom bio link that perfectly captures our aesthetic. It's fast, beautiful, and much more professional than standard tools.",
                    linkLabel: "Follow Majd"
                },
                {
                    client: "Abdallah Alfayoumi",
                    role: "Founder @ Aqabwi",
                    project: "Photography Portfolio",
                    year: "Feb 2025",
                    outcome: "Aqabwi — Cinematic portfolio launch",
                    text: "Working with Omar was a game-changer for my photography business. He built a high-performance portfolio that truly showcases my work with stunning detail and speed.",
                    linkLabel: "View Aqabwi"
                },
                {
                    client: "Men Only Show Lead",
                    role: "Founder @ Men Only Show",
                    project: "Podcast Platform",
                    year: "Feb 2025",
                    outcome: "Men Only Show — Arab world's first platform",
                    text: "Omar delivered a high-quality platform that perfectly matches the scale and vision of our show. The performance and design are top-notch.",
                    linkLabel: "Visit Show"
                }
            ]
        },
        projects: {
            titleStart: 'Featured Web Development',
            titleHighlight: 'Projects',
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
                    desc: "I helped BloB.JO launch a custom Print-on-Demand store in Amman. Users can design products specifically on the site—something Shopify couldn't do easily.",
                    outcome: 'Outcome: Full operational flow in 3 weeks.'
                },
                faq: {
                    title: 'Frequently Asked Questions',
                    items: [
                        {
                            q: 'How much does an e-commerce website cost in Jordan?',
                            a: 'A custom, high-performance e-commerce store typically starts at 850 JOD depending on complexity. This is a one-time investment compared to paying monthly fees forever on other platforms.'
                        },
                        {
                            q: 'Can I accept Zain Cash and CliQ?',
                            a: 'Yes. I integrate local Jordanian payment methodologies so you can get paid instantly and securely without international settlement delays.'
                        },
                        {
                            q: 'Do you provide Arabic language support?',
                            a: 'Absolutely. All my e-commerce solutions are built with RTL (Right-to-Left) support from day one, ensuring a perfect experience for your Arab customers.'
                        }
                    ]
                }
            }
        },
        blog: {
            badge: 'DEVELOPMENT INSIGHTS',
            titleStart: 'Web Development Blog &',
            titleHighlight: 'Technical Insights',
            description: 'Insights on React, Next.js, AI, and building scalable web applications.',
            readMore: 'Read Article',
            backToNotes: 'Back to Notes'
        },
        tools: {},
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
            members: 'Active Members Managed',
            leads: 'Avg. Conversion Increase',
            speed: 'Avg. Page Speed (Local)'
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
            title: 'Technologies I Use to Build',
            titleHighlight: 'Fast, Scalable Web Apps',
            subtitle: 'React, Next.js, Node.js, PostgreSQL, and the tools I use to ship production-grade applications.',
            categories: {
                frontend: 'Frontend Development',
                backend: 'Backend & Databases',
                tools: 'Tools & Infrastructure'
            }
        },
        photography: {
            title: 'Capturing',
            titleHighlight: 'Moments',
            description: 'Beyond code, I explore the world through a lens. High-quality visuals that tell a story.',
            viewGallery: 'View Gallery'
        },
        timeline: {
            title: 'My Path to Becoming a',
            titleHighlight: 'Full-Stack Developer',
            subtitle: 'The journey that led me to building high-performance web systems.',
            items: [
                {
                    year: '2026 - Present',
                    role: 'Full Stack Developer',
                    company: 'Freelance',
                    description: 'Building high-performance web systems for startups and local businesses. Specializing in Next.js and secure payment integrations.'
                },
                {
                    year: '2024 - Present',
                    role: 'Computer Science Student',
                    company: 'Al-Hussein Technical University (HTU)',
                    description: 'Focusing on software engineering, algorithms, and database architecture. Consistent Dean\'s List student.'
                },
                {
                    year: '2023',
                    role: 'Web Development Intern',
                    company: 'Local Tech Startups',
                    description: 'Gained hands-on experience in frontend workflows, UX best practices, and agile development cycles.'
                }
            ]
        },
        contractPage: {
            title: 'Software Development Services Agreement',
            provider: 'Service Provider',
            client: 'Client',
            location: 'Location',
            effectiveDate: 'Effective Date',
            sections: [
                {
                    title: '1. Scope of Services',
                    content: 'The Service Provider agrees to perform web development and digital services as outlined in the attached Statement of Work (SOW) or project proposal. Any changes to scope must be agreed upon in writing.'
                },
                {
                    title: '2. Compensation and Payment',
                    content: 'Total Project Fee: [Amount]. Deposit: A non-refundable 50% deposit is required before work begins. Milestones: Payments will be due upon completion of specified project milestones. Late Fees: Payments overdue by more than 14 days will incur a 5% late fee.'
                },
                {
                    title: '3. Intellectual Property',
                    content: 'Upon receipt of full final payment, Service Provider transfers all right, title, and interest in the final deliverables to Client. Service Provider retains the right to display work in professional portfolio.'
                },
                {
                    title: '4. Client Obligations',
                    content: 'Client agrees to provide all necessary content, assets, and access (e.g., logos, text, API keys) in a timely manner. Decisions or feedback must be provided within 3 business days.'
                },
                {
                    title: '5. Warranties and Liability',
                    content: 'Service Provider warrants that the work will function as specified for 30 days post-delivery. Total liability is limited to the amount paid for Services.'
                },
                {
                    title: '6. Confidentiality',
                    content: 'Both parties agree to keep confidential all non-public information shared during the project.'
                },
                {
                    title: '7. Termination',
                    content: 'Either party may terminate the project with 10 days written notice. Client will pay for all work completed up to date of termination.'
                },
                {
                    title: '8. Governing Law',
                    content: 'This Agreement shall be governed by and construed in accordance with the laws of The Hashemite Kingdom of Jordan.'
                }
            ],
            footer: {
                clientSignature: 'Provider Signature',
                providerSignature: 'Provider Signature',
                date: 'Date'
            }
        },
        brandStory: {
            title: 'THE MUBX MISSION',
            highlight: 'Engineering High-Performance Web Systems',
            desc1: 'MUBX was founded by Omar Mubaidin with a singular vision: to bridge the gap between technical complexity and business outcomes in Jordan.',
            desc2: 'The name MUBX originates from "Mubaidin Expertise" — a promise to deliver precision-engineered web systems that are not just beautiful, but are functional tools for revenue generation.',
            desc3: 'Based in Amman, Jordan, I specialize in high-performance stacks that allow local startups to compete on a global scale.',
            stats: {
                performance: '99+ Lighthouse Score',
                integrity: 'Bilingual (AR/EN)',
                security: 'CS Engineered'
            }
        },
        breadcrumbs: {
            home: 'Home',
            about: 'About Omar Mubaidin',
            services: 'Web Development Services',
            blog: 'Web Development Blog',
            projects: 'Featured Projects',
            contact: 'Start a Project',
            legal: 'Legal'
        },
        seo: {
            home: {
                title: 'Omar Mubaidin | Full-Stack Developer & AI Engineer in Amman, Jordan — MUBX',
                description: 'Omar Mubaidin (عمر مبيضين) is a full-stack developer and founder of MUBX in Amman, Jordan. Expert in Next.js, React, AI engineering, e-commerce, Zain Cash & CliQ payments, and high-performance SEO for startups.',
            },
            about: {
                title: 'About Omar Mubaidin | MUBX — Full-Stack Developer in Amman, Jordan',
                description: 'Meet Omar Mubaidin: Computer Science student at HTU, full-stack developer, and founder of MUBX. Building revenue-focused web systems for startups in Amman, Jordan.',
            },
            services: {
                title: 'Web Development Services & Pricing in Jordan | MUBX',
                description: 'Professional web development services in Amman, Jordan. Landing pages, e-commerce stores with local payments, and custom web systems by full-stack developer Omar Mubaidin.',
            },
            projects: {
                title: 'Featured Web Development Projects | MUBX — Case Studies & Solutions',
                description: 'Explore my latest web development projects. From high-conversion landing pages to complex web systems and payment integrations in Jordan.',
            },
            blog: {
                title: 'Web Development Blog | MUBX — React, Next.js & AI Insights',
                description: 'Technical articles on React, Next.js, AI engineering, and building scalable web applications in Jordan by full-stack developer Omar Mubaidin.',
            },
            contact: {
                title: 'Start a Web Project | MUBX — Full-Stack Developer in Jordan',
                description: 'Ready to scale your business? Contact Omar Mubaidin for a custom web development estimate. Expert full-stack solutions for startups in Amman, Jordan.',
            },
            links: {
                title: 'Links | Omar Mubaidin — MUBX Social & Connect',
                description: 'Connect with Omar Mubaidin (MUBX) across social platforms. View portfolio, book a call, and explore latest projects.',
            }
        }
    }
};

