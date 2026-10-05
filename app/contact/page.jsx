import Link from 'next/link';
import LeadForm from '../../components/LeadForm';

export const metadata = { title: 'Discuss Your Initiative', description: 'Tell Csharptek what you are trying to build, modernize or automate, and our engineering team will respond with a practical next step.', alternates: { canonical: '/contact' } };

export default async function ContactPage({ searchParams }) {
  const query = await searchParams;
  const initiative = query?.initiative || '';
  return <><section className="page-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span>Contact</div><span className="eyebrow">Start a useful conversation</span><h1>Let’s talk about what you need to move forward.</h1><p>Share a little about the initiative, your team and what’s making the work challenging. We’ll bring the right engineering perspective into the conversation.</p></div></section><section className="section form-section"><div className="wrap form-layout"><div className="form-intro"><span className="eyebrow">Discuss your initiative</span><h2>Good work starts with the right question.</h2><p>Whether you’re moving AI into production, improving an existing product, connecting a complicated workflow or modernizing an application estate, tell us where you’re starting.</p><div className="form-note"><strong>Ranchi, India</strong> | +91 92290 69558<br/>Prefer email? <a className="text-link" href="mailto:info@csharptek.com">info@csharptek.com</a> | <a className="text-link" href="https://wa.me/919229069558">WhatsApp</a><br/><br/>We use your information only to respond to this inquiry.</div></div><LeadForm defaultInitiative={initiative}/></div></section></>;
}
