// Full case-study content, grounded in the Csharptek Case Study Master Pack (2026-10-01).
// Rules: anonymized (no client or product names), no prices, no invented metrics.
// `published: true` = approved by Bhanu; set false to keep a detail page noindex.

export const caseStudyDetails = {
  payautomation: {
    published: true,
    facts: [
      { label: 'Engagement', value: 'Product build, from February 2026' },
      { label: 'Delivery', value: 'Web platform, AI engine, Azure infrastructure, CI/CD' },
      { label: 'Commerce', value: 'Microsoft Marketplace subscription lifecycle' }
    ],
    challenge: [
      'A sales and revenue automation SaaS for Microsoft partner companies had to cover deal scoring, proposal generation, revenue forecasting, commission calculation, CRM synchronization and Marketplace commerce in one product.',
      'It also needed a 14-day free trial, strict multi-tenant separation, enterprise-grade security and a deliberately low operating-cost design.'
    ],
    built: [
      'Csharptek built the web platform, a multi-agent AI engine, the HubSpot integration, the Microsoft Marketplace subscription lifecycle, security controls, Azure infrastructure and automated deployment.',
      'The product includes authentication, CRM management, deal intelligence, proposals, forecasting, commissions, audit logging, trial management and Marketplace lifecycle handling.'
    ],
    architecture: [
      { title: 'Modular monolith', text: 'A Node.js/TypeScript backend and Next.js/React frontend, organized as a modular monolith around a central orchestration engine.' },
      { title: 'Agent engine', text: 'A 37-agent engine grouped across CRM, Intelligence, Operations, Revenue and Platform functions.' },
      { title: 'Tenant-aware data', text: 'Azure Cosmos DB partitioned by tenant, with secrets managed in Key Vault.' },
      { title: 'Operations', text: 'Application Insights and Log Analytics for monitoring, Private Endpoints and DDoS Protection, Terraform for infrastructure and GitHub Actions for CI/CD.' }
    ],
    engineering: [
      'Azure OpenAI scores deal quality, with a rule-based fallback so the workflow continues if the model is unavailable.',
      'A proposal agent searches a knowledge store before generating proposal content.',
      'Microsoft Marketplace SaaS Fulfillment API v2 handles purchase, activation, plan change, suspension, reinstatement and cancellation.',
      'Infrastructure is provisioned as code and deployed through an automated pipeline.'
    ],
    integrations: ['HubSpot (two-way synchronization)', 'Microsoft Marketplace SaaS Fulfillment API', 'Azure OpenAI', 'Entra ID B2C'],
    results: [
      'The platform was delivered with all documented agents working together and automated deployment in place.',
      'The Marketplace purchase-to-cancellation lifecycle is implemented end to end.',
      'The architecture was designed around a low operating-cost target.'
    ],
    technology: ['TypeScript', 'Node.js', 'Next.js', 'React', 'Azure Cosmos DB', 'Azure OpenAI', 'Container Apps', 'Key Vault', 'Application Insights', 'Service Bus', 'Terraform', 'Docker', 'GitHub Actions', 'HubSpot', 'Microsoft Marketplace']
  },

  virilocity: {
    published: true,
    facts: [
      { label: 'Engagement', value: 'Roughly three to four months of build' },
      { label: 'Delivery', value: 'Multi-tenant SaaS platform' },
      { label: 'Commerce', value: 'Stripe and Microsoft Marketplace' }
    ],
    challenge: [
      'A B2B marketing platform needed to automate keyword research, content generation, CRM enrichment, multi-channel publishing and executive reporting, while keeping people in control of what goes out.',
      'Requirements also included enterprise identity, AI-fairness controls, brand knowledge, and commercialization through Stripe and Microsoft Marketplace.'
    ],
    built: [
      'Csharptek built a Next.js platform with a 29-agent AI autopilot engine, an approval console, nine social and CMS publishing adapters, HubSpot, Webflow and Shopify connectors, Stripe billing and Microsoft Marketplace integration.',
      'Enterprise sign-in uses Entra ID and SAML, reporting reaches teams through Microsoft Teams, and a CI/CD pipeline carries the product to production.'
    ],
    architecture: [
      { title: 'Application', text: 'Next.js and Node.js with NextAuth for identity and Drizzle for data access.' },
      { title: 'Data and memory', text: 'Neon PostgreSQL with pgvector for brand knowledge, and Upstash Redis for queues and caching.' },
      { title: 'Azure services', text: 'Entra ID, Key Vault, Microsoft Graph, the Marketplace SaaS API, Azure Functions, Container Registry and Container Apps; primary hosting on Vercel.' },
      { title: 'Delivery pipeline', text: 'Tests, security scanning, Docker checks, deployment and an accessibility audit run in GitHub Actions.' }
    ],
    engineering: [
      'Claude-powered agents handle research, drafting and optimization; every publish step passes through the approval console.',
      'Brand knowledge is stored as embeddings in pgvector so content stays on voice.',
      'MCP servers connect AI workflows to HubSpot, Microsoft 365 and Neon.',
      'A fairness and bias filter is part of the generation pipeline.'
    ],
    integrations: ['HubSpot', 'Shopify', 'Webflow', 'X', 'LinkedIn', 'Facebook', 'Instagram', 'Threads', 'YouTube', 'Pinterest', 'Telegram', 'Discord', 'Bluesky', 'Microsoft 365'],
    results: [
      'A complete multi-tenant platform covering research, content, enrichment, publishing and reporting.',
      'Human approval is built into the publishing flow rather than added afterwards.',
      'A full test, security and accessibility pipeline gates every deployment.'
    ],
    technology: ['TypeScript', 'Node.js 22', 'Next.js', 'Neon PostgreSQL', 'pgvector', 'Redis', 'Claude', 'Stripe', 'Docker', 'GitHub Actions', 'Entra ID', 'Key Vault', 'Microsoft Graph', 'Azure Marketplace APIs', 'HubSpot', 'Shopify', 'Webflow']
  },

  woundmedix: {
    published: true,
    facts: [
      { label: 'Domain', value: 'Home-based clinical care operations' },
      { label: 'Languages', value: 'English and Spanish voice intake' },
      { label: 'Scope', value: 'Intake, dispatch, hiring and sales workflows' }
    ],
    challenge: [
      'A home-based wound-care business needed one connected operations system for inbound calls, referral intake, nurse dispatch, hiring and onboarding, and sales and marketing follow-up.',
      'Calls, forms, spreadsheets and email carried this work between people. The goal was structured intake and reliable handoffs.'
    ],
    built: [
      'Csharptek built an AI-driven inbound phone system using Twilio and Vapi assistants in English and Spanish. Calls route into seven intent lanes: new patient or referral, existing patient, insurance and billing, provider or facility, sales and partnerships, careers and hiring, and other.',
      'The system captures structured data, supports emergency detection and SMS intake, and hands off to automated workflows for dispatch, hiring and sales.'
    ],
    architecture: [
      { title: 'Voice and messaging', text: 'Twilio and Vapi handle calls; a Node.js backend on Railway is called through API and sends messages through Mailgun.' },
      { title: 'Records', text: 'PostgreSQL stores call and conversation records.' },
      { title: 'Post-call intelligence', text: 'Gemini processes call logs and transcripts to drive follow-up actions.' },
      { title: 'Workflow layer', text: 'Make.com workflows run referral dispatch, hiring and sales automation across connected business tools.' }
    ],
    engineering: [
      'Referral dispatch looks up the ZIP code against six service zones, checks nurse availability, reserves a nurse, notifies by Slack and email, and escalates to a person when needed.',
      'Four role-specific hiring workflows (nurse, staff, admin and virtual assistant) connect forms, Google Sheets, Slack and Gmail, Zoom, Google Calendar, Zoho Sign and Google Drive.',
      'Sales and marketing workflows connect Google Sheets, HubSpot, Gmail and Slack.',
      'The nurse-visit workflow was simplified when inventory tracking was removed from scope.'
    ],
    integrations: ['Twilio', 'Vapi', 'Mailgun', 'HubSpot', 'Slack', 'Gmail', 'Google Sheets', 'Zoom', 'Google Calendar', 'Zoho Sign', 'Google Drive'],
    results: [
      'Intake, referral dispatch, hiring and sales workflows were implemented as connected, observable automations.',
      'Callers are routed by intent, with structured data captured for every lane.',
      'The voice flow was later paused for the client’s own operational reasons. The underlying workflows remain implemented.'
    ],
    technology: ['Twilio', 'Vapi', 'Gemini', 'Node.js', 'Railway', 'Mailgun', 'PostgreSQL', 'Make.com', 'Google Sheets', 'HubSpot', 'Slack', 'Gmail', 'Zoom', 'Google Calendar', 'Zoho Sign', 'Google Drive']
  },

  'medical-documentation': {
    published: true,
    facts: [
      { label: 'Engagement', value: 'March to July 2024' },
      { label: 'Platforms', value: 'Web application and iOS app' },
      { label: 'Cloud', value: 'Microsoft Azure' }
    ],
    challenge: [
      'Clinicians spend significant time documenting patient visits. This product set out to listen to a visit and produce a concise clinical note shortly afterwards.',
      'The hard part is separating medically relevant information from unrelated conversation, then producing text a provider can review and copy into an electronic health record.'
    ],
    built: [
      'Csharptek built patient-visit transcription, medical note generation, identification of medically relevant content, EHR-oriented workflow support, a web application and an iOS application.',
      'Azure infrastructure and HIPAA-oriented deployment requirements were part of the scope.'
    ],
    architecture: [
      { title: 'Capture', text: 'Audio from a patient visit is recorded in the iOS or web application.' },
      { title: 'Transcription', text: 'Speech is converted to text for downstream processing.' },
      { title: 'Note generation', text: 'AI identifies the medically relevant content and drafts a structured clinical note.' },
      { title: 'Provider workflow', text: 'The provider reviews the note and copies it into their electronic health record.' }
    ],
    engineering: [
      'Turning free-flowing conversational audio into structured documentation.',
      'Filtering non-clinical conversation from the clinical record.',
      'Supporting a practical provider workflow across web and mobile.'
    ],
    integrations: ['EHR copy-and-paste workflow', 'Microsoft Azure'],
    results: [
      'A working web and iOS product that transcribes visits and drafts clinical notes.',
      'Delivered as a web application and an iOS application.'
    ],
    technology: ['AI/ML', 'Speech transcription', 'Clinical note generation', 'Microsoft Azure', 'Web application', 'iOS']
  },

  'rag-pipeline': {
    published: true,
    facts: [
      { label: 'Engagement', value: 'March 2025 to March 2026' },
      { label: 'Focus', value: 'Retrieval, orchestration and generation' },
      { label: 'Model setup', value: 'Hosted and private LLM components' }
    ],
    challenge: [
      'An existing retrieval-augmented generation pipeline needed to be continued and improved with agents, vector search and private LLM components.',
      'The challenge was treating it as production knowledge engineering rather than a generic chatbot, with clear boundaries between retrieval, orchestration and generation.'
    ],
    built: [
      'Csharptek continued and extended the pipeline: agent workflows, vector search over private knowledge, model and provider integration, and workflow automation around it.'
    ],
    architecture: [
      { title: 'Knowledge layer', text: 'Private knowledge is indexed in a Weaviate vector database.' },
      { title: 'Orchestration', text: 'n8n workflows and agents coordinate retrieval, tools and follow-up steps.' },
      { title: 'Generation', text: 'OpenAI, Claude and a private LLM generate answers from retrieved context.' }
    ],
    engineering: [
      'Separating retrieval, orchestration and generation so each can be improved independently.',
      'Integrating multiple model providers, including a private model, in one pipeline.',
      'Automating surrounding workflows around the knowledge system.'
    ],
    integrations: ['OpenAI API', 'Claude', 'Weaviate', 'n8n', 'Private LLM'],
    results: [
      'A year-long engagement delivering improvements to an existing retrieval pipeline.',
      'Agent workflows and vector search working together over private knowledge.'
    ],
    technology: ['Python', 'OpenAI API', 'Claude', 'n8n', 'Weaviate', 'Private LLM']
  },

  'travel-data-ai': {
    published: true,
    facts: [
      { label: 'Engagement', value: 'Long-running, from January 2026' },
      { label: 'Cloud AI', value: 'Azure OpenAI and Document Intelligence' },
      { label: 'Inputs', value: 'HTML, images, PDFs, documents and email' }
    ],
    challenge: [
      'Travel information arrives in many forms: web pages, images, PDFs, documents and email. It then has to reach operational reservation systems accurately.',
      'The engagement focuses on parsing that data in real time and interacting with those systems.'
    ],
    built: [
      'Csharptek is building a real-time AI pipeline in C# that converts heterogeneous travel content into structured information and connects it to reservation systems through APIs.'
    ],
    architecture: [
      { title: 'Ingestion', text: 'HTML, images, PDFs, documents and email enter one processing pipeline.' },
      { title: 'Extraction', text: 'Azure Document Intelligence and Azure OpenAI extract structured data from each format.' },
      { title: 'Integration', text: 'Structured results connect to operational reservation systems through APIs.' }
    ],
    engineering: [
      'Multimodal document handling across very different input formats.',
      'Structured extraction with prompt engineering tuned to travel content.',
      'Production AI running inside an existing application environment.'
    ],
    integrations: ['Azure OpenAI', 'Azure Document Intelligence', 'Reservation system APIs'],
    results: [
      'A long-running engagement, active since January 2026.',
      'A working path from unstructured travel content to structured reservation data.'
    ],
    technology: ['C#', 'Azure OpenAI', 'Azure Document Intelligence', 'REST APIs', 'Email and document processing']
  },

  landminer: {
    published: true,
    facts: [
      { label: 'Engagement', value: 'February to August 2026, fixed price' },
      { label: 'Goal', value: 'Production-ready Marketplace SaaS' },
      { label: 'Layer', value: 'Commerce, identity and acquisition' }
    ],
    challenge: [
      'A SaaS product needed to complete its deployment on Microsoft Marketplace and meet technical and publishing requirements, while also strengthening the acquisition and conversion platform around it.'
    ],
    built: [
      'Csharptek worked on Partner Center publishing, SaaS Fulfillment APIs, Metering APIs, Entra ID configuration, subscription and entitlement workflows and certification requirements.',
      'On the acquisition side, Csharptek built landing pages, A/B testing, video engagement and heatmap tracking, and CRM workflows.'
    ],
    architecture: [
      { title: 'Purchase and entitlement', text: 'Marketplace purchase events drive subscription and entitlement workflows in the SaaS application.' },
      { title: 'Metering', text: 'Usage is reported through the Metering API for metered billing.' },
      { title: 'Identity', text: 'Entra ID and Azure AD configuration connect customer sign-in to the offer.' },
      { title: 'Acquisition layer', text: 'Landing pages, experiments and CRM workflows feed prospects into the product.' }
    ],
    engineering: [
      'Mapping the Marketplace lifecycle to application state and entitlements.',
      'Implementing metered billing for usage-based plans.',
      'Meeting Partner Center certification requirements.'
    ],
    integrations: ['Microsoft Partner Center', 'SaaS Fulfillment APIs', 'Metering APIs', 'Entra ID', 'CRM'],
    results: [
      'The engagement was completed successfully within its fixed-price scope.',
      'Fulfillment, metering, identity, certification and acquisition work were delivered together.'
    ],
    technology: ['Microsoft Azure', 'Microsoft Marketplace', 'Partner Center', 'SaaS Fulfillment APIs', 'Metering APIs', 'Entra ID', 'Full-stack web development', 'A/B testing', 'Heatmaps', 'CRM integration']
  },

  'healthcare-mobile-app': {
    published: true,
    facts: [
      { label: 'Platforms', value: 'iOS and Android' },
      { label: 'Delivery', value: 'Fixed price, milestone based' },
      { label: 'Focus', value: 'Long-form recording reliability' }
    ],
    challenge: [
      'Clinicians needed a mobile app for native recording, transcription and AI-generated clinical notes, backed by templates, sessions, user management and an admin portal.',
      'Long recordings, interruptions, device differences, platform parity and store approval are real engineering problems on mobile.'
    ],
    built: [
      'Csharptek delivered a native recording core, transcription, AI note generation, clinician feature parity, templates, sessions and users, and admin portal parity across iOS and Android.',
      'The work covered code quality and governance, UAT, App Store approval and production validation, plus Android foreground-service recording and interruption handling.'
    ],
    architecture: [
      { title: 'Native recording', text: 'A native recording core built for long sessions on each platform.' },
      { title: 'Processing', text: 'Transcription and AI note generation turn recordings into clinical notes.' },
      { title: 'Administration', text: 'An integrated admin portal manages users, sessions and templates.' }
    ],
    engineering: [
      'Recording that survives calls, notifications and app switching.',
      'Android foreground-service handling for reliable background capture.',
      'Platform parity between iOS and Android.',
      'Store-ready builds and production validation.'
    ],
    integrations: ['Transcription service', 'AI note generation', 'App Store', 'Google Play'],
    results: [
      'All planned milestones were delivered and paid.',
      'Production validation was completed.'
    ],
    technology: ['iOS', 'Android', 'Native recording', 'Transcription', 'AI clinical notes', 'Admin portal', 'App Store', 'Google Play']
  },

  'clinical-workforce-platform': {
    published: true,
    facts: [
      { label: 'Domain', value: 'Wound-care workforce readiness' },
      { label: 'Platform', value: 'Learning platform plus automations' },
      { label: 'Status', value: 'In delivery' }
    ],
    challenge: [
      'The client wanted a five-course training and certification platform with certificates and digital badges, plus a workforce readiness database feeding a recruitment pipeline.',
      'Part-way through, RN license verification through Nursys was added to the scope.'
    ],
    built: [
      'Csharptek configured the learning platform’s branding, five-course structure, modules, lessons, assessments, certificates, clinician profiles and the workforce database.',
      'Three Make.com automations handle registration, course completion and program completion, with Google Sheets used for workforce data and logging.'
    ],
    architecture: [
      { title: 'Learning platform', text: 'Courses, assessments, certificates and clinician profiles run on LearnWorlds.' },
      { title: 'Automation layer', text: 'Make.com workflows react to registration and completion events.' },
      { title: 'Verification flow', text: 'A verified RN is matched or created as a learner and granted access; a failed verification creates no account. Another developer’s automation performs the Nursys call, and Csharptek’s automation consumes the result.' }
    ],
    engineering: [
      'Event-driven automations connecting learning events to workforce data.',
      'Account creation gated on license verification.',
      'Security controls including 2FA, signup approval and device tracking.'
    ],
    integrations: ['LearnWorlds', 'Make.com', 'Google Sheets', 'Stripe', 'Nursys', 'Gmail'],
    results: [
      'Three automations are live and tested; four of five courses carry real client content.'
    ],
    technology: ['LearnWorlds', 'Make.com', 'Google Sheets', 'Stripe', 'Nursys API', 'Gmail', 'Webhooks']
  },

  'image-to-video': {
    published: true,
    facts: [
      { label: 'Engagement', value: 'January to March 2026' },
      { label: 'Flow', value: 'Upload, prompt, generate, preview' },
      { label: 'Pattern', value: 'Asynchronous processing' }
    ],
    challenge: [
      'Generative video takes time. A product that accepts an image and a prompt must make a long-running operation feel dependable: job handling, status, errors and delivery of the finished asset.'
    ],
    built: [
      'Csharptek built a workflow that accepts an uploaded image and prompt, sends the request to a video-generation model, tracks progress asynchronously and provides preview and download once the video is ready.'
    ],
    architecture: [
      { title: 'Submit', text: 'Image upload and prompt handling in the web frontend.' },
      { title: 'Generate', text: 'A backend job submits the request to the video-generation model.' },
      { title: 'Track', text: 'Asynchronous status updates keep the user informed while processing runs.' },
      { title: 'Deliver', text: 'Generated assets are stored and offered as preview and download.' }
    ],
    engineering: [
      'Job handling and status UX for long-running generation.',
      'Generated-asset handling and error states.',
      'Clear separation of frontend and backend responsibilities.'
    ],
    integrations: ['AI video-generation model'],
    results: [
      'The project was completed in the engagement window.',
      'Users can submit an image, wait confidently, then preview and download the result.'
    ],
    technology: ['Image upload', 'Prompt engineering', 'AI video-model integration', 'Asynchronous processing', 'Web application']
  },

  'connected-wellness-product': {
    published: true,
    facts: [
      { label: 'Engagement', value: 'Roughly five to six months' },
      { label: 'Delivery', value: 'Member web app and admin panel' },
      { label: 'Hosting', value: 'Docker on Railway' }
    ],
    challenge: [
      'A consumer wellness platform needed to bring accounts, subscription commerce, wearable data, AI analysis and a broader member experience into one coherent product.'
    ],
    built: [
      'Csharptek built a full web member application and admin panel covering wellness analysis, wearable data, subscriptions, community, courses, expert consultations and memorial features.'
    ],
    architecture: [
      { title: 'API', text: 'A .NET 8 API with EF Core 9 on PostgreSQL (Supabase).' },
      { title: 'Frontend', text: 'React with Vite and Tailwind for the member experience and admin panel.' },
      { title: 'Hosting', text: 'Docker containers deployed on Railway.' }
    ],
    engineering: [
      'Connecting wearable data sources to member profiles.',
      'Subscription commerce through Stripe.',
      'AI-assisted wellness analysis.',
      'Video consultations through Daily.co.'
    ],
    integrations: ['Fitbit', 'FitBark', 'Google OAuth', 'Stripe', 'Gemini', 'Daily.co', 'OpenWeatherMap', 'Office 365 SMTP'],
    results: [
      'Main features are working in code and deployed on production domains.'
    ],
    technology: ['.NET 8', 'ASP.NET Core', 'EF Core 9', 'PostgreSQL', 'Supabase', 'React', 'Vite', 'Tailwind', 'Docker', 'Railway']
  },

  'dotnet-azure-modernization': {
    published: true,
    facts: [
      { label: 'Evidence', value: 'Multi-year .NET and Azure engagements' },
      { label: 'Approach', value: 'Incremental modernization' },
      { label: 'Type', value: 'Composite engineering overview' }
    ],
    challenge: [
      'Long-lived .NET applications and Azure estates rarely need a rewrite first. They need the right constraints removed in the right order, with business continuity intact.'
    ],
    built: [
      'Csharptek’s delivery record spans a large .NET Core, Blazor, SQL Server and Entity Framework application, and an Azure environment built around the Cloud Adoption Framework with Entra ID, SSO, MFA and RBAC, networking, Teams and SharePoint integration, Azure SQL, App Service and Docker.',
      'Related work includes AKS, Terraform, CI/CD and Azure architecture.'
    ],
    architecture: [
      { title: 'Application', text: '.NET Core and Blazor applications with SQL Server and Entity Framework.' },
      { title: 'Identity and access', text: 'Entra ID with SSO, MFA and role-based access control.' },
      { title: 'Platform', text: 'Azure SQL, App Service and Docker, with AKS where orchestration is needed.' },
      { title: 'Delivery', text: 'Terraform and CI/CD through Azure DevOps or GitHub Actions.' }
    ],
    engineering: [
      'Modernizing in increments instead of assuming a rewrite.',
      'Landing-zone and identity design before workloads move.',
      'Infrastructure as code and repeatable deployments.'
    ],
    integrations: ['Microsoft Teams', 'SharePoint', 'Entra ID', 'Azure SQL'],
    results: [
      'Multi-year .NET and Azure delivery, including a roughly 2,500-hour .NET engagement.'
    ],
    technology: ['.NET Core', 'C#', 'Blazor', 'SQL Server', 'Entity Framework', 'Azure', 'Entra ID', 'Azure SQL', 'App Service', 'Docker', 'AKS', 'Terraform', 'Azure DevOps', 'GitHub Actions']
  }
};

export function getCaseStudyDetail(slug) {
  return caseStudyDetails[slug];
}
