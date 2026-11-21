import Link from 'next/link';
import Icon from '../../components/Icon';
import Faq from '../../components/Faq';
import LeadForm from '../../components/LeadForm';
import BrandArtwork from '../../components/BrandArtwork';
import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata({
  title: 'AI Data Risk Check for Microsoft 365',
  description: 'See which AI tools staff use, with which accounts, and what company data goes into them. Read-only Microsoft 365 and AI check, report in 1–2 weeks.',
  path: '/ai-data-risk-check',
  image: false
});

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || 'https://outlook.office.com/book/BookMeetingwithBhanuGupta@csharptek.com';
const WHATSAPP = 'https://wa.me/919229069558?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20the%20AI%20Data%20Risk%20Check';

const covers = [
  ['AI tools in use', 'Which AI apps and extensions are used on company devices, how often and by which teams.'],
  ['Work vs personal accounts', 'Where AI is used with personal accounts that IT cannot see or control.'],
  ['Sensitive data sent to AI', 'Types of sensitive data reaching AI tools, such as customer, financial or personal data, shown by category.'],
  ['Microsoft 365 security basics', 'Secure Score, MFA and Conditional Access, device management, Defender and sharing settings.'],
  ['Data protection readiness', 'Sensitivity labels, DLP rules and audit log settings that AI controls depend on.'],
  ['Licence fit', 'What your current Microsoft plan can already do, and where an add-on would close a real gap.']
];

const steps = [
  ['Short call', '20 minutes to understand your setup, licences and concerns, and agree the scope.'],
  ['Read-only access', 'You grant a read-only role. Discovery tools are switched on where your licence supports them. Nothing changes for staff.'],
  ['Collect and review', 'One to two weeks of real AI usage data plus a review of your Microsoft 365 security settings.'],
  ['Report and walkthrough', 'A prioritised report written for management and IT, and a call to agree what to fix first.']
];

const sample = [
  ['High', 'AI tools used with personal accounts across several teams, with no company agreement in place.'],
  ['High', 'Customer and financial data detected in uploads to public AI sites.'],
  ['Medium', 'AI browser extensions with permission to read every page staff open.'],
  ['Medium', 'No sensitivity labels, so DLP cannot tell confidential files from public ones.'],
  ['Low', 'Users can approve third-party AI add-ons without admin review.']
];

const faqs = [
  ['What is the AI Data Risk Check?', 'A fixed-scope review that shows which AI tools your staff use, with which accounts, what kinds of company data reach them, and how well your Microsoft 365 security settings protect that data. You get a prioritised report and a walkthrough call.'],
  ['Do you need admin access?', 'No. The check uses read-only access. Discovery features are switched on with your approval and can be removed after the report.'],
  ['Will you read our employees’ AI conversations?', 'No. The report shows AI apps, usage levels and categories of sensitive data, not individual conversations.'],
  ['How long does it take?', 'Usually one to two weeks from access being granted, depending on how much usage data we need to collect.'],
  ['Which Microsoft 365 plans does it work with?', 'Business Premium, E3 and E5. Some discovery features need Defender for Endpoint or E5; where a feature is not licensed we use what is available and say what is missing.'],
  ['What happens after the check?', 'You can fix the findings yourself, with your IT provider, or with us. Common next steps are AI data leak protection, a safe AI tool for staff and monthly monitoring.'],
  ['Is this the same as the Microsoft 365 security check?', 'It includes it. The AI Data Risk Check covers the Microsoft 365 security review plus AI tools, accounts and data shared with AI.']
];

