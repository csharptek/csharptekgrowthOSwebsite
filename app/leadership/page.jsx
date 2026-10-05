import Link from 'next/link';
import { leaders } from '../../data/leadership';

export const metadata = { title: 'Leadership', description: 'Meet the leadership team behind Csharptek, the engineers and operators guiding AI, product engineering and modernization work for clients.', alternates: { canonical: '/leadership' } };

export default function LeadershipPage() {
  return <><section className="page-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/about">Company</Link><span>/</span>Leadership</div><span className="eyebrow">Leadership</span><h1>Engineering leadership, close to the work.</h1><p>We’re shaping this page around the people who guide Csharptek’s engineering and client partnerships.</p></div></section><section className="section"><div className="wrap">{leaders.length ? <div className="leader-grid">{leaders.map((l)=><article className="leader-card" key={l.name}>{l.photo && <img className="leader-photo" src={l.photo} alt={l.name}/>}<h3>{l.name}</h3><span className="role">{l.role}</span><p>{l.bio}</p>{l.linkedin && <p style={{marginTop:12}}><a className="text-link" href={l.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>}</article>)}</div> : <div className="empty-state">Leadership profiles are being prepared. <Link className="text-link" href="/contact">Talk with our team</Link></div>}</div></section></>;
}
