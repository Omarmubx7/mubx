
export interface Project {
    slug: string;
    title: string;
    description: string;
    tech: string[];
    links: { live: string; code?: string };
    logo: string;
    metrics: string;
    caseStudy: {
        problem: string;
        role: string;
        outcome: string;
        details?: string; // Extended details for the page
    }
}

export const projects: Project[] = [
    {
        slug: 'vynex-media',
        title: 'Vynex Media',
        description: 'Visual production agency platform. High-performance landing page with SEO optimization and smooth frame interactions.',
        tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
        links: { live: 'https://vynexmedia.lovable.app/', code: 'https://github.com/Omarmubx7/vynexmedia' },
        logo: '/images/vynex-logo.png',
        metrics: '20% Conversion Rate',
        caseStudy: {
            problem: 'Needed a modern website matching their high visual production quality.',
            role: 'Full implementation: architecture, frontend, performance.',
            outcome: 'Professional page for client acquisition with smooth lead capture.',
            details: 'Vynex Media required a digital presence that mirrored their high-end video production quality. I built a Next.js application focusing on heavy media optimization, preventing layout shifts while delivering 4K visuals. The result is a lightning-fast portfolio that acts as their primary sales tool.'
        }
    },
    {
        slug: 'htu-martial-arts',
        title: 'HTU Martial Arts',
        description: 'University sports club management system. Handles membership bookings, user profiles, and admin dashboards.',
        tech: ['PHP', 'MySQL', 'Bootstrap', 'Authentication'],
        links: { live: 'https://htumartialarts.42web.io/?i=1', code: 'https://github.com/Omarmubx7/htu_martial_arts-man' },
        logo: '/images/htu-logo.png',
        metrics: '100+ Active Members',
        caseStudy: {
            problem: 'Manual management of members and bookings via messages/sheets.',
            role: 'Database design, PHP backend, Admin dashboard.',
            outcome: 'Centralized management reducing manual work.',
            details: 'The HTU Martial Arts club was drowning in paperwork. Pass cards were paper, bookings were DM-based. I engineered a complete management system with PHP/MySQL that handles user registration, session booking limits, and admin oversight. This digitized the entire workflow for 100+ students.'
        }
    },
    {
        slug: 'blob-jo',
        title: 'BloB.JO',
        description: 'Jordan\'s premier Print-on-Demand e-commerce store. Features custom product design capability and dynamic order tracking.',
        tech: ['React', 'Node.js', 'E-commerce', 'UX Design'],
        links: { live: 'https://www.blobjor.me/', code: 'https://github.com/Omarmubx7/blobjor' },
        logo: '/images/blobjor-logo.png',
        metrics: 'Full E-com Flow',
        caseStudy: {
            problem: 'Lack of local POD store with custom design tools.',
            role: 'Product UX, E-commerce flow, Frontend.',
            outcome: 'Digital order flow replacing manual communication.',
            details: 'BloB.JO aims to revolutionize merchandise in Jordan. I built a custom frontend that allows users to visualize designs on products before buying. The system integrates clear order tracking and a seamless checkout experience, bridging the gap between local artists and wearable products.'
        }
    },
];
