import Link from 'next/link';
import Icon from '../../components/Icon';
import SolutionProof from '../../components/SolutionProof';
import { getSolution } from '../../data/site';

const solution = getSolution('application-cloud-modernization');
export const metadata = { title: solution.title, description: solution.description, alternates: { canonical: '/azure-app-modernization-services' } };

export default function ModernizationPage() {
  return <><section className="page-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/solutions">Solutions</Link><span>/</span>{solution.title}</div><span className="eyebrow">{solution.eyebrow}</span><h1>{solution.h1}</h1><p>{solution.supporting}</p><div style={{marginTop:28}}><Link className="button" href={`/contact?initiative=${encodeURIComponent(solution.title)}`}>{solution.cta} <Icon name="arrow" size={16}/></Link></div></div></section><section className="section"><div className="wrap content-grid"><div><span className="eyebrow">Modernize with intent</span><h2>Improve the systems you already depend on.</h2><p>{solution.buyer} Azure is a platform, not a business trigger by itself. We focus on the concrete reliability, delivery, integration or product need that makes modernization worthwhile.</p><ul className="check-list">{solution.capabilities.map((item)=><li key={item}><Icon name="check" size={16}/>{item}</li>)}</ul></div><aside className="content-panel"><span className="eyebrow">Practical path</span><h3>Modernization without a rewrite by default</h3><p>We map the current estate, identify the highest-value constraints and sequence changes that improve the system without putting business continuity at unnecessary risk.</p><div className="tag-list">{solution.capabilities.map((item)=><span key={item}>{item}</span>)}</div><Link className="button button-dark" href={`/contact?initiative=${encodeURIComponent(solution.title)}`}>Talk through modernization <Icon name="arrow" size={15}/></Link></aside></div></section><SolutionProof slug={solution.slug} /></>;
}
