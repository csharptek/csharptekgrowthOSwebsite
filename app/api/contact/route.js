import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function clean(value, limit = 3000) { return typeof value === 'string' ? value.trim().slice(0, limit) : ''; }
function validEmail(value) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254; }

// Optional: also send the inquiry to TekGrowth. Never blocks the visitor if TekGrowth is unreachable.
async function forwardToTekGrowth(lead) {
  const url = process.env.TEKGROWTH_LEAD_WEBHOOK_URL;
  if (!url) return false;
  try {
    const headers = { 'Content-Type': 'application/json' };
    if (process.env.TEKGROWTH_LEAD_WEBHOOK_SECRET) headers.Authorization = `Bearer ${process.env.TEKGROWTH_LEAD_WEBHOOK_SECRET}`;
    const response = await fetch(url, { method: 'POST', headers, body: JSON.stringify(lead), cache: 'no-store', signal: AbortSignal.timeout(8000) });
    if (!response.ok) console.error('TekGrowth lead webhook returned', response.status);
    return response.ok;
  } catch (error) {
    console.error('TekGrowth lead webhook failed:', error.message);
    return false;
  }
}

async function sendMail({ topic, name, company, email, details }) {
  const needed = ['MICROSOFT_TENANT_ID', 'MICROSOFT_CLIENT_ID', 'MICROSOFT_CLIENT_SECRET', 'MICROSOFT_SENDER_EMAIL'];
  if (needed.some((key) => !process.env[key])) throw new Error('Microsoft Graph is not configured');
  const tokenResponse = await fetch(`https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT_ID}/oauth2/v2.0/token`, {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: process.env.MICROSOFT_CLIENT_ID, client_secret: process.env.MICROSOFT_CLIENT_SECRET, scope: 'https://graph.microsoft.com/.default', grant_type: 'client_credentials' }), cache: 'no-store'
  });
  const tokenData = await tokenResponse.json().catch(() => ({}));
  if (!tokenResponse.ok || !tokenData.access_token) throw new Error(`Microsoft Graph authentication failed: ${tokenData.error || tokenResponse.status} ${String(tokenData.error_description || '').slice(0, 120)}`);
  const mailResponse = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(process.env.MICROSOFT_SENDER_EMAIL)}/sendMail`, {
    method: 'POST', headers: { Authorization: `Bearer ${tokenData.access_token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: { subject: `Website inquiry: ${topic} — ${name}${company ? ` (${company})` : ''}`, body: { contentType: 'Text', content: details }, toRecipients: [{ emailAddress: { address: 'info@csharptek.com' } }], replyTo: [{ emailAddress: { address: email, name } }] }, saveToSentItems: true }), cache: 'no-store'
  });
  if (mailResponse.status !== 202) throw new Error(`Microsoft Graph could not deliver the inquiry: ${mailResponse.status}`);
}

export async function POST(request) {
  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ success: false, message: 'Please submit the form again.' }, { status: 400 }); }
  if (clean(body.website, 200)) return NextResponse.json({ success: true }, { status: 200 });
  const name = clean(body.name, 120).replace(/[\r\n]+/g, ' ');
  const email = clean(body.email, 254);
  const company = clean(body.company, 160);
  const role = clean(body.role, 120);
  const phone = clean(body.phone, 40).replace(/[\r\n]+/g, ' ');
  const reason = clean(body.reason, 80).replace(/[\r\n]+/g, ' ');
  const initiative = clean(body.initiativeType, 160).replace(/[\r\n]+/g, ' ');
  const timeline = clean(body.timeline, 80);
  const message = clean(body.message, 6000);
  const topic = reason || initiative;
  if (!name || !validEmail(email) || !topic || !message) return NextResponse.json({ success: false, message: 'Please complete the required fields with a valid email.' }, { status: 400 });
  const page = clean(body.page, 300);
  const utm = body.utm && typeof body.utm === 'object' ? Object.fromEntries(Object.entries(body.utm).slice(0, 8).map(([k, v]) => [clean(k, 30), clean(String(v), 120)])) : null;
  const details = [
    `Name: ${name}`, `Email: ${email}`, `Company: ${company || 'Not provided'}`, `Phone: ${phone || 'Not provided'}`,
    `Reason: ${reason || 'Not provided'}`, `Initiative: ${initiative || 'Not provided'}`,
    ...(role ? [`Role: ${role}`] : []), ...(timeline ? [`Timeline: ${timeline}`] : []),
    ...(page ? [`Page: ${page}`] : []), ...(utm ? [`Source: ${Object.entries(utm).map(([k, v]) => `${k}=${v}`).join(' ')}`] : []),
    '', 'Message:', message
  ].join('\n');
  const lead = { name, email, company, phone, role, reason, initiativeType: initiative || reason, timeline, message, page, utm, source: 'website-contact-form', submittedAt: new Date().toISOString() };

  // Mail and TekGrowth are independent: the visitor succeeds if either one received the inquiry.
  const [mailed, stored] = await Promise.all([
    sendMail({ topic, name, company, email, details }).then(() => true, (error) => { console.error('Contact mail failed:', error.message); return false; }),
    forwardToTekGrowth(lead)
  ]);
  if (mailed || stored) return NextResponse.json({ success: true }, { status: 200 });
  // 500 (not 502) so Cloudflare passes our JSON message through instead of its own error page.
  return NextResponse.json({ success: false, message: 'Your inquiry could not be sent just now. Please email info@csharptek.com or WhatsApp +91 92290 69558.' }, { status: 500 });
}
