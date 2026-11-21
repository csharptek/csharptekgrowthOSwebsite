import Link from 'next/link';
import Icon from '../../../components/Icon';
import Faq from '../../../components/Faq';
import LeadForm from '../../../components/LeadForm';
import { createPageMetadata } from '../../../lib/seo';

export const metadata = createPageMetadata({
  title: 'AI Acceptable Use Policy Template (Free)',
  description: 'Free AI acceptable use policy template: approved AI tools, data never to put into AI, personal accounts, approvals and AI agents. Copy it or get the Word file.',
  path: '/resources/ai-acceptable-use-policy-template',
  image: false
});

const sections = [
  ['1. Purpose and scope', [
    'This policy explains how [Company] staff, contractors and partners may use artificial intelligence (AI) tools for work.',
    'It covers chat assistants, AI features inside other software, browser extensions, meeting note-takers, coding assistants and AI agents, on any device used for company work.'
  ]],
  ['2. Approved AI tools', [
    'Only AI tools on the approved list may be used with company information. The current list is kept by [IT / policy owner] at [location].',
    'Approved tools must be used with your work account. Using personal AI accounts for company work is not allowed.',
    'To request a new AI tool, use [request form / email]. Do not install or sign up for AI tools for work before approval.'
  ]],
  ['3. Data you must never put into AI tools', [
    'Unless a tool is specifically approved for that data, never enter, paste or upload: customer or employee personal data; financial records, bank or card details; passwords, keys, tokens or other credentials; source code or technical designs belonging to clients; contracts, legal matters or board material; anything marked Confidential or Restricted.',
    'If you are unsure whether information is sensitive, treat it as sensitive and ask [policy owner].'
  ]],
  ['4. Using AI output', [
    'You are responsible for anything you produce with AI. Check facts, figures, code and references before using or sharing AI output.',
    'Do not present AI output as professional advice, a final decision about a person, or a statement on behalf of [Company] without human review.',
    'Follow copyright and licence rules; do not use AI to copy other people’s work.'
  ]],
  ['5. AI agents and automations', [
    'Any AI agent or automation that reads company data or takes actions needs an owner, a stated purpose and approval from [IT / policy owner] before use.',
    'Agents must use their own access with the minimum permissions they need, and must be listed in the AI register.'
  ]],
  ['6. Meetings and recordings', [
    'AI note-takers and recording bots may only be used if approved, and only when all participants have been told. Do not use them in meetings with customers unless the customer agrees.'
  ]],
  ['7. Monitoring and enforcement', [
    '[Company] may use technical controls to detect and block sensitive data being sent to AI tools and to monitor which AI tools are used on company devices, in line with applicable law.',
    'Breaking this policy may lead to access being removed and disciplinary action.'
  ]],
  ['8. Ownership and review', [
    'Policy owner: [name, role]. This policy is reviewed at least every six months and when significant new AI tools are adopted.',
    'Questions and reports of possible data exposure: [contact].'
  ]]
];

const faqs = [
  ['What is an AI acceptable use policy?', 'A short company policy that sets out which AI tools staff may use, what data must never go into them, how new tools are approved and who is responsible for AI output.'],
  ['Is a policy enough to stop data leaks into AI tools?', 'No. A policy sets the rules; technical controls such as data loss prevention, app blocking and work-account sign-in make them stick. Most companies need both.'],
  ['How long should an AI policy be?', 'Two to four pages is enough for most companies of 20 to 500 people. Longer policies are rarely read.'],
  ['Can I use this template for free?', 'Yes. Copy and adapt it for your company. Have your legal or HR adviser review the final version.'],
  ['Can you help us roll it out with real controls?', 'Yes. Our AI governance program turns the policy into an approved tool list, an AI register and Microsoft 365 controls that enforce it.']
];

export default function AiPolicyTemplatePage() {
  return <>
    <section className="page-hero"><div className="wrap page-hero-inner">
      <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/solutions/ai-governance">AI governance</Link><span>/</span>AI policy template</div>
      <span className="eyebrow">Free template</span>
      <h1>AI acceptable use policy template: a short, practical policy your staff will actually read.</h1>
      <p>Copy the template below and replace the text in [brackets]. It covers approved tools, data that must never go into AI, personal accounts, AI output, agents, meeting bots and enforcement. Want the editable Word version? Request it at the end of the page.</p>
      <div style={{ marginTop: 28 }}><a className="button" href="#get-template">Get the editable version <Icon name="arrow" size={16}/></a></div>
    </div></section>

    <section className="section"><div className="wrap">
      <div className="section-heading"><span className="eyebrow">The template</span><h2>AI Acceptable Use Policy</h2><p>Version 1.0 · Owner: [name] · Approved: [date] · Next review: [date]</p></div>
      {sections.map(([title, paras], i) => <div className="content-panel" key={title} style={{ marginTop: i ? 20 : 0 }}><h3>{title}</h3>{paras.map((p) => <p key={p}>{p}</p>)}</div>)}
    </div></section>

    <section className="section section-tint"><div className="wrap content-grid">
      <div><span className="eyebrow">Make it stick</span><h2>A policy without controls is a suggestion.</h2><p>Staff under time pressure will still paste data into the quickest tool. Pair the policy with technical controls that warn or block sensitive data in AI tools and steer people to the approved ones.</p><p><Link className="text-link" href="/solutions/ai-data-loss-prevention">Stop data leaking into AI tools <Icon name="arrow" size={15}/></Link></p><p><Link className="text-link" href="/resources/shadow-ai-risk-assessment">Take the 10-question shadow AI risk assessment <Icon name="arrow" size={15}/></Link></p></div>
      <div id="get-template"><LeadForm quick title="Get the editable Word version" submitLabel="Send me the template" defaultInitiative="AI acceptable use policy template (editable version)" defaultReason="General Enquiry"/></div>
    </div></section>

    <Faq items={faqs} title="Questions about AI policies"/>
  </>;
}
