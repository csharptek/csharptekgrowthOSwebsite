import Image from 'next/image';

const artworkBySlug = {
  'ai-production-engineering': {
    src: '/images/brand/solution-ai-production.png',
    alt: 'Translucent architecture modules linked by a cyan-to-teal connector and a quality checkpoint.'
  },
  'ai-product-engineering': {
    src: '/images/brand/solution-ai-product.png',
    alt: 'A considered product object connected to a companion interface by a teal path.'
  },
  'intelligent-workflow-automation': {
    src: '/images/brand/solution-workflow-automation.png',
    alt: 'A miniature operations workspace with intake, review and handoff stations connected by a teal route.'
  },
  'application-cloud-modernization': {
    src: '/images/brand/solution-modernization.png',
    alt: 'A durable existing structure extended with new modular layers and a cyan integration path.'
  },
  'healthcare-ai-automation': {
    src: '/images/brand/case-woundmedix.png',
    alt: 'An illustrative referral and workforce workflow connected by a teal route.'
  },
  'microsoft-marketplace-engineering': {
    src: '/images/brand/case-landminer.png',
    alt: 'An illustrative SaaS product, identity and subscription sequence connected by a teal route.'
  },
  'ai-llm': {
    src: '/images/brand/service-ai-workflow.png',
    alt: 'A layered workflow model connected by a continuous cyan and teal path.'
  },
  'product-engineering': {
    src: '/images/brand/service-product-prototyping.png',
    alt: 'A physical product prototype on a worktable beside interface sketches.'
  },
  azure: {
    src: '/images/brand/service-cloud-architecture.png',
    alt: 'A translucent modular architecture model joined by a continuous teal path.'
  },
  dotnet: {
    src: '/images/brand/service-cloud-architecture.png',
    alt: 'A layered application architecture model with connected modules.'
  },
  'cloud-devops': {
    src: '/images/brand/service-platform-systems.png',
    alt: 'A precise platform model with connected system components and a teal route.'
  },
  'data-integrations': {
    src: '/images/brand/service-platform-systems.png',
    alt: 'A connected system model with a continuous path through its components.'
  }
};

artworkBySlug.about = {
  src: '/images/brand/about-collaboration.png',
  alt: 'A collaborative engineering workshop table with hands arranging connected workflow pieces.'
};
artworkBySlug['solutions-index'] = {
  src: '/images/brand/hero-system-path.png',
  alt: 'A cyan-to-teal ribbon moving through sculptural layers of warm-white architectural material.'
};
artworkBySlug['capabilities-index'] = {
  src: '/images/brand/service-cloud-architecture.png',
  alt: 'A layered cloud architecture model with connected components and a teal integration path.'
};
artworkBySlug['industries-index'] = {
  src: '/images/brand/hero-system-path.png',
  alt: 'A continuous teal path connecting distinct systems and work environments.'
};
artworkBySlug['industry-healthcare'] = {
  src: '/images/brand/case-medical-documentation.png',
  alt: 'A healthcare documentation workflow represented by a phone, voice capture and connected review.'
};
artworkBySlug['industry-technology-saas'] = {
  src: '/images/brand/solution-ai-product.png',
  alt: 'A connected software product concept with a teal path linking product components.'
};

export default function BrandArtwork({ slug }) {
  const artwork = artworkBySlug[slug];
  if (!artwork) return null;

  return <figure className="brand-artwork">
    <Image src={artwork.src} alt={artwork.alt} width={1152} height={896} sizes="(max-width: 760px) 100vw, 42vw" priority />
  </figure>;
}
