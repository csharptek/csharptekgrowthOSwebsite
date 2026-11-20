'use client';

import { usePathname } from 'next/navigation';

const labels = { 'azure-app-modernization-services': 'Azure application modernization', 'case-studies': 'Case studies', 'technology-saas': 'Technology & SaaS', 'privacy-policy': 'Privacy policy', blog: 'Insights', 'software-company-ranchi': 'Software company in Ranchi', services: 'Services', resources: 'Resources', 'microsoft-365-ai-security-checklist': 'Microsoft 365 and AI security checklist' };
const titleCase = (s) => labels[s] || s.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase());

export default function BreadcrumbSchema() {
  const pathname = usePathname() || '/';
  const parts = pathname.split('/').filter(Boolean);
  if (!parts.length) return null;
  const base = 'https://www.csharptek.com';
  const items = [{ name: 'Home', url: base }, ...parts.map((p, i) => ({ name: titleCase(p), url: `${base}/${parts.slice(0, i + 1).join('/')}` }))];
  const schema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })) };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}/>;
}
