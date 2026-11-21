'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import LeadForm from './LeadForm';

const QUESTIONS = [
  ['Can you list the AI tools your staff used for work in the last month?', 'Turn on AI app discovery so you know which AI tools are in use.', '/solutions/shadow-ai-discovery'],
  ['Do staff use AI tools only with work accounts, never personal ones?', 'Require work-account sign-in for approved AI and block personal AI accounts on managed devices.', '/solutions/ai-data-loss-prevention'],
  ['Is there a written AI policy that staff have read?', 'Publish a short AI acceptable use policy.', '/resources/ai-acceptable-use-policy-template'],
  ['Do staff have an approved AI tool they are happy to use?', 'Give people a safe AI option so they stop using public chatbots.', '/solutions/private-ai-workspace'],
  ['Is pasting customer or financial data into unapproved AI tools warned or blocked?', 'Set up data loss prevention for AI prompts and uploads.', '/solutions/ai-data-loss-prevention'],
  ['Is your sensitive data labelled or detectable by policy?', 'Define sensitive data types and apply sensitivity labels.', '/solutions/ai-data-loss-prevention'],
  ['Are all company laptops managed (for example with Intune)?', 'Enrol devices so AI and data controls can apply to them.', '/solutions/microsoft-365-security'],
  ['Do AI add-ons, extensions and apps need admin approval?', 'Require admin consent for third-party apps and AI add-ons.', '/solutions/ai-governance'],
  ['Does every AI agent or automation have a named owner?', 'Build an AI register with owners for every tool and agent.', '/solutions/ai-governance'],
  ['Could you report what data went into AI tools last month?', 'Turn on audit logging and monthly AI usage reporting.', '/solutions/shadow-ai-discovery']
];
const OPTIONS = [['yes', 'Yes', 0], ['partly', 'Partly', 5], ['no', 'No / not sure', 10]];

export default function ShadowAiQuiz() {
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);
  const answered = Object.keys(answers).length;
  const score = Object.values(answers).reduce((n, v) => n + v, 0);
  const level = score > 60 ? 'High' : score > 30 ? 'Medium' : 'Low';
  const fixes = QUESTIONS.map((q, i) => [q, answers[i] ?? 0]).filter(([, v]) => v > 0).sort((a, b) => b[1] - a[1]).slice(0, 3);

  function pick(i, v) { setAnswers((a) => ({ ...a, [i]: v })); }
  function finish() {
    setDone(true);
    window.dataLayer?.push({ event: 'quiz_complete', quiz_name: 'shadow_ai', quiz_score: score });
    setTimeout(() => document.getElementById('quiz-result')?.scrollIntoView({ behavior: 'smooth' }), 50);
  }

  return <div>
    {QUESTIONS.map(([q], i) => <div className="content-panel" key={q} style={{ marginTop: i ? 16 : 0 }}>
      <span className="eyebrow">Question {i + 1} of {QUESTIONS.length}</span>
      <h3 style={{ marginTop: 6 }}>{q}</h3>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 12 }} role="radiogroup" aria-label={q}>
        {OPTIONS.map(([key, label, v]) => <button type="button" key={key} role="radio" aria-checked={answers[i] === v} onClick={() => pick(i, v)} className={answers[i] === v ? 'button' : 'button button-dark'} style={{ padding: '10px 18px' }}>{label}</button>)}
      </div>
    </div>)}

    <div style={{ marginTop: 24 }}>
      <button type="button" className="button" disabled={answered < QUESTIONS.length} onClick={finish}>{answered < QUESTIONS.length ? `Answer all questions (${answered}/${QUESTIONS.length})` : 'See my score'} <Icon name="arrow" size={16}/></button>
    </div>

    {done && <div id="quiz-result" className="content-grid" style={{ marginTop: 48 }}>
      <div>
        <span className="eyebrow">Your result</span>
        <h2>{score} / 100 · {level} risk</h2>
        <p>{level === 'High' ? 'Company data is very likely reaching AI tools without control. The fixes below remove most of the risk quickly.' : level === 'Medium' ? 'Some controls are in place, but there are gaps where data can still reach AI tools unnoticed.' : 'You have the basics in place. Keep monitoring new AI tools and test that your controls really work.'}</p>
        {fixes.length > 0 && <><h3>Fix these first</h3><ul className="check-list">{fixes.map(([[, fix, href]]) => <li key={fix}><Icon name="check" size={16}/><Link href={href}>{fix}</Link></li>)}</ul></>}
        <p><Link className="text-link" href="/ai-data-risk-check">Measure your real AI usage with the AI Data Risk Check <Icon name="arrow" size={15}/></Link></p>
      </div>
      <div><LeadForm defaultInitiative={`Shadow AI assessment: score ${score}/100 (${level})`} defaultReason="Project Consultation (Free)"/></div>
    </div>}
  </div>;
}
