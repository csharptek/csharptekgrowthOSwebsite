const siteUrl = 'https://www.csharptek.com';

/** Pass image: false on pages that have their own opengraph-image file, so the file is used.
 * Build consistent canonical and share metadata for an indexable public page. */
export function createPageMetadata({ title, description, path, image = '/opengraph-image', type = 'website' }) {
  const url = new URL(path, siteUrl).toString();
  const socialTitle = /^Csharptek\b/.test(title) ? title : `${title} | Csharptek`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type, url, siteName: 'Csharptek', title: socialTitle, description, ...(image ? { images: [{ url: image, alt: socialTitle }] } : {}) },
    twitter: { card: 'summary_large_image', title: socialTitle, description, ...(image ? { images: [image] } : {}) }
  };
}
