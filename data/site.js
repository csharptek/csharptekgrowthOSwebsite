import { aiProtectionSolutions } from './aiProtection';

export const solutions = [
  {
    slug: 'ai-production-engineering',
    h1: 'Take your AI prototype to production: RAG, agents and LLM apps that run reliably.',
    supporting: 'Move from promising AI experiments to reliable systems integrated with your data, applications and operational workflows.',
    cta: 'Discuss Your AI Initiative',
    number: '01',
    eyebrow: 'From prototype to production',
    title: 'AI Production Engineering',
    short: 'Move promising AI initiatives into dependable systems your teams can operate.',
    description: 'Turn prototypes, RAG systems and agent initiatives into reliable software that connects to your data, applications and day-to-day operations.',
    buyer: 'For technology leaders moving an AI initiative beyond the demo.',
    capabilities: ['RAG and knowledge systems with citations', 'Permission-aware retrieval on Azure AI Search', 'AI agents and orchestration', 'Evaluation and monitoring', 'Secure data and application integration', 'Cloud deployment and operations'],
    proof: ['Multi-agent revenue automation', 'Production-oriented RAG pipelines', 'Azure AI engineering in existing systems'],
    icon: 'spark'
  },
  {
    slug: 'ai-product-engineering',
    h1: 'Custom AI software development: build an AI product, or add AI to the software your customers already use.',
    supporting: 'Design and engineer AI-powered product capabilities that fit your existing product, data, architecture and customer experience.',
    cta: 'Discuss Your Product Initiative',
    number: '02',
    eyebrow: 'Make your product more useful',
    title: 'AI Product Engineering',
    short: 'Add thoughtful AI capabilities to products customers already rely on.',
    description: 'Custom AI software development and AI product engineering: AI applications, assistants, document processing, RAG and agents that fit your architecture, data and users.',
    buyer: 'For product and engineering teams extending an established product.',
    capabilities: ['AI assistants and intelligent search', 'Recommendations and document intelligence', 'Voice and multimodal experiences', 'Product architecture and APIs', 'Prototype-to-production delivery'],
    proof: ['AI marketing product engineering', 'Image-to-video product workflows', 'Healthcare product experiences'],
    icon: 'layers'
  },
  {
    slug: 'intelligent-workflow-automation',
    h1: 'Turn complex manual workflows into intelligent systems.',
    supporting: 'Connect people, applications, data and AI to automate workflows that currently depend on email, spreadsheets, calls and disconnected systems.',
    cta: 'Discuss Your Workflow',
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
    h1: 'Azure application development and .NET modernization, without defaulting to a rewrite.',
    supporting: 'Build new applications on Azure, or improve legacy applications, cloud architecture, APIs, deployment pipelines and infrastructure without treating modernization as a rewrite by default.',
    cta: 'Discuss Your Initiative',
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
    h1: 'Build smarter healthcare workflows with production AI.',
    supporting: 'Reduce administrative workload, automate operational workflows and integrate production AI into healthcare systems and products.',
    cta: 'Discuss Your Initiative',
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
    h1: 'Build and launch SaaS products on Microsoft Marketplace.',
    supporting: 'Implement the technical components required to commercialize SaaS through Microsoft’s Marketplace ecosystem.',
    cta: 'Discuss Your Initiative',
    number: '06',
    eyebrow: 'Turn a SaaS product into a marketplace offer',
    title: 'Microsoft Marketplace Engineering',
    short: 'Build the technical foundation for SaaS commerce on Microsoft Marketplace.',
    description: 'Implement the fulfillment, metering, identity and subscription flows needed to launch and operate a SaaS product in Microsoft’s Marketplace ecosystem.',
    buyer: 'For SaaS product leaders preparing to commercialize through Microsoft.',
    capabilities: ['SaaS Fulfillment APIs', 'Metering and subscription lifecycle', 'Entra ID and entitlement workflows', 'Partner Center and certification', 'Provisioning and launch support'],
    proof: ['Marketplace fulfillment and metering', 'Partner Center implementation', 'SaaS subscription lifecycle engineering'],
    icon: 'grid'
  },
  {
    slug: 'agency-development-partner',
    h1: 'A white-label development partner for agencies: AI, web and Azure projects delivered behind your brand.',
    supporting: 'Add senior engineering capacity without hiring. We work under NDA as an extension of your team and deliver to your standards, on your timeline.',
    cta: 'Discuss an Agency Partnership',
    number: '07',
    eyebrow: 'For agencies and consultancies',
    title: 'Agency Development Partner',
    short: 'White-label engineering capacity for agencies with AI, web and Azure projects.',
    description: 'White-label software development for agencies: senior engineers for AI, web, mobile and Azure projects, delivered under NDA behind your brand.',
    buyer: 'For agencies and consultancies that sell software projects and need dependable delivery capacity.',
    capabilities: ['White-label and subcontract delivery', 'AI features and agent builds for client projects', 'White-label Copilot Studio, Power Platform and Azure AI builds for MSPs', 'Web, mobile and API development', 'Azure and .NET engineering', 'Overflow capacity, dedicated developers and forward-deployed engineers'],
    proof: ['AI marketing product engineering', 'Marketplace SaaS engineering', 'Product and platform engineering'],
    icon: 'grid',
    unlisted: true
  },
  {
    slug: 'ai-agent-development',
    h1: 'AI agent development: agents that take real actions, with the controls to trust them.',
    supporting: 'We design, build and operate AI agents and multi-agent workflows for software teams: tools, memory, approvals, evaluation and cost control on Azure.',
    cta: 'Discuss Your Agent Project',
    number: '08',
    eyebrow: 'Agents built for production',
    title: 'AI Agent Development',
    short: 'Build AI agents with bounded actions, approvals, evaluation and observability.',
    description: 'AI agent development company for SaaS and software teams: single and multi-agent systems with tools, approvals, evaluation and monitoring on Azure OpenAI.',
    buyer: 'For product and engineering teams building agents into a product or an internal workflow.',
    capabilities: ['Single and multi-agent design', 'Tool and API integration', 'Approvals and human-in-the-loop', 'Evaluation, tracing and cost control', 'Azure OpenAI and other model providers'],
    proof: ['Multi-agent revenue automation', 'Production-oriented RAG pipelines', 'AI marketing product engineering'],
    icon: 'spark',
    unlisted: true
  },
  {
    slug: 'microsoft-365-copilot-readiness',
    h1: 'Microsoft 365 Copilot readiness assessment: get your tenant, data and people ready before you roll out Copilot.',
    supporting: 'A fixed-scope, two-week Copilot readiness assessment for Microsoft 365: Entra ID access, SharePoint and Teams oversharing, Purview labels, licensing and the first use cases, with a written rollout plan.',
    cta: 'Request a Copilot Readiness Assessment',
    number: '09',
    eyebrow: 'Copilot readiness and rollout',
    title: 'Microsoft 365 Copilot Readiness',
    short: 'Check permissions, data, licensing and use cases before Copilot reaches every user.',
    description: 'Microsoft 365 Copilot readiness assessment and rollout support: Entra ID, SharePoint and Teams oversharing, Purview sensitivity labels, licensing and first use cases.',
    buyer: 'For IT directors and operations leaders preparing a Microsoft 365 Copilot rollout.',
    capabilities: ['Copilot readiness assessment', 'SharePoint and Teams oversharing review', 'Entra ID and access clean-up', 'Purview sensitivity labels and DLP', 'AI agent governance: Agent 365, Entra Agent ID and Conditional Access', 'Pilot, adoption and first Copilot agents'],
    proof: ['Microsoft 365 and Entra ID administration', 'Azure architecture and identity', 'Copilot Studio and Azure AI agents'],
    icon: 'spark',
    unlisted: true
  },
  {
    slug: 'microsoft-365-security',
    h1: 'Microsoft 365 security and AI control: switch on the protection you already pay for, and keep company data out of public AI tools.',
    supporting: 'A Microsoft 365 security check with read-only access, then hands-on fixes for Intune, Defender, Entra ID and Purview, controls on ChatGPT and other AI tools, and optional monthly management.',
    cta: 'Book an AI Data Risk Check',
    ctaHref: '/ai-data-risk-check',
    number: '10',
    eyebrow: 'Microsoft 365 security and AI control',
    title: 'Microsoft 365 Security & AI Control',
    short: 'Security check, fixes and AI usage control for companies running Microsoft 365.',
    description: 'Microsoft 365 security audit and hardening: Entra ID and Conditional Access, Intune device management, Defender for Business, Purview DLP, shadow AI control and monthly managed security.',
    buyer: 'For business owners, IT heads and finance leaders at companies with 10 to 1,000 staff on Microsoft 365.',
    capabilities: ['Microsoft 365 security check', 'Entra ID, MFA and Conditional Access', 'Intune device management and BitLocker', 'Defender for Business and Defender for Endpoint', 'Purview DLP and control of ChatGPT and other AI tools'],
    proof: ['Microsoft 365 and Entra ID administration', 'Intune and Defender deployment', 'Azure architecture and identity'],
    icon: 'grid',
    unlisted: true
  },
  {
    slug: 'private-ai-workspace',
    h1: 'A safe ChatGPT for your staff: a private AI workspace in your own Azure, so company data never goes to public AI tools.',
    supporting: 'We deploy a private chat assistant on Azure OpenAI in your subscription, connect it to Entra ID and approved company documents, block public AI sites on managed devices and monitor usage. Also available white-label for MSPs.',
    cta: 'Discuss a Private AI Workspace',
    number: '11',
    eyebrow: 'Private AI on Azure',
    title: 'Private AI Workspace',
    short: 'A safe ChatGPT for staff on Azure OpenAI, so you can block public AI tools without taking AI away.',
    description: 'Private ChatGPT alternative on Azure OpenAI in your own tenant: Entra ID sign-in, company document search, public AI sites blocked on managed devices, usage logs and cost controls.',
    buyer: 'For companies whose staff already use ChatGPT, Claude or Gemini at work, and for MSPs who want to offer private AI to their clients.',
    capabilities: ['Private chat assistant on Azure OpenAI', 'Entra ID single sign-on and access groups', 'Search over approved company documents', 'Public AI sites blocked on managed devices', 'Usage, cost and audit monitoring'],
    proof: ['Azure OpenAI and RAG engineering', 'Microsoft 365 and Entra ID administration', 'Azure architecture and identity'],
    icon: 'spark',
    unlisted: true
  }
  ,...aiProtectionSolutions
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

export const trustItems = ['Microsoft Solutions Partner', 'Microsoft 365 security', 'Azure', '.NET', 'AI engineering', 'International delivery'];

export const solutionCases = {
  'ai-production-engineering': ['payautomation', 'rag-pipeline', 'travel-data-ai'],
  'ai-product-engineering': ['virilocity', 'image-to-video', 'connected-wellness-product'],
  'intelligent-workflow-automation': ['woundmedix', 'clinical-workforce-platform', 'virilocity'],
  'application-cloud-modernization': ['dotnet-azure-modernization', 'travel-data-ai', 'payautomation'],
  'healthcare-ai-automation': ['medical-documentation', 'healthcare-mobile-app', 'woundmedix'],
  'microsoft-marketplace-engineering': ['payautomation', 'landminer', 'virilocity'],
  'agency-development-partner': ['virilocity', 'landminer', 'image-to-video'],
  'ai-agent-development': ['payautomation', 'virilocity', 'rag-pipeline'],
  'rag-development': ['rag-pipeline', 'travel-data-ai', 'payautomation'],
  'microsoft-365-copilot-readiness': ['dotnet-azure-modernization', 'payautomation', 'rag-pipeline'],
  'ai-agent-governance': ['payautomation', 'rag-pipeline', 'dotnet-azure-modernization'],
  'msp-white-label-partner': ['virilocity', 'payautomation', 'dotnet-azure-modernization'],
  'microsoft-365-security': ['dotnet-azure-modernization', 'payautomation', 'rag-pipeline'],
  'private-ai-workspace': ['rag-pipeline', 'payautomation', 'dotnet-azure-modernization']
};

export function solutionHref(slug) {
  if (slug === 'application-cloud-modernization') return '/azure-app-modernization-services';
  if (slug === 'microsoft-marketplace-engineering') return '/services/marketplace';
  return `/solutions/${slug}`;
}

export function getSolution(slug) {
  return solutions.find((solution) => solution.slug === slug);
}
