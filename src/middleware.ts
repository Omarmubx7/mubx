
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const host = request.headers.get('host');

    if (host && host.startsWith('www.')) {
        const newDomain = host.replace('www.', '');
        const newUrl = `https://${newDomain}${request.nextUrl.pathname}${request.nextUrl.search}`;
        return NextResponse.redirect(newUrl, 301);
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
