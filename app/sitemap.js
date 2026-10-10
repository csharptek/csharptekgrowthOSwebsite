import { solutions } from '../data/site';
import { caseStudyDetails } from '../data/caseStudies';
import { getPublishedPosts } from '../lib/blog';

export const dynamic = 'force-dynamic';
const siteUrl = 'https://www.csharptek.com';
const staticPaths = [
  '/', '/solutions', '/case-studies', '/industries', '/industries/healthcare', '/industries/technology-saas',
  '/about', '/leadership', '/careers', '/contact', '/blog', '/privacy-policy', '/services/marketplace', '/azure-app-modernization-services', '/capabilities', '/products'
];

export default async function sitemap() {
  if (process.env.SITE_INDEXING_ENABLED !== 'true') return [];
  const updated = new Date('2026-10-10');
  let posts = [];
  try { posts = await getPublishedPosts(); } catch (error) { console.error('Blog sitemap entries unavailable:', error.message); }
  const solutionPaths = solutions.filter((item) => !['application-cloud-modernization', 'microsoft-marketplace-engineering'].includes(item.slug)).map((item) => `/solutions/${item.slug}`);
  const capabilityPaths = ['ai-llm','product-engineering','azure','dotnet','cloud-devops','data-integrations'].map((slug) => `/capabilities/${slug}`);
  const productPaths = ['tekdial','teksocial'].map((slug) => `/products/${slug}`);
  const casePaths = Object.entries(caseStudyDetails).filter(([, d]) => d.published === true).map(([slug]) => `/case-studies/${slug}`);
  const postDates = new Map(posts.map((post) => [`/blog/${post.slug}`, post.updated_at || post.published_at || updated]));
  const urls = [...staticPaths, ...casePaths, ...solutionPaths, ...capabilityPaths, ...productPaths, ...posts.map((post) => `/blog/${post.slug}`)];
  return urls.map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date(postDates.get(path) || updated), changeFrequency: path === '/' ? 'weekly' : 'monthly', priority: path === '/' ? 1 : path.startsWith('/solutions') ? 0.9 : 0.7 }));
}
