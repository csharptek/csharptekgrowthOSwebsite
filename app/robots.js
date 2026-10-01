const siteUrl = 'https://www.csharptek.com';

export default function robots() {
  const indexingEnabled = process.env.SITE_INDEXING_ENABLED === 'true';
  const rules = [{ userAgent: '*', allow: '/', disallow: ['/api/'] }];
  return indexingEnabled ? { rules, sitemap: `${siteUrl}/sitemap.xml`, host: siteUrl } : { rules };
}
