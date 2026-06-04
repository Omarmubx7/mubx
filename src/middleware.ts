import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Renamed from middleware to avoid deprecation warning
// This handles subdomain routing for contact.mubx.dev
export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const hostname = request.headers.get('host');
    const requestHeaders = new Headers(request.headers);

    // Determine language - always 'en'
    const locale = 'en';

    // Pass the locale to the server components via headers
    requestHeaders.set('x-next-locale', locale);

    // Define custom subdomain
    const subdomain = 'contact.mubx.dev';
    let response: NextResponse;

    if (hostname === subdomain && !url.pathname.startsWith('/contact')) {
        url.pathname = '/contact';
        response = NextResponse.rewrite(url, {
            request: { headers: requestHeaders }
        });
    } else {
        response = NextResponse.next({
            request: { headers: requestHeaders }
        });
    }

    // Persist locale in cookie
    response.cookies.set('NEXT_LOCALE', locale, {
        path: '/',
        maxAge: 365 * 24 * 60 * 60, // 1 year
        sameSite: 'lax',
    });

    return response;
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
