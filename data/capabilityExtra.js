export const capabilityExtra = {
  azure: {
    seoTitle: 'Azure AI Consulting and Engineering',
    seoDescription: 'Azure AI consulting from Csharptek: Azure OpenAI, AI Foundry, AI Search, Entra ID, App Service, Functions and AKS, engineered into your applications.',
    h1: 'Azure AI consulting and engineering',
    sections: [
      {
        eyebrow: 'Azure AI services',
        title: 'The Azure services we put to work.',
        intro: 'We design and build on Azure with a bias toward the services that carry production AI and line-of-business applications. The mix depends on your workload, data and security requirements.',
        items: [
          ['Azure OpenAI and AI Foundry', 'Model deployment, prompt and evaluation workflows, content filtering and quota planning for chat, extraction, summarisation and agent use cases.'],
          ['Azure AI Search', 'Vector, keyword and hybrid retrieval over your documents and data for RAG and intelligent search, with security trimming where needed.'],
          ['Microsoft Entra ID', 'Single sign-on, role and group based access, managed identities and secretless connections between services.'],
          ['App Service, Functions and Container Apps', 'Hosting for web apps, APIs, background jobs and event-driven processing, sized to the workload.'],
          ['AKS and containers', 'Container platforms for workloads that need orchestration, with infrastructure as code and observability.'],
          ['Data services', 'Azure SQL, Blob Storage and queues behind AI and application workflows, with backup and access policies.']
        ]
      },
      {
        eyebrow: 'Azure OpenAI integration',
        title: 'Bring Azure OpenAI into the applications you already run.',
        intro: 'For Microsoft-stack companies, the practical question is how to use Azure OpenAI inside existing applications and data without exposing it. These are the patterns we build most.',
        items: [
          ['Chat over internal documents', 'RAG over SharePoint, file stores and databases, honouring who is allowed to see what.'],
          ['Copilot features in line-of-business apps', 'An assistant inside an ASP.NET or web application that can answer questions and take bounded actions through your APIs.'],
          ['Document and workflow automation', 'Extraction, classification and routing for documents, email and forms, with human review for exceptions.']
        ]
      }
    ],
    faqs: [
      ['What does Azure AI consulting include?', 'Architecture and engineering for AI on Azure: choosing services, designing retrieval and agents, identity and security, evaluation, cost control and deployment. We can advise, build or both.'],
      ['Can you integrate Azure OpenAI with our existing applications?', 'Yes. We add chat, search, extraction and agent features to existing .NET and web applications, connecting them to your data and identity.'],
      ['Do you work with Azure AI Foundry?', 'Yes. We use it for model deployment, evaluation and agent workflows where it fits the project.'],
      ['How do you handle security for Azure OpenAI?', 'Through Entra ID access, managed identities, network controls, content filtering, logging and data handling choices agreed with your security team.'],
      ['Can you help us choose between Azure OpenAI and other model providers?', 'Yes. The choice depends on data residency, compliance, cost, latency and quality needs, and we can compare options for your use case.']
    ]
  },
  dotnet: {
    seoTitle: '.NET Development Company and Azure Engineers',
    seoDescription: '.NET development from Csharptek: modern .NET, ASP.NET Core, Blazor, Entity Framework, APIs and migration of legacy .NET Framework applications to Azure.',
    h1: '.NET development company for modern and legacy applications',
    sections: [
      {
        eyebrow: '.NET services',
        title: 'What we build and maintain in .NET.',
        intro: 'We work across the .NET platform, from new products to long-running business applications that need to move forward.',
        items: [
          ['New applications on modern .NET', 'ASP.NET Core web applications and APIs, background services and integrations built for cloud hosting from the start.'],
          ['Blazor and web front ends', 'Interactive web UIs in Blazor or paired with React front ends, depending on your team and product.'],
          ['APIs and integrations', 'REST APIs, webhooks, queues and connectors to CRMs, ERPs and Microsoft Graph.'],
          ['Data access', 'Entity Framework Core, SQL Server and Azure SQL design, performance tuning and migration.'],
          ['Migration from .NET Framework', 'Staged upgrades to a supported modern .NET version with test coverage on critical workflows.'],
          ['AI features in .NET', 'Azure OpenAI, retrieval and agents added to ASP.NET applications, with Entra ID access control.']
        ]
      }
    ],
    faqs: [
      ['Do you build with modern .NET?', 'Yes. We build on current .NET with ASP.NET Core, Entity Framework Core, Azure Functions and Blazor.'],
      ['Can you upgrade a .NET Framework application?', 'Yes. We assess the application, replace unsupported dependencies and upgrade in stages, keeping the business workflows working.'],
      ['Can you add AI features to an existing .NET application?', 'Yes. We integrate Azure OpenAI and retrieval into ASP.NET applications and connect them to your data and identity.'],
      ['Can we hire .NET and Azure engineers from you?', 'Yes. We work as an extension of your team or deliver a defined scope. The engagement model is agreed during discovery.'],
      ['Do you handle hosting and CI/CD?', 'Yes. We deploy to Azure App Service, Functions or containers, with pipelines in Azure DevOps or GitHub Actions.']
    ]
  }
};
