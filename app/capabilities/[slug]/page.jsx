import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '../../../components/Icon';
import { capabilities } from '../../../data/capabilities';

export function generateStaticParams() { return capabilities.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = capabilities.find((capability) => capability.slug === slug);
  return item ? { title: item.title, description: item.description, alternates: { canonical: `/capabilities/${slug}` } } : {};
}

export default async function CapabilityPage({ params }) {
  const { slug } = await params;
  const item = capabilities.find((capability) => capability.slug === slug);
  if (!item) notFound();
  const solutionHref = item.solution === 'application-cloud-modernization' ? '/azure-app-modernization-services' : `/solutions/${item.solution}`;
  return <><section className="page-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/capabilities">Capabilities</Link><span>/</span>{item.title}</div><span className="eyebrow">Engineering capability</span><h1>{item.title}</h1><p>{item.description}</p><div style={{marginTop:28}}><Link className="button" href={`/contact?initiative=${encodeURIComponent(item.title)}`}>Discuss an initiative <Icon name="arrow" size={16}/></Link></div></div></section><section className="section"><div className="wrap content-grid"><div><span className="eyebrow">How this capability helps</span><h2>Apply the right depth to the problem in front of you.</h2><p>We bring these capabilities into larger product, AI, workflow and modernization initiatives. The work starts with your objective and existing environment, then connects technical decisions to a clear delivery path.</p></div><aside className="content-panel"><span className="eyebrow">Areas of practice</span><h3>{item.title}</h3><ul className="check-list">{item.areas.map((area)=><li key={area}><Icon name="check" size={16}/>{area}</li>)}</ul><Link className="button button-dark" href={solutionHref}>See the related solution <Icon name="arrow" size={15}/></Link></aside></div></section>{item.stack && <section className="section section-tint"><div className="wrap"><div className="section-heading"><span className="eyebrow">Typical technology</span><h2>The tools we work with.</h2></div><div className="tag-list">{item.stack.map((t)=><span key={t}>{t}</span>)}</div></div></section>}</>;
}
