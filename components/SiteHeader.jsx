'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';

const solutions = [
  ['AI Production Engineering', '/solutions/ai-production-engineering', 'Move an AI initiative into production'],
  ['AI Product Engineering', '/solutions/ai-product-engineering', 'Add useful AI to an existing product'],
  ['Intelligent Workflow Automation', '/solutions/intelligent-workflow-automation', 'Connect fragmented operations'],
  ['Application & Cloud Modernization', '/azure-app-modernization-services', 'Improve the systems you already depend on'],
  ['Healthcare AI & Automation', '/solutions/healthcare-ai-automation', 'Build smarter healthcare workflows'],
  ['Microsoft Marketplace Engineering', '/services/marketplace', 'Launch and operate SaaS on Marketplace']
];
const industries = [
  ['/industries/healthcare', 'Healthcare', 'Product and workflow technology around the work of care'],
  ['/industries/technology-saas', 'Technology & SaaS', 'Product, AI and commerce engineering for SaaS teams']
];
const capabilities = [
  ['/capabilities/ai-llm', 'AI & LLM engineering', 'RAG, agents, evaluation and integration'],
  ['/capabilities/product-engineering', 'Product engineering', 'Applications, experiences and APIs'],
  ['/capabilities/azure', 'Azure', 'Architecture, identity and platform engineering'],
  ['/capabilities/dotnet', '.NET', 'Modernization and application development'],
  ['/capabilities/cloud-devops', 'Cloud & DevOps', 'Infrastructure, delivery and operations'],
  ['/capabilities/data-integrations', 'Data & integrations', 'Connect information, products and workflows']
];
const products = ['TekDial', 'ConvoSphere', 'TekSocial', 'Interview Scheduler'].map((name) => [`/products/${name.toLowerCase().replaceAll(' ', '-')}`, name, 'Csharptek product']);
const company = [
  ['/about', 'About', 'How we work'], ['/leadership', 'Leadership', 'Engineering leadership'],
  ['/careers', 'Careers', 'Build systems that matter'], ['/contact', 'Contact', 'Start a conversation']
];

function MenuGroup({ title, href, items, close }) {
  return <div className="nav-group nav-compact"><Link className="nav-label" href={href} onClick={close} aria-haspopup="true">{title} <span className="nav-chevron">⌄</span></Link><div className="mega-menu compact-menu"><div className="mega-links">{items.map(([url, label, detail])=><Link href={url} key={url} onClick={close}><span>{label}</span><small>{detail}</small></Link>)}</div></div></div>;
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Link href="/" className="brand" aria-label="Csharptek home" onClick={close}>
          <span className="brand-mark">C<span>#</span></span>
          <span className="brand-name">Csharptek<span className="brand-period">.</span></span>
        </Link>
        <button className="mobile-menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} size={22}/>
        </button>
        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          <div className="nav-group nav-solutions">
            <Link className="nav-label" href="/solutions" onClick={close}>Solutions <span className="nav-chevron">⌄</span></Link>
            <div className="mega-menu">
              <div className="mega-intro"><span className="eyebrow">Built around your initiative</span><p>Practical engineering for the systems your business is ready to move forward.</p><Link href="/solutions" onClick={close} className="text-link">Explore all solutions <Icon name="arrow" size={16}/></Link></div>
              <div className="mega-links">{solutions.map(([label, href, detail]) => <Link href={href} key={href} onClick={close}><span>{label}</span><small>{detail}</small></Link>)}</div>
            </div>
          </div>
          <Link href="/case-studies" onClick={close}>Case studies</Link>
          <MenuGroup title="Industries" href="/industries" items={industries} close={close}/>
          <MenuGroup title="Capabilities" href="/capabilities" items={capabilities} close={close}/>
          <Link href="/blog" onClick={close}>Insights</Link>
          <MenuGroup title="Products" href="/products" items={products} close={close}/>
          <MenuGroup title="Company" href="/about" items={company} close={close}/>
          <Link href="/contact" className="nav-cta" onClick={close}>Discuss your initiative <Icon name="arrow" size={16}/></Link>
        </nav>
      </div>
      {open && <button className="nav-backdrop" aria-label="Close navigation" onClick={close}/>}
    </header>
  );
}
