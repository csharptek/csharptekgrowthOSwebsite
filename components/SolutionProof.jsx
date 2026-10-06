import Link from 'next/link';
import Icon from './Icon';
import { caseStudies, solutionCases } from '../data/site';

export default function SolutionProof({ slug }) {
  const items = (solutionCases[slug] || []).map((id) => caseStudies.find((study) => study.slug === id)).filter(Boolean);
  if (!items.length) return null;
  return <section className="section section-dark"><div className="wrap"><div className="section-heading"><span className="eyebrow eyebrow-light">Related case studies</span><h2>See this work in practice.</h2><p>Explore projects that show how we’ve approached similar product, AI and platform challenges.</p></div><div className="proof-list proof-list-3">{items.map((item) => <Link className="proof-card proof-card-link" key={item.slug} href={`/case-studies/${item.slug}`}><span className="proof-symbol"><Icon name="spark" size={15}/></span><h3>{item.title}</h3><p>{item.summary}</p><span className="proof-more">Read the story <Icon name="arrow" size={13}/></span></Link>)}</div></div></section>;
}
