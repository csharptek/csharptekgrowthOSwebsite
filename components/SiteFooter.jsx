import Link from 'next/link';
import Icon from './Icon';

const footerSolutions = [
  ['AI production', '/solutions/ai-production-engineering'],
  ['AI product engineering', '/solutions/ai-product-engineering'],
  ['Workflow automation', '/solutions/intelligent-workflow-automation'],
  ['Application modernization', '/azure-app-modernization-services'],
  ['Healthcare AI', '/solutions/healthcare-ai-automation'],
  ['Microsoft Marketplace', '/services/marketplace']
];

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-cta wrap"><div><span className="eyebrow eyebrow-light">The next step starts with a conversation</span><h2>Have a technology initiative to move forward?</h2><p>Tell us what you’re building, modernizing or trying to make work better.</p></div><Link className="button button-light" href="/contact">Discuss your initiative <Icon name="arrow" size={17}/></Link></div>
    <div className="footer-main wrap">
      <div className="footer-brand-col"><Link href="/" className="brand brand-footer"><span className="brand-mark">C<span>#</span></span><span className="brand-name">Csharptek<span className="brand-period">.</span></span></Link><p>AI, product engineering and modernization for established teams with important work to do.</p><a className="footer-email" href="mailto:info@csharptek.com">info@csharptek.com <Icon name="arrow" size={15}/></a></div>
      <div className="footer-col"><h3>Solutions</h3>{footerSolutions.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
      <div className="footer-col"><h3>Explore</h3><Link href="/case-studies">Case studies</Link><Link href="/industries/healthcare">Healthcare</Link><Link href="/industries/technology-saas">Technology & SaaS</Link><Link href="/blog">Insights</Link></div>
      <div className="footer-col"><h3>Company</h3><Link href="/about">About</Link><Link href="/leadership">Leadership</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link></div>
    </div>
    <div className="footer-bottom wrap"><span>© {new Date().getFullYear()} Csharptek. All rights reserved.</span><div><Link href="/privacy-policy">Privacy</Link><a href="https://www.linkedin.com/company/csharptek/" target="_blank" rel="noreferrer">LinkedIn <Icon name="arrow" size={13}/></a></div><span className="footer-location">Engineering globally. Built for what’s next.</span></div>
  </footer>;
}
