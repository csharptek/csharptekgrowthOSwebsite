import crypto from 'node:crypto';
import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const siteUrl = 'https://www.csharptek.com';
const BLOCK_TYPES = new Set(['intro', 'p', 'h2', 'h3', 'ul', 'faq', 'cta', 'img']);

function authorized(request) {
  const secret = process.env.BLOG_PUBLISH_SECRET || '';
  if (!secret) return false;
  const got = (request.headers.get('authorization') || '').replace(/^Bearer\s+/i, '');
  const a = Buffer.from(got);
  const b = Buffer.from(secret);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

const str = (v, n) => (typeof v === 'string' ? v.trim().slice(0, n) : '');

function cleanBlocks(blocks, imageUrls = {}) {
  if (!Array.isArray(blocks)) return [];
  return blocks.filter((b) => b && BLOCK_TYPES.has(b.type) && (b.type !== 'img' || imageUrls[b.key])).slice(0, 200).map((b) => {
    if (b.type === 'img') return { type: 'img', src: imageUrls[b.key], alt: str(b.alt, 200), caption: str(b.caption, 240) || undefined };
    if (b.type === 'ul') return { type: 'ul', items: (Array.isArray(b.items) ? b.items : []).filter((x) => typeof x === 'string').map((x) => x.slice(0, 1200)).slice(0, 30) };
    if (b.type === 'faq') return { type: 'faq', items: (Array.isArray(b.items) ? b.items : []).filter((x) => Array.isArray(x) && x.length === 2).map(([q, a]) => [String(q).slice(0, 300), String(a).slice(0, 1500)]).slice(0, 12) };
    if (b.type === 'cta') return { type: 'cta', text: str(b.text, 400), href: typeof b.href === 'string' && b.href.startsWith('/') && !b.href.startsWith('//') ? b.href.slice(0, 200) : '/contact', label: str(b.label, 60) || undefined };
    return { type: b.type, text: str(b.text, 4000) };
  });
}

/** Columns of blog_posts as they exist in this database (the CMS schema is shared with the admin app). */
async function columns() {
  const r = await query("SELECT column_name, data_type, udt_name FROM information_schema.columns WHERE table_name = 'blog_posts'");
  return new Map(r.rows.map((c) => [c.column_name, c]));
}

async function authorId(name) {
  try {
    const r = await query('SELECT id FROM blog_authors WHERE lower(name) = lower($1) LIMIT 1', [name]);
    if (r.rows[0]) return r.rows[0].id;
    const any = await query('SELECT id FROM blog_authors ORDER BY id LIMIT 1');
    return any.rows[0]?.id ?? null;
  } catch { return null; }
}

/** TekGrowth Blog Studio → publishes or updates one article (by slug). */
export async function POST(request) {
  if (!authorized(request)) return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ ok: false, error: 'bad json' }, { status: 400 }); }
  const slug = str(body.slug, 120).toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  const title = str(body.title, 200);
  let blocks = cleanBlocks(body.blocks);
  if (!slug || !title || blocks.length < 3) return NextResponse.json({ ok: false, error: 'slug, title and blocks are required' }, { status: 400 });

  try {
    let imageUrl = null;
    if (body.image && typeof body.image.base64 === 'string' && body.image.base64.length > 100) {
      const mime = /^image\/(png|jpeg|webp)$/.test(body.image.mime) ? body.image.mime : 'image/png';
      const data = Buffer.from(body.image.base64, 'base64');
      if (data.length > 8 * 1024 * 1024) return NextResponse.json({ ok: false, error: 'image too large' }, { status: 413 });
      await query('CREATE TABLE IF NOT EXISTS tg_blog_images (id serial PRIMARY KEY, slug text NOT NULL, mime text NOT NULL, alt text, data bytea NOT NULL, created_at timestamptz DEFAULT now())');
      const ins = await query('INSERT INTO tg_blog_images (slug, mime, alt, data) VALUES ($1, $2, $3, $4) RETURNING id', [slug, mime, str(body.image.alt, 200), data]);
      imageUrl = `${siteUrl}/blog-images/${ins.rows[0].id}-${slug}.${mime.split('/')[1].replace('jpeg', 'jpg')}`;
    }

    // Inline images: stored like the header image; img blocks point at them by key.
    const imageUrls = {};
    for (const im of (Array.isArray(body.images) ? body.images : []).slice(0, 6)) {
      if (!im || typeof im.key !== 'string' || typeof im.base64 !== 'string' || im.base64.length < 100) continue;
      const mime = /^image\/(png|jpeg|webp)$/.test(im.mime) ? im.mime : 'image/png';
      const data = Buffer.from(im.base64, 'base64');
      if (data.length > 8 * 1024 * 1024) continue;
      await query('CREATE TABLE IF NOT EXISTS tg_blog_images (id serial PRIMARY KEY, slug text NOT NULL, mime text NOT NULL, alt text, data bytea NOT NULL, created_at timestamptz DEFAULT now())');
      const ins = await query('INSERT INTO tg_blog_images (slug, mime, alt, data) VALUES ($1, $2, $3, $4) RETURNING id', [slug, mime, str(im.alt, 200), data]);
      imageUrls[im.key.slice(0, 20)] = `${siteUrl}/blog-images/${ins.rows[0].id}-${slug}.${mime.split('/')[1].replace('jpeg', 'jpg')}`;
    }
    blocks = cleanBlocks(body.blocks, imageUrls);

    const cols = await columns();
    const tags = (Array.isArray(body.tags) ? body.tags : []).filter((t) => typeof t === 'string').map((t) => t.slice(0, 40)).slice(0, 8);
    const values = {
      slug, title,
      meta_title: str(body.metaTitle, 120) || title,
      meta_description: str(body.metaDescription, 300),
      excerpt: str(body.excerpt, 400),
      category: str(body.category, 80) || 'Insight',
      read_time: str(body.readTime, 40),
      body: JSON.stringify(blocks),
      status: 'published',
      featured: false,
      published_at: new Date(),
      updated_at: new Date(),
      ...(imageUrl ? { og_image_url: imageUrl } : {}),
      author_id: await authorId(str(body.author, 80) || 'Bhanu Gupta')
    };
    const names = [];
    const params = [];
    const placeholders = [];
    for (const [k, v] of Object.entries(values)) {
      const c = cols.get(k);
      if (!c || v === undefined || v === null) continue;
      names.push(`"${k}"`);
      if (c.data_type === 'jsonb' || c.data_type === 'json') { params.push(JSON.stringify(k === 'body' ? blocks : v)); placeholders.push(`$${params.length}::${c.data_type}`); }
      else { params.push(v); placeholders.push(`$${params.length}`); }
    }
    const tc = cols.get('tags');
    if (tc) {
      names.push('"tags"');
      if (tc.data_type === 'ARRAY') { params.push(tags); placeholders.push(`$${params.length}::text[]`); }
      else if (tc.data_type === 'jsonb' || tc.data_type === 'json') { params.push(JSON.stringify(tags)); placeholders.push(`$${params.length}::${tc.data_type}`); }
      else { params.push(tags.join(', ')); placeholders.push(`$${params.length}`); }
    }
    const existing = await query('SELECT id, published_at FROM blog_posts WHERE slug = $1 LIMIT 1', [slug]);
    if (existing.rows[0]) {
      const sets = names.map((n, i) => `${n} = ${placeholders[i]}`).filter((s) => !s.startsWith('"published_at"'));
      params.push(existing.rows[0].id);
      await query(`UPDATE blog_posts SET ${sets.join(', ')} WHERE id = $${params.length}`, params);
    } else {
      await query(`INSERT INTO blog_posts (${names.join(', ')}) VALUES (${placeholders.join(', ')})`, params);
    }
    return NextResponse.json({ ok: true, url: `${siteUrl}/blog/${slug}`, image: imageUrl, images: imageUrls });
  } catch (error) {
    console.error('Blog publish failed:', error.message);
    return NextResponse.json({ ok: false, error: error.message.slice(0, 300) }, { status: 500 });
  }
}
