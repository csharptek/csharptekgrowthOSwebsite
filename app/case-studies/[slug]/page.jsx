import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '../../../components/Icon';
import { caseStudies, getSolution, solutionHref } from '../../../data/site';
import { getCaseStudyDetail } from '../../../data/caseStudies';
import '../case-study.css';

export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = caseStudies.find((study) => study.slug === slug);
  const detail = getCaseStudyDetail(slug);
  if (!item) return {};
  const indexable = detail?.published === true;
  const solutionTitle = getSolution(item.solution)?.title || 'Engineering';
  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/case-studies/${slug}` },
    robots: { index: indexable, follow: true },
    openGraph: { title: item.title, description: item.summary, type: 'article', url: `/case-studies/${slug}` }
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const item = caseStudies.find((study) => study.slug === slug);
  if (!item) notFound();
  const detail = getCaseStudyDetail(slug);
  if (!detail) notFound();
  const solution = getSolution(item.solution);
  const initiative = encodeURIComponent(solution?.title || 'Case study');
  const related = caseStudies.filter((study) => study.slug !== slug && study.solution === item.solution).slice(0, 3);
  const others = related.length ? related : caseStudies.filter((study) => study.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": item.title,
    "description": item.summary,
    "url": `/case-studies/${slug}`,
    "isPartOf": { "@type": "WebSite", "url": "https://csharptek.com" },
    "author": { "@type": "Organization", "name": "Csharptek" },
    "publisher": { "@type": "Organization", "name": "Csharptek", "logo": { "@type": "ImageObject", "url": "https://csharptek.com/csharptek-logo.png" } }
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}/>
    <section className="page-hero case-detail-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/case-studies">Case studies</Link><span>/</span>{item.name}</div><span className="eyebrow">{item.label}</span><h1>{item.title}</h1><p>{item.summary}</p><div className="detail-meta"><span>Engineering story</span><span>{solution?.title}</span></div></div></section>

    <div className="wrap"><div className="cs-facts">{detail.facts.map((fact) => <div className="cs-fact" key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}</div></div>

    <div className="wrap">
      <section className="cs-block"><span className="eyebrow">Business challenge</span><h2>The problem behind the build.</h2>{detail.challenge.map((text) => <p key={text}>{text}</p>)}</section>

      <section className="cs-block"><span className="eyebrow">What Csharptek built</span><h2>The system we delivered.</h2>{detail.built.map((text) => <p key={text}>{text}</p>)}</section>

      <section className="cs-block"><span className="eyebrow">Architecture</span><h2>How the parts fit together.</h2><div className="cs-arch-grid">{detail.architecture.map((part, index) => <div className="cs-arch-card" key={part.title}><i>{String(index + 1).padStart(2, '0')}</i><h3>{part.title}</h3><p>{part.text}</p></div>)}</div></section>

      <section className="cs-block content-grid"><div><span className="eyebrow">Engineering details</span><h2>Where the engineering mattered.</h2><ul className="check-list">{detail.engineering.map((point) => <li key={point}><Icon name="check" size={16}/>{point}</li>)}</ul></div><aside className="content-panel"><span className="eyebrow">Integrations</span><h3>Connected systems</h3><div className="tag-list">{detail.integrations.map((name) => <span key={name}>{name}</span>)}</div></aside></section>

      <section className="cs-block"><span className="eyebrow">Results</span><h2>What was delivered.</h2><ul className="check-list">{detail.results.map((point) => <li key={point}><Icon name="check" size={16}/>{point}</li>)}</ul>{detail.resultsNote && <div className="cs-note">{detail.resultsNote}</div>}</section>

      <section className="cs-block"><span className="eyebrow">Technology</span><h2>Built with.</h2><div className="tag-list">{detail.technology.map((name) => <span key={name}>{name}</span>)}</div></section>

      <section className="cs-block content-grid"><div><span className="eyebrow">Related solution</span><h2>{solution?.title}</h2><p>{solution?.short}</p></div><aside className="content-panel"><h3>Explore this solution</h3><p>{solution?.buyer}</p><Link className="button button-dark" href={solutionHref(item.solution)}>View {solution?.title} <Icon name="arrow" size={15}/></Link></aside></section>

      <div className="cs-cta"><div><h3>Have a similar initiative?</h3><p>Talk through the problem and the systems already in place.</p></div><Link className="button" data-track="cta" href={`/contact?initiative=${initiative}`}>Discuss Your Initiative <Icon name="arrow" size={16}/></Link></div>

      <section className="cs-related"><h2>More engineering stories</h2><div className="case-grid">{others.map((study) => <article className="case-card" key={study.slug}><div className="case-body"><span className="case-label">{study.label}</span><h3>{study.title}</h3><p>{study.summary}</p><Link href={`/case-studies/${study.slug}`}>Explore the story <Icon name="arrow" size={15}/></Link></div></article>)}</div></section>
    </div>
    <div style={{height:96}}/>
  </>;
}
