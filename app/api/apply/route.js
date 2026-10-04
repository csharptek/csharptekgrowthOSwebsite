import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  const endpoint = process.env.CAREERS_APPLY_API_URL || 'https://interviewschedulerprodapi.azurewebsites.net/api/Career/apply';
  try {
    const incoming = await request.formData();
    const firstName = String(incoming.get('Firstname') || '').trim();
    const lastName = String(incoming.get('Lastname') || '').trim();
    const email = String(incoming.get('Email') || '').trim();
    const phone = String(incoming.get('Number') || '').trim();
    const location = String(incoming.get('CurrentLocation') || '').trim();
    const jobId = String(incoming.get('JobId') || '').trim();
    const years = Number(incoming.get('ExperienceYears'));
    const resume = incoming.get('FormFile');
    if (!firstName || !lastName || !/^\S+@\S+\.\S+$/.test(email) || !/^[0-9]{10,12}$/.test(phone) || !location || !jobId || !Number.isFinite(years) || years < 0 || !resume || typeof resume.arrayBuffer !== 'function' || !/\.(pdf|doc|docx)$/i.test(resume.name || '')) {
      return NextResponse.json({ success: false, message: 'Please complete the required fields and attach a PDF or Word resume.' }, { status: 400 });
    }
    const token = String(incoming.get('recaptchaToken') || '');
    if (process.env.RECAPTCHA_SECRET_KEY) {
      if (!token || token === 'no-recaptcha') return NextResponse.json({ success: false, message: 'Please complete the security check and submit again.' }, { status: 400 });
      const verification = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ secret: process.env.RECAPTCHA_SECRET_KEY, response: token, ...(request.headers.get('x-forwarded-for') ? { remoteip: request.headers.get('x-forwarded-for').split(',')[0].trim() } : {}) })
      });
      const result = await verification.json();
      if (!result.success || (typeof result.score === 'number' && result.score < 0.5) || (result.action && result.action !== 'apply')) {
        return NextResponse.json({ success: false, message: 'The security check could not be verified. Please try again.' }, { status: 400 });
      }
    }
    incoming.delete('recaptchaToken');
    const response = await fetch(endpoint, { method: 'POST', body: incoming, headers: { 'User-Agent': 'CSharpTek-Website/1.0', Accept: 'application/json' }, cache: 'no-store' });
    let result = {};
    try { result = await response.json(); } catch {}
    if (!response.ok || !result.success) return NextResponse.json({ success: false, message: result.message || 'Your application could not be submitted. Please try again.' }, { status: response.status || 502 });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Application submission unavailable:', error.message);
    return NextResponse.json({ success: false, message: 'We could not reach the application service. Please email hr@csharptek.com.' }, { status: 502 });
  }
}
