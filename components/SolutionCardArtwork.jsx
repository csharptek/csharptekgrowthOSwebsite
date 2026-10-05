import Image from 'next/image';

const artwork = {
  'ai-production-engineering': ['/images/brand/solution-ai-production.png', 'AI system architecture modules connected through a quality checkpoint'],
  'ai-product-engineering': ['/images/brand/solution-ai-product.png', 'A product object linked to a companion interface'],
  'intelligent-workflow-automation': ['/images/brand/solution-workflow-automation.png', 'A connected intake, review and handoff workflow'],
  'application-cloud-modernization': ['/images/brand/solution-modernization.png', 'An established system extended with modern modular layers'],
  'healthcare-ai-automation': ['/images/brand/case-woundmedix.png', 'An illustrative healthcare intake and workforce workflow'],
  'microsoft-marketplace-engineering': ['/images/brand/case-landminer.png', 'An illustrative SaaS product and subscription sequence']
};

export default function SolutionCardArtwork({ slug }) {
  const [src, alt] = artwork[slug] || [];
  if (!src) return null;

  return <div className="solution-art-frame">
    <Image src={src} alt={alt} width={1152} height={896} sizes="(max-width: 760px) 100vw, 33vw" />
  </div>;
}
