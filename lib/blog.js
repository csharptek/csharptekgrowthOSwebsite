import { query } from './db';

export async function getPublishedPosts() {
  const result = await query(`
    SELECT p.id, p.slug, p.title, p.meta_title, p.meta_description, p.excerpt, p.category,
      p.category_color, p.read_time, p.icon, p.tags, p.og_image_url, p.featured, p.published_at,
      a.name AS author_name, a.role AS author_role, a.avatar_url AS author_avatar
    FROM blog_posts p LEFT JOIN blog_authors a ON a.id = p.author_id
    WHERE p.status = 'published' ORDER BY p.featured DESC, p.published_at DESC, p.created_at DESC
  `);
  return result.rows.map((post) => ({ ...post, published_at: post.published_at?.toISOString() || null }));
}

export async function getPublishedPost(slug) {
  const result = await query(`
    SELECT p.*, a.name AS author_name, a.role AS author_role, a.avatar_url AS author_avatar, a.bio AS author_bio
    FROM blog_posts p LEFT JOIN blog_authors a ON a.id = p.author_id
    WHERE p.slug = $1 AND p.status = 'published' LIMIT 1
  `, [slug]);
  if (!result.rows.length) return null;
  const post = result.rows[0];
  return { ...post, published_at: post.published_at?.toISOString() || null, created_at: post.created_at?.toISOString() || null, updated_at: post.updated_at?.toISOString() || null };
}
