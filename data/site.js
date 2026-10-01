export const solutions = [
  {
    slug: 'ai-production-engineering',
    number: '01',
    eyebrow: 'From prototype to production',
    title: 'AI Production Engineering',
    short: 'Move promising AI initiatives into dependable systems your teams can operate.',
    description: 'Turn prototypes, RAG systems and agent initiatives into reliable software that connects to your data, applications and day-to-day operations.',
    buyer: 'For technology leaders moving an AI initiative beyond the demo.',
    capabilities: ['RAG and knowledge systems', 'AI agents and orchestration', 'Evaluation and monitoring', 'Secure data and application integration', 'Cloud deployment and operations'],
    proof: ['Multi-agent revenue automation', 'Production-oriented RAG pipelines', 'Azure AI engineering in existing systems'],
    icon: 'spark'
  },
  {
    slug: 'ai-product-engineering',
    number: '02',
    eyebrow: 'Make your product more useful',
    title: 'AI Product Engineering',
    short: 'Add thoughtful AI capabilities to products customers already rely on.',
    description: 'Design and engineer AI-powered product experiences that fit your existing architecture, data, customer journey and operating model.',
    buyer: 'For product and engineering teams extending an established product.',
    capabilities: ['AI assistants and intelligent search', 'Recommendations and document intelligence', 'Voice and multimodal experiences', 'Product architecture and APIs', 'Prototype-to-production delivery'],
    proof: ['AI marketing product engineering', 'Image-to-video product workflows', 'Healthcare product experiences'],
    icon: 'layers'
  },
  {
    slug: 'intelligent-workflow-automation',
    number: '03',
    eyebrow: 'Connect work that is stuck between systems',
    title: 'Intelligent Workflow Automation',
    short: 'Replace fragmented manual processes with connected, observable workflows.',
    description: 'Bring people, applications, data and AI together across workflows that currently depend on calls, email, spreadsheets and manual handoffs.',
    buyer: 'For operations leaders with a complex process to make simpler.',
    capabilities: ['Workflow discovery and redesign', 'AI-assisted intake and routing', 'Application and CRM integrations', 'Human review and escalation', 'Operational reporting'],
    proof: ['Referral intake and dispatch workflows', 'Clinical workforce onboarding', 'Connected sales and operations systems'],
    icon: 'flow'
  },
  {
    slug: 'application-cloud-modernization',
    number: '04',
    eyebrow: 'Improve the systems you already depend on',
    title: 'Application & Cloud Modernization',
    short: 'Modernize applications and infrastructure without defaulting to a full rewrite.',
    description: 'Improve legacy applications, cloud architecture, APIs and delivery pipelines through a practical modernization path that respects your constraints.',
    buyer: 'For technology leaders responsible for long-lived applications and cloud estates.',
    capabilities: ['.NET and application modernization', 'Azure architecture and migration', 'API and integration design', 'Containers, AKS and infrastructure as code', 'CI/CD and engineering enablement'],
    proof: ['Incremental .NET modernization', 'Azure architecture and identity', 'Cloud delivery and DevOps engineering'],
    icon: 'orbit'
  },
  {
    slug: 'healthcare-ai-automation',
    number: '05',
    eyebrow: 'Technology for real healthcare operations',
    title: 'Healthcare AI & Automation',
    short: 'Reduce administrative friction and connect the workflows around care.',
    description: 'Build healthcare products and operational systems for documentation, intake, referrals, workforce coordination and patient communication.',
    buyer: 'For healthcare technology, operations and digital health teams.',
    capabilities: ['Clinical documentation workflows', 'Referral and intake automation', 'Healthcare product engineering', 'Scheduling and communication', 'Privacy-aware systems integration'],
    proof: ['AI-assisted clinical documentation', 'Healthcare mobile product engineering', 'Referral and workforce workflows'],
    icon: 'plus'
  },
  {
    slug: 'microsoft-marketplace-engineering',
    number: '06',
    eyebrow: 'Turn a SaaS product into a marketplace offer',
    title: 'Microsoft Marketplace Engineering',
    short: 'Build the technical foundation for SaaS commerce on Microsoft Marketplace.',
    description: 'Implement the fulfillment, metering, identity and subscription flows needed to launch and operate a SaaS product in Microsoft’s Marketplace ecosystem.',
    buyer: 'For SaaS product leaders preparing to commercialize through Microsoft.',
    capabilities: ['SaaS Fulfillment APIs', 'Metering and subscription lifecycle', 'Entra ID and entitlement workflows', 'Partner Center and certification', 'Provisioning and launch support'],
    proof: ['Marketplace fulfillment and metering', 'Partner Center implementation', 'SaaS subscription lifecycle engineering'],
    icon: 'grid'
  }
];

