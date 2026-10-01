'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Tracking() {
  const pathname = usePathname();
  useEffect(() => {
    if (!pathname) return;
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
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return null;
}
