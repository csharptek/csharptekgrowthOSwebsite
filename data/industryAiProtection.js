// Industry pages for the AI Data Protection line. No healthcare (decision 21 Nov 2026).

export const industryAiProtection = {
  'financial-services': {
    path: '/industries/financial-services',
    name: 'Financial services',
    seoTitle: 'AI Data Protection for Financial Services',
    seoDescription: 'Keep customer and financial data out of ChatGPT and other AI tools. AI data protection and governance for lenders, brokers, wealth managers and fintechs.',
    eyebrow: 'Financial services',
    h1: 'Keep customer and financial data out of public AI tools, without banning AI at your firm.',
    supporting: 'Lenders, brokers, wealth and asset managers, insurance intermediaries and fintechs handle exactly the data that should never reach a public chatbot. We find where AI is used and put controls in place with Microsoft 365.',
    who: ['Lenders and finance companies', 'Stock brokers and wealth managers', 'Asset and portfolio managers', 'Insurance brokers and intermediaries', 'Fintech and payments companies', 'Accounting and advisory firms'],
    risks: [
      ['Customer records in prompts', 'Loan files, KYC documents and account statements pasted into AI tools to summarise or reformat.'],
      ['Spreadsheets uploaded', 'Portfolio, collections and pricing spreadsheets uploaded to public AI for quick analysis.'],
      ['Personal accounts', 'Relationship managers and analysts using AI on personal accounts outside any company agreement.'],
      ['Regulator and audit questions', 'Cyber security frameworks and audits now ask how data leaving through new channels is controlled and logged.'],
      ['Client confidentiality', 'Board packs, deal notes and client communications shared with AI note-takers and assistants.'],
      ['No evidence trail', 'When asked what reached AI tools, most firms have no log to show.']
    ],
    controls: [
      ['Detect financial and personal data', 'Purview sensitive information types for account numbers, identity documents, card data and customer records.'],
      ['Warn or block in AI tools', 'DLP policies that warn or block when that data is pasted or uploaded into AI sites on managed devices.'],
      ['Work accounts and approved AI', 'Approved AI tools with work sign-in; personal AI accounts and risky apps blocked.'],
      ['Logs for audits', 'Audit logs and monthly reports showing AI usage and incidents, ready for auditors and the board.']
    ],
    faqs: [
      ['Can staff at a financial firm still use AI?', 'Yes. Most firms allow approved AI tools and block only sensitive data, personal accounts and high-risk apps. A private AI workspace or Microsoft 365 Copilot gives staff a safe option.'],
      ['Does this help with regulator cyber security requirements?', 'It supports them by controlling and logging a new data channel. We document the controls; your compliance team and auditors assess them against the rules that apply to you.'],
      ['How do you detect customer data in AI prompts?', 'With Microsoft Purview sensitive information types and custom patterns for your own account and customer identifiers, applied to text and files sent to AI sites.'],
      ['Where should a financial firm start?', 'With the AI Data Risk Check: one to two weeks to see which AI tools are used and what data reaches them.']
    ]
  },

  'software-companies': {
    path: '/industries/software-companies',
    name: 'Software & IT services',
    seoTitle: 'AI Data Protection for Software and IT Companies',
    seoDescription: 'Keep client code, secrets and NDA data out of AI tools, with evidence for SOC 2, ISO 27001 and client questionnaires. For software and IT services firms.',
    eyebrow: 'Software & IT services',
    h1: 'Keep client code and NDA data out of public AI tools, and show your clients you control AI.',
    supporting: 'Software, SaaS and IT services teams use AI more than almost anyone. Your clients know it, and their security questionnaires now ask how AI is controlled. We put real controls and evidence in place with Microsoft 365.',
    who: ['Software development and IT services firms', 'SaaS product companies', 'Offshore and nearshore delivery teams', 'Managed service providers', 'Data and analytics consultancies', 'BPO and support operations'],
    risks: [
      ['Client source code', 'Code from client projects pasted into AI assistants on personal accounts, often against the client contract.'],
      ['Secrets and credentials', 'API keys, connection strings and passwords pasted along with code to debug it.'],
      ['NDA documents', 'Specifications, architecture documents and client data uploaded for summaries.'],
      ['Client questionnaires', 'Enterprise clients ask which AI tools touch their data; vague answers lose deals.'],
      ['SOC 2 and ISO 27001', 'Auditors expect AI tools to be covered by access control, supplier management and data protection.'],
      ['Many tools, many teams', 'Each team picks its own AI coding and productivity tools with no central list.']
    ],
    controls: [
      ['Approved AI coding tools', 'An approved list of AI assistants used with work accounts, with personal accounts blocked on managed devices.'],
      ['Detect code and secrets', 'Purview patterns for credentials, keys and client identifiers in prompts and uploads to AI sites.'],
      ['Client-ready evidence', 'An AI register, policy and monthly report you can attach to security questionnaires.'],
      ['Agent governance', 'Owners, identities and permissions for the AI agents your teams build on client data.']
    ],
    faqs: [
      ['Can developers keep using AI coding assistants?', 'Yes. We help you approve the tools you trust, require work accounts and stop code and secrets reaching unapproved tools.'],
      ['Does this help with SOC 2 or ISO 27001?', 'It gives you documented AI controls and evidence that map to access control, supplier and data protection requirements. Your auditor performs the assessment.'],
      ['How do we answer client questions about AI?', 'With a short AI policy, a register of approved tools and a summary of controls and monitoring. We prepare these as part of the program.'],
      ['Where should we start?', 'With the AI Data Risk Check, to see which AI tools teams actually use and what data reaches them.']
    ]
  },

  manufacturing: {
    path: '/industries/manufacturing',
    name: 'Manufacturing',
    seoTitle: 'AI Data Protection for Manufacturing and Pharma',
    seoDescription: 'Keep designs, formulas, pricing and supplier data out of ChatGPT and other AI tools. AI data protection for manufacturers, pharma and exporters.',
    eyebrow: 'Manufacturing & pharma',
    h1: 'Keep designs, formulas and pricing out of public AI tools.',
    supporting: 'Manufacturers, pharma companies and exporters run on information competitors would pay for. As engineering, sales and office teams adopt AI, we make sure that information does not leave with it.',
    who: ['Discrete and process manufacturers', 'Pharma and chemicals companies', 'Engineering and fabrication firms', 'Exporters and trading companies', 'Steel, metals and materials producers', 'Logistics and supply chain operators'],
    risks: [
      ['Designs and drawings', 'Technical drawings and specifications uploaded to AI tools for review or translation.'],
      ['Formulas and processes', 'Product formulas, batch records and process notes pasted into prompts.'],
      ['Pricing and margins', 'Quotes, costing sheets and price lists shared with AI to draft proposals.'],
      ['Supplier and customer data', 'Contracts and contact lists summarised in public AI tools.'],
      ['Mixed devices', 'Plant, office and field devices with uneven management, making controls patchy.'],
      ['Customer audits', 'Large customers and partners ask how their drawings and data are protected.']
    ],
    controls: [
      ['Label what matters', 'Sensitivity labels for drawings, formulas, costing and contracts so policies can recognise them.'],
      ['Warn or block in AI tools', 'DLP policies for AI sites on managed devices, starting with engineering and sales teams.'],
      ['Device baseline', 'Intune management and Defender on office and engineering devices so controls apply consistently.'],
      ['Approved AI', 'A safe AI tool for translation, drafting and analysis so teams do not fall back on public chatbots.']
    ],
    faqs: [
      ['Our engineers use AI for translation and drafting. Is that a problem?', 'Only when sensitive drawings, formulas or pricing go into public tools. We let approved use continue and stop the sensitive data.'],
      ['Do you cover plant and shop-floor devices?', 'We focus on office, engineering and sales devices that handle sensitive files, and advise on shared and plant devices case by case.'],
      ['Can you protect CAD files and drawings?', 'Yes, with sensitivity labels and file-type based DLP rules for uploads to AI sites and other risky destinations.'],
      ['Where should we start?', 'With the AI Data Risk Check, to see which AI tools are used and which teams handle the most sensitive data.']
    ]
  }
};
