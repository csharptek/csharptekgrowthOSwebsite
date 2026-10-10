// SEO depth content per solution. sections render as card grids; checklist renders as a list panel.
export const solutionExtra = {
  'ai-production-engineering': {
    seoTitle: 'Prototype to Production AI: RAG, Agents, LLM Apps',
    seoDescription: 'Csharptek takes AI prototypes, RAG systems and agent projects to production on Azure: auth, tenancy, evaluation, cost control and observability.',
    sections: [
      {
        eyebrow: 'What breaks after the prototype',
        title: 'The demo works. Production is a different problem.',
        intro: 'Most AI prototypes, including vibe-coded apps built with Lovable, Bolt, Cursor or a notebook, prove that a model can do something useful. They rarely prove that the system can serve real users, real data and real load. These are the gaps we close most often.',
        items: [
          ['Authentication and tenancy', 'Prototypes usually run as one user with one data set. Production needs sign-in (often Microsoft Entra ID), role-based access and strict separation between customers or business units.'],
          ['Retrieval quality', 'A RAG demo can look right on ten documents. At real scale you need chunking, metadata, hybrid search, re-ranking and permission-aware retrieval so answers stay grounded and cite their sources.'],
          ['Evaluation', 'Without a test set and scoring, every prompt or model change is a guess. We build evaluation sets, regression checks and review loops so quality is measured, not assumed.'],
          ['Cost and latency', 'Token spend, model choice, caching and concurrency limits decide whether the unit economics work. We instrument and tune these before launch, not after the first invoice.'],
          ['Observability and failure handling', 'Tracing, logging, rate-limit and timeout handling, retries and fallbacks, so the team can see why an answer was wrong and recover when a dependency fails.'],
          ['Security and data handling', 'Secrets management, prompt-injection exposure, PII handling, audit logging and data residency decisions that fit your security team and your customers’ requirements.']
        ]
      },
      {
        eyebrow: 'RAG and LLM application engineering',
        title: 'RAG development services built for private data.',
        intro: 'Retrieval-augmented generation is the most common pattern we build. We design the full pipeline, not only the prompt: ingestion, chunking, embeddings, vector and keyword search, orchestration, citation and review. Azure OpenAI and Azure AI Search are typical components, and we work with other model providers when the requirement calls for it.',
        items: [
          ['Ingestion and indexing', 'Connect documents, databases and SaaS sources, keep the index current as content changes and preserve the access rules of the source system.'],
          ['Answering and citation', 'Return answers with the passages behind them so users can verify, and route low-confidence questions to a person.'],
          ['Agents and tools', 'Bound agents with defined tools, step limits and approval points, so automation is predictable and auditable.']
        ]
      }
    ],
    checklist: {
      title: 'Production-readiness checklist for an AI system',
      intro: 'Use this list to see how far a prototype is from production. We can run it as a short assessment.',
      items: [
        'Users, roles and permissions are defined and enforced in the data layer',
        'Each customer or business unit’s data is isolated',
        'Retrieval is tested against real questions, with citations',
        'An evaluation set exists and runs on every model or prompt change',
        'Token cost per task is measured and has a budget',
        'Latency targets are set and monitored',
        'Failures, timeouts and rate limits have defined fallbacks',
        'Prompts, responses and tool calls are traced for debugging',
        'Secrets, PII and audit logs are handled to your security standard',
        'There is a named owner for operating the system after launch'
      ]
    },
    faqs: [
      ['What does it mean to take an AI prototype to production?', 'It means making the system dependable for real users: sign-in and permissions, data isolation, retrieval and answer quality, evaluation, cost and latency control, monitoring and a clear owner for operations. The model call is usually the smallest part of the work.'],
      ['Can you work with a prototype built with Lovable, Bolt, Cursor or another AI coding tool?', 'Yes. We start by reviewing the code, data model, integrations and security posture, then agree what to keep, what to rework and what to rebuild. Many vibe-coded apps need hardening rather than a full rewrite.'],
      ['Do you build RAG systems on Azure OpenAI?', 'Yes. Azure OpenAI with Azure AI Search or another vector store is a common foundation. We design ingestion, retrieval, citation and permission-aware access around your data, and we can use other model providers when needed.'],
      ['How do you measure the quality of an LLM application?', 'We build an evaluation set from real questions and expected answers, score outputs automatically where possible and with reviewers where needed, and run those checks whenever the prompt, model or retrieval logic changes.'],
      ['How do you keep AI costs under control?', 'By measuring tokens and latency per task, choosing the smallest model that meets quality needs, caching repeated work, limiting concurrency and setting budgets and alerts before launch.'],
      ['Can people stay involved in AI workflows?', 'Yes. Review and escalation points are designed into the workflow wherever an output needs human judgment, approval or exception handling.'],
      ['What should be ready before we start?', 'The intended users and tasks, access to the data sources, security requirements and a business owner. A short discovery can identify gaps before build work is committed.'],
      ['Do you also operate the system after launch?', 'We can support monitoring, evaluation reviews and iteration after release, or hand over to your team with documentation and runbooks.']
    ]
  },
  'ai-product-engineering': {
    seoTitle: 'Build an AI MVP or Add AI to Your SaaS Product',
    seoDescription: 'Csharptek engineers AI products and agent features for SaaS teams: AI MVPs, assistants, search, RAG and agents on Azure OpenAI, with a small senior team.',
    sections: [
      {
        eyebrow: 'What we build',
        title: 'AI product capabilities that fit your existing product.',
        intro: 'We design and engineer AI features and AI-first products for software companies. That includes AI MVPs for new products, and assistants, intelligent search, document intelligence and agents added to an established SaaS product.',
        items: [
          ['AI assistants and copilots', 'In-product assistants grounded in your customers’ data, with permissions, citations and controls the user can understand.'],
          ['AI agents', 'Agents that take bounded actions in your product or in connected systems, with step limits, logging and human approval where it matters.'],
          ['Intelligent search and recommendations', 'Semantic and hybrid search, recommendations and classification built on your data and your architecture.'],
          ['Document and voice experiences', 'Extraction, summarisation, transcription and voice workflows connected to product records.'],
          ['AI MVPs', 'A first version of an AI product, scoped to prove the core value quickly and built so it can grow into production.']
        ]
      },
      {
        eyebrow: 'How a product engagement works',
        title: 'A small senior team, working in your product’s context.',
        intro: 'AI features succeed or fail on the product around the model: where the capability sits in the user journey, how people review output, and how it behaves when the model is wrong. We work as a focused team of engineers alongside your product owner.',
        items: [
          ['Scope the user problem', 'Define the user, the task, the data it depends on and the review the user needs. This sets a scope the team can build and judge.'],
          ['Build the thin slice', 'Ship a working end-to-end slice early: interface, API, retrieval or model call, and error states. Learn from real use.'],
          ['Harden and extend', 'Add evaluation, monitoring, permissions and cost controls, then extend to the next capability.']
        ]
      }
    ],
    checklist: {
      title: 'Before you build an AI feature',
      intro: 'Answer these first. They shape scope more than model choice does.',
      items: [
        'Which user task gets faster, better or possible?',
        'What data does the feature need, and who is allowed to see it?',
        'What happens when the model is wrong or unsure?',
        'How will you measure whether the feature works?',
        'Where does it sit in the existing architecture and permission model?',
        'What is the per-use cost, and does the pricing model support it?'
      ]
    },
    faqs: [
      ['Can you help us build an AI MVP?', 'Yes. We scope the smallest version that proves the core user value, build it end to end on a production-capable foundation, and plan the path from MVP to a hardened product.'],
      ['Can you add AI to our existing SaaS product without a rewrite?', 'Yes. Most AI features extend the current product and architecture. The right approach depends on where the feature belongs and which data and services it should use.'],
      ['Do you build AI agents?', 'Yes. We build agents with defined tools, bounded steps, logging and approval points, and connect them to your product and the systems they need to act on.'],
      ['Which AI platforms and models do you use?', 'Azure OpenAI is our most common foundation, with Azure AI Search and Azure services around it. We also work with other model providers when the requirement calls for it.'],
      ['What does the team look like?', 'A small senior team of engineers working with your product owner. The size and mix depend on scope; we agree it during discovery.'],
      ['How should we decide what to build first?', 'Start with a specific user problem, the data and integrations it depends on, and the review or control the user needs. That gives the team a practical scope to evaluate.'],
      ['Who owns the code and IP?', 'You do. We agree IP ownership, confidentiality and access terms in the contract before work begins.'],
      ['Can you work as an extension of our team or an agency’s team?', 'Yes. We work directly with product teams and also as a white-label development partner for agencies.']
    ]
  },
  'application-cloud-modernization': {
    seoTitle: '.NET Modernization Services on Azure',
    seoDescription: 'Csharptek modernizes .NET Framework applications on Azure: assessment, upgrade to modern .NET, App Service, containers and AKS, databases and CI/CD, with low-risk sequencing.',
    sections: [
      {
        eyebrow: '.NET modernization on Azure',
        title: 'Move legacy .NET forward without a big-bang rewrite.',
        intro: 'Many mid-market companies run business-critical .NET Framework applications that are hard to change, hard to deploy and costly to keep secure. We modernize them in steps that keep the business running.',
        items: [
          ['Assessment', 'Inventory the application, dependencies, data stores, integrations, hosting and deployment. Identify blockers such as unsupported libraries, Windows-only APIs and tight coupling.'],
          ['.NET Framework to modern .NET', 'Upgrade to a supported modern .NET version in stages, replacing unsupported dependencies and using compatibility tooling where it helps.'],
          ['Hosting on Azure', 'Choose between Azure App Service, Azure Functions, containers on Azure Container Apps or AKS, or virtual machines for what must stay as it is.'],
          ['Data and integration', 'Move or modernize SQL Server workloads, replace brittle integrations with APIs and queues, and introduce identity through Microsoft Entra ID.'],
          ['CI/CD and infrastructure as code', 'Automated builds, tests and releases with Azure DevOps or GitHub Actions, and Terraform or Bicep so environments are repeatable.'],
          ['Risk controls', 'Parallel runs, feature flags, staged cutovers, rollback plans and test coverage on the workflows the business depends on.']
        ]
      }
    ],
    checklist: {
      title: 'What decides the cost and timeline of a .NET to Azure move',
      intro: 'These factors usually matter more than line count. A short assessment turns them into a realistic plan.',
      items: [
        'Framework version and number of unsupported dependencies',
        'Windows-specific code, COM or WCF components',
        'Size and coupling of the database and stored procedures',
        'Test coverage on critical workflows',
        'Integrations that must keep working during the move',
        'Identity, security and compliance requirements',
        'Deployment pipeline maturity',
        'Downtime tolerance at cutover'
      ]
    },
    faqs: [
      ['Does modernization mean rewriting the application?', 'Not by default. Work can target the highest-value constraints in the current application, architecture, APIs or delivery process, and move in stages.'],
      ['Can you migrate .NET Framework applications to modern .NET?', 'Yes. We assess the application, replace unsupported dependencies, upgrade in stages to a supported modern .NET version and add tests around the workflows that matter.'],
      ['Which Azure services do you use for hosting?', 'It depends on the workload: Azure App Service for web apps and APIs, Azure Functions for event-driven work, Azure Container Apps or AKS for container workloads, and virtual machines for what must remain as is.'],
      ['Can we modernize while keeping existing systems in use?', 'Yes. The delivery path is planned around business workflows and dependencies, using parallel runs, staged cutovers and rollback plans.'],
      ['What does an assessment include?', 'An inventory of the application and its dependencies, a view of blockers and risks, a recommended target architecture and a sequenced plan with effort ranges.'],
      ['Can you handle the database as well?', 'Yes. We assess SQL Server workloads and plan migration to Azure SQL or other suitable services, along with the application changes that depend on them.'],
      ['Can you set up CI/CD and infrastructure as code?', 'Yes. We build pipelines in Azure DevOps or GitHub Actions and define environments in Terraform or Bicep so releases and environments are repeatable.'],
      ['Can cloud and application work be handled together?', 'Yes. Application architecture, Azure services, identity, integrations and deployment practices can be considered together when they affect the same initiative.']
    ]
  },
  'microsoft-marketplace-engineering': {
    seoTitle: 'Microsoft Marketplace SaaS Offer Development',
    seoDescription: 'Csharptek builds the technical layer for transactable SaaS offers on Microsoft Marketplace: landing page, fulfillment API v2, webhooks, metering, Entra ID and certification.',
    sections: [
      {
        eyebrow: 'The publisher flow',
        title: 'What a transactable SaaS offer needs technically.',
        intro: 'Listing a SaaS product on Microsoft Marketplace as a transactable offer means your product must respond correctly to purchase, change and cancellation events. These are the components we build.',
        items: [
          ['Offer and plan setup', 'Partner Center configuration for the offer, plans, pricing model and technical details, aligned with your product’s tenancy model.'],
          ['Landing page and sign-in', 'A landing page that resolves the Marketplace purchase token and signs the buyer in with Microsoft Entra ID, then creates or links the customer account.'],
          ['Fulfillment API v2', 'Resolve and activate subscriptions, and handle plan changes, quantity changes and cancellations through the SaaS Fulfillment APIs.'],
          ['Webhook', 'A secured connection endpoint that receives subscription lifecycle events and keeps your product’s entitlements in sync.'],
          ['Metering', 'Usage reporting through the Marketplace metering service for usage-based plans, with retries and reconciliation.'],
          ['Certification and launch', 'Technical validation, fixes from Microsoft’s review, and readiness steps for co-sell and go-live.']
        ]
      }
    ],
    checklist: {
      title: 'Common reasons Marketplace SaaS offers get stuck',
      intro: 'These are the issues that most often delay certification or break the buyer experience.',
      items: [
        'Landing page does not handle an expired or reused purchase token',
        'Webhook does not validate or acknowledge events reliably',
        'Plan change or cancellation is not reflected in product access',
        'Metering events are dropped or duplicated',
        'Single-tenant products lack automated provisioning',
        'Sign-in does not work for buyers outside the publisher’s tenant'
      ]
    },
    faqs: [
      ['What does Marketplace engineering involve?', 'The technical components that connect your SaaS product to Microsoft’s commerce platform: landing page and sign-in, fulfillment APIs and webhook, metering, identity and Partner Center configuration.'],
      ['What is the SaaS Fulfillment API?', 'It is the Microsoft API a SaaS publisher uses to resolve a purchase, activate the subscription and manage changes and cancellations. Your product must integrate with it for a transactable offer.'],
      ['Do we need to rebuild our product?', 'Usually not. We add the fulfillment and metering layer around your existing product architecture.'],
      ['Can you help with certification?', 'Yes. We support the technical validation steps and the fixes that come out of Microsoft’s review.'],
      ['Do you handle metering for usage-based plans?', 'Yes. We implement usage reporting through the Marketplace metering service with retries and reconciliation.'],
      ['Can you help us prepare for co-sell?', 'We support the technical requirements. Co-sell eligibility also depends on Microsoft program criteria and your own partner status.'],
      ['How long does it take?', 'It depends on the offer and your product. A short discovery clarifies scope and a realistic path before delivery begins.']
    ]
  }
};

