import { ogImage, ogSize } from '../../../lib/og';

export const alt = 'Keep designs and formulas out of AI tools.';
export const size = ogSize;
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return ogImage({ eyebrow: 'Manufacturing & pharma', title: 'Keep designs and formulas', accent: 'out of AI tools.' });
}
