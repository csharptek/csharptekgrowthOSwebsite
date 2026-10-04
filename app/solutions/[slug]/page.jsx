import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import Icon from '../../../components/Icon';
import SolutionProof from '../../../components/SolutionProof';
import { getSolution, solutions } from '../../../data/site';

export function generateStaticParams() {
  return solutions.filter((item) => !['application-cloud-modernization', 'microsoft-marketplace-engineering'].includes(item.slug)).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  return solution ? { title: solution.title, description: solution.description, alternates: { canonical: `/solutions/${slug}` }, openGraph: { title: `${solution.title} | Csharptek`, description: solution.description, images: ['/opengraph-image'] }, twitter: { card: 'summary_large_image', title: `${solution.title} | Csharptek`, description: solution.description, images: ['/opengraph-image'] } } : {};
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (slug === 'application-cloud-modernization') redirect('/azure-app-modernization-services');
  if (slug === 'microsoft-marketplace-engineering') redirect('/services/marketplace');
  if (!solution) notFound();
  return <>
    <section className="page-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/solutions">Solutions</Link><span>/</span>{solution.title}</div><span className="eyebrow">{solution.eyebrow}</span><h1>{solution.h1}</h1><p>{solution.supporting}</p><div style={{marginTop:28}}><Link className="button" href={`/contact?initiative=${encodeURIComponent(solution.title)}`}>{solution.cta} <Icon name="arrow" size={16}/></Link></div></div></section>
    <section className="section"><div className="wrap content-grid"><div><span className="eyebrow">The initiative</span><h2>Move from a difficult technology challenge to a system your teams can use.</h2><p>{solution.buyer} We begin with the business context and the systems already in place, then shape a delivery path around what needs to work.</p><ul className="check-list">{solution.capabilities.map((capability) => <li key={capability}><Icon name="check" size={16}/>{capability}</li>)}</ul><Link className="text-link" href="/case-studies">Explore relevant engineering stories <Icon name="arrow" size={15}/></Link></div><aside className="content-panel"><span className="eyebrow">Where we can help</span><h3>Engineering across the system</h3><div className="tag-list">{solution.capabilities.map((item) => <span key={item}>{item}</span>)}</div><p>Engagements can start with a focused discovery and readiness phase when the best technical path needs to be established.</p><Link className="button button-dark" href={`/contact?initiative=${encodeURIComponent(solution.title)}`}>Talk through the initiative <Icon name="arrow" size={15}/></Link></aside></div></section>
    <SolutionProof slug={solution.slug} />
  </>;
}
