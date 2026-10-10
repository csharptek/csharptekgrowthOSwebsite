import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from './Icon';
import { getPublishedPost, getPublishedPosts } from '../lib/blog';
import RelatedStories from './RelatedStories';
import ArticleArtwork, { ArticleCardArtwork } from './ArticleArtwork';
import { solutions } from '../data/site';

const articleConnections = {
  'ai-medical-scribe-azure-openai': { solution: 'healthcare-ai-automation', cases: ['medical-documentation', 'healthcare-mobile-app'] },
  'vibe-coding-mvp-development': { solution: 'ai-product-engineering', cases: ['image-to-video', 'virilocity'] },
  'hipaa-compliant-ai-healthcare-startups': { solution: 'healthcare-ai-automation', cases: ['medical-documentation', 'healthcare-mobile-app'] },
  'ai-voice-agents-vs-call-centres': { solution: 'intelligent-workflow-automation', cases: ['woundmedix'] },
  'how-rag-pipelines-work': { solution: 'ai-production-engineering', cases: ['rag-pipeline', 'travel-data-ai'] },
  'building-bilingual-ai-middle-east': { solution: 'ai-production-engineering', cases: ['travel-data-ai'] },
  'fax-to-ai-healthcare-automation': { solution: 'healthcare-ai-automation', cases: ['woundmedix', 'medical-documentation'] },
  'ai-in-edtech-2025': { solution: 'ai-product-engineering', cases: ['virilocity'] },
  'pet-care-tech-rfid-ai': { solution: 'intelligent-workflow-automation', cases: [] },
  'how-to-pick-ai-stack-startup': { solution: 'ai-production-engineering', cases: ['rag-pipeline'] },
  'rag-as-a-service-build-buy-or-partner': { solution: 'ai-production-engineering', cases: ['rag-pipeline', 'travel-data-ai'] },
  'azure-openai-on-your-data-vs-custom-rag': { solution: 'ai-production-engineering', cases: ['rag-pipeline', 'travel-data-ai'] },
  'white-label-software-development-checklist-for-agencies': { solution: 'agency-development-partner', cases: ['virilocity', 'landminer'] },
  'production-ready-ai-checklist': { solution: 'ai-production-engineering', cases: ['payautomation', 'rag-pipeline'] }
};

const articleCtaLabels = {
  'fax-to-ai-healthcare-automation': 'Discuss your automation'
};

function dateLabel(value) {
  if (!value) return '';
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(value));
}

function bodyBlocks(post) {
  try {
    const blocks = typeof post.body === 'string' ? JSON.parse(post.body) : post.body;
    if (Array.isArray(blocks)) return blocks;
  } catch {}
  return typeof post.body === 'string' ? [{ type: 'p', text: post.body }] : [];
}

export async function makeBlogMetadata(params, prefix = '/blog') {
  const { slug } = await params;
  try {
    const post = await getPublishedPost(slug);
    if (!post) return { title: 'Article not found' };
    const baseTitle = String(post.meta_title || post.title).replace(/\s*[|\-–]\s*csharptek\s*$/i, '');
    return {
      title: baseTitle,
      description: post.meta_description || post.excerpt || '',
      alternates: { canonical: `/blog/${slug}` },
      openGraph: { type: 'article', title: `${baseTitle} | Csharptek`, description: post.meta_description || post.excerpt || '', images: [post.og_image_url || '/opengraph-image'] },
      twitter: { card: 'summary_large_image', title: `${baseTitle} | Csharptek`, description: post.meta_description || post.excerpt || '', images: [post.og_image_url || '/opengraph-image'] },
      ...(Array.isArray(post.tags) && post.tags.length ? { keywords: post.tags } : {})
    };
  } catch { return { title: 'Insights' }; }
}

