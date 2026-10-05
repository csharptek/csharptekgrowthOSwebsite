import Image from 'next/image';

export default function HeroVisual() {
  return <div className="hero-visual-wrap" aria-hidden="true">
    <Image
      src="/images/brand/hero-connected-c-panorama.svg"
      alt=""
      fill
      sizes="100vw"
      priority
      unoptimized
      className="hero-brand-image"
    />
  </div>;
}
