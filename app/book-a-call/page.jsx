import Link from 'next/link';
import LeadForm from '../../components/LeadForm';
import Icon from '../../components/Icon';
import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata({
  title: 'Book a Call with Csharptek',
  description: 'Book a free 15–30 minute call with Csharptek about forward-deployed engineers, dedicated developers, Azure, .NET or AI projects.',
  path: '/book-a-call'
});

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || 'https://outlook.office.com/book/BookMeetingwithBhanuGupta@csharptek.com';

export default async function BookCallPage({ searchParams }) {
  const query = await searchParams;
  const topic = typeof query?.topic === 'string' ? query.topic.slice(0, 160) : '';
  return <>
    <section className="page-hero"><div className="wrap page-hero-inner">
      <div className="breadcrumb"><Link href="/">Home</Link><span>/</span>Book a call</div>
      <span className="eyebrow">Free, no obligation</span>
      <h1>Book a call.</h1>
      <p>Pick a time that suits you, or send a note and we’ll propose two times. You talk to an engineer, not a sales script.</p>
      <div style={{ marginTop: 28 }}>
        <a className="button" href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-track="cta" data-track-label="Book a call — open calendar">Pick a time <Icon name="calendar" size={16}/></a>
      </div>
    </div></section>

    <section className="section form-section"><div className="wrap content-grid">
      <div>
        <span className="eyebrow">Prefer we suggest times?</span>
        <h2>Send a short note.</h2>
        <p>Tell us what you need{topic ? <> about <strong>{topic}</strong></> : ''} and when you are free. We reply within 24 hours on business days.</p>
        <ul className="check-list">
          <li><Icon name="check" size={16}/>15–30 minutes, video or phone</li>
          <li><Icon name="check" size={16}/>NDA on request before details</li>
          <li><Icon name="check" size={16}/>Tick WhatsApp on the form if you’d rather chat there</li>
        </ul>
      </div>
      <LeadForm defaultReason="Book a Call" defaultInitiative={topic}/>
    </div></section>
  </>;
}