export const caseStudies = [
  { slug: 'payautomation', name: 'Revenue automation platform', label: 'AI production · Marketplace', title: 'A multi-agent platform built around the revenue workflow.', summary: 'A modular SaaS platform connecting deal intelligence, CRM workflows and Microsoft Marketplace commerce.', solution: 'ai-production-engineering', status: 'review' },
  { slug: 'virilocity', name: 'Marketing autopilot', label: 'AI product · Workflow automation', title: 'AI-assisted marketing with people still in control.', summary: 'A multi-tenant product combining research, content workflows, integrations and a human approval console.', solution: 'ai-product-engineering', status: 'review' },
  { slug: 'woundmedix', name: 'Healthcare operations', label: 'Healthcare · Automation', title: 'Connecting intake, referral dispatch and workforce workflows.', summary: 'An operations system spanning phone intake, structured routing and connected hiring workflows.', solution: 'healthcare-ai-automation', status: 'review' },
  { slug: 'landminer', name: 'Marketplace SaaS launch', label: 'Marketplace · Product engineering', title: 'The technical commerce layer behind a SaaS Marketplace offer.', summary: 'Fulfillment, metering, identity and subscription lifecycle work connected to the product experience.', solution: 'microsoft-marketplace-engineering', status: 'review' },
  { slug: 'healthcare-mobile-app', name: 'Clinical mobile product', label: 'Healthcare · AI product', title: 'A dependable recording and documentation experience for clinicians.', summary: 'Mobile recording, transcription and AI-assisted notes across iOS and Android workflows.', solution: 'healthcare-ai-automation', status: 'review' },
  { slug: 'rag-pipeline', name: 'Knowledge retrieval system', label: 'AI production', title: 'Engineering the retrieval and orchestration around useful answers.', summary: 'A production-oriented RAG pipeline combining vector search, agent workflows and private model components.', solution: 'ai-production-engineering', status: 'review' },
  { slug: 'medical-documentation', name: 'AI-assisted clinical documentation', label: 'Healthcare · AI product', title: 'Turning clinical conversations into structured documentation.', summary: 'A healthcare product experience spanning patient-visit transcription, note generation and clinician workflows.', solution: 'healthcare-ai-automation', status: 'review' },
  { slug: 'travel-data-ai', name: 'AI for complex travel data', label: 'AI production · Azure', title: 'Connecting varied travel information to operational systems.', summary: 'A real-time engineering workflow for processing travel data across documents and reservation integrations.', solution: 'ai-production-engineering', status: 'review' },
  { slug: 'image-to-video', name: 'Image-to-video product workflow', label: 'AI product engineering', title: 'Making asynchronous generative video usable in a product.', summary: 'An application flow connecting image upload, prompt handling, generation status and preview or download.', solution: 'ai-product-engineering', status: 'review' },
  { slug: 'connected-wellness-product', name: 'Connected wellness product', label: 'Product engineering · Connected SaaS', title: 'Bringing product, wearable data and subscriptions into one experience.', summary: 'A member product integrating wellness workflows, wearable connections, subscriptions and administration.', solution: 'ai-product-engineering', status: 'review' },
  { slug: 'dotnet-azure-modernization', name: '.NET and Azure engineering', label: 'Application & cloud modernization', title: 'Evolving established applications and cloud environments.', summary: 'Selected engineering evidence across .NET applications, Azure architecture and delivery practices.', solution: 'application-cloud-modernization', status: 'review' },
  { slug: 'clinical-workforce-platform', name: 'Clinical workforce readiness', label: 'Healthcare · Workflow automation', title: 'Connecting learning, verification and workforce workflows.', summary: 'A workforce readiness platform combining training, certification and a license-verification workflow.', solution: 'healthcare-ai-automation', status: 'review' }
];

export const legacyRedirects = [
  ['/matchmaking-site-azure-devops-case-study', '/case-studies'],
  ['/patient-care-azure-ai-case-study', '/case-studies'],
  ['/bytehealthy-home-made-food-delivery-app', '/case-studies'],
  ['/real-estate-software-development', '/solutions/application-cloud-modernization'],
  ['/crm-development', '/solutions/intelligent-workflow-automation']
];

export const trustItems = ['Microsoft Solutions Partner', 'Azure', '.NET', 'AI engineering', 'Healthcare', 'International delivery'];

export function getSolution(slug) {
  return solutions.find((solution) => solution.slug === slug);
}
