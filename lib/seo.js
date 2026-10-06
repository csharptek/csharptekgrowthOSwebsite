const siteUrl = 'https://www.csharptek.com';

/** Build consistent canonical and share metadata for an indexable public page. */
export function createPageMetadata({ title, description, path, image = '/opengraph-image', type = 'website' }) {
  const url = new URL(path, siteUrl).toString();
  const socialTitle = `${title} | Csharptek`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type, url, siteName: 'Csharptek', title: socialTitle, description, images: [{ url: image, alt: socialTitle }] },
    twitter: { card: 'summary_large_image', title: socialTitle, description, images: [image] }
  };
}
