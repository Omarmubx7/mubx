
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';

export const metadata = {
    title: 'Lab / Articles | MUBX',
    description: 'Technical deep dives and case studies by Omar Mubaidin.',
};

export default function BlogPage() {
    const posts = [
        {
            slug: 'building-blob-jo',
            title: 'How I built BloB.JO, Jordan’s print-on-demand store',
            excerpt: 'Solving the logistics and UX challenges of a local POD market using React and Node.js.',
            date: 'Feb 05, 2026',
            tags: ['E-commerce', 'React', 'Business Logic']
        },
        {
            slug: 'htu-system-breakdown',
            title: 'From sheets to system: HTU Martial Arts app breakdown',
            excerpt: 'Migrating a manual paper-based workflow to a fully digital PHP/MySQL management dashboard.',
            date: 'Jan 28, 2026',
            tags: ['System Design', 'PHP', 'Database']
        }
    ];

    return (
        <main className="bg-black min-h-screen selection:bg-neon selection:text-black">
            <Navbar />

            <div className="pt-32 pb-24 container mx-auto px-6 md:px-12">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-16">
                        <Badge variant="neon" className="mb-4">The Lab</Badge>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                            WRITING & <span className="text-neon">THOUGHTS</span>
                        </h1>
                        <p className="text-muted text-lg">
                            Behind the scenes of my projects and technical experiments.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href="#"
                                className="block p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-neon/50 hover:bg-white/10 transition-all group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex gap-2 mb-2">
                                        {post.tags.map(tag => (
                                            <Badge key={tag} variant="ghost" className="pl-0 text-neon/80">{tag}</Badge>
                                        ))}
                                    </div>
                                    <span className="text-xs text-muted font-mono">{post.date}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-neon transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-muted leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
