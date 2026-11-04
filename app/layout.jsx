import localFont from 'next/font/local';
import './globals.css';
import './design-refresh.css';
import './brand-theme.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import AnalyticsScripts from '../components/AnalyticsScripts';
import Tracking from '../components/Tracking';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import ConsentBanner from '../components/ConsentBanner';

const manrope = localFont({ src: './fonts/manrope-latin-wght-normal.woff2', weight: '200 800', display: 'swap', variable: '--font-manrope', fallback: ['system-ui', 'sans-serif'] });
const dmSans = localFont({ src: './fonts/dm-sans-latin-wght-normal.woff2', weight: '100 1000', display: 'swap', variable: '--font-dm-sans', fallback: ['system-ui', 'sans-serif'] });

const siteUrl = 'https://www.csharptek.com';
const indexingEnabled = process.env.SITE_INDEXING_ENABLED === 'true';
const siteSchema = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'Csharptek', url: siteUrl, publisher: { '@id': `${siteUrl}/#organization` } },
  { '@type': ['Organization', 'ProfessionalService'], '@id': `${siteUrl}/#organization`, name: 'Csharptek', url: siteUrl, email: 'info@csharptek.com', telephone: '+91-92290-69558', image: `${siteUrl}/csharptek-logo.png`, areaServed: ['IN', 'US', 'GB', 'AU', 'AE'], knowsAbout: ['Azure application development', '.NET modernization', 'AI production engineering', 'RAG development', 'AI agent development', 'Microsoft Marketplace SaaS'], logo: `${siteUrl}/icon.svg`, description: 'Azure AI and .NET engineering partner: AI production engineering, AI products, workflow automation and application modernization.', foundingDate: '2016', founder: { '@type': 'Person', name: 'Bhanu Gupta' }, address: { '@type': 'PostalAddress', streetAddress: '199/A, First Floor, Panchwati Garden Lane, Bariatu', addressLocality: 'Ranchi', addressRegion: 'Jharkhand', postalCode: '834009', addressCountry: 'IN' }, openingHours: 'Mo-Su 08:30-20:30', sameAs: ['https://www.linkedin.com/company/csharptek/', 'https://twitter.com/csharptek', 'https://www.youtube.com/@csharptek'] }
] };

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Csharptek | AI, Product Engineering & Modernization', template: '%s | Csharptek' },
  description: 'Csharptek helps established companies put AI into production, build intelligent products, automate complex workflows and modernize cloud applications.',
  openGraph: { type: 'website', url: siteUrl, siteName: 'Csharptek', title: 'Csharptek | AI, Product Engineering & Modernization', description: 'Turn complex technology initiatives into production-ready systems.', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Csharptek' }] },
  twitter: { card: 'summary_large_image', title: 'Csharptek | AI, Product Engineering & Modernization', description: 'Turn complex technology initiatives into production-ready systems.', images: ['/opengraph-image'] },
  robots: { index: indexingEnabled, follow: indexingEnabled }
};

export default function RootLayout({ children }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  return <html lang="en" className={`${manrope.variable} ${dmSans.variable}`}><body>
    {gtmId && <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} title="Google Tag Manager"/></noscript>}
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader/>
    <main id="main">{children}</main>
    <SiteFooter/>
    <ConsentBanner><AnalyticsScripts/></ConsentBanner>
    <BreadcrumbSchema/>
    <Tracking/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema).replace(/</g, '\\u003c') }}/>
  </body></html>;
}
