import Link from 'next/link';
import Icon from '../../components/Icon';
import { capabilities } from '../../data/capabilities';

export const metadata = { title: 'Engineering Capabilities', description: 'AI, product, Azure, .NET, cloud, DevOps, data and integration engineering.' };

export default function CapabilitiesPage() {
  return <><section className="page-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span>Capabilities</div><span className="eyebrow">The engineering behind the outcome</span><h1>Depth across the systems your initiative depends on.</h1><p>Connect the capabilities you need to the solution, product and operating environment you already have.</p></div></section><section className="section"><div className="wrap solution-grid">{capabilities.map((item)=><Link className="solution-card" href={`/capabilities/${item.slug}`} key={item.slug}><span className="eyebrow">Engineering capability</span><h3>{item.title}</h3><p>{item.description}</p><span className="solution-link">Explore capability <Icon name="arrow" size={15}/></span></Link>)}</div></section></>;
}
