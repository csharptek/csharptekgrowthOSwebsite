export default function Faq({ items, title = 'Questions we hear often' }) {
  const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
  return <section className="section"><div className="wrap"><div className="section-heading"><span className="eyebrow">FAQ</span><h2>{title}</h2></div><div className="faq-list">{items.map(([q, a]) => <details className="faq-item" key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}/></section>;
}
