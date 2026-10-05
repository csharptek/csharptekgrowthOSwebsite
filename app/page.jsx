import Link from 'next/link';
import Icon from '../components/Icon';
import HeroVisual from '../components/HeroVisual';
import { caseStudies, solutions, trustItems } from '../data/site';
import { products } from '../data/products';

export const metadata = { alternates: { canonical: '/' } };

const intents = [
  { title: 'Put AI into production', text: 'Move AI prototypes, RAG systems and agent initiatives into reliable production systems.', slug: 'ai-production-engineering', icon: 'spark' },
  { title: 'Add AI to your product', text: 'Add practical AI capabilities to products your customers already use.', slug: 'ai-product-engineering', icon: 'layers' },
  { title: 'Automate a complex workflow', text: 'Replace fragmented manual processes with connected, intelligent workflows.', slug: 'intelligent-workflow-automation', icon: 'flow' },
  { title: 'Modernize your applications', text: 'Improve the applications and cloud infrastructure your business already depends on.', href: '/azure-app-modernization-services', icon: 'orbit' }
];

const proof = [
  ['AI', 'Multi-agent revenue platform', 'A coordinated agent system connected to CRM, revenue workflows and SaaS commerce.'],
  ['UX', 'AI marketing product', 'An AI-enabled product with human approvals, integrations and publishing workflows.'],
  ['API', 'Marketplace SaaS commerce', 'Fulfillment, metering and subscription lifecycle engineering for a SaaS offer.'],
  ['RAG', 'Knowledge systems', 'Retrieval, vector search and agent workflows for private knowledge.']
];

