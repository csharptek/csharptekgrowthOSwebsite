import { ogImage, ogSize } from '../../../lib/og';

export const alt = 'Keep customer data out of AI tools.';
export const size = ogSize;
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return ogImage({ eyebrow: 'Financial services', title: 'Keep customer data', accent: 'out of AI tools.' });
}
