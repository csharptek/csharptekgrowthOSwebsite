'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Tracking() {
  const pathname = usePathname();
  useEffect(() => {
    if (!pathname) return;
    try {
      const q = new URLSearchParams(window.location.search);
      const utm = {};
      for (const k of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']) if (q.get(k)) utm[k] = q.get(k).slice(0, 100);
      if (Object.keys(utm).length && !sessionStorage.getItem('ct_utm')) sessionStorage.setItem('ct_utm', JSON.stringify({ ...utm, landing: pathname }));
    } catch {}
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'page_view', page_path: pathname, page_location: window.location.href, page_title: document.title });
    if (pathname.startsWith('/solutions/') || pathname === '/services/marketplace' || pathname === '/azure-app-modernization-services') window.dataLayer.push({ event: 'solution_page_engagement', page_path: pathname });
    if (pathname.startsWith('/case-studies/')) window.dataLayer.push({ event: 'case_study_engagement', page_path: pathname });
  }, [pathname]);

  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest('a');
      if (!link) return;
      const label = (link.dataset.trackLabel || link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 100);
      if (link.dataset.track === 'cta' || link.classList.contains('button')) window.dataLayer?.push({ event: 'cta_click', cta_label: label, page_location: window.location.pathname });
      if (link.closest('.main-nav')) window.dataLayer?.push({ event: link.classList.contains('nav-cta') ? 'nav_cta_click' : 'nav_click', nav_label: label });
      if (link.closest('.case-card')) window.dataLayer?.push({ event: 'case_study_click', case_study: link.href });
      const href = link.getAttribute('href') || '';
      if (/wa\.me|api\.whatsapp\.com/i.test(href)) window.dataLayer?.push({ event: 'whatsapp_click', link_label: label, page_location: window.location.pathname });
      else if (href.startsWith('tel:')) window.dataLayer?.push({ event: 'phone_click', link_label: label, page_location: window.location.pathname });
      else if (href.startsWith('mailto:')) window.dataLayer?.push({ event: 'email_click', link_label: label, page_location: window.location.pathname });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return null;
}
