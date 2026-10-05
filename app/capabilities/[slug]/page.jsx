import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '../../../components/Icon';
import BrandArtwork from '../../../components/BrandArtwork';
import RelatedStories from '../../../components/RelatedStories';
import { capabilities } from '../../../data/capabilities';
import { solutionHref as getSolutionHref, getSolution } from '../../../data/site';

const siteUrl = 'https://www.csharptek.com';

export function generateStaticParams() { return capabilities.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = capabilities.find((capability) => capability.slug === slug);
  return item ? { title: item.title, description: item.description, alternates: { canonical: `/capabilities/${slug}` }, openGraph: { title: `${item.title} | Csharptek`, description: item.description, type: 'website' } } : {};
}

export default async function CapabilityPage({ params }) {
  const { slug } = await params;
  const item = capabilities.find((capability) => capability.slug === slug);
  if (!item) notFound();
  const solutionUrl = getSolutionHref(item.solution);
  const solution = getSolution(item.solution);
  const schema = { '@context': 'https://schema.org', '@type': 'Service', name: item.title, serviceType: item.title, description: item.description, provider: { '@type': 'Organization', name: 'Csharptek', url: siteUrl }, url: `${siteUrl}/capabilities/${slug}` };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}/>
    <section className="page-hero"><div className="wrap page-hero-art-inner"><div className="page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/capabilities">Capabilities</Link><span>/</span>{item.title}</div><span className="eyebrow">Engineering capability</span><h1>{item.title}</h1><p>{item.description}</p><div style={{marginTop:28}}><Link className="button" href={`/contact?initiative=${encodeURIComponent(item.title)}`}>Discuss an initiative <Icon name="arrow" size={16}/></Link></div></div><BrandArtwork slug={item.slug}/></div></section>

    <section className="section"><div className="wrap content-grid"><div><span className="eyebrow">Where this capability fits</span><h2>Apply the right depth to the problem in front of you.</h2><p>Teams rarely need a capability in isolation. We connect it to the product, data, identity, cloud and operating context already in place, then agree on a delivery path that fits the initiative.</p><ul className="check-list">{item.areas.map((area)=><li key={area}><Icon name="check" size={16}/>{area}</li>)}</ul></div><aside className="content-panel"><span className="eyebrow">Related solution</span><h3>{solution?.title}</h3><p>{solution?.short}</p><p>Use this capability when the initiative needs focused engineering depth within a wider product or operational outcome.</p><Link className="button button-dark" href={solutionUrl}>Explore {solution?.title} <Icon name="arrow" size={15}/></Link></aside></div></section>

    {item.applications?.length > 0 && <section className="section section-tint"><div className="wrap"><div className="section-heading"><span className="eyebrow">Typical applications</span><h2>Work that benefits from this capability.</h2><p>These are practical patterns we can scope around your systems and constraints.</p></div><div className="step-grid">{item.applications.map((text, index)=><article className="step-card" key={text}><b>0{index + 1}</b><p>{text}</p></article>)}</div></div></section>}

    {item.stack && <section className="section"><div className="wrap content-grid"><div><span className="eyebrow">Technology context</span><h2>Choose tools around the system, not the other way around.</h2><p>The exact stack depends on the application, data, security and operating needs. These technologies are examples of the environments this capability can involve.</p></div><div className="tag-list">{item.stack.map((technology)=><span key={technology}>{technology}</span>)}</div></div></section>}

    <RelatedStories slugs={item.caseStudies} title={`Examples connected to ${item.title.toLowerCase()}`} />
    <section className="section section-dark"><div className="wrap footer-cta"><div><span className="eyebrow eyebrow-light">Connect capability to outcome</span><h2>Bring us the system or workflow you need to move forward.</h2><p>We’ll help identify the right technical work and how it connects to your broader initiative.</p></div><Link className="button button-light" href={`/contact?initiative=${encodeURIComponent(item.title)}`}>Discuss your initiative <Icon name="arrow" size={16}/></Link></div></section>
  </>;
}
