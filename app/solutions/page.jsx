import Link from 'next/link';
import Icon from '../../components/Icon';
import BrandArtwork from '../../components/BrandArtwork';
import SolutionCardArtwork from '../../components/SolutionCardArtwork';
import { solutions } from '../../data/site';

export const metadata = { title: 'Solutions', description: 'AI, product engineering, workflow automation, modernization, healthcare and Microsoft Marketplace engineering for established teams.', alternates: { canonical: '/solutions' } };

export default function SolutionsPage() {
  return <><section className="page-hero"><div className="wrap page-hero-art-inner"><div className="page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span>Solutions</div><span className="eyebrow">Start with the business initiative</span><h1>Engineering for what your business needs to move forward.</h1><p>From putting AI to work to modernizing the systems you already rely on, bring us the hard problem and we’ll build the right path through it.</p></div><BrandArtwork slug="solutions-index"/></div></section><section className="section"><div className="wrap"><div className="solution-grid">{solutions.map((item) => <Link className="solution-card" key={item.slug} href={item.slug === 'application-cloud-modernization' ? '/azure-app-modernization-services' : item.slug === 'microsoft-marketplace-engineering' ? '/services/marketplace' : `/solutions/${item.slug}`}><SolutionCardArtwork slug={item.slug}/><div className="solution-top"><span className="solution-number">{item.number} / SOLUTION</span><span className="solution-card-icon"><Icon name={item.icon} size={19}/></span></div><h3>{item.title}</h3><p>{item.short}</p><span className="solution-link">Explore solution <Icon name="arrow" size={15}/></span></Link>)}</div></div></section></>;
}