export default async function BlogStory({ params, prefix = '/blog' }) {
  const { slug } = await params;
  let post;
  let related = [];
  try {
    post = await getPublishedPost(slug);
    if (post) related = (await getPublishedPosts()).filter((item) => item.slug !== slug).slice(0, 3);
  } catch { notFound(); }
  if (!post) notFound();
  const blocks = bodyBlocks(post);
  const tags = Array.isArray(post.tags) ? post.tags : [];
  const connection = articleConnections[slug];
  const connectedSolution = connection && solutions.find((item) => item.slug === connection.solution);
  const schema = {
    '@context': 'https://schema.org', '@type': 'Article', headline: post.title,
    description: post.meta_description || post.excerpt || '',
    author: { '@type': 'Person', name: post.author_name || 'Csharptek' },
    publisher: { '@type': 'Organization', name: 'Csharptek', url: 'https://www.csharptek.com' },
    ...(post.published_at ? { datePublished: post.published_at } : {}),
    ...(post.updated_at || post.published_at ? { dateModified: post.updated_at || post.published_at } : {}),
    url: `https://www.csharptek.com${prefix}/${post.slug}`,
    ...(post.og_image_url ? { image: post.og_image_url } : {}),
    ...(tags.length ? { keywords: tags.join(', ') } : {})
  };
  const safeSchema = JSON.stringify(schema).replace(/</g, '\\u003c');

  return <>
    <section className="page-hero case-detail-hero"><div className="wrap page-hero-art-inner"><div className="page-hero-inner"><Link href="/blog" className="text-link" style={{color:'#b7deeb',marginBottom:22}}>← Back to insights</Link><span className="eyebrow">{post.category || 'Csharptek insight'}{post.read_time ? ` · ${post.read_time}` : ''}</span><h1>{post.title}</h1><p>{post.excerpt || post.meta_description}</p><div className="detail-meta">{post.published_at && <span>{dateLabel(post.published_at)}</span>}{post.author_name && <span>By {post.author_name}</span>}</div></div><ArticleArtwork category={post.category} title={post.title}/></div></section>
    <section className="section"><article className="wrap narrow-article">
      <div className="article-prose">{blocks.map((block, index) => {
        const text = typeof block?.text === 'string' ? block.text : '';
        if (block?.type === 'intro') return <p className="article-intro" key={index}>{text}</p>;
        if (block?.type === 'h2') return <h2 key={index}>{text}</h2>;
        if (block?.type === 'p') return <p key={index}>{text}</p>;
        if (block?.type === 'h3') return <h3 key={index}>{text}</h3>;
        if (block?.type === 'ul' && Array.isArray(block.items)) return <ul key={index}>{block.items.filter((item) => typeof item === 'string').map((item) => <li key={item}>{item}</li>)}</ul>;
        if (block?.type === 'cta' && typeof block.href === 'string' && block.href.startsWith('/') && !block.href.startsWith('//')) return <div className="article-cta" key={index}><p>{text}</p><Link className="button" href={block.href}>{articleCtaLabels[slug] || block.label || 'Discuss your initiative'} <Icon name="arrow" size={15}/></Link></div>;
        return null;
      })}</div>
      {tags.length > 0 && <div className="tag-list article-tags">{tags.filter((tag) => typeof tag === 'string').map((tag) => <span key={tag}>{tag}</span>)}</div>}
      {post.author_name && <div className="author-strip"><span className="author-avatar">{post.author_name.charAt(0)}</span><span><b>{post.author_name}</b>{post.author_role && <small>{post.author_role}</small>}</span></div>}
    </article></section>
    {connection && <section className="section-tight"><div className="wrap"><span className="eyebrow">From insight to implementation</span><h2>Explore the engineering behind this topic.</h2><p>Explore the related solution area, then see how our team has applied this work in practice.</p>{connectedSolution && <Link className="text-link" href={`/solutions/${connectedSolution.slug}`}>{connectedSolution.title} <Icon name="arrow" size={15}/></Link>}</div></section>}
    {connection && connection.cases.length > 0 && <RelatedStories slugs={connection.cases}/>}
    {related.length > 0 && <section className="section-tight"><div className="wrap"><div className="section-heading"><span className="eyebrow">Keep exploring</span><h2>More from Csharptek</h2></div><div className="article-list">{related.map((item) => <article className="article-card" key={item.slug}><Link className="article-art-link" href={`${prefix}/${item.slug}`} aria-label={`Read ${item.title}`}><ArticleCardArtwork category={item.category} title={item.title}/></Link><div className="article-card-body"><Link className="eyebrow article-topic-link" href={`${prefix}/${item.slug}`}>{item.category || 'Insight'}</Link><h3><Link className="article-title-link" href={`${prefix}/${item.slug}`}>{item.title}</Link></h3><p>{item.excerpt || item.meta_description}</p><Link className="text-link" href={`${prefix}/${item.slug}`}>Read the article <Icon name="arrow" size={15}/></Link></div></article>)}</div></div></section>}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeSchema }}/>
  </>;
}
