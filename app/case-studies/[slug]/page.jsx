import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '../../../components/Icon';
import { caseStudies, getSolution } from '../../../data/site';

export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = caseStudies.find((study) => study.slug === slug);
  return item ? { title: item.title, description: item.summary, alternates: { canonical: `/case-studies/${slug}` }, robots: { index: false, follow: true } } : {};
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const item = caseStudies.find((study) => study.slug === slug);
  if (!item) notFound();
  const solution = getSolution(item.solution);
  return <><section className="page-hero case-detail-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/case-studies">Case studies</Link><span>/</span>{item.name}</div><span className="eyebrow">{item.label}</span><h1>{item.title}</h1><p>{item.summary}</p><div className="detail-meta"><span>Engineering story</span><span>{solution?.title}</span></div></div></section><section className="section"><div className="wrap content-grid"><div><span className="eyebrow">The engineering challenge</span><h2>A system is only useful when its parts work together.</h2><p>{item.summary} The supplied project notes describe product and systems engineering across the workflows, integrations and operating constraints needed to make that work practical.</p><p>We’re shaping this story around the business challenge, existing environment, architecture, engineering decisions and the operational details behind delivery.</p><ul className="check-list"><li><Icon name="check" size={16}/>The product and workflow context</li><li><Icon name="check" size={16}/>The architecture and system boundaries</li><li><Icon name="check" size={16}/>The integrations and delivery decisions</li><li><Icon name="check" size={16}/>Verified outcomes where evidence is available</li></ul></div><aside className="content-panel"><span className="eyebrow">Related solution</span><h3>{solution?.title}</h3><p>{solution?.short}</p><Link className="button button-dark" href={item.solution === 'application-cloud-modernization' ? '/azure-app-modernization-services' : item.solution === 'microsoft-marketplace-engineering' ? '/services/marketplace' : `/solutions/${item.solution}`}>Explore this solution <Icon name="arrow" size={15}/></Link></aside></div></section></>;
}
