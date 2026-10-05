import Link from 'next/link';
import Icon from '../../components/Icon';
import { ArticleCardArtwork } from '../../components/ArticleArtwork';
import { getPublishedPosts } from '../../lib/blog';

const topics = [
  ['AI production', 'From promising prototypes to systems teams can trust, integrate and operate.', '/solutions/ai-production-engineering'],
  ['AI product engineering', 'Product decisions for introducing useful AI capabilities into existing software.', '/solutions/ai-product-engineering'],
  ['Workflow automation', 'How to connect people, systems and data across complex operational processes.', '/solutions/intelligent-workflow-automation'],
  ['Application modernization', 'Practical ways to evolve applications and infrastructure without defaulting to a rewrite.', '/azure-app-modernization-services'],
  ['Healthcare technology', 'Product and workflow engineering around the real work of clinical and administrative teams.', '/industries/healthcare'],
  ['Microsoft Marketplace', 'The fulfillment, metering and identity work behind SaaS commerce on Microsoft Marketplace.', '/services/marketplace']
];

export const metadata = { title: 'Insights', description: 'Perspectives on AI production, product engineering, automation, modernization and Microsoft Marketplace engineering from the Csharptek team.', alternates: { canonical: '/blog' } };

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  let posts = [];
  try { posts = await getPublishedPosts(); } catch (error) { console.error('Blog index unavailable:', error.message); }
  return <><section className="page-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span>Insights</div><span className="eyebrow">Ideas from the engineering work</span><h1>Clear thinking for complex technology initiatives.</h1><p>Explore the questions and engineering choices behind production AI, modern products, connected workflows and cloud systems.</p></div></section><section className="section"><div className="wrap">{posts.length > 0 ? <div className="article-list">{posts.map((post)=><article className="article-card" key={post.id}><ArticleCardArtwork category={post.category} title={post.title}/><div className="article-card-body"><span className="eyebrow">{post.category || 'Csharptek insight'}{post.read_time ? ` · ${post.read_time}` : ''}</span><h3>{post.title}</h3><p>{post.excerpt || post.meta_description}</p><Link className="text-link" href={`/blog/${post.slug}`}>Read the article <Icon name="arrow" size={15}/></Link></div></article>)}</div> : <><div className="section-heading"><span className="eyebrow">Explore by topic</span><h2>Perspectives for the engineering decisions ahead.</h2><p>Connect an initiative to practical context across AI, product, workflow and cloud engineering.</p></div><div className="article-list">{topics.map(([label, text, href], i)=><article className="article-card" key={label}><ArticleCardArtwork category={label} title={text}/><div className="article-card-body"><span className="eyebrow">Topic 0{i+1}</span><h3>{label}</h3><p>{text}</p><Link className="text-link" href={href}>Explore the topic <Icon name="arrow" size={15}/></Link></div></article>)}</div></>}</div></section></>;
}
