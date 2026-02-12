import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const hostname = request.headers.get('host');

    // Define your custom subdomain here
    const subdomain = 'contact.mubx.dev';

    if (hostname === subdomain) {
        // If it's already on /contact, don't do anything
        if (url.pathname === '/contact' || url.pathname.startsWith('/contact')) {
            return NextResponse.next();
        }

        // Determine language (default to en)
        // You can also check for cookies if you have a language cookie
        const lang = url.searchParams.get('lang') || 'en';

        // Internal rewrite to /contact
        // If using localized paths like /ar/contact, use:
        // url.pathname = lang === 'ar' ? '/ar/contact' : '/contact';

        url.pathname = '/contact';
        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}

// Only match the root and contact related paths for the middleware to run
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
