'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Icon from './Icon';

function ApplicationForm({ job, onClose }) {
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  async function submit(event) {
    event.preventDefault();
    setBusy(true);
    setMessage('');
    try {
      const formElement = event.currentTarget;
      const form = new FormData(formElement);
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      let token = 'no-recaptcha';
      if (siteKey) {
        if (!window.grecaptcha) throw new Error('The security check is still loading. Please try again in a moment.');
        token = await new Promise((resolve) => window.grecaptcha.ready(async () => resolve(await window.grecaptcha.execute(siteKey, { action: 'apply' }))));
      }
      const years = Number(form.get('ExperienceYears') || 0);
      const months = Number(form.get('ExperienceMonths') || 0);
      form.set('TotalExperienceYears', parseFloat((years + months / 12).toFixed(2)).toString());
      form.set('recaptchaToken', token);
      const response = await fetch('/api/apply', { method: 'POST', body: form });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'We could not submit your application.');
      setMessage('Your application was submitted. Thank you for your interest in Csharptek.');
      window.dataLayer?.push({ event: 'careers_application_submit', application_role: job?.jobTitle || 'Open application' });
      formElement.reset();
    } catch (error) {
      setMessage(error.message || 'Please try again, or email hr@csharptek.com.');
    } finally { setBusy(false); }
  }
  return <div className="content-panel" id="application"><button className="text-link" type="button" onClick={onClose}>← Back to openings</button><h3 style={{marginTop:18}}>Apply for {job.jobTitle}</h3><form className="lead-form" onSubmit={submit} encType="multipart/form-data">
    <input type="hidden" name="JobId" value={job.jobId}/><input type="hidden" name="AppliedFor" value={job.jobTitle}/>
    <div className="field"><label htmlFor="app-first">First name *</label><input id="app-first" name="Firstname" autoComplete="given-name" required maxLength={80}/></div>
    <div className="field"><label htmlFor="app-last">Last name *</label><input id="app-last" name="Lastname" autoComplete="family-name" required maxLength={80}/></div>
    <div className="field"><label htmlFor="app-email">Email *</label><input id="app-email" type="email" name="Email" autoComplete="email" required maxLength={254}/></div>
    <div className="field"><label htmlFor="app-phone">Phone *</label><input id="app-phone" name="Number" autoComplete="tel" inputMode="numeric" pattern="[0-9]{10,12}" required maxLength={12}/></div>
    <div className="field"><label htmlFor="app-location">Current location *</label><input id="app-location" name="CurrentLocation" required maxLength={160}/></div>
    <div className="field"><label htmlFor="app-city">City</label><input id="app-city" name="City" maxLength={100}/></div>
    <div className="field"><label htmlFor="app-state">State / region</label><input id="app-state" name="State" maxLength={100}/></div>
    <div className="field"><label htmlFor="app-country">Country</label><input id="app-country" name="Country" defaultValue="India" maxLength={100}/></div>
    <div className="field"><label htmlFor="app-years">Experience (years) *</label><input id="app-years" name="ExperienceYears" type="number" min="0" max="70" step="1" required/></div>
    <div className="field"><label htmlFor="app-months">Additional months</label><input id="app-months" name="ExperienceMonths" type="number" min="0" max="11" defaultValue="0"/></div>
    <input type="hidden" name="TotalExperienceYears" value=""/>
    <input type="hidden" name="CurrentCtc" value="0"/><input type="hidden" name="ExpectedCtc" value="0"/>
    <input type="hidden" name="NoticePeriod" value=""/><input type="hidden" name="StatusOfWorking" value=""/><input type="hidden" name="HighestQualification" value=""/><input type="hidden" name="WillingToWorkInRanchi" value="false"/>
    <div className="field field-full"><label htmlFor="app-note">A short note</label><textarea id="app-note" name="CoverNote" maxLength={3000}/></div>
    <div className="field field-full"><label htmlFor="app-linkedin">LinkedIn profile</label><input id="app-linkedin" name="LinkedInUrl" type="url" maxLength={300}/></div>
    <div className="field field-full"><label htmlFor="app-resume">Resume (PDF or Word) *</label><input id="app-resume" name="FormFile" type="file" accept=".pdf,.doc,.docx" required/></div>
    <div className="form-submit"><button className="button" type="submit" disabled={busy}>{busy ? 'Submitting…' : 'Submit application'} <Icon name="arrow" size={16}/></button></div>
    {message && <p className="form-status" role="status">{message}</p>}
  </form></div>;
}

export default function CareersBoard() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    fetch('/api/jobs').then(async (response) => { const result = await response.json(); if (!response.ok || !result.success) throw new Error(result.message || 'Job listings are temporarily unavailable.'); setJobs(result.jobs || []); window.dataLayer?.push({ event: 'careers_job_list_view', job_count: (result.jobs || []).length }); }).catch((err) => setError(err.message)).finally(() => setLoading(false));
  }, []);
  if (selected !== null) return <ApplicationForm job={selected} onClose={() => setSelected(null)}/>;
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  return <div>
    {siteKey && <Script src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`} strategy="afterInteractive"/>}
    {loading && <p className="empty-state" role="status">Loading current openings…</p>}
    {!loading && error && <div className="empty-state" role="status">{error}<br/><a className="text-link" href="mailto:hr@csharptek.com">Contact our team <Icon name="arrow" size={14}/></a></div>}
    {!loading && !error && jobs.length === 0 && <div className="empty-state">There are no open roles listed at the moment. We’re always glad to hear from thoughtful engineers.<br/><a className="text-link" style={{marginTop:12}} href="mailto:hr@csharptek.com">Email hr@csharptek.com <Icon name="arrow" size={14}/></a></div>}
    {jobs.length > 0 && <div className="career-list">{jobs.map((job) => <article className="career-card" key={job.jobId}><div><h3>{job.jobTitle}</h3><p>{[job.location, job.experience].filter(Boolean).join(' · ')}</p></div><button className="button button-dark" type="button" onClick={() => setSelected(job)}>View role & apply <Icon name="arrow" size={15}/></button>{job.jobSummary && <p className="career-description">{job.jobSummary}</p>}{(job.keyResponsibility || job.requiredSkills || job.preferredSkills) && <details className="field-full"><summary className="text-link">Role details</summary>{job.keyResponsibility && <p className="career-description"><strong>Responsibilities</strong><br/>{job.keyResponsibility}</p>}{job.requiredSkills && <p className="career-description"><strong>Required skills</strong><br/>{job.requiredSkills}</p>}{job.preferredSkills && <p className="career-description"><strong>Preferred skills</strong><br/>{job.preferredSkills}</p>}</details>}</article>)}</div>}
  </div>;
}
