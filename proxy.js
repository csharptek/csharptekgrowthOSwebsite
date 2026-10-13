import { NextResponse } from 'next/server';

const OLD_HOSTS = new Set(['csharptek.com', 'growthos.csharptek.com']);

export function proxy(request) {
  const host = (request.headers.get('host') || request.nextUrl.hostname).split(':')[0].toLowerCase();
  if (OLD_HOSTS.has(host)) {
    const url = new URL(request.nextUrl.pathname + request.nextUrl.search, 'https://www.csharptek.com');
    return NextResponse.redirect(url, 308);
  }
  // Literal template paths Google picked up from an old build (/services/[slug], /industries/[slug]).
  let path = request.nextUrl.pathname;
  try { path = decodeURIComponent(path); } catch {}
  const m = path.match(/^\/(services|industries)\/\[slug\]\/?$/);
  if (m) return NextResponse.redirect(new URL(m[1] === 'services' ? '/solutions' : '/industries', 'https://www.csharptek.com'), 308);
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|icon.svg|robots.txt|sitemap.xml).*)']
};
