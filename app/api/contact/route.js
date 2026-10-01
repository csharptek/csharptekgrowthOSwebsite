import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function clean(value, limit = 3000) { return typeof value === 'string' ? value.trim().slice(0, limit) : ''; }
function validEmail(value) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254; }

export async function POST(request) {
  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ success: false, message: 'Please submit the form again.' }, { status: 400 }); }
  if (clean(body.website, 200)) return NextResponse.json({ success: true }, { status: 200 });
  const name = clean(body.name, 120).replace(/[\r\n]+/g, ' ');
  const email = clean(body.email, 254);
  const company = clean(body.company, 160);
  const role = clean(body.role, 120);
  const initiative = clean(body.initiativeType, 160).replace(/[\r\n]+/g, ' ');
  const timeline = clean(body.timeline, 80);
  const message = clean(body.message, 6000);
  if (!name || !validEmail(email) || !company || !initiative || !message) return NextResponse.json({ success: false, message: 'Please complete the required fields with a valid work email.' }, { status: 400 });
  const required = ['MICROSOFT_TENANT_ID', 'MICROSOFT_CLIENT_ID', 'MICROSOFT_CLIENT_SECRET', 'MICROSOFT_SENDER_EMAIL'];
  if (required.some((key) => !process.env[key])) return NextResponse.json({ success: false, message: 'The inquiry service is not configured yet. Please email info@csharptek.com.' }, { status: 503 });

  try {
    const tokenResponse = await fetch(`https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT_ID}/oauth2/v2.0/token`, {
      method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ client_id: process.env.MICROSOFT_CLIENT_ID, client_secret: process.env.MICROSOFT_CLIENT_SECRET, scope: 'https://graph.microsoft.com/.default', grant_type: 'client_credentials' }), cache: 'no-store'
    });
    const tokenData = await tokenResponse.json();
    if (!tokenResponse.ok || !tokenData.access_token) throw new Error('Microsoft Graph authentication failed');
    const details = [
      `Name: ${name}`, `Work email: ${email}`, `Company: ${company}`, `Role: ${role || 'Not provided'}`,
      `Initiative type: ${initiative}`, `Timeline: ${timeline || 'Not provided'}`, '', 'Initiative details:', message
    ].join('\n');
    const mailResponse = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(process.env.MICROSOFT_SENDER_EMAIL)}/sendMail`, {
      method: 'POST', headers: { Authorization: `Bearer ${tokenData.access_token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: { subject: `Website inquiry: ${initiative} — ${name}`, body: { contentType: 'Text', content: details }, toRecipients: [{ emailAddress: { address: 'info@csharptek.com' } }], replyTo: [{ emailAddress: { address: email, name } }] }, saveToSentItems: true }), cache: 'no-store'
    });
    if (mailResponse.status !== 202) throw new Error('Microsoft Graph could not deliver the inquiry');
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact submission unavailable:', error.message);
    return NextResponse.json({ success: false, message: 'Your inquiry could not be sent just now. Please email info@csharptek.com.' }, { status: 502 });
  }
}
