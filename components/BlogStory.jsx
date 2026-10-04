import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from './Icon';
import { getPublishedPost, getPublishedPosts } from '../lib/blog';

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
    return {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt || '',
      alternates: { canonical: `/blog/${slug}` },
      openGraph: { type: 'article', title: post.meta_title || post.title, description: post.meta_description || post.excerpt || '', images: [post.og_image_url || '/opengraph-image'] },
      twitter: { card: 'summary_large_image', title: post.meta_title || post.title, description: post.meta_description || post.excerpt || '', images: [post.og_image_url || '/opengraph-image'] },
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
    <section className="page-hero case-detail-hero"><div className="wrap page-hero-inner"><Link href="/blog" className="text-link" style={{color:'#b7deeb',marginBottom:22}}>← Back to insights</Link><span className="eyebrow">{post.category || 'Csharptek insight'}{post.read_time ? ` · ${post.read_time}` : ''}</span><h1>{post.title}</h1><p>{post.excerpt || post.meta_description}</p><div className="detail-meta">{post.published_at && <span>{dateLabel(post.published_at)}</span>}{post.author_name && <span>By {post.author_name}</span>}</div></div></section>
    <section className="section"><article className="wrap narrow-article">
      <div className="article-prose">{blocks.map((block, index) => {
        const text = typeof block?.text === 'string' ? block.text : '';
        if (block?.type === 'intro') return <p className="article-intro" key={index}>{text}</p>;
        if (block?.type === 'h2') return <h2 key={index}>{text}</h2>;
        if (block?.type === 'p') return <p key={index}>{text}</p>;
        if (block?.type === 'cta' && typeof block.href === 'string' && block.href.startsWith('/') && !block.href.startsWith('//')) return <div className="article-cta" key={index}><p>{text}</p><Link className="button" href={block.href}>{block.label || 'Discuss your initiative'} <Icon name="arrow" size={15}/></Link></div>;
        return null;
      })}</div>
      {tags.length > 0 && <div className="tag-list article-tags">{tags.filter((tag) => typeof tag === 'string').map((tag) => <span key={tag}>{tag}</span>)}</div>}
      {post.author_name && <div className="author-strip"><span className="author-avatar">{post.author_name.charAt(0)}</span><span><b>{post.author_name}</b>{post.author_role && <small>{post.author_role}</small>}</span></div>}
    </article></section>
    {related.length > 0 && <section className="section-tight"><div className="wrap"><div className="section-heading"><span className="eyebrow">Keep exploring</span><h2>More from Csharptek</h2></div><div className="article-list">{related.map((item) => <article className="article-card" key={item.slug}><div className="article-art"/><div className="article-card-body"><span className="eyebrow">{item.category || 'Insight'}</span><h3>{item.title}</h3><p>{item.excerpt || item.meta_description}</p><Link className="text-link" href={`${prefix}/${item.slug}`}>Read the article <Icon name="arrow" size={15}/></Link></div></article>)}</div></div></section>}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeSchema }}/>
  </>;
}
