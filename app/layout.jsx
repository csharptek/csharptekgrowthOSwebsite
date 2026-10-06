import './globals.css';
import './design-refresh.css';
import './brand-theme.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import AnalyticsScripts from '../components/AnalyticsScripts';
import Tracking from '../components/Tracking';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import ConsentBanner from '../components/ConsentBanner';

const siteUrl = 'https://www.csharptek.com';
const indexingEnabled = process.env.SITE_INDEXING_ENABLED === 'true';
const siteSchema = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'Csharptek', url: siteUrl, publisher: { '@id': `${siteUrl}/#organization` } },
  { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Csharptek', url: siteUrl, email: 'info@csharptek.com', logo: `${siteUrl}/icon.svg`, description: 'AI, product engineering and modernization for established companies.' }
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
  return <html lang="en"><body>
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
