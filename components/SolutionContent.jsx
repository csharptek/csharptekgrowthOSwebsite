import Link from 'next/link';
import Icon from './Icon';
import Faq from './Faq';
import { solutionContent } from '../data/solutionContent';
import { solutionExtra } from '../data/solutionExtra';

const deliveryStages = [
  ['01', 'Understand the workflow', 'Agree on the users, business context, systems and constraints that define the initiative.'],
  ['02', 'Shape the technical path', 'Connect architecture, integrations, data, security and delivery decisions to the needs already identified.'],
  ['03', 'Build in useful increments', 'Deliver and review the system in stages so the work can respond to product and operational feedback.'],
  ['04', 'Prepare to operate', 'Consider ownership, monitoring, support and the next improvements as part of the delivery plan.']
];

export default function SolutionContent({ solution, capabilities = [], includeFaq = true }) {
  const content = solutionContent[solution.slug];
  if (!content) return null;
  const extra = solutionExtra[solution.slug];
  const faqs = extra?.faqs || content.faqs;

  return <>
    <section className="section section-tint">
      <div className="wrap content-grid">
        <div>
          <span className="eyebrow">When this solution fits</span>
          <h2>Start with the work your team needs to make possible.</h2>
          <p>{content.fit}</p>
          <p>{solution.buyer} The first useful step is to define what needs to change, how the current environment shapes the work and which outcome the team needs to be able to assess.</p>
        </div>
        <aside className="content-panel">
          <span className="eyebrow">Engineering focus</span>
          <h3>Connect the technical work to the initiative.</h3>
          <ul className="check-list">{solution.capabilities.map((item) => <li key={item}><Icon name="check" size={16}/>{item}</li>)}</ul>
          {capabilities.length > 0 && <p>Related disciplines: {capabilities.map((item, index) => <span key={item.slug}>{index > 0 ? ', ' : ''}<Link href={`/capabilities/${item.slug}`}>{item.title}</Link></span>)}.</p>}
        </aside>
      </div>
    </section>

    <section className="section">
      <div className="wrap">
        <div className="section-heading"><span className="eyebrow">Typical workstreams</span><h2>What the engineering may involve.</h2><p>The exact scope depends on your systems and constraints. These workstreams describe common parts of this solution area.</p></div>
        <div className="step-grid">{content.workstreams.map(([title, text], index) => <article className="step-card" key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>

    {extra?.sections?.map((block, i) => <section className={`section${i % 2 === 0 ? ' section-tint' : ''}`} key={block.title}>
      <div className="wrap">
        <div className="section-heading"><span className="eyebrow">{block.eyebrow}</span><h2>{block.title}</h2><p>{block.intro}</p></div>
        <div className="step-grid">{block.items.map(([title, text], index) => <article className="step-card" key={title}><b>{String(index + 1).padStart(2, '0')}</b><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>)}

    {extra?.checklist && <section className="section">
      <div className="wrap content-grid">
        <div><span className="eyebrow">Checklist</span><h2>{extra.checklist.title}</h2><p>{extra.checklist.intro}</p><Link className="button button-dark" href={`/contact?initiative=${encodeURIComponent(solution.title)}`}>Request an assessment <Icon name="arrow" size={15}/></Link></div>
        <aside className="content-panel"><ul className="check-list">{extra.checklist.items.map((item) => <li key={item}><Icon name="check" size={16}/>{item}</li>)}</ul></aside>
      </div>
    </section>}

    <section className="section section-dark">
      <div className="wrap">
        <div className="section-heading"><span className="eyebrow eyebrow-light">A clear path from scope to operation</span><h2>Keep decisions connected through delivery.</h2><p>Move from a defined initiative to an operating system through focused, reviewable stages.</p></div>
        <div className="process-grid">{deliveryStages.map(([number, title, text]) => <article className="process-step" key={number}><span className="process-dot">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div style={{marginTop: 28}}><Link className="button button-light" href={`/contact?initiative=${encodeURIComponent(solution.title)}`}>Discuss this solution <Icon name="arrow" size={16}/></Link></div>
      </div>
    </section>

    {includeFaq && <Faq items={faqs} title={`Questions about ${solution.title.toLowerCase()}`}/>}
  </>;
}
