import { ogImage, ogSize } from '../../../lib/og';

export const alt = 'Shadow AI risk assessment.';
export const size = ogSize;
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return ogImage({ eyebrow: 'Free · 2 minutes', title: 'Shadow AI', accent: 'risk assessment.' });
}
