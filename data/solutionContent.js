export const solutionContent = {
  'ai-production-engineering': {
    fit: 'A prototype becomes production software only when it can work with approved data, fit the existing application and be operated with predictable behavior. The first step is to define the users, decisions and tasks the AI should support, then identify where model output needs grounding, evaluation or human review.',
    workstreams: [
      ['Knowledge and retrieval', 'Connect approved information sources to retrieval workflows, preserve context for answers and account for permissions and data changes.'],
      ['Agents and application workflows', 'Bound agent responsibilities, connect the tools they need and define when a task should pause for a person or pass work to another system.'],
      ['Evaluation and operations', 'Establish how quality, latency, access and failure behavior will be reviewed as the system changes and moves into day-to-day use.']
    ],
    faqs: [
      ['What needs to be ready before an AI system goes into production?', 'The intended users and tasks, approved data sources, application integrations, security requirements, evaluation approach and operational owner should be understood. Discovery can identify gaps before build work is committed.'],
      ['Can you work with an existing prototype or RAG system?', 'Yes. The work can start by examining the current architecture, retrieval quality, integrations and operating needs, then agreeing on the next engineering steps.'],
      ['How do you keep people involved in AI workflows?', 'Review and escalation points are designed into the workflow wherever an output needs human judgment, approval or exception handling.']
    ]
  },
  'ai-product-engineering': {
    fit: 'AI product work starts with a customer or user need and the product experience around it. The feature has to fit the application’s architecture, data access, permissions and support model; a model call alone does not define a useful product capability.',
    workstreams: [
      ['Product discovery and scope', 'Clarify the user problem, where the capability belongs in the customer journey and how people will review or act on its output.'],
      ['Application and data integration', 'Connect product interfaces to the APIs, identity, data and services needed to make the feature work in the existing environment.'],
      ['Incremental delivery', 'Shape the work into product increments, including error states, user controls and a path for evaluating the capability after release.']
    ],
    faqs: [
      ['Do we need to replace our current product to add AI?', 'No. The initiative can focus on extending an existing product and architecture. The right approach depends on where the feature belongs and how it should use current data and services.'],
      ['Which AI capabilities can be part of a product?', 'Examples include assistants, intelligent search, recommendations, document workflows, voice and multimodal experiences. The suitable capability depends on the user need and product context.'],
      ['How should we decide what to build first?', 'Start with a specific user problem, the data and integrations it depends on, and the review or control the user needs. That gives the team a practical scope to evaluate.']
    ]
  },
  'intelligent-workflow-automation': {
    fit: 'Workflow automation is most useful when it addresses the handoffs that slow a real process down. Map how work enters, who handles each step, which systems hold the record and how exceptions are resolved before deciding what to automate.',
    workstreams: [
      ['Workflow discovery', 'Document the current process, including intake channels, decision points, ownership, repeated data entry and exception paths.'],
      ['Connected intake and routing', 'Connect forms, calls, email or application events to structured records, routing rules and the systems teams already use.'],
      ['Human review and visibility', 'Keep the right approval and escalation points, and make the state of work visible when automation hands a task to a person.']
    ],
    faqs: [
      ['How do we choose a workflow to automate?', 'Look for a process with clear users, repeatable steps and costly handoffs. Discovery helps expose the data, exceptions and system dependencies before selecting a first workflow.'],
      ['Does automation remove people from the process?', 'It does not have to. Workflows can route routine steps automatically while keeping people responsible for judgment, approvals and exceptions.'],
      ['Can automation connect our current applications?', 'Integration can involve APIs, webhooks, queues and existing business applications. The available options depend on the systems and access in your environment.']
    ]
  },
  'agency-development-partner': {
    fit: 'Agencies win software projects they do not always have the capacity to deliver. A white-label partner adds senior engineers on demand, works to your process and keeps your client relationship yours. The model works when expectations, handoffs and ownership are clear from the first call.',
    workstreams: [
      ['Scoping with your team', 'Join pre-sales or discovery to estimate effort and risk, so what you quote matches what can be built.'],
      ['Delivery behind your brand', 'Work in your repositories, tools and communication channels, with your project manager as the client contact.'],
      ['Handover and support', 'Deliver documented code, deployment steps and runbooks so your agency or the client can own the result.']
    ],
    faqs: [['See the FAQ below','See the detailed answers on this page.']]
  },
  'ai-agent-development': {
    fit: 'An agent is useful when it can take a defined action in a product or workflow and be trusted to do so. That depends on the tools it can use, the limits on what it can do, where a person approves, and how its behavior is measured. The model is one part of that system.',
    workstreams: [
      ['Agent and tool design', 'Define the task, the tools and APIs the agent may call, the step limits and what happens on failure.'],
      ['Approvals and oversight', 'Place approval points where an action is costly or irreversible, and log what the agent did and why.'],
      ['Evaluation and operations', 'Test agent behavior on real tasks, trace each run and monitor cost, latency and error rates after release.']
    ],
    faqs: [['See the FAQ below','See the detailed answers on this page.']]
  },
  'application-cloud-modernization': {
    fit: 'Modernization should respond to a concrete constraint in the application or cloud environment: for example, a delivery bottleneck, an integration need or an architecture that makes change difficult. Understanding dependencies and operating requirements helps sequence work without assuming a full rewrite.',
    workstreams: [
      ['Application and API evolution', 'Review application boundaries, data access and integration points, then identify incremental changes that support the next business need.'],
      ['Cloud architecture and identity', 'Consider Azure services, networking, identity and data in the context of the workload and the teams who operate it.'],
      ['Delivery and operations', 'Improve deployment practices, infrastructure management and monitoring as part of the application changes they support.']
    ],
    faqs: [
      ['Does modernization mean rewriting the application?', 'Not by default. Work can target the highest-value constraints in the current application, architecture, APIs or delivery process.'],
      ['Can we modernize while keeping existing systems in use?', 'The delivery path should account for business workflows and system dependencies. Discovery helps identify those dependencies and sequence improvements around operational needs.'],
      ['Can cloud and application work be handled together?', 'Yes. Application architecture, Azure services, identity, integrations and deployment practices can be considered together when they affect the same initiative.']
    ]
  },
  'healthcare-ai-automation': {
    fit: 'Healthcare technology has to fit the clinical and administrative workflow it supports. Documentation, intake, referrals, workforce coordination and patient communication each involve different users, systems and review requirements, so the workflow and privacy context should shape the solution from the start.',
    workstreams: [
      ['Documentation and intake', 'Structure information from conversations, forms or documents into workflows where qualified staff can review and act on it.'],
      ['Referral and workforce coordination', 'Connect intake, routing, verification and follow-up steps across the teams and applications involved.'],
      ['Product and system integration', 'Extend healthcare products and connect scheduling, telephony, identity and document workflows to existing systems.']
    ],
    faqs: [
      ['Do you build clinical decision-making AI?', 'The focus is on documentation, intake, operational and workforce workflows where AI can assist staff. Work involving clinical judgment needs careful scope, human review and the client’s clinical governance.'],
      ['How should patient data and privacy be addressed?', 'Access control, logging and data handling should be designed with the client’s compliance and security teams and the requirements of the specific workflow.'],
      ['Can you integrate with existing healthcare systems?', 'Integration needs vary, but can include EHR and scheduling systems, telephony, messaging, identity and document workflows. The systems involved are assessed during discovery.']
    ]
  },
  'microsoft-marketplace-engineering': {
    fit: 'A Marketplace offer connects Microsoft commerce events to the SaaS product’s identity, provisioning and subscription behavior. Before implementation, clarify the offer model, current product architecture and the lifecycle events the service must handle.',
    workstreams: [
      ['Fulfillment and provisioning', 'Implement the connection between a Marketplace purchase and the product’s customer or tenant setup, including lifecycle changes.'],
      ['Identity and entitlement', 'Connect sign-in and subscription entitlements so a customer’s Marketplace relationship maps to product access.'],
      ['Metering and certification', 'Plan usage reporting when required by the offer and address the technical configuration and validation steps for certification.']
    ],
    faqs: [
      ['Do we need to rebuild our SaaS product for Marketplace?', 'Usually the Marketplace work adds fulfillment and metering around an existing product. The implementation depends on the current architecture and offer requirements.'],
      ['What Marketplace integrations may be needed?', 'Depending on the offer, work can include fulfillment APIs, subscription lifecycle events, metering, identity, entitlements and Partner Center configuration.'],
      ['Can you help with certification?', 'Technical preparation can include configuration and addressing findings from validation. Scope depends on the offer and the product’s current implementation.']
    ]
  }
};
