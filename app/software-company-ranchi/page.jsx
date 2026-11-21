import Link from 'next/link';
import Icon from '../../components/Icon';
import Faq from '../../components/Faq';
import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata({
  title: 'Software Company in Ranchi: Azure, AI and .NET',
  description: 'Csharptek is a software and IT company in Ranchi, Jharkhand. Microsoft Solutions Partner building AI, Azure, .NET, web and mobile software for clients worldwide.',
  path: '/software-company-ranchi'
});

const services = [
  ['AI and LLM applications', 'Chat assistants, document AI, RAG search and AI agents built on Azure OpenAI and connected to your systems.', '/solutions/ai-production-engineering'],
  ['Custom software and SaaS products', 'Web applications, mobile apps, portals and SaaS platforms designed, built and run by one team.', '/solutions/ai-product-engineering'],
  ['Azure cloud and .NET', 'New applications on Azure, .NET Framework upgrades, cloud migration, DevOps and managed hosting.', '/azure-app-modernization-services'],
  ['Workflow automation', 'Microsoft 365, SharePoint, Power Platform and voice AI automation for repetitive business processes.', '/solutions/intelligent-workflow-automation'],
  ['Healthcare software', 'Clinical documentation, intake and workflow systems built with privacy and audit in mind.', '/solutions/healthcare-ai-automation'],
  ['White-label development', 'Senior engineering capacity for agencies and software firms, delivered under the partner’s brand.', '/solutions/agency-development-partner']
];

const reasons = [
  'Microsoft Solutions Partner with long experience across Azure, .NET and Microsoft 365',
  'A team of 51–200 people working from our Bariatu, Ranchi office',
  'Operating since 2016, with clients in India, the US, UK, Europe and the Middle East',
  'One team for design, development, cloud, testing and support',
  'Fixed-scope first projects so you can judge quality before committing more',
  'NDA before any detailed discussion; code and IP belong to the client'
];

const faqs = [
  ['Where is Csharptek located in Ranchi?', 'Our office is at 199/A, First Floor, Panchwati Garden Lane, Bariatu, Ranchi, Jharkhand 834009. We are open every day from 8:30 am to 8:30 pm. Call or WhatsApp +91 92290 69558 to arrange a visit.'],
  ['What kind of software does Csharptek build?', 'We build AI applications, custom web and mobile software, SaaS products, Azure cloud solutions, .NET applications and Microsoft 365 automation for businesses in India and abroad.'],
  ['Do you work with businesses in Ranchi and Jharkhand?', 'Yes. We work with local businesses, institutions and startups in Ranchi and across Jharkhand, as well as with international clients. Local clients can meet the team in person at our Bariatu office.'],
  ['Is Csharptek a Microsoft partner?', 'Yes. Csharptek is a Microsoft Solutions Partner, and most of our work uses Azure, .NET and Microsoft 365.'],
  ['How do I start a project with Csharptek?', 'Send a short description of what you need through the contact page, email info@csharptek.com or WhatsApp us. We reply within one business day and usually start with a short call to understand the scope.'],
  ['Are you hiring developers in Ranchi?', 'We hire developers, testers and trainees in Ranchi throughout the year. Open roles are listed on our careers page.']
];

export default function RanchiPage() {
  return <>
    <section className="page-hero"><div className="wrap page-hero-inner">
      <div className="breadcrumb"><Link href="/">Home</Link><span>/</span>Software company in Ranchi</div>
      <span className="eyebrow">Ranchi, Jharkhand · since 2016</span>
      <h1>Software development company in Ranchi.</h1>
      <p>Csharptek is a Ranchi-based IT and software company. We build AI, Azure, .NET, web and mobile software for businesses in Jharkhand, across India and for clients in the US, UK and Middle East.</p>
      <div style={{marginTop:28, display:'flex', gap:12, flexWrap:'wrap'}}>
        <Link className="button" href="/contact?initiative=Ranchi%20project">Discuss your project <Icon name="arrow" size={16}/></Link>
        <a className="button button-dark" href="https://wa.me/919229069558" target="_blank" rel="noopener noreferrer">WhatsApp +91 92290 69558</a>
      </div>
    </div></section>

    <section className="section"><div className="wrap content-grid">
      <div>
        <span className="eyebrow">Why teams choose us</span>
        <h2>A Microsoft-focused engineering team in Ranchi.</h2>
        <p>We started in Ranchi and still build from here. The team works on production systems for established companies, startups and agencies: AI features that have to work every day, cloud applications that must stay secure, and business software that replaces manual work.</p>
        <ul className="check-list">{reasons.map((item) => <li key={item}><Icon name="check" size={16}/>{item}</li>)}</ul>
      </div>
      <aside className="content-panel">
        <span className="eyebrow">Visit or call</span>
        <h3>Csharptek, Ranchi office</h3>
        <address style={{fontStyle:'normal'}}>199/A, First Floor, Panchwati Garden Lane<br/>Bariatu, Ranchi, Jharkhand 834009, India</address>
        <p>Open Monday to Sunday, 8:30 am – 8:30 pm<br/><a href="tel:+919229069558">+91 92290 69558</a> · <a href="mailto:info@csharptek.com">info@csharptek.com</a></p>
        <p><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Csharptek%2C%20Bariatu%2C%20Ranchi" target="_blank" rel="noopener noreferrer">Open in Google Maps <Icon name="arrow" size={15}/></a></p>
      </aside>
    </div></section>

    <section className="section section-tint"><div className="wrap">
      <div className="section-heading"><span className="eyebrow">What we build</span><h2>Software services from our Ranchi team.</h2><p>Every project is delivered by the same in-house team, from first scope to launch and support.</p></div>
      <div className="content-grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}}>
        {services.map(([title, text, href]) => <div className="content-panel" key={title}><h3>{title}</h3><p>{text}</p><Link className="text-link" href={href}>Learn more <Icon name="arrow" size={15}/></Link></div>)}
      </div>
    </div></section>

    <section className="section"><div className="wrap content-grid">
      <div>
        <span className="eyebrow">Proof</span>
        <h2>Work delivered for clients worldwide.</h2>
        <p>Our Ranchi team has built clinical documentation AI, healthcare workflow platforms, Azure modernization programmes and AI products for clients abroad. Read the <Link className="text-link" href="/case-studies">case studies</Link> or learn more <Link className="text-link" href="/about">about Csharptek</Link>.</p>
      </div>
      <aside className="content-panel">
        <span className="eyebrow">Careers in Ranchi</span>
        <h3>Build your career at home.</h3>
        <p>We hire .NET, React, Node.js, AI and QA engineers and trainees in Ranchi.</p>
        <Link className="button button-dark" href="/careers">See open roles <Icon name="arrow" size={15}/></Link>
      </aside>
    </div></section>

    <Faq items={faqs} title="Questions about Csharptek in Ranchi"/>
  </>;
}
