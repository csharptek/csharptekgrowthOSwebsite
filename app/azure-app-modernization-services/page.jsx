import Link from 'next/link';
import Icon from '../../components/Icon';
import SolutionProof from '../../components/SolutionProof';
import Faq from '../../components/Faq';
import RelatedStories from '../../components/RelatedStories';
import SolutionContent from '../../components/SolutionContent';
import { getSolution } from '../../data/site';
import { capabilities } from '../../data/capabilities';

const solution = getSolution('application-cloud-modernization');
const faqs = [
  ['Does modernization mean rewriting the application?', 'Not by default. The modernization path can focus on the highest-value constraints in the current application, architecture, APIs or delivery process.'],
  ['Can we modernize while keeping existing systems in use?', 'The work is planned around the applications and workflows your business depends on. Discovery helps identify dependencies and sequence improvements around operational needs.'],
  ['What should we assess first?', 'Start with the business goal, the systems involved, the main reliability or delivery constraints, and the integrations that must keep working.'],
  ['Can cloud and application work be handled together?', 'Yes. Application architecture, Azure services, identity, integrations and deployment practices can be considered together when they affect the same initiative.']
];
export const metadata = { title: solution.title, description: solution.description, alternates: { canonical: '/azure-app-modernization-services' }, openGraph: { title: `${solution.title} | Csharptek`, description: solution.description, images: ['/opengraph-image'] }, twitter: { card: 'summary_large_image', title: `${solution.title} | Csharptek`, description: solution.description, images: ['/opengraph-image'] } };

export default function ModernizationPage() {
  const relatedCapabilities = capabilities.filter((item) => item.solution === solution.slug);
  return <><section className="page-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/solutions">Solutions</Link><span>/</span>{solution.title}</div><span className="eyebrow">{solution.eyebrow}</span><h1>{solution.h1}</h1><p>{solution.supporting}</p><div style={{marginTop:28}}><Link className="button" href={`/contact?initiative=${encodeURIComponent(solution.title)}`}>{solution.cta} <Icon name="arrow" size={16}/></Link></div></div></section><section className="section"><div className="wrap content-grid"><div><span className="eyebrow">Modernize with intent</span><h2>Improve the systems you already depend on.</h2><p>{solution.buyer} Azure is a platform, not a business trigger by itself. We focus on the concrete reliability, delivery, integration or product need that makes modernization worthwhile.</p><ul className="check-list">{solution.capabilities.map((item)=><li key={item}><Icon name="check" size={16}/>{item}</li>)}</ul><p>Explore the supporting disciplines: <Link className="text-link" href="/capabilities/dotnet">.NET engineering</Link>, <Link className="text-link" href="/capabilities/azure">Azure engineering</Link> and <Link className="text-link" href="/capabilities/cloud-devops">cloud and DevOps</Link>.</p></div><aside className="content-panel"><span className="eyebrow">Practical path</span><h3>Modernization without a rewrite by default</h3><p>We map the current estate, identify the highest-value constraints and sequence changes that improve the system without putting business continuity at unnecessary risk.</p><div className="tag-list">{solution.capabilities.map((item)=><span key={item}>{item}</span>)}</div><Link className="button button-dark" href={`/contact?initiative=${encodeURIComponent(solution.title)}`}>Talk through modernization <Icon name="arrow" size={15}/></Link></aside></div></section><SolutionContent solution={solution} capabilities={relatedCapabilities} includeFaq={false}/><SolutionProof slug={solution.slug}/><RelatedStories slugs={['dotnet-azure-modernization','travel-data-ai']} title="Modernization in practice" intro="See related work across established .NET applications, Azure architecture and delivery environments."/><Faq items={faqs}/></>;
}
