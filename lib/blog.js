import { query } from './db';
import { blogPosts } from '../data/blogPosts';

const codePosts = Object.entries(blogPosts).map(([slug, post]) => ({ slug, status: 'published', category_color: null, icon: null, featured: false, ...post }));

function applyOverride(post) {
  const override = blogPosts[post.slug];
  return override ? { ...post, ...override } : post;
}

function sortPosts(posts) {
  return posts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || String(b.published_at || '').localeCompare(String(a.published_at || '')));
}

async function safeRows(sql, params) {
  try { return (await query(sql, params)).rows; } catch (error) { console.error('Blog database unavailable:', error.message); return []; }
}

export async function getPublishedPosts() {
  const rows = await safeRows(`
    SELECT p.id, p.slug, p.title, p.meta_title, p.meta_description, p.excerpt, p.category,
      p.category_color, p.read_time, p.icon, p.tags, p.og_image_url, p.featured, p.published_at,
      a.name AS author_name, a.role AS author_role, a.avatar_url AS author_avatar
    FROM blog_posts p LEFT JOIN blog_authors a ON a.id = p.author_id
    WHERE p.status = 'published' ORDER BY p.featured DESC, p.published_at DESC, p.created_at DESC
  `);
  const fromDb = rows.map((post) => applyOverride({ ...post, published_at: post.published_at?.toISOString() || null }));
  const known = new Set(fromDb.map((post) => post.slug));
  const extra = codePosts.filter((post) => !known.has(post.slug)).map(({ body, ...post }) => post);
  return sortPosts([...fromDb, ...extra]);
}

export async function getPublishedPost(slug) {
  const rows = await safeRows(`
    SELECT p.*, a.name AS author_name, a.role AS author_role, a.avatar_url AS author_avatar, a.bio AS author_bio
    FROM blog_posts p LEFT JOIN blog_authors a ON a.id = p.author_id
    WHERE p.slug = $1 AND p.status = 'published' LIMIT 1
  `, [slug]);
  if (rows.length) {
    const post = rows[0];
    return applyOverride({ ...post, published_at: post.published_at?.toISOString() || null, created_at: post.created_at?.toISOString() || null, updated_at: post.updated_at?.toISOString() || null });
  }
  return codePosts.find((post) => post.slug === slug) || null;
}
