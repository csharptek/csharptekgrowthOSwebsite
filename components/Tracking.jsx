'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const REF_KEY = 'ct_r';
const REF_DAYS = 90;

/** First-party ?r=<code> from our outreach emails: kept 90 days on this browser, each page view reported to TekGrowth. */
function trackRef(pathname) {
  try {
    const url = new URL(window.location.href);
    const fromUrl = url.searchParams.get('r');
    if (fromUrl && /^[A-Za-z0-9]{4,16}$/.test(fromUrl)) {
      localStorage.setItem(REF_KEY, JSON.stringify({ code: fromUrl, at: Date.now() }));
      url.searchParams.delete('r');
      window.history.replaceState(window.history.state, '', url.pathname + (url.search || '') + url.hash);
    }
    const saved = JSON.parse(localStorage.getItem(REF_KEY) || 'null');
    if (!saved?.code) return;
    if (Date.now() - Number(saved.at || 0) > REF_DAYS * 86400000) { localStorage.removeItem(REF_KEY); return; }
    const payload = JSON.stringify({ r: saved.code, path: pathname, referrer: document.referrer || '' });
    if (navigator.sendBeacon) navigator.sendBeacon('/api/track', new Blob([payload], { type: 'application/json' }));
    else fetch('/api/track', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload, keepalive: true }).catch(() => {});
  } catch {}
}

/** Tracking code for forms (website inquiry from someone who came from our email). */
export function savedRefCode() {
  try { return JSON.parse(localStorage.getItem(REF_KEY) || 'null')?.code || ''; } catch { return ''; }
}

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
    trackRef(pathname);
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
