const nodes = [
  { x: 120, y: 70, label: 'Data & systems', sub: 'CRM · EHR · ERP' },
  { x: 360, y: 70, label: 'AI & agents', sub: 'LLM · RAG · workflows' },
  { x: 600, y: 70, label: 'Product', sub: 'Web · mobile · APIs' },
  { x: 840, y: 70, label: 'Cloud operations', sub: 'Azure · DevOps · .NET' }
];

export default function HeroVisual() {
  return <div className="hero-visual-wrap" aria-hidden="true">
    <svg viewBox="0 48 960 140" role="img" className="hero-diagram">
      <defs><linearGradient id="hv-line" x1="0" x2="1"><stop offset="0" stopColor="#79c9e8"/><stop offset="1" stopColor="#006898"/></linearGradient></defs>
      <path d="M200 100H280M440 100H520M680 100H760" stroke="url(#hv-line)" strokeWidth="2" strokeDasharray="5 6" fill="none"/>
      {nodes.map((n) => <g key={n.label}>
        <rect x={n.x - 80} y={n.y - 10} width="160" height="82" rx="14" fill="#fff" stroke="#c7e2ec"/>
        <circle cx={n.x - 56} cy={n.y + 18} r="6" fill="#006898"/>
        <text x={n.x - 40} y={n.y + 23} fontSize="14" fontWeight="650" fill="#003850">{n.label}</text>
        <text x={n.x - 56} y={n.y + 52} fontSize="11" fill="#536b75">{n.sub}</text>
      </g>)}
      <text x="480" y="170" textAnchor="middle" fontSize="11" letterSpacing="2" fill="#006898">ONE CONNECTED, PRODUCTION-READY SYSTEM</text>
    </svg>
  </div>;
}
