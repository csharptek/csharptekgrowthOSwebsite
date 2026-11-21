import { ogImage, ogSize } from '../../../lib/og';

export const alt = 'AI acceptable use policy template.';
export const size = ogSize;
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return ogImage({ eyebrow: 'Free template', title: 'AI acceptable use', accent: 'policy template.' });
}
