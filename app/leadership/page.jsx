import Link from 'next/link';

export const metadata = { title: 'Leadership', description: 'Meet the leadership team behind Csharptek, the engineers and operators guiding AI, product engineering and modernization work for clients.', alternates: { canonical: '/leadership' } };

export default function LeadershipPage() {
  return <><section className="page-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/about">Company</Link><span>/</span>Leadership</div><span className="eyebrow">Leadership</span><h1>Engineering leadership, close to the work.</h1><p>We’re shaping this page around the people who guide Csharptek’s engineering and client partnerships.</p></div></section><section className="section"><div className="wrap"><div className="empty-state">Leadership profiles are being prepared. <Link className="text-link" href="/contact">Talk with our team</Link></div></div></section></>;
}
