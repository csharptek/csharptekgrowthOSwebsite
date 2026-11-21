// AI Data Protection & Governance line (21 Nov 2026).
// Three solution pages merged into site.js / solutionContent.js / solutionExtra.js.
// Rules: no prices, no country targeting, no certification claims, preview features marked.

export const aiProtectionSolutions = [
  {
    slug: 'ai-data-loss-prevention',
    h1: 'Stop company data leaking into ChatGPT and other AI tools, using the Microsoft 365 security you already pay for.',
    supporting: 'Staff paste customer records, contracts, code and financial files into public AI tools every day. We find where it happens, then block or warn on sensitive data in AI prompts and uploads with Microsoft Purview, Defender and Intune, without taking AI away from your people.',
    cta: 'Book an AI Data Risk Check',
    ctaHref: '/ai-data-risk-check',
    number: '12',
    eyebrow: 'AI data loss prevention',
    title: 'AI Data Leak Prevention',
    short: 'Block sensitive data from being pasted or uploaded into ChatGPT and other AI tools.',
    description: 'AI data loss prevention for Microsoft 365: stop employees pasting sensitive data into ChatGPT, Gemini and other AI tools with Purview DLP, Defender for Cloud Apps and Intune.',
    buyer: 'For IT heads, security leads and business owners at companies of 20 to 500 staff on Microsoft 365 whose people already use AI at work.',
    capabilities: ['AI Data Risk Check', 'Purview DLP for AI prompts and uploads', 'Browser and endpoint controls for AI sites', 'Block personal AI accounts, allow approved AI', 'Sensitivity labels for the data that matters', 'Monthly AI usage and incident report'],
    proof: ['Microsoft 365 and Entra ID administration', 'Intune and Defender deployment', 'Purview data protection'],
    icon: 'grid',
    unlisted: true
  },
  {
    slug: 'shadow-ai-discovery',
    h1: 'Find the shadow AI in your company: which AI tools staff use, with which accounts, and what data goes into them.',
    supporting: 'Most companies have no list of the AI apps their people use. We use Microsoft Defender for Cloud Apps and Purview to discover AI tools across your devices, show which are used with personal accounts and what sensitive data reaches them, then help you decide what to allow, monitor or block.',
    cta: 'Book an AI Data Risk Check',
    ctaHref: '/ai-data-risk-check',
    number: '13',
    eyebrow: 'Shadow AI discovery and monitoring',
    title: 'Shadow AI Discovery & AI Usage Monitoring',
    short: 'See every AI tool your staff use and what data they share with it.',
    description: 'Shadow AI detection and AI usage monitoring with Microsoft Defender for Cloud Apps and Purview: discover AI apps, personal accounts and sensitive data shared with AI tools.',
    buyer: 'For IT and security leads who need to know how AI is really used before they write a policy or buy a tool.',
    capabilities: ['AI app discovery across managed devices', 'Personal vs work account usage', 'Sensitive data shared with AI tools', 'Sanctioned and unsanctioned AI app lists', 'Ongoing AI usage monitoring and alerts'],
    proof: ['Defender for Cloud Apps', 'Purview DSPM for AI', 'Microsoft 365 and Entra ID administration'],
    icon: 'spark',
    unlisted: true
  },
  {
    slug: 'ai-governance',
    h1: 'AI governance for growing companies: a clear AI policy, a list of every AI tool and agent, and controls that actually enforce it.',
    supporting: 'AI governance does not have to be a 60-page framework. We give you an AI acceptable-use policy, an AI app and agent register, an approval flow for new tools, staff guidance and the Microsoft controls that back it up, including governance for Copilot and AI agents.',
    cta: 'Discuss AI governance',
    number: '14',
    eyebrow: 'AI governance',
    title: 'AI Governance Program',
    short: 'AI policy, AI tool and agent register, approvals and the controls that enforce them.',
    description: 'Practical AI governance for mid-size companies: AI acceptable-use policy, AI app and agent register, approval flow, Copilot and agent governance, and Microsoft 365 controls.',
    buyer: 'For leadership teams, IT heads and compliance owners who need AI used safely across the business without slowing people down.',
    capabilities: ['AI acceptable-use policy', 'AI app and agent register with owners', 'Approval flow for new AI tools', 'Copilot and AI agent governance', 'Staff AI guidance and training', 'Mapping to ISO 27001, ISO/IEC 42001 and data protection laws (readiness, not certification)'],
    proof: ['Microsoft 365 and Entra ID administration', 'Copilot Studio and Azure AI agents', 'Purview data protection'],
    icon: 'spark',
    unlisted: true
  }
];

