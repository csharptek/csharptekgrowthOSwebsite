import Link from 'next/link';
import Icon from '../../../components/Icon';
import Faq from '../../../components/Faq';
import SolutionProof from '../../../components/SolutionProof';
import { getSolution } from '../../../data/site';

const solution = getSolution('microsoft-marketplace-engineering');
const steps = [
  ['Plan the offer', 'Choose the offer type and pricing model, and define the technical requirements around your product.'],
  ['Build fulfillment', 'Landing page, subscription webhooks and provisioning that handle purchase, change and cancellation.'],
  ['Add metering', 'Report usage to Microsoft with the SaaS metering service for usage-based plans.'],
  ['Connect identity', 'Entra ID sign-in and entitlement flows so purchasers become active users.'],
  ['Configure and certify', 'Partner Center setup, technical configuration and support through certification.'],
  ['Launch and operate', 'Go live, monitor the subscription lifecycle and evolve the integration.']
];
const faqs = [
  ['What does Marketplace engineering involve?', 'The technical components that connect your SaaS product to Microsoft’s commerce platform: fulfillment and subscription lifecycle, metering, identity and Partner Center configuration.'],
  ['Do we need to rebuild our product?', 'Usually not. We add the fulfillment and metering layer around your existing product architecture.'],
  ['Can you help with certification?', 'Yes. We support the technical validation steps and the fixes that come out of Microsoft’s review.'],
  ['How long does it take?', 'It depends on the offer and your product. A short discovery clarifies scope and a realistic path before delivery begins.']
];
export const metadata = { title: solution.title, description: solution.description, alternates: { canonical: '/services/marketplace' } };

export default function MarketplacePage() {
  return <><section className="page-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/solutions">Solutions</Link><span>/</span>{solution.title}</div><span className="eyebrow">{solution.eyebrow}</span><h1>{solution.h1}</h1><p>{solution.supporting}</p><div style={{marginTop:28}}><Link className="button" href={`/contact?initiative=${encodeURIComponent(solution.title)}`}>{solution.cta} <Icon name="arrow" size={16}/></Link></div></div></section><section className="section"><div className="wrap content-grid"><div><span className="eyebrow">SaaS commerce</span><h2>Build the technical layer behind a Marketplace offer.</h2><p>{solution.buyer} Fulfillment, metering, identity and subscription lifecycle need to work together with your SaaS product and operating model.</p><ul className="check-list">{solution.capabilities.map((item)=><li key={item}><Icon name="check" size={16}/>{item}</li>)}</ul></div><aside className="content-panel"><span className="eyebrow">Marketplace engineering</span><h3>From entitlement to customer-ready service</h3><p>Connect provisioning, subscription changes and metered usage to the product so customers can purchase and use your offer with less friction.</p><div className="tag-list">{solution.capabilities.map((item)=><span key={item}>{item}</span>)}</div><Link className="button button-dark" href={`/contact?initiative=${encodeURIComponent(solution.title)}`}>Talk through Marketplace <Icon name="arrow" size={15}/></Link></aside></div></section><section className="section section-tint"><div className="wrap"><div className="section-heading"><span className="eyebrow">From offer to launch</span><h2>The path to a live Marketplace offer.</h2></div><div className="step-grid">{steps.map(([t,d],i)=><div className="step-card" key={t}><b>0{i+1}</b><h3>{t}</h3><p>{d}</p></div>)}</div></div></section><SolutionProof slug={solution.slug} /><Faq items={faqs}/></>;
}
