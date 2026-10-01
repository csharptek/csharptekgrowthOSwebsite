import './globals.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import AnalyticsScripts from '../components/AnalyticsScripts';
import Tracking from '../components/Tracking';

const siteUrl = 'https://www.csharptek.com';
const organizationSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Csharptek', url: siteUrl, email: 'info@csharptek.com', logo: `${siteUrl}/icon.svg`, description: 'AI, product engineering and modernization for established companies.' };

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Csharptek | AI, Product Engineering & Modernization', template: '%s | Csharptek' },
  description: 'Csharptek helps established companies put AI into production, add intelligent capabilities to products, automate complex workflows, and modernize applications and cloud infrastructure.',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', url: siteUrl, siteName: 'Csharptek', title: 'Csharptek | AI, Product Engineering & Modernization', description: 'Turn complex technology initiatives into production-ready systems.' },
  twitter: { card: 'summary_large_image', title: 'Csharptek | AI, Product Engineering & Modernization', description: 'Turn complex technology initiatives into production-ready systems.' },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  return <html lang="en"><body>
    {gtmId && <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} title="Google Tag Manager"/></noscript>}
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader/>
    <main id="main">{children}</main>
    <SiteFooter/>
    <AnalyticsScripts/>
    <Tracking/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c') }}/>
  </body></html>;
}