export const aiProtectionContent = {
  'ai-data-loss-prevention': {
    fit: 'AI tools are useful, so people use them with real work: a customer list to clean up, a contract to summarise, code to fix, a board pack to shorten. Much of it happens in personal accounts that your IT team cannot see. Blocking every AI site pushes people to their phones. The workable answer is to detect sensitive data on its way into AI tools, warn or block in the moment, and give staff an approved AI they can use freely.',
    workstreams: [
      ['AI Data Risk Check', 'Discover which AI tools are used, with which accounts, and what sensitive data reaches them, then rank the top fixes in a short report.'],
      ['Leak protection setup', 'Purview DLP for AI prompts and uploads, browser and endpoint controls, sensitivity labels and blocking of personal AI accounts, rolled out in stages.'],
      ['Monitor and improve', 'Monthly review of AI incidents, new AI apps and policy tuning, with a one-page report for management.']
    ],
    faqs: [['See the FAQ below', 'See the detailed answers on this page.']]
  },
  'shadow-ai-discovery': {
    fit: 'Shadow AI is any AI tool used for work without IT knowing: a free chatbot, a browser extension that summarises pages, a meeting note-taker, an AI feature switched on inside another app. You cannot set a sensible AI policy until you know what is in use. Discovery gives you the facts in days, using Microsoft tools many companies already license.',
    workstreams: [
      ['Discover', 'Turn on AI app discovery with Defender for Cloud Apps and Purview, and collect one to two weeks of real usage across managed devices.'],
      ['Assess', 'Rank AI apps by risk, usage and data shared; separate work from personal accounts; flag the tools handling sensitive data.'],
      ['Decide and monitor', 'Agree which tools to allow, monitor or block, apply the controls, and keep watching for new AI apps every month.']
    ],
    faqs: [['See the FAQ below', 'See the detailed answers on this page.']]
  },
  'ai-governance': {
    fit: 'Most growing companies have AI everywhere and governance nowhere: no written rule, no list of tools, no owner for the AI agents people build. Customers, auditors and insurers have started asking how AI is controlled. A practical governance program answers them with a short policy, a register, an approval flow and technical controls that match what the policy says.',
    workstreams: [
      ['Policy and register', 'Write an AI acceptable-use policy that fits how you work, and build a register of AI tools and agents with owners, data and purpose.'],
      ['Controls that enforce it', 'Back the policy with Microsoft controls: DLP for AI, app approval, Entra ID access, agent identities and audit logs.'],
      ['Run it', 'An approval flow for new AI tools, staff guidance, quarterly reviews and evidence your auditors and customers can see.']
    ],
    faqs: [['See the FAQ below', 'See the detailed answers on this page.']]
  }
};

