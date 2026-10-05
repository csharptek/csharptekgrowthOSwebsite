import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';

const footerSolutions = [
  ['AI production', '/solutions/ai-production-engineering'],
  ['AI product engineering', '/solutions/ai-product-engineering'],
  ['Workflow automation', '/solutions/intelligent-workflow-automation'],
  ['Application modernization', '/azure-app-modernization-services'],
  ['Healthcare AI', '/solutions/healthcare-ai-automation'],
  ['Microsoft Marketplace', '/services/marketplace']
];

const socials = [
  ['LinkedIn', 'linkedin', process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || 'https://www.linkedin.com/company/csharptek/'],
  ['X', 'x', process.env.NEXT_PUBLIC_SOCIAL_X || 'https://twitter.com/csharptek'],
  ['YouTube', 'youtube', process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || 'https://www.youtube.com/@csharptek'],
  ['Facebook', 'facebook', process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK],
  ['Instagram', 'instagram', process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || 'https://instagram.com/csharptekofficial']
].filter(([, , url]) => url);

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-cta wrap"><div><span className="eyebrow eyebrow-light">The next step starts with a conversation</span><h2>Have a technology initiative to move forward?</h2><p>Tell us what you’re building, modernizing or trying to make work better.</p></div><Link className="button button-light" href="/contact">Discuss your initiative <Icon name="arrow" size={17}/></Link></div>
    <div className="footer-main wrap">
      <div className="footer-brand-col"><Link href="/" className="brand brand-footer" aria-label="Csharptek home"><Image src="/csharptek-logo.png" alt="Csharptek" width={1024} height={191} className="brand-logo" /></Link><p>AI, product engineering and modernization for established teams with important work to do.</p><a className="footer-email" href="mailto:info@csharptek.com">info@csharptek.com <Icon name="arrow" size={15}/></a><div className="footer-social">{socials.map(([label, icon, url]) => <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={`Csharptek on ${label}`}><Icon name={icon} size={18}/></a>)}<a href="mailto:info@csharptek.com" aria-label="Email Csharptek"><Icon name="mail" size={18}/></a></div></div>
      <div className="footer-col"><h3>Solutions</h3>{footerSolutions.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
      <div className="footer-col"><h3>Explore</h3><Link href="/case-studies">Case studies</Link><Link href="/industries/healthcare">Healthcare</Link><Link href="/industries/technology-saas">Technology & SaaS</Link><Link href="/blog">Insights</Link></div>
      <div className="footer-col"><h3>Company</h3><Link href="/about">About</Link><Link href="/leadership">Leadership</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link></div>
    </div>
    <div className="footer-bottom wrap"><span>© {new Date().getFullYear()} Csharptek. All rights reserved.</span><div><Link href="/privacy-policy">Privacy</Link></div><span className="footer-location">Engineering globally. Built for what’s next.</span></div>
  </footer>;
}
