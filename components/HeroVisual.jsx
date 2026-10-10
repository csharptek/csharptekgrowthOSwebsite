import Image from 'next/image';

export default function HeroVisual() {
  return <div className="hero-visual-wrap" aria-hidden="true">
    <Image
      src="/images/brand/hero-connected-c.png"
      alt=""
      fill
      sizes="100vw"
      quality={75}
      priority
      fetchPriority="high"
      className="hero-brand-image"
    />
  </div>;
}
