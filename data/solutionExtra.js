import { aiProtectionExtra } from './aiProtection';

// SEO depth content per solution. sections render as card grids; checklist renders as a list panel.
export const solutionExtra = {
  'ai-production-engineering': {
    seoTitle: 'AI Agents and LLM Apps from Prototype to Production',
    seoDescription: 'Take AI agents, RAG systems and LLM apps from prototype to production on Azure: auth, tenancy, evaluation, cost control and observability, by Csharptek.',
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
        link: ['/solutions/rag-development', 'See our RAG development services'],
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
    seoTitle: 'Custom AI Software Development and AI Product Engineering',
    seoDescription: 'Custom AI software development: AI applications, AI MVPs, assistants, document processing, RAG and agents on Azure OpenAI, built by a small senior team.',
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
          ['AI MVPs', 'A first version of an AI product, scoped to prove the core value quickly and built so it can grow into production.'],
          ['Custom AI applications', 'New applications with AI at the core, such as research tools, planning assistants or decision-support systems built for one team’s process.'],
          ['Document and data processing', 'Extract, classify and validate information from forms, contracts, invoices, emails and reports, with a person reviewing exceptions.'],
          ['Knowledge assistants (RAG)', 'Answers grounded in company documents and records, with citations and access control.']
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
      },
      {
        eyebrow: 'Technology',
        title: 'A Microsoft-first stack, with room for other tools.',
        intro: 'Azure is our usual foundation because it fits the security, identity and procurement needs of most established companies. We use other providers where they serve the project better.',
        items: [
          ['AI and models', 'Azure OpenAI, Azure AI Foundry, Azure AI Search, Azure AI Document Intelligence and other model providers when needed.'],
          ['Application engineering', '.NET and C#, Node.js, Python, React and Next.js, React Native for mobile.'],
          ['Data and integration', 'Azure SQL, PostgreSQL, Blob Storage, Microsoft Graph, REST APIs, webhooks and queues.'],
          ['Identity and security', 'Microsoft Entra ID, role-based access, Key Vault for secrets and audit logging.'],
          ['Delivery and operations', 'GitHub and Azure DevOps pipelines, containers, App Service, Functions and monitoring.']
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
      ['What is custom AI software development?', 'It is the design and engineering of AI applications built for a specific business process, data set and set of users, rather than buying a general-purpose AI tool. It usually combines language models with your data, business rules and existing systems.'],
      ['Do we need a lot of data to start?', 'Usually not. Most modern AI software uses pre-trained language models with your documents and records supplied at run time. What matters is that the right content is available and accessible, not a large training data set.'],
      ['How do you keep our data secure?', 'By keeping data within your Azure environment where possible, enforcing access control at the data layer, managing secrets in Key Vault, logging access and agreeing data-handling rules with your security team.'],
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
    seoTitle: 'Azure App Development & .NET Modernization Services',
    seoDescription: 'Azure application development and cloud modernization: new apps on App Service, Functions and AKS, .NET Framework upgrades, Azure SQL and CI/CD, delivered in low-risk stages.',
    sections: [
      {
        eyebrow: 'Azure application development',
        title: 'Build new applications on Azure, designed to run well from day one.',
        intro: 'Not every initiative starts with legacy code. We also design and build new web applications, APIs and internal tools on Azure, using the same architecture, identity and delivery practices we bring to modernization work.',
        items: [
          ['Web apps and APIs', 'ASP.NET Core and Node.js applications on Azure App Service or Azure Container Apps, with clear service boundaries and versioned APIs.'],
          ['Event-driven services', 'Azure Functions, Service Bus and Event Grid for background processing, integrations and scheduled jobs.'],
          ['Data on Azure', 'Azure SQL, Cosmos DB and Blob Storage chosen around the workload, with backup, retention and access designed in.'],
          ['Identity and security', 'Microsoft Entra ID sign-in, role-based access, Key Vault for secrets and network rules that match the risk of the application.'],
          ['AI-ready architecture', 'Room for Azure OpenAI and Azure AI Search where they add value, without coupling the core application to a single model.'],
          ['Operate and observe', 'Application Insights, alerts, dashboards and release pipelines so the team can run what we build.']
        ]
      },
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
      ['Do you build new applications on Azure, or only modernize existing ones?', 'Both. We build new web applications, APIs and internal tools on Azure App Service, Azure Functions and Azure Container Apps, and we modernize existing .NET applications in stages.'],
      ['What does Azure cloud modernization include?', 'Assessment of the current estate, upgrades to modern .NET, moving workloads to suitable Azure hosting, data migration to Azure SQL, identity through Microsoft Entra ID and CI/CD with infrastructure as code.'],
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
    seoTitle: 'Azure Marketplace Integration and Transactable SaaS Offers',
    seoDescription: 'Sell on the Microsoft cloud marketplace: listing setup, transactable SaaS offers and Azure Marketplace integration with fulfillment API v2, webhooks, metering and Entra ID.',
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
      link: ['/solutions/msp-white-label-partner', 'Run an MSP or Microsoft partner? See white-label Microsoft AI for MSPs'],
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
    },
    {
      eyebrow: 'Choosing a delivery model',
      title: 'White-label partner, freelancers or hiring?',
      intro: 'Agencies usually weigh three ways to deliver a software project they have sold. Each fits a different situation.',
      items: [
        ['Freelancers', 'Flexible and quick to start for small, well-defined tasks. Harder to manage for larger builds, and continuity depends on one person.'],
        ['Hiring in-house', 'Best when the work is steady and core to your agency. Slow to start, and fixed cost when the pipeline dips.'],
        ['White-label development company', 'A managed team with senior engineers, project discipline and cover for leave or turnover. Suited to project peaks, specialist work and clients you cannot afford to let down.']
      ]
    },
    {
      eyebrow: 'How an engagement starts',
      title: 'From first call to first sprint.',
      intro: 'Most agencies want to see how we work on a real project before committing to more. This is the usual path.',
      items: [
        ['Intro call', 'Your services, typical clients and the project or capacity gap you need to fill.'],
        ['NDA and scope review', 'We sign an NDA, review the brief or client requirements and flag risks and open questions.'],
        ['Estimate and team proposal', 'Effort, team shape and delivery plan, written so you can price and present it under your brand.'],
        ['Onboarding', 'Access to your repositories, tools and channels, and agreement on rituals, reviews and reporting.'],
        ['First sprint', 'Working software in the first iteration, reviewed with your project lead before anything reaches the client.']
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
    ['How do you handle time zones?', 'We are based in India and agree a daily overlap window with your team for stand-ups and reviews.'],
    ['What is a white-label development company?', 'A software development company that builds projects for agencies and consultancies which then deliver them to their own clients under their brand. The development company stays in the background and the agency keeps the client relationship.'],
    ['How are white-label development services priced?', 'Usually as a fixed price for a defined scope, or as a monthly rate for dedicated engineers. We agree the model per engagement so you can set your own margin and client pricing.'],
    ['Can you join calls with our client as part of our team?', 'Yes, if you want that. Our engineers can attend client calls under your agency’s name, or stay fully behind the scenes.']
  ]
};

solutionExtra['ai-agent-development'] = {
  seoTitle: 'AI Agent and Multi-Agent System Development for SaaS',
  seoDescription: 'Custom AI agent and multi-agent system development: agents embedded in your SaaS product, with tools, approvals, evaluation and monitoring on Azure OpenAI.',
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
      link: ['/solutions/ai-agent-governance', 'Governing Copilot and agents across Microsoft 365? See AI agent governance'],
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

solutionExtra['rag-development'] = {
  seoTitle: 'RAG Development Services on Azure OpenAI',
  seoDescription: 'Csharptek provides RAG development services: ingestion, hybrid search, permission-aware retrieval, citations and evaluation on Azure OpenAI and Azure AI Search.',
  sections: [
    {
      eyebrow: 'What we build',
      title: 'RAG systems for real documents, real users and real permissions.',
      intro: 'Retrieval-augmented generation lets a language model answer from your own content instead of its training data. The model is the easy part. Most of the engineering is in getting the right content to the model, for the right user, and proving the answer is correct.',
      items: [
        ['Internal knowledge assistants', 'Answer staff questions from policies, procedures, contracts, tickets and wiki pages, with links to the source passage.'],
        ['Customer-facing product search', 'Add natural-language search and answers to a SaaS product, scoped to each customer’s own data.'],
        ['Document question answering', 'Ask questions across large sets of PDFs, scanned files and spreadsheets, including tables and structured fields.'],
        ['Support and service copilots', 'Draft replies grounded in product documentation and past cases, with a person approving what is sent.'],
        ['RAG inside agents', 'Give agents a reliable retrieval tool so the actions they take are based on current, approved information.'],
        ['Rescue of an existing RAG prototype', 'Review a RAG system that answers inconsistently, find where retrieval fails and fix the pipeline.']
      ]
    },
    {
      eyebrow: 'The RAG pipeline',
      title: 'Every stage that decides answer quality.',
      intro: 'Poor answers usually come from one weak stage in the pipeline, not from the model. We engineer and test each stage separately so problems can be found and fixed.',
      items: [
        ['Ingestion', 'Connectors for SharePoint, file storage, databases and SaaS APIs. Parsing for PDFs, Office files, HTML and scanned images, with change detection to keep the index current.'],
        ['Chunking and metadata', 'Chunk size and structure chosen per document type, with titles, sections, dates, owners and access labels stored alongside each chunk.'],
        ['Embeddings and indexing', 'Embedding model selection, vector and keyword indexes in Azure AI Search or another store, and re-indexing when models change.'],
        ['Retrieval', 'Hybrid vector and keyword search, filters on metadata, re-ranking and query rewriting, so the most relevant passages reach the model.'],
        ['Permission-aware access', 'Retrieval filtered by the signed-in user’s rights, typically mapped from Microsoft Entra ID groups or your application roles, so nobody sees content they should not.'],
        ['Generation and citation', 'Prompts that keep the model to the retrieved content, answers with citations, and a clear “I don’t know” or hand-off when the sources do not cover the question.']
      ]
    },
    {
      eyebrow: 'Quality and operations',
      title: 'How we know the answers are right.',
      intro: 'A RAG demo can look correct on ten documents and fail on ten thousand. We measure quality before launch and keep measuring after it.',
      items: [
        ['Evaluation sets', 'A set of real questions with expected answers and sources, built with your subject experts.'],
        ['Retrieval and answer scoring', 'Separate scores for whether the right passages were found and whether the answer used them correctly.'],
        ['Regression checks', 'The evaluation set runs on every change to prompts, models, chunking or retrieval settings.'],
        ['Cost and latency tracking', 'Tokens, search calls and response time measured per question, with budgets and alerts.'],
        ['Feedback loops', 'User ratings and flagged answers routed back for review and used to improve the index and prompts.']
      ]
    }
  ],
  checklist: {
    title: 'RAG readiness checklist',
    intro: 'Use these questions to judge whether a RAG project is ready to build, or why an existing one is underperforming.',
    items: [
      'You know the top questions users need answered, with examples',
      'The sources that hold the answers are identified and accessible',
      'Access rules for each source are known and can be enforced at retrieval time',
      'Documents are current, or there is a plan to keep the index current',
      'Answers must cite their sources and users can open them',
      'There is an evaluation set of real questions and expected answers',
      'Cost per question and response-time targets are agreed',
      'Someone owns content quality after launch'
    ]
  },
  faqs: [
    ['What are RAG development services?', 'RAG development services cover the design and engineering of retrieval-augmented generation systems: connecting your content sources, indexing and searching them, passing the right passages to a language model, returning answers with citations and measuring quality. The goal is AI answers grounded in your data rather than the model’s general knowledge.'],
    ['When should we use RAG instead of fine-tuning?', 'Use RAG when answers must come from content that changes, must be cited, or must respect user permissions. Fine-tuning changes how a model writes or behaves, but it is a poor way to keep facts current. Many production systems use RAG alone; some combine both.'],
    ['Do you build RAG on Azure OpenAI?', 'Yes. Azure OpenAI with Azure AI Search is our most common foundation, together with Microsoft Entra ID for access control and Azure storage and functions for ingestion. We can use other model providers or vector stores when there is a reason to.'],
    ['Can a RAG system respect who is allowed to see which documents?', 'Yes, and it should. We store access information with each chunk and filter retrieval by the signed-in user’s groups or roles, so the model never receives content that user is not allowed to see.'],
    ['How do you reduce hallucinations in RAG?', 'By improving retrieval first, keeping the model to the retrieved passages, requiring citations, returning “not found” when sources do not cover a question, and measuring answer accuracy against an evaluation set on every change.'],
    ['Can you fix our existing RAG system?', 'Yes. We start by testing it against real questions, find whether failures come from ingestion, chunking, retrieval, permissions or the prompt, and fix the weakest stages first. A rebuild is rarely the first step.'],
    ['What content can a RAG system use?', 'Most text-based content: PDFs, Office documents, web pages, wikis, tickets, emails, database records and SaaS data through APIs. Scanned documents and tables need extra processing, which we plan for during discovery.'],
    ['How long does a RAG project take?', 'It depends on the number of sources, access rules and integrations. A short discovery defines the scope, the evaluation set and a realistic delivery plan before build work begins.']
  ]
};

solutionExtra['microsoft-365-copilot-readiness'] = {
  seoTitle: 'Microsoft 365 Copilot Readiness Assessment and Rollout',
  seoDescription: 'Fixed-scope Microsoft 365 Copilot readiness assessment: Entra ID access, SharePoint and Teams oversharing, Purview labels, licensing and a rollout plan in two weeks.',
  sections: [
    {
      eyebrow: 'What the assessment covers',
      title: 'Everything that decides whether Copilot is safe and useful.',
      intro: 'The assessment runs in your tenant with your IT team over about two weeks. You get findings, a prioritised fix list and a rollout plan you can act on.',
      items: [
        ['Oversharing review', 'SharePoint sites, Teams, OneDrive and links shared with everyone or with external users, ranked by the sensitivity of what they hold.'],
        ['Entra ID and access', 'Groups, guest accounts, stale users, admin roles and Conditional Access that affect what Copilot can reach.'],
        ['Purview readiness', 'Sensitivity labels, DLP and retention policies in place today and the minimum set needed before rollout.'],
        ['Licensing and settings', 'Copilot and Microsoft 365 licences, web grounding, plugin and agent settings, and who should get Copilot first.'],
        ['Use cases', 'The top three use cases by department, with a simple way to measure time saved in the pilot.'],
        ['Rollout plan', 'A phased plan: fixes first, then pilot, then wider rollout and the first Copilot Studio agents.']
      ],
      link: ['/solutions/ai-agent-governance', 'Next step: AI agent governance']
    },
    {
      eyebrow: 'After the assessment',
      title: 'From findings to a working rollout.',
      intro: 'We can carry out the fixes with your team, run the pilot and build the first agents, or hand the plan to your IT team or MSP.',
      items: [
        ['Fix oversharing', 'Restrict site and file sharing, clean up groups and guests, and apply restricted content discovery where needed.'],
        ['Label sensitive data', 'Roll out Purview sensitivity labels and DLP for the sites and data types that matter most.'],
        ['Pilot and train', 'Run a measured pilot with prompts and guidance for each department.'],
        ['First Copilot agents', 'Build Copilot Studio agents for one repeatable task, such as answering policy questions or preparing reports.']
      ],
      link: ['/solutions/intelligent-workflow-automation', 'See workflow automation with AI agents']
    }
  ],
  checklist: {
    title: 'Copilot readiness checklist',
    intro: 'If you cannot tick most of these, fix them before Copilot reaches every user.',
    items: [
      'You know which SharePoint sites and Teams are shared with everyone',
      'Guest and external sharing is reviewed and limited',
      'Sensitive data has Purview labels or a plan to label it',
      'Admin roles and stale accounts are cleaned up in Entra ID',
      'Copilot licences go to people with clear use cases',
      'There is a pilot group and a way to measure time saved',
      'Someone owns Copilot and agent settings after rollout'
    ]
  },
  faqs: [
    ['What is a Microsoft 365 Copilot readiness assessment?', 'A review of your Microsoft 365 tenant before Copilot rollout: who can access what in SharePoint, Teams and OneDrive, how sensitive data is labelled and protected, licensing and settings, and which use cases to start with. It ends with a prioritised fix list and a rollout plan.'],
    ['Why does oversharing matter for Copilot?', 'Copilot can use any content the signed-in user already has access to. Files that were technically open but hard to find become easy to surface, so access that was too broad becomes a real exposure.'],
    ['How long does the assessment take?', 'Usually about two weeks for a small or mid-sized tenant, depending on the number of sites, users and policies to review.'],
    ['Do you need admin access to our tenant?', 'We work with your IT team. Most checks use admin reports and read-only roles; changes are made only with your approval.'],
    ['Can you carry out the fixes as well?', 'Yes. We can restrict sharing, clean up Entra ID, set up Purview labels and DLP, run the pilot and build the first Copilot Studio agents, or hand the plan to your team.'],
    ['Is Copilot readiness only about security?', 'No. Security and data protection come first, but the assessment also covers licensing, settings, use cases and adoption so the rollout pays for itself.'],
    ['Do you work with companies outside India?', 'Yes. Most of our clients are in the US, UK, Europe and the Middle East. We agree working hours that overlap with your team.'],
    ['What comes after Copilot readiness?', 'Usually governance for Copilot and AI agents, and custom Copilot Studio or Azure agents for specific workflows.']
  ]
};

solutionExtra['ai-agent-governance'] = {
  seoTitle: 'AI Agent Governance for Microsoft 365 Copilot and Azure',
  seoDescription: 'AI agent and Copilot governance on Microsoft 365 and Azure: agent inventory, Entra Agent ID, Conditional Access, Purview DLP for AI and Microsoft Agent 365 setup.',
  sections: [
    {
      eyebrow: 'What we set up',
      title: 'Controls for every agent in your tenant.',
      intro: 'Microsoft now ships the tools: Agent 365, Entra Agent ID, Purview for AI and Defender for AI. They still need policies, configuration and owners. We set them up around how your business uses agents.',
      items: [
        ['Agent inventory', 'A register of Copilot Studio agents, custom Azure agents and third-party agents, with owners, data sources and allowed actions.'],
        ['Agent identities', 'Entra Agent ID so each agent has its own identity and lifecycle instead of borrowing a user or a shared service account.'],
        ['Access policies', 'Least-privilege permissions and Conditional Access for agents, including which data and connectors each one may use.'],
        ['Data protection for AI', 'Purview sensitivity labels, DLP for prompts and responses, and blocking sensitive data from untrusted AI services.'],
        ['Agent 365 and monitoring', 'Microsoft Agent 365 configured for central visibility, with audit logs, alerts and a review routine.'],
        ['Policies people can follow', 'A short AI use and agent creation policy: who may build agents, how they are approved and when they are retired.']
      ],
      link: ['/solutions/microsoft-365-copilot-readiness', 'Start with a Copilot readiness assessment']
    },
    {
      eyebrow: 'Ongoing governance',
      title: 'Governance that keeps up as agents multiply.',
      intro: 'New agents appear every month. A monthly governance service keeps the register, access and policies current.',
      items: [
        ['New agent reviews', 'Review and approve new agents before they reach production data.'],
        ['Access recertification', 'Regular checks that agents still need the access they have.'],
        ['Incident response', 'Investigate unusual agent activity and data exposure alerts with your security team.'],
        ['Reporting', 'A monthly summary of agents, usage, risks and changes for IT and leadership.']
      ],
      link: ['/solutions/ai-agent-development', 'Building your own agents? See AI agent development']
    }
  ],
  checklist: {
    title: 'AI agent governance checklist',
    intro: 'Use this to see where your Copilot and agent controls stand today.',
    items: [
      'You have a list of every AI agent in the tenant and who owns it',
      'Agents have their own identities, not shared user accounts',
      'Each agent has only the permissions and connectors it needs',
      'Sensitive data is labelled and DLP covers AI prompts and responses',
      'Agent activity is logged and someone reviews it',
      'There is a rule for who may create and publish agents',
      'Unused agents are retired'
    ]
  },
  faqs: [
    ['What is AI agent governance?', 'The policies and technical controls that decide which AI agents exist in your organization, who owns them, what data and systems they can reach, and how their activity is monitored and audited.'],
    ['Why do AI agents need their own identities?', 'An agent that runs under a person’s account or a shared service account inherits too much access and is hard to audit. A dedicated agent identity in Microsoft Entra lets you limit, monitor and retire each agent separately.'],
    ['What is Microsoft Agent 365?', 'Microsoft’s central place to see and manage AI agents across Microsoft 365, working with Entra for identity, Purview for data protection and Defender for threat detection.'],
    ['Does governance cover Microsoft 365 Copilot too?', 'Yes. The same identity, access and Purview controls decide what Copilot can surface, so Copilot and custom agents are governed together.'],
    ['Can you govern agents we built ourselves or bought from vendors?', 'Yes. Inventory, identity and data controls apply to Copilot Studio agents, custom Azure AI agents and third-party agents connected to your tenant.'],
    ['Is this a one-off project or a service?', 'Either. The initial setup is a fixed-scope project; monthly governance keeps the register, access reviews and policies current.'],
    ['Do we need Microsoft E5 licences?', 'Some controls need specific Microsoft licences. We review what you have and recommend the smallest set that covers your risks.'],
    ['How does this relate to Copilot readiness?', 'Readiness prepares your tenant before Copilot rollout. Governance keeps Copilot and every agent under control after rollout.']
  ]
};

solutionExtra['msp-white-label-partner'] = {
  seoTitle: 'White-label Copilot Studio & Azure AI for MSPs',
  seoDescription: 'White-label Copilot Studio agents, Power Platform apps and Azure AI builds for MSPs and Microsoft partners. Delivered under your brand, priced so you keep the margin.',
  sections: [
    {
      eyebrow: 'What we build for your clients',
      title: 'The AI and custom work your clients ask you for.',
      intro: 'Your clients already trust you with Microsoft 365. These are the projects they ask for next, which we build behind your brand.',
      items: [
        ['Copilot Studio agents', 'Agents that answer from client documents, handle requests or prepare reports inside Teams and Microsoft 365.'],
        ['Power Platform apps and flows', 'Power Apps and Power Automate solutions that replace spreadsheets, emails and paper forms.'],
        ['Azure AI builds', 'Azure OpenAI and AI Foundry solutions such as document processing, knowledge search and custom agents.'],
        ['SharePoint and Microsoft 365 integrations', 'Intranets, document workflows and connections between Microsoft 365 and line-of-business systems.'],
        ['Copilot readiness and governance', 'Readiness assessments and agent governance delivered as your service.'],
        ['.NET and Azure app work', 'Fixes, upgrades and modernization of client applications built on .NET and Azure.']
      ],
      link: ['/solutions/microsoft-365-copilot-readiness', 'See the Copilot readiness assessment']
    },
    {
      eyebrow: 'How the partnership works',
      title: 'Your brand, your client, our engineers.',
      intro: 'We work as an extension of your team. Clients see your name; you set the price and keep the relationship.',
      items: [
        ['White-label by default', 'We work under your brand and email domain if you want, or stay fully behind the scenes.'],
        ['Fixed scope or monthly', 'Fixed price per project, or a monthly team when you have steady demand.'],
        ['Pre-sales support', 'Help with discovery calls, scoping and estimates so you can quote with confidence.'],
        ['Documentation and handover', 'Admin guides and runbooks so your support desk can look after what we build.']
      ],
      link: ['/solutions/agency-development-partner', 'Agency instead of an MSP? See our agency partner model']
    }
  ],
  checklist: {
    title: 'Is a white-label partner right for your MSP?',
    intro: 'A white-label development partner usually makes sense when several of these are true.',
    items: [
      'Clients ask for Copilot, AI agents or custom apps',
      'You run Microsoft 365 well but have no developers',
      'You turn down or refer out project work today',
      'You want project revenue without hiring a dev team',
      'You want to keep the client relationship yourself',
      'You need someone to support what gets built'
    ]
  },
  faqs: [
    ['What is white-label development for MSPs?', 'A development company builds apps, agents and integrations for an MSP’s clients, delivered under the MSP’s brand. The MSP keeps the client relationship and sets the price.'],
    ['What kind of projects can you deliver for our clients?', 'Copilot Studio agents, Power Platform apps and flows, Azure OpenAI and AI Foundry solutions, SharePoint and Microsoft 365 work, Copilot readiness and governance, and .NET and Azure application work.'],
    ['Will our clients know you are involved?', 'Only if you want them to. We can work under your brand and email domain or stay fully behind the scenes.'],
    ['How is pricing handled?', 'We quote you a fixed price per project or a monthly rate for a dedicated team. You set your own client price and margin.'],
    ['Can you join client calls?', 'Yes, as part of your team if you prefer, or we can brief your account manager before each call.'],
    ['Who supports the solution after go-live?', 'Your team, with our documentation and admin guides. We can also provide monthly third-line support behind you.'],
    ['Do you sell to our clients directly?', 'No. Clients you bring stay your clients.'],
    ['Are you a Microsoft partner?', 'Yes. Csharptek is a Microsoft Solutions Partner with long experience across Azure, .NET, Microsoft 365, Entra ID, Intune, Power Platform and SharePoint.']
  ]
};

solutionExtra['microsoft-365-security'] = {
  seoTitle: 'Microsoft 365 Security Audit, Hardening and AI Control',
  seoDescription: 'Microsoft 365 security audit and fixes: Conditional Access, Intune, Defender for Business, Purview DLP and control of ChatGPT and other AI tools on company devices.',
  sections: [
    {
      eyebrow: 'The problem',
      title: 'You bought the licences. The security is still switched off.',
      intro: 'Microsoft 365 Business Premium, E3 and E5 include strong security tools, but very little is enabled by default. Most tenants we review share the same gaps.',
      items: [
        ['No Conditional Access', 'Sign-ins are not checked for device, location or risk, so a stolen password is often enough to get in.'],
        ['Unmanaged laptops', 'Devices are not enrolled in Intune, disks are not encrypted with BitLocker and updates are left to users.'],
        ['Defender not onboarded', 'Defender for Business or Defender for Endpoint is licensed but not deployed, so attacks on devices go unseen.'],
        ['No data loss rules', 'Nothing stops customer data, financial files or contracts from being emailed out or uploaded to personal storage.'],
        ['Shadow AI', 'Staff paste company data into ChatGPT, Gemini and other public AI tools with no policy, no logging and no limits.'],
        ['Nobody owns it', 'Alerts and Secure Score recommendations pile up because no one is responsible for acting on them.']
      ]
    },
    {
      eyebrow: 'How the security check works',
      title: 'Read-only access, a clear report in days.',
      intro: 'The check is done with read-only Global Reader access, so nothing in your tenant changes during the review. You get a prioritised report written for both management and IT.',
      items: [
        ['Read-only access', 'You grant a Global Reader role for the review and can remove it the moment the report is delivered.'],
        ['What we review', 'Secure Score, Entra ID and MFA, Conditional Access, devices and Intune, Defender, email protection, sharing, Purview and AI usage.'],
        ['The report', 'Findings ranked by risk, what each one means for the business, and the exact fix, delivered within three to five working days.'],
        ['Walkthrough', 'A call to go through the findings with your team and agree what to fix first.']
      ],
      link: ['/ai-data-risk-check', 'The check now includes AI usage: see the AI Data Risk Check']
    },
    {
      eyebrow: 'What we fix',
      title: 'Hands-on hardening with the licences you already own.',
      intro: 'We roll changes out in stages, starting with a pilot group, so staff are not locked out and work is not interrupted.',
      items: [
        ['Identity', 'MFA for everyone, Conditional Access baseline policies, admin role clean-up and removal of stale accounts and guests.'],
        ['Devices', 'Intune enrolment, compliance policies, BitLocker, Windows update rings and attack surface reduction rules.'],
        ['Threat protection', 'Defender onboarding for laptops and servers, email protection policies and alert routing.'],
        ['Data protection', 'Purview sensitivity labels, DLP policies and limits on external sharing in SharePoint, OneDrive and Teams.'],
        ['AI control', 'Block, allow or monitor ChatGPT and other AI tools on managed devices, and stop sensitive data from being pasted into them where your licence supports it.'],
        ['Documentation', 'A record of every policy and setting so your team, auditors or insurers can see what is in place.']
      ],
      link: ['/solutions/ai-data-loss-prevention', 'See how we stop data leaking into ChatGPT and other AI tools']
    },
    {
      eyebrow: 'Compliance support',
      title: 'Technical controls that support your compliance work.',
      intro: 'We do not issue certifications. We help you put the Microsoft 365 controls in place that auditors, regulators and cyber insurers ask about, and document them.',
      items: [
        ['ISO 27001 and SOC 2', 'Access control, device security, logging and data protection controls mapped to the requirements you are working towards.'],
        ['GDPR and data protection laws', 'Data discovery, labels, retention and DLP for personal data, including local data protection rules such as the DPDP Act.'],
        ['Log retention and incident rules', 'Audit and sign-in log retention, alerting and incident records for rules such as CERT-In directions and SEBI and RBI cyber security frameworks.'],
        ['Cyber insurance', 'MFA, endpoint protection, backups and admin controls that insurers check before issuing or renewing cover.']
      ]
    },
    {
      eyebrow: 'After the fixes',
      title: 'Keep it secure every month.',
      intro: 'Security drifts as people join, leave and install new apps. Monthly management keeps the tenant where you left it.',
      items: [
        ['Monthly review', 'Secure Score, new risks, policy changes and device compliance, with a short report.'],
        ['Alert handling', 'Business-hours review of Defender and sign-in alerts with escalation to your team.'],
        ['Joiners and leavers', 'Account, device and licence changes handled correctly and quickly.'],
        ['New Microsoft features', 'Advice on new security and AI controls as Microsoft releases them, with preview features clearly marked.']
      ]
    }
  ],
  checklist: {
    title: 'Microsoft 365 security quick check',
    intro: 'If you cannot answer yes to most of these, your tenant needs attention.',
    items: [
      'Every user signs in with MFA, including admins',
      'Conditional Access policies block risky and legacy sign-ins',
      'All company laptops are enrolled in Intune and encrypted',
      'Defender is deployed and someone reads the alerts',
      'Sharing outside the company is limited and reviewed',
      'Sensitive data has labels or DLP rules',
      'There is a written rule for ChatGPT and other AI tools, and it is enforced',
      'Audit logs are kept long enough for an investigation'
    ]
  },
  faqs: [
    ['What is a Microsoft 365 security audit?', 'A review of your tenant’s identity, device, email, data and AI settings against Microsoft’s recommended baselines, with a prioritised list of risks and the fix for each one.'],
    ['Do you need admin access for the security check?', 'No. The check uses the read-only Global Reader role, so nothing can be changed during the review. You can remove the access as soon as the report is delivered.'],
    ['How long does the security check take?', 'Usually three to five working days from access being granted, followed by a walkthrough call.'],
    ['Which Microsoft 365 plans do you work with?', 'Business Basic, Standard and Premium, and E3 and E5. The report shows what your current plan can do and where an add-on or upgrade would close a real gap.'],
    ['Can you block ChatGPT on company laptops?', 'Yes. On managed devices we can block or allow AI sites and apps, and with the right licence we can stop sensitive data being pasted into them while still allowing approved tools.'],
    ['Will the changes disrupt our staff?', 'Changes go to a pilot group first, then roll out in stages with clear messages to users, so people are not locked out.'],
    ['Do you help with ISO 27001, SOC 2 or data protection laws?', 'We put in place and document the Microsoft 365 technical controls those frameworks ask for. We do not certify you; your auditor does.'],
    ['Can you work with our existing IT provider or MSP?', 'Yes. We can deliver the check and fixes alongside your IT team or MSP, or white-label the work for an MSP to resell.']
  ]
};

solutionExtra['private-ai-workspace'] = {
  seoTitle: 'Private ChatGPT on Azure OpenAI for Your Company',
  seoDescription: 'A private ChatGPT-style assistant on Azure OpenAI in your own tenant: Entra ID sign-in, search over company documents, public AI sites blocked, usage and cost monitoring.',
  sections: [
    {
      eyebrow: 'Why private AI',
      title: 'Your staff already use AI. Give them one you control.',
      intro: 'Public AI tools are useful, which is why people use them with company data. A private workspace keeps the usefulness and removes the guesswork about where your data goes.',
      items: [
        ['Data stays in your tenant', 'Prompts, files and answers are processed by Azure OpenAI in your own Azure subscription and region.'],
        ['Work sign-in', 'Staff sign in with their Microsoft 365 account; leavers lose access automatically.'],
        ['Company knowledge', 'Answers can come from approved SharePoint libraries and documents, with links to the source.'],
        ['Public AI blocked', 'Once the private tool is live, public AI sites can be blocked on managed devices with a clear alternative in place.'],
        ['Visible usage', 'See who uses it, for what kind of work and at what cost, without reading individual conversations unless your policy requires it.'],
        ['Choice of models', 'Use current OpenAI models on Azure, and add other models where your policy allows.']
      ]
    },
    {
      eyebrow: 'What we deploy',
      title: 'A complete, supported setup in your Azure subscription.',
      intro: 'Everything runs in your subscription, so you own the data, the bill and the configuration.',
      items: [
        ['Chat application', 'A web chat interface with conversation history, file upload and shared prompts for each team.'],
        ['Azure OpenAI', 'Model deployments with content filtering, quotas and regional choice.'],
        ['Document search', 'Permission-aware search over approved content so people only get answers from files they can already open.'],
        ['Identity and access', 'Entra ID single sign-on, access by group and Conditional Access.'],
        ['Device controls', 'Policies that block public AI sites and apps on Intune-managed devices.'],
        ['Monitoring', 'Usage dashboards, audit logs, budgets and alerts on spend.']
      ],
      link: ['/ai-data-risk-check', 'Start with an AI Data Risk Check']
    },
    {
      eyebrow: 'For MSPs',
      title: 'Offer private AI to every client, under your brand.',
      intro: 'We build and maintain a repeatable private AI deployment that MSPs can roll out per client tenant, with their own branding, pricing and support.',
      items: [
        ['Per-client deployment', 'A standard deployment for each client tenant, set up the same way every time.'],
        ['Your brand', 'Your logo, name and support contacts in the chat interface and documentation.'],
        ['Central monitoring', 'Usage and cost visibility across clients so you can bill and support them.'],
        ['Behind-the-scenes support', 'We handle updates, new models and technical issues; you keep the client relationship.']
      ],
      link: ['/solutions/agency-development-partner', 'See our white-label partnership for MSPs']
    }
  ],
  checklist: {
    title: 'Is a private AI workspace right for you?',
    intro: 'It usually is if several of these are true.',
    items: [
      'Staff use ChatGPT, Gemini or Claude for work today',
      'Some of that work involves customer, financial or legal information',
      'You use Microsoft 365 and Entra ID for sign-in',
      'You have, or can create, an Azure subscription',
      'You want to block public AI tools without taking AI away from staff',
      'You need to know what AI costs and who uses it'
    ]
  },
  faqs: [
    ['What is a private ChatGPT?', 'A ChatGPT-style assistant that runs on Azure OpenAI in your own Azure subscription, signs users in with their work account and keeps prompts and files inside your tenant.'],
    ['Is our data used to train the models?', 'No. Azure OpenAI does not use your prompts or files to train the models. Your data stays in your subscription and region.'],
    ['Can it answer questions from our documents?', 'Yes. We connect approved SharePoint libraries and documents with permission-aware search, so answers come with sources and respect who can open what.'],
    ['How do you block ChatGPT and other public AI sites?', 'On Intune-managed devices we apply web and app policies that block public AI sites, with exceptions for approved tools, once the private workspace is available.'],
    ['What does it cost to run?', 'You pay Azure directly for hosting and model usage, which depends on the number of users and how much they use it. We set budgets and alerts so there are no surprises.'],
    ['How long does deployment take?', 'A standard deployment with single sign-on usually takes two to four weeks; document search and device policies can follow in phases.'],
    ['Can MSPs resell it?', 'Yes. We offer a white-label version that MSPs deploy per client under their own brand and support model.'],
    ['Do we need Microsoft 365 Copilot as well?', 'Not necessarily. Copilot works inside Office apps; a private workspace is a general assistant with your own controls. Many companies use both, or start with one.']
  ]
};

Object.assign(solutionExtra, aiProtectionExtra);
