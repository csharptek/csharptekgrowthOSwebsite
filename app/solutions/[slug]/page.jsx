import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import Icon from '../../../components/Icon';
import BrandArtwork from '../../../components/BrandArtwork';
import SolutionProof from '../../../components/SolutionProof';
import SolutionContent from '../../../components/SolutionContent';
import { getSolution, solutions } from '../../../data/site';
import { capabilities } from '../../../data/capabilities';
import { solutionExtra } from '../../../data/solutionExtra';

export function generateStaticParams() {
  return solutions.filter((item) => !['application-cloud-modernization', 'microsoft-marketplace-engineering'].includes(item.slug)).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  const extra = solutionExtra[slug];
  const seoTitle = extra?.seoTitle || solution?.title;
  const seoDescription = extra?.seoDescription || solution?.description;
  return solution ? { title: seoTitle, description: seoDescription, alternates: { canonical: `/solutions/${slug}` }, openGraph: { title: `${seoTitle} | Csharptek`, description: seoDescription, images: ['/opengraph-image'] }, twitter: { card: 'summary_large_image', title: `${seoTitle} | Csharptek`, description: seoDescription, images: ['/opengraph-image'] } } : {};
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (slug === 'application-cloud-modernization') redirect('/azure-app-modernization-services');
  if (slug === 'microsoft-marketplace-engineering') redirect('/services/marketplace');
  if (!solution) notFound();
  const relatedCapabilities = capabilities.filter((item) => item.solution === solution.slug);
  const siteUrl = 'https://www.csharptek.com';
  const schema = {
    '@context': 'https://schema.org', '@type': 'Service', name: solution.title,
    serviceType: solution.title, description: solution.description,
    provider: { '@type': 'Organization', name: 'Csharptek', url: siteUrl },
    url: `${siteUrl}/solutions/${solution.slug}`
  };
  const safeSchema = JSON.stringify(schema).replace(/</g, '\\u003c');
  return <>
    <section className="page-hero"><div className="wrap page-hero-art-inner"><div className="page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/solutions">Solutions</Link><span>/</span>{solution.title}</div><span className="eyebrow">{solution.eyebrow}</span><h1>{solution.h1}</h1><p>{solution.supporting}</p><div style={{marginTop:28}}><Link className="button" href={`/contact?initiative=${encodeURIComponent(solution.title)}`}>{solution.cta} <Icon name="arrow" size={16}/></Link></div></div><BrandArtwork slug={solution.slug}/></div></section>
    <section className="section"><div className="wrap content-grid"><div><span className="eyebrow">The initiative</span><h2>Move from a difficult technology challenge to a system your teams can use.</h2><p>{solution.buyer} We begin with the business context and the systems already in place, then shape a delivery path around what needs to work.</p><ul className="check-list">{solution.capabilities.map((capability) => <li key={capability}><Icon name="check" size={16}/>{capability}</li>)}</ul><Link className="text-link" href="/case-studies">Explore relevant engineering stories <Icon name="arrow" size={15}/></Link></div><aside className="content-panel"><span className="eyebrow">Where we can help</span><h3>Engineering across the system</h3><div className="tag-list">{solution.capabilities.map((item) => <span key={item}>{item}</span>)}</div><p>Engagements can start with a focused discovery and readiness phase when the best technical path needs to be established.</p><Link className="button button-dark" href={`/contact?initiative=${encodeURIComponent(solution.title)}`}>Talk through the initiative <Icon name="arrow" size={15}/></Link></aside></div></section>
    <SolutionContent solution={solution} capabilities={relatedCapabilities}/>
    <SolutionProof slug={solution.slug} />
    {relatedCapabilities.length > 0 && <section className="section-tight"><div className="wrap"><div className="section-heading"><span className="eyebrow">Connected capabilities</span><h2>The disciplines that make this work.</h2><p>Explore the specific engineering capabilities that support this solution.</p></div><div className="solution-grid">{relatedCapabilities.map((item) => <Link className="solution-card" key={item.slug} href={`/capabilities/${item.slug}`}><h3>{item.title}</h3><p>{item.description}</p><span className="solution-link">Explore capability <Icon name="arrow" size={15}/></span></Link>)}</div></div></section>}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeSchema }}/>
  </>;
}
