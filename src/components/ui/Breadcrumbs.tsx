'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: Readonly<BreadcrumbsProps>) {
    const { isRTL, language } = useLanguage();

    const getHref = (path: string) => {
        const hasQuery = path.includes('?');
        const separator = hasQuery ? '&' : '?';
        return language === 'en' ? path : `${path}${separator}lang=${language}`;
    };

    return (
        <nav aria-label="Breadcrumb" className="mb-8 overflow-x-auto no-scrollbar">
            <ol className="flex items-center gap-2 text-sm text-muted">
                <li className="flex items-center">
                    <Link
                        href={getHref('/')}
                        className="hover:text-neon transition-colors flex items-center gap-1.5"
                    >
                        <Home size={14} />
                        <span className="hidden sm:inline">Home</span>
                    </Link>
                </li>
                
                {items.map((item, index) => (
                    <li key={item.href} className="flex items-center gap-2">
                        <ChevronRight 
                            size={14} 
                            className={`text-muted/30 ${isRTL ? 'rotate-180' : ''}`} 
                        />
                        {index === items.length - 1 ? (
                            <span className="text-foreground font-medium truncate max-w-[200px]" aria-current="page">
                                {item.label}
                            </span>
                        ) : (
                            <Link
                                href={getHref(item.href)}
                                className="hover:text-neon transition-colors truncate max-w-[150px]"
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
