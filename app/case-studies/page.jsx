import Link from 'next/link';
import Icon from '../../components/Icon';
import { caseStudies } from '../../data/site';

export const metadata = { title: 'Case Studies', description: 'Explore selected Csharptek product, AI, workflow and marketplace engineering stories.', alternates: { canonical: '/case-studies' } };

export default function CaseStudiesPage() {
  const icons = ['spark','layers','flow','grid','plus','orbit'];
  return <><section className="page-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span>Case studies</div><span className="eyebrow">Project work, connected to buyer problems</span><h1>See what it takes to make ambitious technology work.</h1><p>Explore the systems, integrations and product decisions behind selected engineering engagements.</p></div></section><section className="section"><div className="wrap"><div className="case-grid">{caseStudies.map((item, i) => <article className="case-card" key={item.slug}><div className="case-art"><span className="case-art-mark"><Icon name={icons[i % icons.length]} size={19}/></span><span className="case-art-label">{item.name}</span></div><div className="case-body"><span className="case-label">{item.label}</span><h3>{item.title}</h3><p>{item.summary}</p><Link href={`/case-studies/${item.slug}`}>Explore the story <Icon name="arrow" size={15}/></Link></div></article>)}</div></div></section></>;
}
