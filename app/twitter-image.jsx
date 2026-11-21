import { ogImage, ogSize } from '../lib/og';

export const alt = 'Csharptek: use AI without leaking data. AI data protection, Azure AI and .NET engineering.';
export const size = ogSize;
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return ogImage({ title: 'Use AI', accent: 'without leaking data.', footer: 'AI data protection on Microsoft 365 · Production AI · .NET on Azure' });
}
