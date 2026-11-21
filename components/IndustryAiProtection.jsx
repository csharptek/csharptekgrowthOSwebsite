import Link from 'next/link';
import Icon from './Icon';
import Faq from './Faq';
import BrandArtwork from './BrandArtwork';
import { industryAiProtection } from '../data/industryAiProtection';
import { createPageMetadata } from '../lib/seo';

export function industryAiMetadata(key) {
  const d = industryAiProtection[key];
  return createPageMetadata({ title: d.seoTitle, description: d.seoDescription, path: d.path, image: false });
}

export default function IndustryAiProtection({ industry }) {
  const d = industryAiProtection[industry];
  const schema = {
    '@context': 'https://schema.org', '@type': 'Service', name: d.seoTitle, description: d.seoDescription,
    provider: { '@type': 'Organization', name: 'Csharptek', url: 'https://www.csharptek.com' },
    url: `https://www.csharptek.com${d.path}`
  };
  return <>
    <section className="page-hero"><div className="wrap page-hero-art-inner"><div className="page-hero-inner">
      <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/industries">Industries</Link><span>/</span>{d.name}</div>
      <span className="eyebrow">{d.eyebrow}</span>
      <h1>{d.h1}</h1>
      <p>{d.supporting}</p>
      <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Link className="button" href="/ai-data-risk-check">Book an AI Data Risk Check <Icon name="arrow" size={16}/></Link>
        <Link className="button button-dark" href="/solutions/ai-data-loss-prevention">How AI leak protection works</Link>
      </div>
    </div><BrandArtwork slug="industry-ai-protection"/></div></section>

    <section className="section"><div className="wrap">
      <div className="section-heading"><span className="eyebrow">Where data leaks</span><h2>How company data reaches AI tools in {d.name.toLowerCase()}.</h2><p>Most of it is people trying to work faster. That is why the answer is control, not a ban.</p></div>
      <div className="step-grid">{d.risks.map(([t, x], i) => <article className="step-card" key={t}><b>{String(i + 1).padStart(2, '0')}</b><h3>{t}</h3><p>{x}</p></article>)}</div>
    </div></section>

    <section className="section section-tint"><div className="wrap content-grid">
      <div><span className="eyebrow">What we put in place</span><h2>Controls built on the Microsoft 365 tools you already use.</h2><p>We start with an AI Data Risk Check, then roll out protection in stages so work is not interrupted.</p><ul className="check-list">{d.controls.map(([t, x]) => <li key={t}><Icon name="check" size={16}/><span><strong>{t}.</strong> {x}</span></li>)}</ul></div>
      <aside className="content-panel"><span className="eyebrow">Who we work with</span><h3>Companies of 20 to 500 people</h3><div className="tag-list">{d.who.map((x) => <span key={x}>{x}</span>)}</div><p>Related: <Link href="/solutions/shadow-ai-discovery">shadow AI discovery</Link>, <Link href="/solutions/ai-governance">AI governance</Link>, <Link href="/solutions/private-ai-workspace">a safe ChatGPT for staff</Link>.</p><Link className="button button-dark" href="/ai-data-risk-check">Start with the risk check <Icon name="arrow" size={15}/></Link></aside>
    </div></section>

    <Faq items={d.faqs} title={`AI data protection for ${d.name.toLowerCase()}: questions`}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}/>
  </>;
}
