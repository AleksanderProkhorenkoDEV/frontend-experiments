import { NextResponse } from 'next/server'
import { hasCookie } from 'cookies-next';
import { cookies } from 'next/headers';

export function middleware(request) {
    const hasCookieUser = hasCookie('token_user', { cookies });

    const nextUrl = request.nextUrl.pathname;
    if (!hasCookieUser) {
        if (nextUrl?.startsWith("/login") || nextUrl?.startsWith("/register")) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/login', request.url));
        }

    }
}

// See "Matching Paths" below to learn more
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
}