import Link from 'next/link';
import Faq from '../../../components/Faq';
import ShadowAiQuiz from '../../../components/ShadowAiQuiz';
import { createPageMetadata } from '../../../lib/seo';

export const metadata = createPageMetadata({
  title: 'Shadow AI Risk Assessment (10 Questions, Free)',
  description: 'Answer 10 quick questions to score your company’s shadow AI and AI data leak risk. Get an instant result and practical next steps for Microsoft 365 companies.',
  path: '/resources/shadow-ai-risk-assessment'
});

const faqs = [
  ['What does the shadow AI risk assessment measure?', 'How likely it is that company data is reaching AI tools without control, based on visibility of AI tools, account types, policy, technical controls and monitoring.'],
  ['Is my answer data stored?', 'Your answers stay in your browser unless you choose to send your result to us with the form.'],
  ['What is a good score?', '0–30 is low risk, 31–60 medium and above 60 high. Most companies taking the assessment for the first time score medium or high.'],
  ['How can I get an accurate picture?', 'The AI Data Risk Check measures real AI usage in your Microsoft 365 environment over one to two weeks.']
];

export default function ShadowAiAssessmentPage() {
  return <>
    <section className="page-hero"><div className="wrap page-hero-inner">
      <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/solutions/shadow-ai-discovery">Shadow AI</Link><span>/</span>Risk assessment</div>
      <span className="eyebrow">Free · 2 minutes</span>
      <h1>Shadow AI risk assessment: how likely is your company data to be leaking into AI tools?</h1>
      <p>Answer 10 yes, partly or no questions. You get a score from 0 to 100 and the three things to fix first.</p>
    </div></section>
    <section className="section"><div className="wrap"><ShadowAiQuiz/></div></section>
    <Faq items={faqs} title="About the assessment"/>
  </>;
}