export default function HomePage() {
  return <>
    <section className="hero hero-editorial">
      <HeroVisual />
      <div className="hero-inner wrap">
        <div className="hero-copy">
          <div className="hero-eyebrow">AI · Product Engineering · Modernization</div>
          <h1>Turn complex technology initiatives into <em>production-ready</em> systems.</h1>
          <p>Csharptek helps established companies put AI into production, add intelligent capabilities to existing products, automate complex workflows, and modernize applications and cloud infrastructure.</p>
          <div className="hero-actions"><Link className="button" data-track="cta" href="/contact">Discuss Your Initiative</Link><Link className="button button-outline" data-track="cta" href="/case-studies">Explore Our Work</Link></div>
        </div>
      </div>
    </section>

    <div className="trust-row"><div className="trust-inner wrap"><span className="trust-label">Built across a connected stack</span><div className="trust-items">{trustItems.map((item) => <span key={item}>{item}</span>)}</div></div></div>

    <section className="section"><div className="wrap">
      <div className="section-heading"><span className="eyebrow">Start with what needs to change</span><h2>What are you trying to move forward?</h2><p>Choose the outcome you’re working toward. We’ll bring the engineering depth to make it real in your environment.</p></div>
      <div className="intent-grid">{intents.map((item, i) => <Link className="intent-card" key={item.title} href={item.href || `/solutions/${item.slug}`}><span className="card-index">0{i + 1} / INITIATIVE</span><span className="card-icon"><Icon name={item.icon} size={19}/></span><h3>{item.title}</h3><p>{item.text}</p><span className="card-arrow"><Icon name="arrow" size={18}/></span></Link>)}</div>
    </div></section>

    <section className="section section-dark"><div className="wrap proof-layout"><div className="proof-copy"><span className="eyebrow eyebrow-light">Engineering evidence</span><h2>Built for the reality after the prototype.</h2><p>Production work is the architecture, integrations, controls and operating details that make a system useful beyond the demo.</p><Link className="text-link" href="/case-studies">See how we approach the work <Icon name="arrow" size={16}/></Link></div><div className="proof-list">{proof.map(([metric, title, desc]) => <article className="proof-card" key={title}><span className="proof-symbol">{metric}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>

    <section className="section"><div className="wrap"><div className="section-heading"><span className="eyebrow">One accountable engineering partner</span><h2>Six ways to make important technology work harder.</h2><p>Bring us a real initiative. We’ll connect the product, AI, application and cloud decisions around the outcome you need.</p></div><div className="solution-grid">{solutions.map((solution) => <Link className="solution-card" key={solution.slug} href={solution.slug === 'application-cloud-modernization' ? '/azure-app-modernization-services' : solution.slug === 'microsoft-marketplace-engineering' ? '/services/marketplace' : `/solutions/${solution.slug}`}><div className="solution-top"><span className="solution-number">{solution.number} / SOLUTION</span><span className="solution-card-icon"><Icon name={solution.icon} size={19}/></span></div><h3>{solution.title}</h3><p>{solution.short}</p><span className="solution-link">Explore solution <Icon name="arrow" size={15}/></span></Link>)}</div></div></section>

    <section className="section section-tint"><div className="wrap"><div className="section-heading"><span className="eyebrow">Products shaped by delivery experience</span><h2>Product engineering applied to voice and publishing workflows.</h2><p>Explore Csharptek products built around practical communication and content workflows, then see the engineering services and experience connected to each.</p></div><div className="solution-grid">{products.map((product) => <Link className="solution-card" key={product.slug} href={`/products/${product.slug}`}><div className="solution-top"><span className="solution-number">{product.category}</span><span className="solution-card-icon"><Icon name="layers" size={19}/></span></div><h3>{product.name}</h3><p>{product.description}</p><span className="solution-link">Explore product <Icon name="arrow" size={15}/></span></Link>)}</div></div></section>

    <section className="section-tight"><div className="wrap"><div className="feature-band"><div className="feature-copy"><span className="eyebrow">Engineering that connects the whole system</span><h2>Make the hard parts work together.</h2><p>From model orchestration and product workflows to identity, cloud infrastructure and commerce, we engineer the seams that determine whether a solution works in the real world.</p><Link className="button button-dark" href="/about">How we work <Icon name="arrow" size={16}/></Link></div><div className="feature-visual" aria-hidden="true"><span className="feature-orbit-label orbit-label-a">Live integrations</span><span className="feature-orbit-label orbit-label-b">Production operations</span><div className="platform-card"><div className="platform-head"><span>System health</span><span className="status-pill">All systems connected</span></div><div className="platform-row"><b>AI orchestration</b><span className="platform-bar"><i style={{width:'88%'}}/></span></div><div className="platform-row"><b>Product experience</b><span className="platform-bar"><i style={{width:'76%'}}/></span></div><div className="platform-row"><b>Data integrations</b><span className="platform-bar"><i style={{width:'92%'}}/></span></div><div className="platform-row"><b>Cloud operations</b><span className="platform-bar"><i style={{width:'81%'}}/></span></div></div></div></div></div></section>

    <section className="section"><div className="wrap"><div className="section-heading"><span className="eyebrow">Selected engineering stories</span><h2>Proof should help you see what’s possible.</h2><p>Explore the product, architecture and integration challenges behind selected Csharptek work.</p></div><div className="case-grid">{caseStudies.slice(0,3).map((item, i) => <article className="case-card" key={item.slug}><div className="case-art"><span className="case-art-mark"><Icon name={['spark','layers','flow'][i]} size={19}/></span><span className="case-art-label">{item.name}</span></div><div className="case-body"><span className="case-label">{item.label}</span><h3>{item.title}</h3><p>{item.summary}</p><Link href={`/case-studies/${item.slug}`}>Explore the story <Icon name="arrow" size={15}/></Link></div></article>)}</div><div style={{marginTop:26}}><Link className="text-link" href="/case-studies">View all case studies <Icon name="arrow" size={16}/></Link></div></div></section>

    <section className="section section-dark"><div className="wrap"><div className="section-heading"><span className="eyebrow eyebrow-light">A clear path from question to operation</span><h2>Move with confidence at every stage.</h2><p>Start at the point that fits your initiative. Discovery can be a focused, paid first step when the right architecture or delivery path needs to be established.</p></div><div className="process-grid">{[['01','Understand','Get clear on the business goal, constraints, users and systems involved.'],['02','Architect','Choose a practical path that balances product value, technical risk and delivery.'],['03','Build','Deliver in focused increments, integrating with the systems your teams use.'],['04','Operate & evolve','Support adoption, reliability and the next stage of the roadmap.']].map(([n,title,text])=><div className="process-step" key={n}><span className="process-dot">{n}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

    <section className="section-tight"><div className="wrap"><div className="industry-strip"><div><span className="eyebrow">Deep context matters</span><h2>Built for industries where the details count.</h2><p>We bring product and AI engineering to healthcare workflows and technology companies building products for demanding markets.</p></div><div className="industry-tags"><span>Healthcare</span><span>Technology & SaaS</span><span>Microsoft ecosystem</span><span>International delivery</span></div></div></div></section>
  </>;
}
