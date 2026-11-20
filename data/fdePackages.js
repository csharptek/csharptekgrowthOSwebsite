// Fixed engagement packages for forward-deployed engineers and dedicated developers.
// Keys match the TekGrowth offers (fde_embedded, fde_pod, dedicated_dev, dev_team).
export const fdePackages = [
  {
    key: 'fde_embedded',
    id: 'forward-deployed-engineer',
    name: 'Forward-Deployed Engineer',
    who: 'For product companies with customer deployments waiting on an open FDE role.',
    summary: 'One senior engineer works inside your team on customer deployments, integrations and go-lives. Covers the role while you hire, or stays on as extra capacity.',
    includes: ['One senior engineer (Azure, .NET, AI integrations)', 'Works in your tools, standups and customer calls', 'Customer environment setup, integrations and handover notes', 'Monthly, with a 30-day notice period'],
    icon: 'spark'
  },
  {
    key: 'fde_pod',
    id: 'fde-pod',
    name: 'FDE Pod',
    who: 'For teams running several customer rollouts at the same time.',
    summary: 'A forward-deployed engineer plus an integration engineer, so customer-facing work and the integration build move in parallel.',
    includes: ['Forward-deployed engineer + integration engineer', 'Parallel customer rollouts', 'Shared runbooks and deployment checklists', 'Monthly, scale up or down with notice'],
    icon: 'layers'
  },
  {
    key: 'dedicated_dev',
    id: 'dedicated-developer',
    name: 'Dedicated Developer',
    who: 'For companies hiring a React, .NET or full-stack developer.',
    summary: 'One full-time developer who works inside your sprint, repository and tools, alongside your hire or instead of it.',
    includes: ['React, .NET, Node.js or full-stack', 'Your sprint, your repo, your code review', 'Daily overlap with US, UK or Australian hours', 'Monthly, with a 30-day notice period'],
    icon: 'flow'
  },
  {
    key: 'dev_team',
    id: 'dev-team',
    name: 'Dedicated Dev Team',
    who: 'For a roadmap that needs a small team, not one person.',
    summary: 'Two to four developers plus a tech lead on one roadmap, with delivery reporting you can share with your leadership.',
    includes: ['2–4 developers + tech lead', 'Sprint planning, QA and release support', 'Weekly progress report', 'Monthly, team size adjusts with notice'],
    icon: 'grid'
  }
];
