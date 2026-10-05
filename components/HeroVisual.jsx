import Image from 'next/image';

export default function HeroVisual() {
  return <div className="hero-visual-wrap" aria-hidden="true">
    <Image
      src="/images/brand/hero-connected-c.png"
      alt=""
      width={2170}
      height={725}
      sizes="(max-width: 760px) 100vw, 48vw"
      priority
      className="hero-brand-image"
    />
  </div>;
}
