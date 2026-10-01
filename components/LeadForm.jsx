'use client';

import { useRef, useState } from 'react';
import Icon from './Icon';

export default function LeadForm({ defaultInitiative = '' }) {
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  const started = useRef(false);

  async function submit(event) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setStatus('');
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'Your message could not be sent. Please try again.');
      window.dataLayer?.push({ event: 'form_submit', form_name: 'initiative', initiative_type: data.initiativeType });
      setStatus('Thanks. Your initiative is on its way to our team. We’ll be in touch.');
      form.reset();
    } catch (error) {
      setStatus(error.message || 'Something went wrong. Email info@csharptek.com and we’ll help.');
    } finally {
      setBusy(false);
    }
  }

  return <form className="lead-form" onSubmit={submit} onFocus={() => { if (!started.current) { started.current = true; window.dataLayer?.push({ event: 'form_start', form_name: 'initiative' }); } }}>
    <div className="honeypot" aria-hidden="true"><label htmlFor="lead-website">Leave this blank</label><input id="lead-website" name="website" tabIndex={-1} autoComplete="off"/></div>
    <div className="field"><label htmlFor="lead-name">Name *</label><input id="lead-name" name="name" autoComplete="name" required maxLength={120}/></div>
    <div className="field"><label htmlFor="lead-email">Work email *</label><input id="lead-email" type="email" name="email" autoComplete="email" required maxLength={254}/></div>
    <div className="field"><label htmlFor="lead-company">Company *</label><input id="lead-company" name="company" autoComplete="organization" required maxLength={160}/></div>
    <div className="field"><label htmlFor="lead-role">Your role</label><input id="lead-role" name="role" autoComplete="organization-title" maxLength={120}/></div>
    <div className="field"><label htmlFor="lead-initiative">Initiative type *</label><select id="lead-initiative" name="initiativeType" defaultValue={defaultInitiative} required><option value="" disabled>Select an initiative</option>{defaultInitiative && !['AI initiative','AI product','Workflow automation','Modernization','Healthcare','Marketplace','Other'].includes(defaultInitiative) && <option value={defaultInitiative}>{defaultInitiative}</option>}<option>AI initiative</option><option>AI product</option><option>Workflow automation</option><option>Modernization</option><option>Healthcare</option><option>Marketplace</option><option>Other</option></select></div>
    <div className="field"><label htmlFor="lead-timeline">Timeline</label><select id="lead-timeline" name="timeline" defaultValue=""><option value="">Select a timeframe</option><option>As soon as possible</option><option>Within 1–3 months</option><option>Within 3–6 months</option><option>Exploring options</option></select></div>
    <div className="field field-full"><label htmlFor="lead-message">What are you trying to build, modernize or automate? *</label><textarea id="lead-message" name="message" required maxLength={6000} placeholder="A little context helps us bring the right people into the conversation."/></div>
    <div className="form-submit"><button className="button" type="submit" disabled={busy}>{busy ? 'Sending…' : 'Discuss your initiative'} <Icon name="arrow" size={16}/></button><small>We’ll use these details to respond to your inquiry.</small></div>
    {status && <p className="form-status" role="status" aria-live="polite">{status}</p>}
  </form>;
}
