import { ogImage, ogSize } from '../../../lib/og';

export const alt = 'Keep client code out of AI tools.';
export const size = ogSize;
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return ogImage({ eyebrow: 'Software & IT services', title: 'Keep client code', accent: 'out of AI tools.' });
}
