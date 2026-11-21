import { ogImage, ogSize } from '../../../lib/og';
import { getSolution } from '../../../data/site';

export const alt = 'Csharptek solution';
export const size = ogSize;
export const contentType = 'image/png';

export default async function OpenGraphImage({ params }) {
  const { slug } = await params;
  const s = getSolution(slug);
  return ogImage({ eyebrow: s?.eyebrow || 'Csharptek solution', title: s?.title || 'Csharptek' });
}
