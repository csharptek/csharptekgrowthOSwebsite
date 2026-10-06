import Link from 'next/link';
import Image from 'next/image';
import Icon from '../../components/Icon';
import { caseStudies, solutions } from '../../data/site';
import { getCaseStudyDetail } from '../../data/caseStudies';
import './case-study.css';
import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata({ title: 'Software Engineering Case Studies', description: 'Explore selected Csharptek case studies in AI product development, workflow automation, healthcare technology, Azure modernization and SaaS commerce.', path: '/case-studies' });

const icons = { 'ai-production-engineering': 'spark', 'ai-product-engineering': 'layers', 'intelligent-workflow-automation': 'flow', 'application-cloud-modernization': 'orbit', 'healthcare-ai-automation': 'plus', 'microsoft-marketplace-engineering': 'grid' };

export default function CaseStudiesPage() {
  const groups = solutions.map((solution) => ({ solution, items: caseStudies.filter((item) => item.solution === solution.slug) })).filter((group) => group.items.length);
  return <>
    <section className="page-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span>Case studies</div><span className="eyebrow">Project work, connected to buyer problems</span><h1>See what it takes to make ambitious technology work.</h1><p>Explore the systems, integrations and product decisions behind selected engineering engagements.</p></div></section>
    <section className="section"><div className="wrap">
      {groups.map(({ solution, items }) => <div key={solution.slug} style={{ marginBottom: 64 }}>
        <div className="section-heading" style={{ marginBottom: 24 }}><span className="eyebrow">Selected work</span><h2>{solution.title} case studies</h2><p>{solution.short}</p></div>
        <div className="case-grid">{items.map((item) => {
          const detail = getCaseStudyDetail(item.slug);
          return <article className="case-card" key={item.slug}><Link className="case-art-link" href={`/case-studies/${item.slug}`} aria-label={`Explore ${item.name}`}><div className="case-art"><Image src={`/images/brand/case-${item.slug}.png`} alt={`Illustrative artwork representing ${item.name} engineering work.`} width={1152} height={896} sizes="(max-width: 760px) 50vw, 33vw"/><span className="case-art-mark"><Icon name={icons[item.solution] || 'spark'} size={19}/></span><span className="case-art-label">{item.name}</span></div></Link><div className="case-body"><Link className="case-label case-topic-link" href={`/case-studies/${item.slug}`}>{item.label}</Link><h3><Link className="case-title-link" href={`/case-studies/${item.slug}`}>{item.title}</Link></h3><p>{item.summary}</p>{detail && <div className="tag-list" style={{ marginBottom: 16 }}>{detail.technology.slice(0, 4).map((name) => <span key={name}>{name}</span>)}</div>}<Link href={`/case-studies/${item.slug}`}>Explore the story <Icon name="arrow" size={15}/></Link></div></article>;
        })}</div>
      </div>)}
    </div></section>
  </>;
}
