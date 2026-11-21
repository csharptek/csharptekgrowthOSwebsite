import Link from 'next/link';
import Icon from '../../components/Icon';
import Faq from '../../components/Faq';
import { fdePackages } from '../../data/fdePackages';
import { createPageMetadata } from '../../lib/seo';

const siteUrl = 'https://www.csharptek.com';

export const metadata = createPageMetadata({
  title: 'Forward-Deployed Engineers and Developers',
  description: 'Hire a forward-deployed engineer, an FDE pod, a dedicated React, .NET or full-stack developer, or a small dev team. Fixed monthly packages, inside your team.',
  path: '/forward-deployed-engineers'
});

const steps = [
  ['15-minute call', 'You tell us the role, the stack and the customers waiting.'],
  ['Engineer profile', 'We share the engineer we would place, with relevant work.'],
  ['Intro call', 'You meet the engineer before anything starts.'],
  ['Start in your team', 'Your tools, your standups, your customers. Monthly, with notice.']
];

const faqs = [
  ['What does a forward-deployed engineer do?', 'A forward-deployed engineer works with your customers to get your product running in their environment: setup, integrations, data, go-live and the fixes that come up on the way. Ours work inside your team and your tools.'],
  ['Can you cover an open FDE role while we hire?', 'Yes. Most clients start that way. When your hire joins, the engineer hands over and either rolls off or stays on as extra capacity.'],
  ['Which stacks do your engineers cover?', 'Azure, .NET and C#, React, Node.js and Python, plus AI integrations on Azure OpenAI and other model providers.'],
  ['Which time zones do you work with?', 'US, UK, Europe and Australia. Every engagement has a daily overlap window agreed up front.'],
  ['Is there a long contract?', 'No. Packages are monthly with a notice period. You can scale up or down.']
];

export default function FdePage() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'Service', name: 'Forward-deployed engineers and dedicated developers', serviceType: 'Staff augmentation',
    provider: { '@type': 'Organization', name: 'Csharptek', url: siteUrl }, url: `${siteUrl}/forward-deployed-engineers`,
    hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Engagement packages', itemListElement: fdePackages.map((p) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: p.name, description: p.summary } })) }
  };
  return <>
    <section className="page-hero"><div className="wrap page-hero-inner">
      <div className="breadcrumb"><Link href="/">Home</Link><span>/</span>Forward-deployed engineers</div>
      <span className="eyebrow">Engineers inside your team</span>
      <h1>Forward-deployed engineers and dedicated developers, on four fixed packages.</h1>
      <p>Hiring an FDE or a developer takes months, and customer deployments don’t wait. We place senior engineers inside your team to cover the gap while you hire, or to add capacity after.</p>
      <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Link className="button" href="/book-a-call?topic=Forward-deployed%20engineers" data-track="cta">Book a 15-minute call <Icon name="arrow" size={16}/></Link>
        <a className="button button-dark" href="#packages">See the packages</a>
      </div>
    </div></section>

    <section className="section" id="packages"><div className="wrap">
      <div className="section-heading"><span className="eyebrow">Packages</span><h2>Pick the shape of help you need.</h2><p>Every package is monthly, works in your tools and starts with an intro call with the engineer.</p></div>
      <div className="solution-grid fde-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        {fdePackages.map((p) => <div className="solution-card" id={p.id} key={p.key} style={{ minHeight: 0 }}>
          <div className="solution-top"><span className="solution-number">PACKAGE</span><span className="solution-card-icon"><Icon name={p.icon} size={19}/></span></div>
          <h3>{p.name}</h3>
          <p style={{ fontWeight: 600, marginBottom: 10 }}>{p.who}</p>
          <p>{p.summary}</p>
          <ul className="check-list" style={{ margin: '16px 0 0' }}>{p.includes.map((x) => <li key={x}><Icon name="check" size={15}/>{x}</li>)}</ul>
          <Link className="solution-link" href={`/book-a-call?topic=${encodeURIComponent(p.name)}`} data-track="cta">Talk about this package <Icon name="arrow" size={15}/></Link>
        </div>)}
      </div>
    </div></section>

    <section className="section-tight"><div className="wrap content-grid">
      <div><span className="eyebrow">How it starts</span><h2>From call to engineer in your standup.</h2>
        <ul className="check-list">{steps.map(([t, d]) => <li key={t}><Icon name="check" size={16}/><span><strong>{t}.</strong> {d}</span></li>)}</ul>
      </div>
      <aside className="content-panel"><span className="eyebrow">Why Csharptek</span><h3>Microsoft-certified engineers, used to customer-facing work</h3>
        <p>Our engineers have shipped Azure, .NET and AI integrations for SaaS companies, agencies and product teams in the US, UK, Europe and the Middle East. See <Link href="/case-studies">case studies</Link> or the <Link href="/solutions/agency-development-partner">agency and MSP partner</Link> model.</p>
        <Link className="button button-dark" href="/book-a-call?topic=Forward-deployed%20engineers">Book a call <Icon name="arrow" size={15}/></Link>
      </aside>
    </div></section>

    <Faq items={faqs} title="Questions about FDE and dedicated developers"/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}/>
  </>;
}
