'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink } from 'lucide-react';

interface GitHubEvent {
    id: string;
    type: string;
    repo: { name: string };
    created_at: string;
    payload?: {
        commits?: Array<{ message: string; sha: string }>;
    };
}

export default function GithubStatus() {
    const { isRTL } = useLanguage();
    const [latestCommit, setLatestCommit] = useState<{
        repoName: string;
        message: string;
        time: string;
        url: string;
    } | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let isMounted = true;
        
        async function fetchActivity() {
            try {
                const res = await fetch('https://api.github.com/users/Omarmubx7/events');
                if (!res.ok) throw new Error('API request failed');
                const data: GitHubEvent[] = await res.json();
                
                // Find the first PushEvent
                const pushEvent = data.find(event => event.type === 'PushEvent' && event.payload?.commits?.length);
                
                if (pushEvent && isMounted) {
                    const commit = pushEvent.payload!.commits![0];
                    const cleanedRepoName = pushEvent.repo.name.replace('Omarmubx7/', '');
                    
                    setLatestCommit({
                        repoName: cleanedRepoName,
                        message: commit.message,
                        time: pushEvent.created_at,
                        url: `https://github.com/${pushEvent.repo.name}/commit/${commit.sha}`
                    });
                    setLoading(false);
                } else if (isMounted) {
                    // Fallback if no push events are found
                    setError(true);
                    setLoading(false);
                }
            } catch (e) {
                if (isMounted) {
                    setError(true);
                    setLoading(false);
                }
            }
        }

        fetchActivity();
        return () => {
            isMounted = false;
        };
    }, []);

    const getRelativeTime = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
        
        if (seconds < 60) {
            return isRTL ? 'الآن' : 'just now';
        }
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) {
            return isRTL ? `منذ ${minutes} د` : `${minutes}m ago`;
        }
        const hours = Math.floor(minutes / 60);
        if (hours < 24) {
            return isRTL ? `منذ ${hours} س` : `${hours}h ago`;
        }
        const days = Math.floor(hours / 24);
        return isRTL ? `منذ ${days} ي` : `${days}d ago`;
    };

    if (loading) {
        return (
            <div className="w-full p-4 border border-border/20 bg-card/5 animate-pulse rounded-none flex items-center justify-between font-mono text-[10px]">
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-neon/50" />
                    <div className="h-3 w-32 bg-muted/20 rounded" />
                </div>
                <div className="h-3 w-16 bg-muted/20 rounded" />
            </div>
        );
    }

    if (error || !latestCommit) {
        // High quality fallback widget for rate limit / offline status
        return (
            <div className="w-full p-4 border border-border/20 bg-card/5 rounded-none flex items-center justify-between font-mono text-[10px] select-none">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon/80" />
                    <span className="text-muted uppercase tracking-wider">
                        {isRTL ? 'الحالة: تطوير أنظمة ويب' : 'STATUS: DEVELOPING WEB SYSTEMS'}
                    </span>
                </div>
                <span className="text-neon/80 uppercase font-bold tracking-widest animate-pulse">
                    {isRTL ? 'نشط' : 'ACTIVE'}
                </span>
            </div>
        );
    }

    return (
        <a
            href={latestCommit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/widget block w-full p-4 border border-border/20 bg-card/5 hover:bg-white/[0.015] hover:border-neon/30 transition-all duration-300 rounded-none font-mono text-[10px] relative overflow-hidden"
        >
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
                    </span>
                    <span className="text-neon font-bold uppercase tracking-wider">
                        {isRTL ? 'آخر تحديث على GitHub' : 'LATEST GIT COMMIT'}
                    </span>
                </div>
                <span className="text-muted-foreground group-hover/widget:text-neon transition-colors flex items-center gap-0.5">
                    {getRelativeTime(latestCommit.time)}
                    <ExternalLink className="w-2.5 h-2.5 ml-0.5 group-hover/widget:translate-x-0.5 group-hover/widget:-translate-y-0.5 transition-transform" />
                </span>
            </div>

            <div className="text-muted-foreground truncate leading-relaxed text-[11px] group-hover/widget:text-foreground transition-colors">
                <span className="text-foreground font-semibold font-sans">{latestCommit.repoName}</span>: {latestCommit.message}
            </div>
        </a>
    );
}
