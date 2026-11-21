import { ogImage, ogSize } from '../../lib/og';

export const alt = 'See what company data goes into AI tools.';
export const size = ogSize;
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return ogImage({ eyebrow: 'AI Data Risk Check', title: 'See what company data', accent: 'goes into AI tools.' });
}
