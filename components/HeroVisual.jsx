import Image from 'next/image';

export default function HeroVisual() {
  return <div className="hero-visual-wrap" aria-hidden="true">
    <Image
      src="/images/brand/hero-connected-c.png"
      alt="Csharptek connected engineering artwork: Azure, AI and .NET systems linked by a teal path"
      fill
      sizes="100vw"
      quality={75}
      priority
      fetchPriority="high"
      className="hero-brand-image"
    />
  </div>;
}