export default function AiDataRiskCheckPage() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'Service', name: 'AI Data Risk Check',
    serviceType: 'AI data security assessment', description: metadata.description,
    provider: { '@type': 'Organization', name: 'Csharptek', url: 'https://www.csharptek.com' },
    url: 'https://www.csharptek.com/ai-data-risk-check'
  };
  return <>
    <section className="page-hero"><div className="wrap page-hero-art-inner"><div className="page-hero-inner">
      <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/solutions/ai-data-loss-prevention">AI data protection</Link><span>/</span>AI Data Risk Check</div>
      <span className="eyebrow">Fixed scope · read-only · 1–2 weeks</span>
      <h1>AI Data Risk Check: see which AI tools your staff use, and what company data goes into them.</h1>
      <p>A short, read-only review of AI usage and Microsoft 365 security. You get real numbers from your own company, a prioritised list of fixes and a call to walk through them.</p>
      <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <a className="button" href="#request" data-track="cta" data-track-label="Risk check — request">Request the check <Icon name="arrow" size={16}/></a>
        <a className="button button-dark" href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-track="cta" data-track-label="Risk check — book call">Book a 20-min call <Icon name="calendar" size={16}/></a>
        <a className="button button-dark" href={WHATSAPP} target="_blank" rel="noopener noreferrer" data-track-label="WhatsApp risk check">WhatsApp us</a>
      </div>
    </div><BrandArtwork slug="ai-data-risk-check"/></div></section>

    <section className="section"><div className="wrap">
      <div className="section-heading"><span className="eyebrow">What the check covers</span><h2>Six questions most companies cannot answer today.</h2><p>Each one is answered with data from your own tenant and devices, not a generic survey.</p></div>
      <div className="step-grid">{covers.map(([t, d], i) => <article className="step-card" key={t}><b>{String(i + 1).padStart(2, '0')}</b><h3>{t}</h3><p>{d}</p></article>)}</div>
    </div></section>

    <section className="section section-tint"><div className="wrap">
      <div className="section-heading"><span className="eyebrow">How it works</span><h2>Four steps. Nothing changes for your staff.</h2></div>
      <div className="step-grid">{steps.map(([t, d], i) => <article className="step-card" key={t}><b>{String(i + 1).padStart(2, '0')}</b><h3>{t}</h3><p>{d}</p></article>)}</div>
    </div></section>

    <section className="section"><div className="wrap content-grid">
      <div><span className="eyebrow">Example findings</span><h2>What a report typically shows.</h2><p>These are illustrative examples of the kind of findings the check produces. Your report is based only on your own data, with the fix for each finding and the licence it needs.</p><p><Link className="text-link" href="/solutions/ai-data-loss-prevention">How we fix these findings <Icon name="arrow" size={15}/></Link></p><p><Link className="text-link" href="/solutions/shadow-ai-discovery">More on shadow AI discovery <Icon name="arrow" size={15}/></Link></p></div>
      <aside className="content-panel"><span className="eyebrow">Illustrative sample</span><h3>Top findings</h3><ul className="check-list">{sample.map(([level, text]) => <li key={text}><Icon name="check" size={16}/><span><strong>{level}:</strong> {text}</span></li>)}</ul></aside>
    </div></section>

    <section className="section section-tint"><div className="wrap content-grid">
      <div><span className="eyebrow">Who it is for</span><h2>Companies of 20 to 500 people on Microsoft 365.</h2><ul className="check-list">{['Staff already use ChatGPT, Gemini or other AI tools for work', 'You handle customer, financial, legal or source-code data', 'Customers or auditors have started asking about AI', 'You want facts before writing an AI policy or buying a tool'].map((x) => <li key={x}><Icon name="check" size={16}/>{x}</li>)}</ul><p>Prefer to check yourself first? Try the <Link href="/resources/shadow-ai-risk-assessment">10-question shadow AI risk assessment</Link> or the <Link href="/resources/ai-acceptable-use-policy-template">AI acceptable-use policy template</Link>.</p></div>
      <div id="request"><LeadForm defaultInitiative="AI Data Risk Check" defaultReason="Project Consultation (Free)"/></div>
    </div></section>

    <Faq items={faqs} title="Questions about the AI Data Risk Check"/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}/>
  </>;
}