solutionExtra['agency-development-partner'] = {
  seoTitle: 'White Label Software Development Partner for Agencies',
  seoDescription: 'Csharptek is a white-label software development company for agencies: senior AI, web, mobile and Azure engineers, delivered under NDA behind your brand.',
  sections: [
    {
      eyebrow: 'How the partnership works',
      title: 'Your client, your brand, our engineering.',
      intro: 'We act as a white-label or subcontract development team. You own the client relationship and the commercial terms. We deliver the engineering to your standards and stay out of sight.',
      items: [
        ['White-label delivery', 'We work under NDA, use your naming and communication channels, and never contact your client unless you ask us to.'],
        ['Subcontract projects', 'Hand us a defined project, such as an AI feature, a web or mobile build or an Azure migration, and we deliver it against an agreed scope.'],
        ['Overflow capacity', 'Add engineers for a peak or a long project without a hiring cycle, then scale back.'],
        ['Dedicated team', 'A stable group of engineers who learn your process and work as an extension of your studio.'],
        ['Specialist support', 'Bring us in for what your team does not do daily: AI and agents, RAG, Azure architecture, .NET, Marketplace integration.'],
        ['Pre-sales help', 'Technical input on estimates, architecture and risk before you commit to a client.']
      ]
    },
    {
      eyebrow: 'What agencies usually bring us',
      title: 'Projects we are set up to deliver.',
      intro: 'These are the project types where senior engineering depth makes the difference for an agency.',
      items: [
        ['AI features for client products', 'Assistants, search, document processing and agents added to a client’s application.'],
        ['Web and mobile applications', 'React and Next.js front ends, .NET and Node.js back ends, React Native mobile apps.'],
        ['Integrations and automation', 'CRM, payment, messaging and workflow integrations that clients depend on.'],
        ['Azure and cloud work', 'Hosting, migration, CI/CD and security for client systems.']
      ]
    }
  ],
  checklist: {
    title: 'What a good agency partnership agrees up front',
    intro: 'These points prevent most delivery problems. We settle them before the first sprint.',
    items: [
      'NDA and IP assignment to you or your client',
      'Who talks to the client, and when we are named or not',
      'Repositories, environments and tools we work in',
      'Definition of done, review and acceptance steps',
      'Working hours overlap and communication rhythm',
      'Security, data handling and access rules',
      'Change-request process for scope changes',
      'Handover documents and post-launch support terms'
    ]
  },
  faqs: [
    ['What does white-label development mean?', 'We build the software and you present it as your own. We work under NDA, use your channels and branding, and your agency stays the client’s point of contact.'],
    ['Do you contact our clients directly?', 'No, unless you ask us to. Client communication runs through your team.'],
    ['Who owns the code and IP?', 'You or your client. IP assignment and confidentiality are agreed in the contract before work begins.'],
    ['Can you work in our repositories and tools?', 'Yes. We work in your source control, project tracker and communication tools, and follow your process.'],
    ['What kinds of projects do you take on?', 'AI features and agents, web and mobile applications, integrations, and Azure and .NET work. We tell you early if a project is a poor fit.'],
    ['Can we start with a small project?', 'Yes. A small scoped project is a good way to test fit before a larger or ongoing arrangement.'],
    ['Do you offer a dedicated team?', 'Yes. We can assign a stable group of engineers for ongoing work, sized to your needs.'],
    ['How do you handle time zones?', 'We are based in India and agree a daily overlap window with your team for stand-ups and reviews.']
  ]
};

