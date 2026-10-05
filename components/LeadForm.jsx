'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';

export const CONTACT_REASONS = [
  'General Enquiry',
  'Project Consultation (Free)',
  'Career / Job Application',
  'Partnership / Collaboration',
  'Support / Existing Client',
  'Other'
];

export default function LeadForm({ defaultInitiative = '', defaultReason = '' }) {
  const [status, setStatus] = useState('');
  const [ok, setOk] = useState(false);
  const [busy, setBusy] = useState(false);
  const started = useRef(false);
  const initialReason = defaultReason || (defaultInitiative ? 'Project Consultation (Free)' : '');

  async function submit(event) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setStatus('');
    setOk(false);
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) throw new Error(result.message || 'Your message could not be sent. Please try again.');
      window.dataLayer?.push({ event: 'form_submit', form_name: 'contact', contact_reason: data.reason, initiative_type: data.initiativeType || '' });
      setOk(true);
      setStatus('Thanks — your message is with our team. We reply within 24 hours on business days.');
      form.reset();
    } catch (error) {
      setStatus(error.message || 'Something went wrong. Email info@csharptek.com and we’ll help.');
    } finally {
      setBusy(false);
    }
  }

  return <form className="lead-form" onSubmit={submit} onFocus={() => { if (!started.current) { started.current = true; window.dataLayer?.push({ event: 'form_start', form_name: 'contact' }); } }}>
    <div className="lead-form-head field-full"><h3>Send us a message</h3><p>Fields marked * are required.</p></div>
    <div className="honeypot" aria-hidden="true"><label htmlFor="lead-website">Leave this blank</label><input id="lead-website" name="website" tabIndex={-1} autoComplete="off"/></div>
    {defaultInitiative && <input type="hidden" name="initiativeType" value={defaultInitiative}/>}
    <div className="field"><label htmlFor="lead-name">Name *</label><input id="lead-name" name="name" autoComplete="name" required maxLength={120} placeholder="Your full name"/></div>
    <div className="field"><label htmlFor="lead-email">Email *</label><input id="lead-email" type="email" name="email" autoComplete="email" required maxLength={254} placeholder="you@company.com"/></div>
    <div className="field"><label htmlFor="lead-company">Company</label><input id="lead-company" name="company" autoComplete="organization" maxLength={160} placeholder="Company name"/></div>
    <div className="field"><label htmlFor="lead-phone">Phone</label><input id="lead-phone" type="tel" name="phone" autoComplete="tel" maxLength={40} placeholder="+1 555 000 0000"/></div>
    <div className="field field-full"><label htmlFor="lead-reason">Reason for contact *</label><select id="lead-reason" name="reason" defaultValue={initialReason} required><option value="" disabled>Select a reason</option>{CONTACT_REASONS.map((reason) => <option key={reason}>{reason}</option>)}</select></div>
    {defaultInitiative && <p className="lead-form-context field-full">Regarding: <strong>{defaultInitiative}</strong></p>}
    <div className="field field-full"><label htmlFor="lead-message">Tell us about your project *</label><textarea id="lead-message" name="message" required maxLength={6000} placeholder="A brief description of your project, industry, rough timeline and budget range helps us give you a useful first response."/></div>
    <div className="form-submit"><button className="button" type="submit" disabled={busy}>{busy ? 'Sending…' : 'Send message'} <Icon name="arrow" size={16}/></button><small>By submitting you agree to our <Link className="text-link" href="/privacy-policy">Privacy Policy</Link>. We never share your data with third parties.</small></div>
    {status && <p className={`form-status${ok ? ' is-success' : ' is-error'}`} role="status" aria-live="polite">{status}</p>}
  </form>;
}
