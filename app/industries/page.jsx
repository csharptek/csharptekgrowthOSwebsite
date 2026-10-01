import Link from 'next/link';
import Icon from '../../components/Icon';

export const metadata = { title: 'Industries', description: 'Csharptek engineering for healthcare and technology companies.' };

export default function IndustriesPage() {
  return <><section className="page-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span>Industries</div><span className="eyebrow">Context shapes the solution</span><h1>Engineering that fits the environment it has to serve.</h1><p>We bring product, AI and workflow engineering to industries where the data, users and operating details matter.</p></div></section><section className="section"><div className="wrap solution-grid"><Link className="solution-card" href="/industries/healthcare"><span className="eyebrow">Healthcare</span><h3>Build smarter healthcare workflows.</h3><p>Clinical documentation, intake, referrals, workforce coordination and healthcare product AI.</p><span className="solution-link">Explore healthcare <Icon name="arrow" size={15}/></span></Link><Link className="solution-card" href="/industries/technology-saas"><span className="eyebrow">Technology & SaaS</span><h3>Extend the products your customers rely on.</h3><p>AI capabilities, product workflows, platform integrations and Marketplace commerce.</p><span className="solution-link">Explore technology & SaaS <Icon name="arrow" size={15}/></span></Link></div></section></>;
}
