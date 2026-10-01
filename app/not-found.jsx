import Link from 'next/link';

export default function NotFound() {
  return <section className="not-found"><span className="eyebrow">404 · Page not found</span><h1>That path didn’t lead anywhere.</h1><p>The page may have moved. Start with a solution or tell us about your initiative.</p><div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}><Link className="button button-dark" href="/">Back to home</Link><Link className="button" href="/contact">Discuss your initiative</Link></div></section>;
}
