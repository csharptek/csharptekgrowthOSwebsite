import { query } from '../../../lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Header images published by TekGrowth Blog Studio, served from our own domain. */
export async function GET(_request, { params }) {
  const { file } = await params;
  const id = Number(String(file).split('-')[0]);
  if (!Number.isInteger(id) || id <= 0) return new Response('Not found', { status: 404 });
  try {
    const r = await query('SELECT mime, data FROM blog_images WHERE id = $1', [id]);
    if (!r.rows[0]) return new Response('Not found', { status: 404 });
    return new Response(r.rows[0].data, { headers: { 'Content-Type': r.rows[0].mime, 'Cache-Control': 'public, max-age=31536000, immutable' } });
  } catch {
    return new Response('Not found', { status: 404 });
  }
}
