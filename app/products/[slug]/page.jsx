import Faq from '../../../components/Faq';
import { productExtra } from '../../../data/productExtra';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '../../../components/Icon';
import { products } from '../../../data/products';
import { capabilities } from '../../../data/capabilities';
import { solutionHref, getSolution } from '../../../data/site';
import RelatedStories from '../../../components/RelatedStories';
import { createPageMetadata } from '../../../lib/seo';

const siteUrl = 'https://www.csharptek.com';

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return product ? createPageMetadata({ title: productExtra[slug]?.seoTitle || product.name, description: product.description, path: `/products/${slug}` }) : {};
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const extra = productExtra[slug];
  const solution = getSolution(product.solution);
  const relatedCapabilities = (product.capabilities || []).map((capabilitySlug) => capabilities.find((item) => item.slug === capabilitySlug)).filter(Boolean);
  const schema = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: product.name, description: product.description, applicationCategory: 'BusinessApplication', operatingSystem: 'Web', publisher: { '@type': 'Organization', name: 'Csharptek', url: siteUrl }, url: `${siteUrl}/products/${slug}` };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}/>
    <section className="page-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span>{product.name}</div><span className="eyebrow">{product.category}</span><h1>{extra?.h1 || product.name}</h1><p>{product.description}</p><div style={{marginTop:28}}><Link className="button" href={`/contact?initiative=${encodeURIComponent(product.name)}`}>Ask about {product.name} <Icon name="arrow" size={16}/></Link></div></div></section>

    <section className="section"><div className="wrap content-grid"><div><span className="eyebrow">What it helps teams do</span><h2>Make a connected workflow easier to run.</h2><p>{product.description} {product.workflowSummary}</p><p><strong>Designed for:</strong> {product.audience}</p></div><aside className="content-panel"><span className="eyebrow">Workflow coverage</span><h3>{product.name} capabilities</h3><ul className="check-list">{product.features.map((feature)=><li key={feature}><Icon name="check" size={16}/>{feature}</li>)}</ul></aside></div></section>

    {extra?.sections?.map((block, i) => <section className={`section${i % 2 === 1 ? ' section-tint' : ''}`} key={block.title}><div className="wrap"><div className="section-heading"><span className="eyebrow">{block.eyebrow}</span><h2>{block.title}</h2><p>{block.intro}</p></div><div className="step-grid">{block.items.map(([t, text], index)=><article className="step-card" key={t}><b>{String(index + 1).padStart(2, '0')}</b><h3>{t}</h3><p>{text}</p></article>)}</div></div></section>)}
    {extra?.faqs && <Faq items={extra.faqs} title={`Questions about ${product.name}`}/>}

    <section className="section section-tint"><div className="wrap"><div className="section-heading"><span className="eyebrow">Product and engineering context</span><h2>Connect the product to the work behind it.</h2><p>When the product needs to fit a larger operating environment, explore the related engineering work.</p></div><div className="solution-grid">
      {solution && <Link className="solution-card" href={solutionHref(product.solution)}><span className="eyebrow">Related solution</span><h3>{solution.title}</h3><p>{solution.short}</p><span className="solution-link">Explore the solution <Icon name="arrow" size={15}/></span></Link>}
      {relatedCapabilities.map((capability)=><Link className="solution-card" href={`/capabilities/${capability.slug}`} key={capability.slug}><span className="eyebrow">Engineering capability</span><h3>{capability.title}</h3><p>{capability.description}</p><span className="solution-link">Explore this capability <Icon name="arrow" size={15}/></span></Link>)}
    </div></div></section>

    <RelatedStories slugs={product.caseStudies} title={`Engineering experience related to ${product.name}`} intro="See the product, integration and workflow patterns behind related Csharptek engagements."/>
    <section className="section section-dark"><div className="wrap footer-cta"><div><span className="eyebrow eyebrow-light">Product inquiry</span><h2>See whether {product.name} fits your workflow.</h2><p>Share the context, systems and users involved. We’ll connect you with current product information.</p></div><Link className="button button-light" href={`/contact?initiative=${encodeURIComponent(product.name)}`}>Ask about {product.name} <Icon name="arrow" size={16}/></Link></div></section>
  </>;
}
