const siteUrl = 'https://www.csharptek.com';

export default function robots() {
  return { rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }], sitemap: `${siteUrl}/sitemap.xml`, host: siteUrl };
}
