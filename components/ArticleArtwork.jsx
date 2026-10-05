import Image from 'next/image';

const covers = [
  { terms: ['marketplace', 'commerce', 'fulfillment', 'subscription'], src: '/images/brand/article-marketplace.png', alt: 'Connected product, access and subscription modules for SaaS commerce.' },
  { terms: ['modernization', 'modernisation', '.net', 'azure', 'cloud'], src: '/images/brand/article-modernization.png', alt: 'An established system extended with a new connected service layer.' },
  { terms: ['workflow', 'automation', 'operations', 'voice'], src: '/images/brand/article-workflow.png', alt: 'Connected operational stations with a human review checkpoint.' },
  { terms: ['rag', 'retrieval', 'knowledge', 'grounded'], src: '/images/brand/article-rag.png', alt: 'Knowledge cards connected through a retrieval layer to a cited answer.' },
  { terms: ['healthcare', 'clinical', 'medical', 'scribe'], src: '/images/brand/case-medical-documentation.png', alt: 'A clinical documentation workflow from recording to human review.' },
  { terms: ['product', 'vibe coding', 'experience'], src: '/images/brand/solution-ai-product.png', alt: 'A product object connected to a companion interface.' }
];

function getCover(value = '') {
  const normalized = value.toLowerCase();
  return covers.find(({ terms }) => terms.some((term) => normalized.includes(term))) || {
    src: '/images/brand/article-ai-production.png',
    alt: 'Connected AI engineering modules with a production quality checkpoint.'
  };
}

export function ArticleCardArtwork({ title = '', category = '' }) {
  const cover = getCover(`${category} ${title}`);
  return <div className="article-art"><Image src={cover.src} alt={cover.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>;
}

export default function ArticleArtwork({ title = '', category = '' }) {
  const cover = getCover(`${category} ${title}`);
  return <figure className="brand-artwork article-cover"><Image src={cover.src} alt={cover.alt} fill sizes="(max-width: 760px) 100vw, 42vw" priority /></figure>;
}
