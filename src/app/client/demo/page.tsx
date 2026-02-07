import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Clock, FileText, Globe, LayoutDashboard, Settings, User } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { LanguageProvider } from '@/context/LanguageContext';
import { siteConfig } from '@/config/seo';

export const metadata: Metadata = {
    title: 'Client Portal Demo | MUBX',
    description: 'Experience the MUBX Client Portal. Real-time project tracking, transparent invoicing, and direct deployment previews.',
    alternates: {
        canonical: `${siteConfig.url}/client/demo`
    },
    robots: {
        index: false, // Don't index this demo page
        follow: false
    }
};

export default function ClientPortalDemo() {
    return (
        <LanguageProvider initialLocale="en">
            <div className="flex h-screen bg-black text-white selection:bg-neon selection:text-black overflow-hidden font-sans">
                {/* Sidebar */}
                <aside className="w-64 border-r border-white/10 p-6 hidden md:flex flex-col bg-zinc-950">
                    <div className="mb-10 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon to-blue-500" />
                        <span className="font-bold text-xl tracking-tight">MUBX <span className="text-white/40 font-normal">Portal</span></span>
                    </div>

                    <nav className="space-y-2 flex-1">
                        <NavItem icon={<LayoutDashboard size={20} />} label="Overview" active />
                        <NavItem icon={<FileText size={20} />} label="Invoices" />
                        <NavItem icon={<Globe size={20} />} label="Deployments" />
                        <NavItem icon={<Settings size={20} />} label="Settings" />
                    </nav>

                    <div className="mt-auto pt-6 border-t border-white/10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <User size={20} className="text-muted" />
                            </div>
                            <div>
                                <p className="text-sm font-bold">Demo Client</p>
                                <p className="text-xs text-muted">CTO @ TechCorp</p>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto">
                    <header className="h-16 border-b border-white/10 flex items-center justify-between px-8 bg-black/50 backdrop-blur-md sticky top-0 z-10">
                        <h1 className="text-lg font-bold">Project Dashboard</h1>
                        <Link href="/" className="text-xs text-muted hover:text-white flex items-center gap-2 transition-colors">
                            <ArrowLeft size={14} /> Back to Website
                        </Link>
                    </header>

                    <div className="p-8 max-w-6xl mx-auto space-y-8">
                        {/* Welcome Banner */}
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-zinc-900 to-black border border-white/10 p-8">
                            <div className="relative z-10">
                                <Badge variant="outline" className="mb-4 bg-neon/10 text-neon border-neon/20">Active Project</Badge>
                                <h2 className="text-3xl font-bold mb-2">Neural Net E-commerce Platform</h2>
                                <p className="text-muted max-w-xl">
                                    Phase 2: Payment Gateway Integration is currently <span className="text-white font-bold">In Progress</span>.
                                    Estimated completion: Feb 12, 2026.
                                </p>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-neon/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatCard label="Total Budget" value="$12,500" sub="Paid: $6,250 (50%)" />
                            <StatCard label="Timeline" value="Week 3 of 6" sub="On Track" active />
                            <StatCard label="Next Milestone" value="Beta Launch" sub="Due in 5 days" />
                        </div>

                        {/* Project Timeline */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-6">
                                <h3 className="text-xl font-bold">Recent Activity</h3>
                                <div className="space-y-4">
                                    <ActivityItem
                                        icon={<CheckCircle2 size={18} className="text-neon" />}
                                        title="Homepage Performance Optimization"
                                        time="2 hours ago"
                                        desc="LCP improved to 0.8s. Mobile score is now 98/100."
                                    />
                                    <ActivityItem
                                        icon={<Clock size={18} className="text-blue-400" />}
                                        title="Stripe Integration Started"
                                        time="Yesterday"
                                        desc="API keys configured. Webhook endpoints setup in progress."
                                    />
                                    <ActivityItem
                                        icon={<CheckCircle2 size={18} className="text-zinc-500" />}
                                        title="Phase 1 Deliverables Approved"
                                        time="Feb 3, 2026"
                                        desc="Design system and Component Library signed off."
                                    />
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold">Quick Actions</h3>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                                    <button className="w-full py-3 px-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-between group">
                                        View Live Staging
                                        <Globe size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button className="w-full py-3 px-4 bg-transparent border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-colors flex items-center justify-between">
                                        Download Latest Invoice
                                        <FileText size={16} />
                                    </button>
                                </div>

                                <div className="p-6 rounded-2xl bg-gradient-to-br from-neon/10 to-transparent border border-neon/20">
                                    <h4 className="font-bold text-neon mb-2">Need a Change?</h4>
                                    <p className="text-sm text-muted mb-4">Requesting a scope change? Schedule a quick sync.</p>
                                    <span className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/20 pb-0.5">Book Call &rarr;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </LanguageProvider>
    );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
    return (
        <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${active ? 'bg-white text-black font-bold' : 'text-muted hover:text-white hover:bg-white/5'}`}>
            {icon}
            <span className="text-sm">{label}</span>
        </button>
    );
}

function StatCard({ label, value, sub, active = false }: { label: string, value: string, sub: string, active?: boolean }) {
    return (
        <div className={`p-6 rounded-2xl border ${active ? 'bg-white/10 border-neon/50' : 'bg-zinc-900/50 border-white/10'}`}>
            <p className="text-sm text-muted mb-1">{label}</p>
            <p className="text-2xl font-bold text-white mb-1">{value}</p>
            <p className={`text-xs ${active ? 'text-neon' : 'text-zinc-500'}`}>{sub}</p>
        </div>
    );
}

function ActivityItem({ icon, title, time, desc }: { icon: React.ReactNode, title: string, time: string, desc: string }) {
    return (
        <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <div className="mt-1">{icon}</div>
            <div>
                <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-bold text-sm text-white">{title}</h4>
                    <span className="text-xs text-muted">{time}</span>
                </div>
                <p className="text-sm text-muted leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
