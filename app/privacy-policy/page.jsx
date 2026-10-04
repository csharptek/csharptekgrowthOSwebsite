import Link from 'next/link';

export const metadata = { title: 'Privacy Policy', description: 'How Csharptek collects, uses and protects the information you submit through its website, including contact forms, job applications and analytics.', alternates: { canonical: '/privacy-policy' } };

const sections = [
  ['Information you provide', 'When you contact us, we receive the name, work email, company, role, initiative type, timeline and message you choose to submit. When you apply for a role, we receive the information and resume you provide, including contact, location and experience details.'],
  ['How we use it', 'We use inquiry information to respond and discuss the initiative. We use application information to review and manage applications. We do not use these forms to add you to unrelated marketing lists.'],
  ['Service providers', 'Website inquiries are routed through Microsoft Graph to Csharptek. Careers listings and applications use the careers database and application service configured for the site. Website analytics may be processed by Google Analytics or Google Tag Manager when those properties are configured. These providers process information to support the services they provide.'],
  ['Analytics and website activity', 'The website may record page views, solution and case study engagement, calls to action, and form starts and submissions. Analytics settings are supplied through the existing Google Analytics and Google Tag Manager properties.'],
  ['Retention and security', 'We keep submitted information for as long as needed to respond to the inquiry, review an application, meet applicable recordkeeping needs and protect the service. We use reasonable technical and organizational measures to protect information, but no internet transmission or storage system can be guaranteed secure.'],
  ['Your requests', 'You may ask to access, correct or delete information you submitted by emailing info@csharptek.com. We will review and respond to the request under applicable requirements.'],
  ['Changes and contact', 'We may update this policy as the website and its services change. For questions about this policy or information submitted through the site, contact info@csharptek.com.']
];

export default function PrivacyPolicyPage() {
  return <><section className="page-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span>Privacy</div><span className="eyebrow">Website information</span><h1>Privacy policy</h1><p>How information submitted through Csharptek’s website is handled.</p><div className="detail-meta"><span>Last updated 1 October 2026</span></div></div></section><section className="section"><div className="wrap narrow-article">{sections.map(([title, text])=><section className="privacy-section" key={title}><h2>{title}</h2><p>{text}</p></section>)}</div></section></>;
}
