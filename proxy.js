import { NextResponse } from 'next/server';

export function proxy(request) {
  const url = request.nextUrl.clone();
  if (url.hostname === 'csharptek.com') {
    url.hostname = 'www.csharptek.com';
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|icon.svg|robots.txt|sitemap.xml).*)']
};
