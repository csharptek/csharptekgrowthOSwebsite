import Link from 'next/link';
import Icon from '../../../components/Icon';
import SolutionProof from '../../../components/SolutionProof';
import Faq from '../../../components/Faq';
import BrandArtwork from '../../../components/BrandArtwork';

const useCases = [
  ['Medical documentation', 'Capture conversations and structure them into draft notes that clinicians review and approve.'],
  ['Referral and intake', 'Turn calls, forms and faxes into structured, routed work for the right team.'],
  ['Workforce coordination', 'Connect hiring, scheduling and onboarding workflows for clinical teams.'],
  ['Patient communication', 'Voice, messaging and follow-up workflows connected to the systems staff already use.'],
  ['Healthcare product AI', 'Add practical AI features to digital-health products without rebuilding the platform.'],
  ['Operational automation', 'Replace manual handoffs between administrative systems with connected workflows.']
];
const principles = [
  ['Human in the loop', 'AI drafts and routes; qualified staff review and decide.'],
  ['Privacy by design', 'Data access, retention and audit trails are designed with your compliance team.'],
  ['Integration first', 'We connect to existing EHR, scheduling and communication systems rather than replacing them.'],
  ['Staged rollout', 'Pilot with one workflow, measure it, then expand.']
];
const faqs = [
  ['Do you build clinical decision-making AI?', 'We focus on documentation, intake, operational and workforce workflows where AI assists staff. Anything touching clinical judgment is scoped carefully, with human review and your clinical governance.'],
  ['How do you handle patient data and privacy?', 'We design access control, logging and data handling with your compliance and security teams, and build on Azure services that support healthcare requirements.'],
  ['Can you integrate with our existing systems?', 'Yes. Most healthcare initiatives are integration work: EHR and scheduling systems, telephony, messaging, identity and document workflows.'],
  ['Where should a healthcare AI initiative start?', 'With one high-volume workflow. A focused discovery step defines the workflow, data, risks and success measures before the build.']
];

export const metadata = { title: 'Healthcare AI & Workflow Automation', description: 'Production-minded healthcare AI, product engineering and workflow automation for clinical and operational teams that need reliable, well-integrated systems.', alternates: { canonical: '/industries/healthcare' } };

export default function HealthcarePage() {
  return <><section className="page-hero"><div className="wrap page-hero-art-inner"><div className="page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span>Industries<span>/</span>Healthcare</div><span className="eyebrow">Healthcare technology</span><h1>Build smarter healthcare workflows with production AI.</h1><p>Reduce administrative friction, connect operational workflows and integrate useful AI into healthcare systems and products.</p><div style={{marginTop:28}}><Link className="button" href="/contact?initiative=Healthcare">Discuss a healthcare initiative <Icon name="arrow" size={16}/></Link></div></div><BrandArtwork slug="industry-healthcare"/></div></section><section className="section"><div className="wrap content-grid"><div><span className="eyebrow">Where we can help</span><h2>Technology around the work of care.</h2><p>Healthcare systems operate across clinical, administrative and workforce processes. We engineer software that respects those real workflows and connects the systems around them.</p><ul className="check-list">{['Medical documentation workflows','Referral and intake automation','Healthcare product AI','Scheduling and workforce workflows','Patient communication and integrations'].map((x)=><li key={x}><Icon name="check" size={16}/>{x}</li>)}</ul></div><aside className="content-panel"><span className="eyebrow">Build with care</span><h3>Useful, grounded engineering</h3><p>We focus on workflow and product engineering, with appropriate attention to privacy, reliability, review and the boundaries of AI in a healthcare setting.</p><div className="tag-list"><span>Clinical documentation</span><span>Workflow automation</span><span>Product engineering</span><span>Data integrations</span></div></aside></div></section><section className="section section-tint"><div className="wrap"><div className="section-heading"><span className="eyebrow">Where we help</span><h2>Workflows around the work of care.</h2></div><div className="step-grid">{useCases.map(([t,d],i)=><div className="step-card" key={t}><b>0{i+1}</b><h3>{t}</h3><p>{d}</p></div>)}</div></div></section><section className="section"><div className="wrap"><div className="section-heading"><span className="eyebrow">How we build</span><h2>Useful, grounded and reviewable.</h2></div><div className="step-grid">{principles.map(([t,d],i)=><div className="step-card" key={t}><b>0{i+1}</b><h3>{t}</h3><p>{d}</p></div>)}</div></div></section><SolutionProof slug="healthcare-ai-automation" /><Faq items={faqs}/></>;
}
