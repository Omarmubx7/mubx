import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl;
    const hostname = url.hostname;

    // Check if we're on the 'www' subdomain
    if (hostname.startsWith('www.')) {
        const newHostname = hostname.replace('www.', '');
        const newUrl = new URL(url.toString());
        newUrl.hostname = newHostname;
        return NextResponse.redirect(newUrl);
    }

    return NextResponse.next();
}

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
