import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const clean = (value, limit = 300) => (typeof value === 'string' ? value.trim().slice(0, limit) : '');

// TekGrowth endpoint: TEKGROWTH_TRACK_URL, or derived from the lead webhook URL (…/api/leads/website → …/api/track).
function trackUrl() {
  if (process.env.TEKGROWTH_TRACK_URL) return process.env.TEKGROWTH_TRACK_URL;
  const lead = process.env.TEKGROWTH_LEAD_WEBHOOK_URL || '';
  return lead ? lead.replace(/\/api\/leads\/website\/?$/, '/api/track') : '';
}

/** Page view from a visitor who came on a ?r= email link. Never fails for the visitor. */
export async function POST(request) {
  let body;
  try { body = JSON.parse(await request.text()); } catch { return new NextResponse(null, { status: 204 }); }
  const r = clean(body?.r, 16);
  if (!/^[A-Za-z0-9]{4,16}$/.test(r)) return new NextResponse(null, { status: 204 });
  const url = trackUrl();
  if (!url) return new NextResponse(null, { status: 204 });
  const ua = clean(request.headers.get('user-agent') || '', 300);
  if (/bot|crawler|spider|preview|scanner|safelinks|proofpoint|mimecast|barracuda/i.test(ua)) return new NextResponse(null, { status: 204 });
  try {
    const headers = { 'Content-Type': 'application/json' };
    if (process.env.TEKGROWTH_LEAD_WEBHOOK_SECRET) headers.Authorization = `Bearer ${process.env.TEKGROWTH_LEAD_WEBHOOK_SECRET}`;
    await fetch(url, {
      method: 'POST', headers, cache: 'no-store', signal: AbortSignal.timeout(5000),
      body: JSON.stringify({ r, path: clean(body?.path, 300) || '/', referrer: clean(body?.referrer, 300), ua })
    });
  } catch (error) {
    console.error('TekGrowth track failed:', error.message);
  }
  return new NextResponse(null, { status: 204 });
}