solutionExtra['ai-agent-development'] = {
  seoTitle: 'AI Agent Development Company for SaaS and Software Teams',
  seoDescription: 'Csharptek builds AI agents and multi-agent workflows with tools, approvals, evaluation and monitoring on Azure OpenAI. Agents your team can trust in production.',
  sections: [
    {
      eyebrow: 'What we build',
      title: 'Agents for products and internal workflows.',
      intro: 'We build agents that do work, not only answer questions. Each one has a defined job, a limited set of tools and clear rules for when a person steps in.',
      items: [
        ['Task agents', 'Agents that complete a defined task, such as qualifying a lead, preparing a report or updating records across systems.'],
        ['Multi-agent workflows', 'Several specialised agents coordinated by an orchestrator, with shared state and handoffs.'],
        ['Copilots with actions', 'In-product assistants that can read your data and take bounded actions through your APIs.'],
        ['Voice and messaging agents', 'Agents that talk to customers by phone, chat or email and write results back to your systems.'],
        ['Workflow automation agents', 'Agents that watch inboxes, queues or events and route or resolve work.']
      ]
    },
    {
      eyebrow: 'What makes an agent trustworthy',
      title: 'The engineering around the model.',
      intro: 'Agents fail in ways a chatbot does not: they act on wrong information, loop, or take actions nobody approved. These controls are part of every agent we build.',
      items: [
        ['Bounded tools and permissions', 'The agent can only call the tools it needs, with the permissions of the user or role it acts for.'],
        ['Approval points', 'Costly or irreversible actions pause for a person to approve.'],
        ['Step and cost limits', 'Maximum steps, time and token budgets stop loops and runaway spend.'],
        ['Evaluation', 'Real tasks scored automatically and by reviewers, run on every change to prompts, tools or models.'],
        ['Tracing and audit', 'Every run is logged with the steps, tool calls and outcomes, so failures can be diagnosed and actions audited.'],
        ['Security', 'Defences against prompt injection, controls on data access and handling of secrets and personal data.']
      ]
    }
  ],
  checklist: {
    title: 'Before you build an agent',
    intro: 'These questions decide whether an agent is the right design and how much control it needs.',
    items: [
      'What exact task does the agent complete, and who owns the outcome?',
      'Which tools and data does it need, and what may it change?',
      'Which actions need human approval?',
      'What are the step, time and cost limits?',
      'How will you test it on real tasks before release?',
      'What happens when the agent is unsure or fails?',
      'How will runs be logged and reviewed?'
    ]
  },
  faqs: [
    ['What does an AI agent development company do?', 'It designs and builds software agents that use language models to complete tasks, call tools and APIs, and work inside business systems, along with the evaluation, approvals and monitoring that make them dependable.'],
    ['What is the difference between an AI agent and a chatbot?', 'A chatbot answers questions. An agent can also plan steps, call tools and take actions in other systems. That makes limits, approvals and audit logs essential.'],
    ['Do you build multi-agent systems?', 'Yes. We design specialised agents with an orchestrator, shared state and clear handoffs. We also advise when a single agent is the simpler and safer choice.'],
    ['Which platforms and models do you use?', 'Azure OpenAI is our most common foundation, with Azure services around it. We also work with other model providers and agent frameworks when they fit.'],
    ['How do you keep agents safe?', 'With bounded tools and permissions, approval points for risky actions, step and cost limits, prompt-injection defences, and full tracing of every run.'],
    ['How do you test an agent?', 'We build a set of real tasks with expected outcomes, score runs automatically and with reviewers, and rerun the set whenever prompts, tools or models change.'],
    ['Can you add agents to our existing product?', 'Yes. We connect agents to your APIs, data and identity so they work within your product’s permission model.'],
    ['How long does it take to build an agent?', 'It depends on the task and integrations. A short discovery defines scope and a realistic plan before build work is committed.']
  ]
};
