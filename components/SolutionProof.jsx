import Link from 'next/link';
import Icon from './Icon';
import { caseStudies, solutionCases } from '../data/site';

export default function SolutionProof({ slug }) {
  const items = (solutionCases[slug] || []).map((id) => caseStudies.find((study) => study.slug === id)).filter(Boolean);
  if (!items.length) return null;
  return <section className="section section-dark"><div className="wrap"><div className="section-heading"><span className="eyebrow eyebrow-light">Related engineering experience</span><h2>Relevant proof, grounded in the work.</h2><p>Selected engagements that show how this kind of initiative gets built.</p></div><div className="proof-list proof-list-3">{items.map((item) => <Link className="proof-card proof-card-link" key={item.slug} href={`/case-studies/${item.slug}`}><span className="proof-symbol"><Icon name="spark" size={15}/></span><h3>{item.title}</h3><p>{item.summary}</p><span className="proof-more">Read the story <Icon name="arrow" size={13}/></span></Link>)}</div></div></section>;
}
