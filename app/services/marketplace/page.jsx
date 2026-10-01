import Link from 'next/link';
import Icon from '../../../components/Icon';
import { getSolution } from '../../../data/site';

const solution = getSolution('microsoft-marketplace-engineering');
export const metadata = { title: solution.title, description: solution.description, alternates: { canonical: '/services/marketplace' } };

export default function MarketplacePage() {
  return <><section className="page-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/solutions">Solutions</Link><span>/</span>{solution.title}</div><span className="eyebrow">{solution.eyebrow}</span><h1>{solution.title}</h1><p>{solution.description}</p><div style={{marginTop:28}}><Link className="button" href={`/contact?initiative=${encodeURIComponent(solution.title)}`}>Discuss your initiative <Icon name="arrow" size={16}/></Link></div></div></section><section className="section"><div className="wrap content-grid"><div><span className="eyebrow">SaaS commerce</span><h2>Build the technical layer behind a Marketplace offer.</h2><p>{solution.buyer} Fulfillment, metering, identity and subscription lifecycle need to work together with your SaaS product and operating model.</p><ul className="check-list">{solution.capabilities.map((item)=><li key={item}><Icon name="check" size={16}/>{item}</li>)}</ul></div><aside className="content-panel"><span className="eyebrow">Marketplace engineering</span><h3>From entitlement to customer-ready service</h3><p>Connect provisioning, subscription changes and metered usage to the product so customers can purchase and use your offer with less friction.</p><div className="tag-list">{solution.capabilities.map((item)=><span key={item}>{item}</span>)}</div><Link className="button button-dark" href={`/contact?initiative=${encodeURIComponent(solution.title)}`}>Talk through Marketplace <Icon name="arrow" size={15}/></Link></aside></div></section></>;
}
