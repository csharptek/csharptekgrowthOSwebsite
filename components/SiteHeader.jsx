'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';

const groups = {
  solutions: {
    title: 'Solutions',
    href: '/solutions',
    items: [
      ['/solutions/ai-production-engineering', 'AI Production Engineering'],
      ['/solutions/ai-product-engineering', 'AI Product Engineering'],
      ['/solutions/intelligent-workflow-automation', 'Intelligent Workflow Automation'],
      ['/azure-app-modernization-services', 'Application & Cloud Modernization'],
      ['/solutions/healthcare-ai-automation', 'Healthcare AI & Automation'],
      ['/services/marketplace', 'Microsoft Marketplace Engineering']
    ]
  },
  industries: {
    title: 'Industries',
    href: '/industries',
    items: [
      ['/industries/healthcare', 'Healthcare'],
      ['/industries/technology-saas', 'Technology & SaaS']
    ]
  },
  capabilities: {
    title: 'Capabilities',
    href: '/capabilities',
    items: [
      ['/capabilities/ai-llm', 'AI & LLM Engineering'],
      ['/capabilities/product-engineering', 'Product Engineering'],
      ['/capabilities/azure', 'Azure'],
      ['/capabilities/dotnet', '.NET'],
      ['/capabilities/cloud-devops', 'Cloud & DevOps'],
      ['/capabilities/data-integrations', 'Data & Integrations']
    ]
  },
  products: {
    title: 'Products',
    href: '/products',
    items: [
      ['/products/tekdial', 'TekDial'],
      ['/products/teksocial', 'TekSocial'],
    ]
  },
  company: {
    title: 'Company',
    href: '/about',
    items: [
      ['/about', 'About'],
      ['/leadership', 'Leadership'],
      ['/careers', 'Careers'],
      ['/contact', 'Contact']
    ]
  }
};

function MenuPanel({ menu, close, reduceMotion }) {
  const data = groups[menu];
  return <motion.div
    id={`header-menu-panel-${menu}`}
    className="mega-menu"
    role="region"
    aria-label={`${data.title} menu`}
    initial={reduceMotion ? false : { opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="mega-links">
      {data.items.map(([href, label]) => <Link href={href} key={href} onClick={close}>
        <span>{label}</span>
      </Link>)}
    </div>
  </motion.div>;
}

function MenuTrigger({ id, active, onToggle, onHover }) {
  return <button
    className={`nav-label ${active ? 'is-active' : ''}`}
    type="button"
    aria-expanded={active}
    aria-controls={`header-menu-panel-${id}`}
    onClick={() => onToggle(id)}
    onMouseEnter={() => onHover(id)}
    onFocus={() => onHover(id)}
  >
    {groups[id].title}
  </button>;
}

function MenuGroup({ id, activeMenu, onToggle, onHover, close, reduceMotion }) {
  return <div className="nav-group">
    <MenuTrigger id={id} active={activeMenu === id} onToggle={onToggle} onHover={onHover}/>
    <AnimatePresence initial={false} mode="wait">
      {activeMenu === id && <MenuPanel key={id} menu={id} close={close} reduceMotion={reduceMotion}/>}
    </AnimatePresence>
  </div>;
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const headerRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const close = () => { setOpen(false); setActiveMenu(null); };
  const dismissDesktopMenu = () => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) setActiveMenu(null);
  };
  const toggleMenu = (id) => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      // Desktop hover/focus may already have opened this menu before the click.
      // Keep it open on click; pointer leave, Escape, or an outside click closes it.
      setActiveMenu(id);
      return;
    }
    setActiveMenu((current) => current === id ? null : id);
  };
  const hoverMenu = (id) => { if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) setActiveMenu(id); };

  useEffect(() => {
    const onKeyDown = (event) => { if (event.key === 'Escape') close(); };
    const onPointerDown = (event) => { if (!headerRef.current?.contains(event.target)) close(); };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  return <header ref={headerRef} className="site-header" onMouseLeave={() => { if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) setActiveMenu(null); }}>
    <div className="header-inner wrap">
      <Link href="/" className="brand" aria-label="Csharptek home" onMouseEnter={dismissDesktopMenu} onFocus={dismissDesktopMenu} onClick={close}>
        <Image src="/csharptek-logo.png" alt="" width={1024} height={191} priority className="brand-logo" />
      </Link>
      <button className="mobile-menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => { setOpen(!open); setActiveMenu(null); }}>
        <Icon name={open ? 'close' : 'menu'} size={22}/>
      </button>
      <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        <MenuGroup id="solutions" activeMenu={activeMenu} onToggle={toggleMenu} onHover={hoverMenu} close={close} reduceMotion={reduceMotion}/>
        <Link href="/case-studies" onMouseEnter={dismissDesktopMenu} onFocus={dismissDesktopMenu} onClick={close}>Case studies</Link>
        <MenuGroup id="industries" activeMenu={activeMenu} onToggle={toggleMenu} onHover={hoverMenu} close={close} reduceMotion={reduceMotion}/>
        <MenuGroup id="capabilities" activeMenu={activeMenu} onToggle={toggleMenu} onHover={hoverMenu} close={close} reduceMotion={reduceMotion}/>
        <Link href="/blog" onMouseEnter={dismissDesktopMenu} onFocus={dismissDesktopMenu} onClick={close}>Insights</Link>
        <MenuGroup id="products" activeMenu={activeMenu} onToggle={toggleMenu} onHover={hoverMenu} close={close} reduceMotion={reduceMotion}/>
        <MenuGroup id="company" activeMenu={activeMenu} onToggle={toggleMenu} onHover={hoverMenu} close={close} reduceMotion={reduceMotion}/>
        <Link href="/contact" className="nav-cta" onMouseEnter={dismissDesktopMenu} onFocus={dismissDesktopMenu} onClick={close}>Discuss Your Initiative</Link>
      </nav>
    </div>
    {open && <button className="nav-backdrop" type="button" aria-label="Close navigation" onClick={close}/>}
  </header>;
}