export const aiProtectionExtra = {
  'ai-data-loss-prevention': {
    seoTitle: 'AI Data Loss Prevention for ChatGPT and AI Tools',
    seoDescription: 'Stop employees pasting sensitive data into ChatGPT and other AI tools. AI DLP with Microsoft Purview, Defender and Intune: detect, warn or block.',
    sections: [
      {
        eyebrow: 'The problem',
        title: 'Your data is already going into AI tools.',
        intro: 'Independent security research in 2025 and 2026 shows the same pattern: a large share of AI use at work runs through personal accounts, and the number of incidents where sensitive data is sent to AI apps keeps rising. Most of it is not malicious. It is people trying to get work done faster.',
        items: [
          ['Personal AI accounts', 'Staff sign in to ChatGPT, Gemini and others with personal accounts, so nothing they share is visible to IT or covered by a company agreement.'],
          ['Copy and paste', 'Customer lists, invoices, contracts, salaries, source code and passwords are pasted into prompts to be cleaned up, summarised or fixed.'],
          ['File uploads', 'Whole spreadsheets and PDFs are uploaded for analysis, often with more data than the task needed.'],
          ['AI inside other tools', 'Browser extensions, meeting note-takers and AI features in everyday apps send data to services nobody approved.'],
          ['No record', 'If a customer, auditor or regulator asks what went into AI tools last quarter, most companies cannot answer.'],
          ['Bans do not work', 'Blocking every AI site moves usage to phones and home laptops, where there is even less control.']
        ]
      },
      {
        eyebrow: 'How we stop it',
        title: 'Detect, warn or block in the moment. Keep AI useful.',
        intro: 'We use Microsoft Purview, Defender for Cloud Apps, Intune and Entra ID, so there is no new agent to roll out where your licences already cover it. Changes go to a pilot group first.',
        items: [
          ['Know your sensitive data', 'Define what must not leave: customer and personal data, financial records, contracts, source code, credentials. Add sensitivity labels where they help.'],
          ['DLP for AI prompts and uploads', 'Purview data loss prevention detects sensitive data typed, pasted or uploaded into AI sites, then audits, warns the user or blocks it, by policy.'],
          ['Browser and device controls', 'Endpoint DLP and supported browser controls on managed Windows and Mac devices, with the Purview browser extension where it is needed.'],
          ['Approved vs unapproved AI', 'Mark AI apps as sanctioned or unsanctioned in Defender for Cloud Apps; block risky ones and steer people to the tools you approve.'],
          ['Work accounts only', 'Conditional Access and tenant restrictions so approved AI tools are used with work accounts, not personal ones, where the tool supports it.'],
          ['A safe alternative', 'Microsoft 365 Copilot or a private AI workspace on Azure OpenAI, so people keep the benefit of AI without the leak.']
        ],
        link: ['/solutions/private-ai-workspace', 'See the private AI workspace for staff']
      },
      {
        eyebrow: 'Licences, honestly',
        title: 'What your Microsoft plan can and cannot do.',
        intro: 'AI data protection depends on licensing. We check your plan on the first call and tell you plainly what is possible before any work starts.',
        items: [
          ['Business Premium', 'Device management, Defender for Business, Conditional Access and core DLP. AI site blocking is possible; full prompt-level DLP usually needs a Purview add-on.'],
          ['E3', 'Strong identity and device controls; prompt-level AI DLP generally needs E5 Compliance or the Purview suite add-on.'],
          ['E5 or E5 Compliance', 'Endpoint DLP, Defender for Cloud Apps and Purview data security for AI are included.'],
          ['Third-party AI sites', 'Purview protection for non-Microsoft AI sites such as ChatGPT and Gemini can require pay-as-you-go billing to be enabled. We set it up with a budget.']
        ]
      },
      {
        eyebrow: 'What you get',
        title: 'Four steps, each one useful on its own.',
        intro: 'Start with the check. Most companies see their first real numbers within two weeks.',
        items: [
          ['1. AI Data Risk Check', 'One to two weeks: AI tools in use, accounts, sensitive data shared, Secure Score gaps and the top ten fixes.'],
          ['2. Leak protection setup', 'Two to four weeks: DLP for AI, browser and device controls, labels and account controls, rolled out in stages.'],
          ['3. Safe AI for staff', 'Copilot readiness or a private AI workspace, so blocking the risky tools does not mean losing AI.'],
          ['4. Monthly monitoring', 'New AI apps, incidents, risky users and policy tuning, in a one-page report.']
        ],
        link: ['/ai-data-risk-check', 'See what the AI Data Risk Check covers']
      }
    ],
    checklist: {
      title: 'Is data leaking into AI tools at your company?',
      intro: 'If you cannot answer yes to most of these, it probably is.',
      items: [
        'You know which AI tools your staff use each week',
        'You can tell work AI accounts from personal ones',
        'There is a written rule on what data may go into AI tools',
        'Sensitive data is labelled or detectable by policy',
        'Pasting customer or financial data into an unapproved AI tool is warned or blocked',
        'Staff have an approved AI tool they are happy to use',
        'You can report what was shared with AI tools last month'
      ]
    },
    faqs: [
      ['What is AI data loss prevention?', 'AI data loss prevention (AI DLP) detects sensitive information on its way into AI tools, such as text pasted into a ChatGPT prompt or a file uploaded to an AI assistant, and audits, warns or blocks it according to your policy.'],
      ['Can you stop employees pasting sensitive data into ChatGPT?', 'Yes, on managed devices with the right Microsoft licence. Purview DLP can detect sensitive data in prompts and uploads to supported AI sites and warn the user or block the action, while normal AI use carries on.'],
      ['Do we have to block ChatGPT completely?', 'No. Most companies allow AI and block only sensitive data, personal accounts or high-risk apps. Blanket bans tend to push usage to personal devices.'],
      ['Which Microsoft 365 licence do we need?', 'It depends on the depth of control. Business Premium covers device management and site blocking; prompt-level DLP for AI usually needs E5, E5 Compliance or a Purview add-on. We confirm what your plan can do before any work starts.'],
      ['Does this work on personal phones and home laptops?', 'Controls apply to managed devices and work accounts. For personal devices we restrict access to company data through protected apps, so it cannot be copied into personal AI tools.'],
      ['Will staff see a warning or just be blocked?', 'You choose per policy: audit only, a warning the user can override with a reason, or a hard block. Most rollouts start with audit and warnings.'],
      ['How long does setup take?', 'The AI Data Risk Check takes one to two weeks. The protection setup usually takes two to four weeks with a staged rollout.'],
      ['Can you work with our existing IT provider or MSP?', 'Yes. We can deliver alongside your IT team or MSP, or white-label the work for an MSP.']
    ]
  },

  'shadow-ai-discovery': {
    seoTitle: 'Shadow AI Detection and AI Usage Monitoring',
    seoDescription: 'Find the AI tools employees use, personal vs work accounts and sensitive data shared, with Microsoft Defender for Cloud Apps and Purview.',
    sections: [
      {
        eyebrow: 'What shadow AI looks like',
        title: 'It is not one chatbot. It is a long list of AI tools nobody approved.',
        intro: 'When we look at real usage, the list is usually longer than expected and spread across departments.',
        items: [
          ['Public chatbots', 'ChatGPT, Gemini, Claude, DeepSeek, Perplexity and others, often on free personal accounts.'],
          ['Browser extensions', 'AI writing, summarising and translation extensions that can read the pages staff open.'],
          ['Meeting note-takers', 'Bots that join calls, record them and store transcripts outside your tenant.'],
          ['AI inside SaaS apps', 'AI features switched on in CRM, design, HR and file-sharing tools without a review.'],
          ['Code assistants', 'AI coding tools used on company source code, sometimes with personal accounts.'],
          ['Home-made agents', 'Copilot Studio and other agents built by staff, connected to company data with no owner on record.']
        ]
      },
      {
        eyebrow: 'How discovery works',
        title: 'Real usage data in one to two weeks.',
        intro: 'We use Microsoft tools many companies already license. Nothing is installed that slows people down, and no one’s conversations are read as part of discovery.',
        items: [
          ['Turn on discovery', 'Defender for Cloud Apps discovery from Defender for Endpoint, plus Purview data security posture for AI where licensed.'],
          ['Collect usage', 'One to two weeks of real activity across managed devices: which AI apps, how often, by which teams.'],
          ['Flag the risk', 'Each AI app is scored for security and compliance; sensitive data sent to AI tools is flagged by type, not shown in full.'],
          ['Report', 'A short report: AI apps by risk, personal vs work accounts, sensitive data trends and the decisions to make.']
        ]
      },
      {
        eyebrow: 'After discovery',
        title: 'Allow, monitor or block, then keep watching.',
        intro: 'Discovery is the start. The value comes from acting on it and keeping the list current as new AI tools appear every month.',
        items: [
          ['Sanctioned list', 'Approved AI tools, with work-account sign-in where the tool supports it.'],
          ['Monitored list', 'Tools allowed for now, with alerts on sensitive data and heavy use.'],
          ['Blocked list', 'High-risk or unnecessary AI apps blocked on managed devices with a clear message to users.'],
          ['Monthly watch', 'New AI apps, usage changes and incidents reviewed every month.']
        ],
        link: ['/resources/microsoft-365-ai-security-checklist', 'Self-check first: the free Microsoft 365 and AI security checklist']
      }
    ],
    checklist: {
      title: 'Signs you have a shadow AI problem',
      intro: 'Several of these usually means AI use has moved ahead of your controls.',
      items: [
        'Nobody can list the AI tools used across the company',
        'AI tools are used on free or personal accounts',
        'Teams have bought AI subscriptions on expense cards',
        'Meeting bots appear on calls with customers',
        'Staff have built AI agents connected to company data',
        'There is no written AI policy, or nobody follows it'
      ]
    },
    faqs: [
      ['What is shadow AI?', 'Shadow AI is any AI tool used for work without the knowledge or approval of IT, such as a free chatbot on a personal account, an AI browser extension or an AI feature switched on inside another app.'],
      ['How do you detect shadow AI?', 'With Microsoft Defender for Cloud Apps discovery, fed by Defender for Endpoint on managed devices, and Purview data security posture for AI. Together they show which AI apps are used, by how many people and what kinds of sensitive data reach them.'],
      ['Do you read employees’ AI conversations?', 'Not as part of discovery. Reports show apps, usage and sensitive data types. Any deeper review follows your own policy and local law.'],
      ['How long does it take?', 'Usually one to two weeks of data collection, then a report and a walkthrough call.'],
      ['What licence do we need?', 'Defender for Endpoint P2 or Microsoft 365 E5 gives the most complete discovery. With other plans we use what is available and tell you what is missing.'],
      ['What happens after discovery?', 'You decide which AI tools to allow, monitor or block. We apply the controls and can monitor new AI apps monthly.']
    ]
  },

  'ai-governance': {
    seoTitle: 'AI Governance Program: Policy, Register, Agents',
    seoDescription: 'Practical AI governance: AI acceptable use policy, AI tool and agent register, approval flow, and Microsoft 365 controls that enforce them.',
    sections: [
      {
        eyebrow: 'Why now',
        title: 'Customers, auditors and insurers are asking how you control AI.',
        intro: 'AI questions now appear in security questionnaires, vendor reviews and audit requests. A short, real governance program answers them, and protects the business while people keep using AI.',
        items: [
          ['Customer questionnaires', 'Enterprise customers ask which AI tools touch their data and how that is controlled.'],
          ['Audits', 'ISO 27001 and SOC 2 auditors ask how AI tools fit into access control, data protection and supplier management.'],
          ['Data protection laws', 'Privacy laws such as GDPR and the DPDP Act apply to personal data whether it goes into a spreadsheet or an AI prompt.'],
          ['AI agents', 'Copilot Studio and other agents act on company data. Each one needs an owner, an identity and limits.'],
          ['Cost', 'AI subscriptions and usage spread across teams with no view of what is spent or why.'],
          ['Reputation', 'One leaked customer file in a public AI tool is enough to lose a contract.']
        ]
      },
      {
        eyebrow: 'What the program includes',
        title: 'Short documents, real controls, a simple routine.',
        intro: 'We keep it proportionate to your size. The documents are short enough that people read them, and every rule has a control behind it.',
        items: [
          ['AI acceptable-use policy', 'Which AI tools are approved, what data may go into them, what needs approval and who to ask.'],
          ['AI register', 'Every AI tool and agent with owner, purpose, data, users, account type and review date.'],
          ['Approval flow', 'A simple request and review process for new AI tools and agents, with a risk checklist.'],
          ['Agent governance', 'Agent identities and permissions with Entra ID, Copilot Studio controls and, where available, Microsoft Agent 365 (some features in preview).'],
          ['Technical enforcement', 'DLP for AI, app approval in Defender for Cloud Apps, admin consent for AI add-ons and audit logs.'],
          ['Staff guidance', 'A short training session and a one-page guide on using AI safely at work.']
        ],
        link: ['/resources/ai-acceptable-use-policy-template', 'Get the free AI acceptable-use policy template']
      },
      {
        eyebrow: 'Standards',
        title: 'Aligned with the frameworks your customers know.',
        intro: 'We do not certify you. We map your AI controls to the frameworks you are working towards and give your auditor clear evidence.',
        items: [
          ['ISO/IEC 42001', 'The AI management system standard: policy, risk assessment, AI inventory and lifecycle controls, used as a readiness guide.'],
          ['ISO 27001 and SOC 2', 'AI tools and agents brought into access control, supplier management, logging and data protection controls.'],
          ['NIST AI Risk Management Framework', 'Govern, map, measure and manage, used as a simple structure for AI risk decisions.'],
          ['Data protection laws', 'Personal data in AI tools handled in line with GDPR, the DPDP Act and similar rules.']
        ]
      }
    ],
    checklist: {
      title: 'AI governance quick check',
      intro: 'A practical starting point for a company of 20 to 500 people.',
      items: [
        'A written AI acceptable-use policy that staff have seen',
        'A list of approved AI tools, with work-account sign-in',
        'A register of AI tools and agents with named owners',
        'A way to request and approve new AI tools',
        'Technical controls that stop sensitive data reaching unapproved AI',
        'Admin approval required for AI add-ons and apps',
        'AI covered in security questionnaires and audit evidence'
      ]
    },
    faqs: [
      ['What is AI governance?', 'AI governance is the set of policies, roles and controls that decide which AI tools and agents a company uses, with what data, under whose ownership, and how that is checked.'],
      ['Do small and mid-size companies need AI governance?', 'Yes, in proportion. A short policy, an AI register, an approval flow and a few technical controls cover most of the risk, and answer customer and auditor questions.'],
      ['What should an AI acceptable-use policy include?', 'Approved tools, data that must never go into AI, rules for personal accounts, how to request new tools, human review of AI output, and who owns the policy. Our free template covers each of these.'],
      ['How do you govern AI agents?', 'Each agent gets an owner, a purpose, a list of data sources and actions, its own identity with least-privilege access, and logging. On Microsoft 365 we use Entra ID, Copilot Studio controls and, where available, Agent 365.'],
      ['Can you get us ISO 42001 certified?', 'We do not issue certifications. We help you put the AI policies and controls in place and prepare evidence; an accredited certification body performs the audit.'],
      ['How long does it take?', 'A governance program usually takes three to six weeks, depending on how many AI tools and agents are already in use.']
    ]
  }
};
