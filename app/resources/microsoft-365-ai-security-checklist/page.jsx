import Link from 'next/link';
import Icon from '../../../components/Icon';
import Faq from '../../../components/Faq';
import LeadForm from '../../../components/LeadForm';
import { createPageMetadata } from '../../../lib/seo';

export const metadata = createPageMetadata({
  title: 'Microsoft 365 and AI Security Checklist (40 Checks)',
  description: 'A practical Microsoft 365 and AI security checklist: identity, devices, email, data, AI tools like ChatGPT, logging and backup. 40 checks any IT team can run.',
  path: '/resources/microsoft-365-ai-security-checklist'
});

const groups = [
  ['Identity and sign-in', [
    'MFA is required for every user, including admins and shared mailboxes that can sign in',
    'Legacy authentication (basic auth, old mail protocols) is blocked',
    'Conditional Access blocks risky sign-ins and requires compliant devices for company data',
    'Fewer than five people hold Global Administrator, and admins use separate admin accounts',
    'Stale accounts, unused licences and old guest users are removed every quarter',
    'Self-service password reset is on and protected by MFA'
  ]],
  ['Devices', [
    'Every company laptop and phone is enrolled in Intune',
    'Disks are encrypted with BitLocker or FileVault, with recovery keys stored centrally',
    'Windows updates are managed with update rings, not left to users',
    'Attack surface reduction rules are switched on in block mode after a short audit period',
    'Unsupported operating systems (such as Windows 10 after end of support) are replaced or isolated',
    'Personal devices can reach company data only through protected apps'
  ]],
  ['Threat protection', [
    'Defender for Business or Defender for Endpoint is onboarded on every device and server',
    'Someone reviews Defender alerts every working day',
    'Safe Links and Safe Attachments protect email and Teams',
    'Anti-phishing policies protect executives and finance staff from impersonation',
    'SPF, DKIM and DMARC are set for every email domain you send from',
    'Macros from the internet are blocked in Office apps'
  ]],
  ['Data protection and sharing', [
    'External sharing in SharePoint and OneDrive is limited to approved people or domains',
    '"Anyone" links are disabled or expire automatically',
    'Sensitive files carry Purview sensitivity labels',
    'DLP rules stop customer, financial and personal data leaving by email or upload',
    'Teams and SharePoint sites shared with "Everyone" are reviewed before Copilot or AI agents are switched on',
    'Retention policies keep business records for as long as your rules require'
  ]],
  ['AI tools and agents', [
    'There is a written policy on which AI tools staff may use and with what data',
    'Public AI sites are blocked, allowed or monitored on managed devices according to that policy',
    'Sensitive data cannot be pasted into unapproved AI tools where your licence supports it',
    'Staff have an approved AI tool so they do not fall back on personal accounts',
    'Copilot Studio and other AI agents are listed with an owner, data sources and permissions',
    'Third-party apps and AI add-ons need admin approval before users can consent'
  ]],
  ['Logging, response and recovery', [
    'Unified audit logging is on, and logs are kept long enough for an investigation (180 days or more is a common requirement)',
    'Sign-in and audit logs can be exported or sent to a SIEM such as Microsoft Sentinel',
    'There is a written incident response plan with named contacts',
    'Microsoft 365 data (mail, OneDrive, SharePoint, Teams) is backed up outside Microsoft’s own retention',
    'Restores are tested at least twice a year',
    'Secure Score is reviewed monthly and the top recommendations are assigned',
    'Security settings are documented for auditors and cyber insurers',
    'Leavers lose access to email, files and devices on their last day',
    'An outside review checks the tenant at least once a year',
    'Someone owns Microsoft 365 security, by name'
  ]]
];

const faqs = [
  ['Who is this checklist for?', 'IT managers, business owners and MSPs running Microsoft 365 for companies of roughly 10 to 1,000 staff. Most checks work on Business Premium; a few need E5 or add-ons.'],
  ['Which Microsoft 365 plan do I need for these checks?', 'Business Premium covers most of them, including Intune, Defender for Business, Conditional Access and basic DLP. Blocking sensitive data in AI tools and long log retention may need E5 or Defender and Purview add-ons.'],
  ['How do I block ChatGPT on company laptops?', 'Enrol devices in Intune and use Defender web content filtering or indicators to block or allow AI sites. With Defender for Cloud Apps or Purview endpoint DLP you can also stop sensitive data being pasted into them.'],
  ['How long does it take to fix the gaps?', 'Identity and device basics usually take one to three weeks with a staged rollout. Data protection and AI controls follow once you know where sensitive data lives.'],
  ['Can someone run this check for us?', 'Yes. Our Microsoft 365 security check covers every item here with read-only access and a prioritised report within three to five working days.']
];

const total = groups.reduce((n, [, items]) => n + items.length, 0);

export default function ChecklistPage() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'HowTo', name: 'Microsoft 365 and AI security checklist',
    description: `A ${total}-point checklist for securing Microsoft 365 and controlling AI tools.`,
    step: groups.map(([name, items]) => ({ '@type': 'HowToSection', name, itemListElement: items.map((text) => ({ '@type': 'HowToStep', text })) }))
  };
  return <>
    <section className="page-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/solutions/microsoft-365-security">Microsoft 365 security</Link><span>/</span>Checklist</div><span className="eyebrow">Free resource</span><h1>Microsoft 365 and AI security checklist: {total} checks for identity, devices, data and AI tools.</h1><p>Use this checklist to see how well your Microsoft 365 tenant is protected and whether staff use of ChatGPT and other AI tools is under control. Each item is a yes or no question your IT team or provider can answer.</p><div style={{marginTop:28, display:'flex', gap:12, flexWrap:'wrap'}}><a className="button" href="#get-help">Get a free review of your results <Icon name="arrow" size={16}/></a><a className="button button-dark" href="https://wa.me/919229069558?text=Hi%2C%20I%27d%20like%20the%20Microsoft%20365%20security%20checklist" target="_blank" rel="noopener noreferrer" data-track-label="WhatsApp checklist">WhatsApp us</a></div></div></section>

    <section className="section"><div className="wrap">
      <div className="section-heading"><span className="eyebrow">How to use it</span><h2>Score one point for every yes.</h2><p>Most growing companies score between 10 and 20 on their first pass. Anything under 30 means real gaps an attacker or an auditor would find. Start with identity and devices: they stop the most common attacks.</p></div>
      {groups.map(([title, items], gi) => <div className="content-panel" key={title} style={{marginTop: gi ? 20 : 0}}><span className="eyebrow">{String(gi + 1).padStart(2, '0')} / {items.length} checks</span><h3>{title}</h3><ul className="check-list">{items.map((item) => <li key={item}><Icon name="check" size={16}/>{item}</li>)}</ul></div>)}
    </div></section>

    <section className="section section-tint"><div className="wrap content-grid">
      <div><span className="eyebrow">Next step</span><h2>Want us to run the check for you?</h2><p>Our Microsoft 365 security check covers every item on this list with read-only access. You get a prioritised report in three to five working days and a call to walk through it.</p><p><Link className="text-link" href="/solutions/microsoft-365-security">See how the security check works <Icon name="arrow" size={15}/></Link></p><p><Link className="text-link" href="/solutions/private-ai-workspace">Give staff a private AI tool instead of public ChatGPT <Icon name="arrow" size={15}/></Link></p></div>
      <div id="get-help"><LeadForm defaultInitiative="Microsoft 365 & AI security checklist review" defaultReason="Project Consultation (Free)"/></div>
    </div></section>

    <Faq items={faqs} title="Questions about the checklist"/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}/>
  </>;
}
