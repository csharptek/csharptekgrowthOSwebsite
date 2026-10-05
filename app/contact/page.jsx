import Link from 'next/link';
import LeadForm from '../../components/LeadForm';
import Faq from '../../components/Faq';
import Icon from '../../components/Icon';

export const metadata = { title: 'Contact Us', description: 'Tell Csharptek what you are building. Email, WhatsApp, book a free 30-minute discovery call or send a message — we reply within 24 hours.', alternates: { canonical: '/contact' } };

const channels = [
  { icon: 'mail', title: 'Email us', text: 'Best for project briefs and detailed queries', label: 'info@csharptek.com', href: 'mailto:info@csharptek.com' },
  { icon: 'whatsapp', title: 'WhatsApp', text: 'Quick questions and fast responses', label: '+91 92290 69558', href: 'https://wa.me/919229069558', external: true },
  { icon: 'calendar', title: 'Book a call', text: 'Free 30-min discovery call — no obligation', label: 'Schedule via Microsoft Bookings', href: 'https://outlook.office.com/book/BookMeetingwithBhanuGupta@csharptek.com', external: true },
  { icon: 'linkedin', title: 'LinkedIn', text: 'Connect professionally', label: 'linkedin.com/company/csharptek', href: 'https://in.linkedin.com/company/csharptek', external: true },
  { icon: 'facebook', title: 'Facebook', text: 'Follow us for updates', label: 'facebook.com/csharptek', href: 'https://www.facebook.com/csharptek/', external: true },
  { icon: 'instagram', title: 'Instagram', text: 'Behind the scenes & team culture', label: '@csharptekofficial', href: 'https://instagram.com/csharptekofficial', external: true }
];

const badges = ['HIPAA Ready', 'NDA on Request', 'US/UK Clients', 'NASSCOM Member', 'Microsoft Partner'];

const faqs = [
  ['How quickly do you respond?', 'We respond to all inquiries within 24 hours on business days. For urgent matters, WhatsApp is fastest.'],
  ['Do you work with clients outside India?', 'Yes — we work with clients across the US, UK, Australia and the Middle East. Most of our client relationships are fully remote.'],
  ['What information should I include in my message?', 'A brief description of your project, your industry, rough timeline and budget range helps us give you a useful first response.'],
  ['Is the first consultation really free?', 'Yes, completely. We spend 30 minutes understanding your goals and give you an honest assessment — no sales pressure.'],
  ['Do you sign NDAs before discussing project details?', 'Absolutely. We sign NDAs before any detailed technical or business discussions. Just ask.']
];

export default async function ContactPage({ searchParams }) {
  const query = await searchParams;
  const initiative = typeof query?.initiative === 'string' ? query.initiative.slice(0, 160) : '';
  return <>
    <section className="page-hero"><div className="wrap page-hero-inner">
      <div className="breadcrumb"><Link href="/">Home</Link><span>/</span>Contact</div>
      <span className="eyebrow">Let's talk</span>
      <h1>Start a conversation.</h1>
      <p>Tell us what you're building. We'll tell you exactly how we can help — and give you an honest assessment, for free.</p>
    </div></section>

    <section className="section form-section contact-section"><div className="wrap contact-layout">
      <aside className="contact-info">
        <span className="eyebrow">Get in touch</span>
        <h2>We reply within 24 hours.</h2>
        <div className="contact-channels">
          {channels.map((c) => <a key={c.title} className="contact-channel" href={c.href} {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
            <span className="contact-channel-icon"><Icon name={c.icon} size={20}/></span>
            <span className="contact-channel-body"><b>{c.title}</b><small>{c.text}</small><span>{c.label}</span></span>
          </a>)}
        </div>
        <div className="contact-card">
          <h3><Icon name="clock" size={18}/> Response commitment</h3>
          <p>All project inquiries get a detailed, personalised response — not a template. We'll ask the right questions to understand your goals before suggesting anything.</p>
          <ul className="contact-badges">{badges.map((b) => <li key={b}><Icon name="check" size={14}/> {b}</li>)}</ul>
        </div>
        <div className="contact-card">
          <h3><Icon name="pin" size={18}/> Office</h3>
          <p><strong>Ranchi, India</strong><br/>Headquarters &amp; Engineering<br/>Jharkhand 834001</p>
        </div>
      </aside>
      <div className="contact-form-col"><LeadForm defaultInitiative={initiative}/></div>
    </div></section>

    <Faq items={faqs} title="Common questions"/>
  </>;
}
