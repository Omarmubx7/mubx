import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Renamed from middleware to avoid deprecation warning
// This handles subdomain routing for contact.mubx.dev
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

        // Internal rewrite to /contact
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
