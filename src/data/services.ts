export interface ServiceFeature {
  title: string;
  description: string;
}

export interface AgencyService {
  slug: string;
  title: string;
  shortDesc: string;
  tagline: string;
  iconName: string;
  badge?: string;
  heroImage: string;
  deliverables: string[];
  features: ServiceFeature[];
  techStack: string[];
  processSteps: { title: string; detail: string }[];
  faqs: { question: string; answer: string }[];
}

export const AGENCY_SERVICES: AgencyService[] = [
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDesc: "Custom iOS and Android applications built with Flutter, React Native, and Swift for peak speed and intuitive UX.",
    tagline: "Turn Your Business Vision into High-Converting iOS & Android Apps",
    iconName: "Smartphone",
    badge: "Flagship Service",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Native iOS & Android App Store Readiness",
      "Cross-Platform Codebase (Flutter / React Native)",
      "Secure Payment Gateway & Wallet Integrations",
      "Real-time Push Notifications & Offline Mode",
      "Admin Panel & Backend Analytics Dashboard"
    ],
    features: [
      {
        title: "Fluid 60FPS Native Performance",
        description: "Optimized mobile animations, smooth gesture controls, and low battery consumption designed for modern smartphones."
      },
      {
        title: "End-to-End Store Deployment",
        description: "We handle Apple App Store & Google Play Store submission, compliance checks, and post-launch maintenance."
      },
      {
        title: "Cloud & Firebase Synchronization",
        description: "Instant data syncing across devices with robust offline caching and military-grade encryption."
      }
    ],
    techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Node.js", "GraphQL"],
    processSteps: [
      { title: "Discovery & Wireframing", detail: "We map user journeys, screen flows, and interactive Figma prototypes." },
      { title: "Agile Sprint Development", detail: "Bi-weekly builds delivered to test devices with direct feedback loops." },
      { title: "Security & QA Testing", detail: "Rigorous testing on multiple devices, OS versions, and network speeds." },
      { title: "Store Launch & Ongoing Support", detail: "Full deployment to Play Store and App Store with uptime monitoring." }
    ],
    faqs: [
      {
        question: "How long does it take to develop a custom mobile app?",
        answer: "Typical MVP mobile apps take 6 to 10 weeks, while complex enterprise applications require 12 to 16 weeks."
      },
      {
        question: "Do you build both Android and iOS apps?",
        answer: "Yes, our Flutter and React Native cross-platform workflows provide seamless deployment to both iOS and Android simultaneously."
      }
    ]
  },
  {
    slug: "custom-web-development",
    title: "Custom Web & SaaS Development",
    shortDesc: "Lightning-fast Next.js, React, and Node.js web platforms engineered for massive scalability and conversion.",
    tagline: "High-Performance Modern Web Platforms, SaaS & Enterprise Portals",
    iconName: "Globe",
    badge: "Enterprise Ready",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Ultra-fast Server-Side Rendered (Next.js) Web Apps",
      "Custom SaaS Dashboards with Subscription Billing",
      "Headless CMS & High-Conversion E-Commerce Stores",
      "RESTful & GraphQL API Architecture",
      "100/100 Lighthouse Speed & SEO Standards"
    ],
    features: [
      {
        title: "Sub-Second Load Times",
        description: "Engineered with Next.js App Router, edge caching, and asset optimization for maximum user retention and Google search rank."
      },
      {
        title: "Enterprise Multi-Tenant SaaS",
        description: "Role-based access control (RBAC), multi-tenant database isolation, automated billing, and detailed audit logs."
      },
      {
        title: "Responsive Across All Screens",
        description: "Fluid design tested across ultra-wide monitors, tablets, and smartphones with pixel-perfect precision."
      }
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Prisma", "AWS"],
    processSteps: [
      { title: "Architecture Blueprint", detail: "Database schema design, API contracts, and UX wireframes." },
      { title: "Frontend & Backend Engineering", detail: "Clean, modular code with automated continuous integration." },
      { title: "Performance & SEO Audit", detail: "Core Web Vitals tuning, meta tags, schema markup, and speed audits." },
      { title: "Global Cloud Deployment", detail: "Automated zero-downtime deployment on Vercel or AWS Cloud." }
    ],
    faqs: [
      {
        question: "Will our website be optimized for Google Search (SEO)?",
        answer: "Yes, every web project is built with server-side rendering, semantic HTML5, dynamic OpenGraph cards, and structured schema markup for top search engine visibility."
      }
    ]
  },
  {
    slug: "ai-automation-agents",
    title: "AI Automation & Autonomous Agents",
    shortDesc: "Custom AI Agents, LLM-powered chatbots, intelligent document processing, and autonomous business workflows.",
    tagline: "Put Your Business on Autopilot with Cutting-Edge Generative AI Solutions",
    iconName: "Cpu",
    badge: "Most Innovative",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Autonomous 24/7 AI Customer Support & Sales Agents",
      "Custom Knowledge-Base RAG (Retrieval-Augmented Generation)",
      "Automated Document Processing (Invoices, Resumes, Legal)",
      "Voice AI Agents for Inbound & Outbound Calling",
      "Private Enterprise LLM Deployment (Secured Data)"
    ],
    features: [
      {
        title: "Trained Exclusively on Your Company Data",
        description: "We connect vector databases with your internal documents, FAQs, and product catalogs so your AI provides 100% accurate, hallucination-free answers."
      },
      {
        title: "Multi-Channel AI Presence",
        description: "Deploy the same intelligent brain across your Website, WhatsApp, Telegram, Slack, and CRM."
      },
      {
        title: "Zero Human Latency",
        description: "Qualify leads, book appointments, generate quotes, and resolve customer queries within seconds."
      }
    ],
    techStack: ["Python", "LangChain", "OpenAI / Claude / Gemini", "Pinecone", "ChromaDB", "LlamaIndex", "FastAPI"],
    processSteps: [
      { title: "AI Opportunity Audit", detail: "We identify repetitive human bottlenecks and quantify potential ROI." },
      { title: "Knowledge Ingestion & RAG", detail: "We clean, vectorize, and index your business manuals and customer data." },
      { title: "Agent Logic & Multi-Tool Testing", detail: "We give your AI tools to query databases, send emails, and book slots." },
      { title: "Live Integration & Guardrails", detail: "Safety checks, hallucination prevention, and CRM synchronization." }
    ],
    faqs: [
      {
        question: "Is our proprietary business data safe and private?",
        answer: "Yes, we implement enterprise privacy agreements and zero-data-retention APIs or self-hosted local open-source LLMs so your data is never used for training public models."
      }
    ]
  },
  {
    slug: "enterprise-business-automation",
    title: "Enterprise Business Automation & RPA",
    shortDesc: "Streamline repetitive manual tasks with Make, Zapier, n8n, and custom robotic process automation scripts.",
    tagline: "Eliminate Human Error & Cut Operational Hours by 80%",
    iconName: "Workflow",
    badge: "High ROI",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Custom Webhook & API Middleware Integrations",
      "WhatsApp Business API Automated Messaging",
      "Automated CRM Lead Routing & Deal Stage Triggers",
      "Automated PDF Invoicing & Accounting Reconciliation",
      "Self-Hosted n8n Infrastructure for Maximum Security"
    ],
    features: [
      {
        title: "Frictionless Systems Connection",
        description: "Seamlessly bind your CRM (HubSpot/Zoho/Salesforce), Google Sheets, WhatsApp, payment gateways, and accounting software."
      },
      {
        title: "Instant WhatsApp Conversions",
        description: "Send automated payment confirmations, appointment reminders, and onboarding documents right to customer WhatsApp inboxes."
      },
      {
        title: "Fail-Safe Retry Logic",
        description: "Every automated pipeline is equipped with instant failure alert notifications and automatic fallback retries."
      }
    ],
    techStack: ["Make.com", "n8n", "Zapier", "WhatsApp Cloud API", "Python", "UiPath", "Airtable"],
    processSteps: [
      { title: "Workflow Mapping", detail: "Mapping out current manual employee steps and identifying API endpoints." },
      { title: "Pipeline Build & Testing", detail: "Connecting triggers, filters, conditional branches, and data mappers." },
      { title: "Simulation & Stress Testing", detail: "Running bulk transaction tests to verify data accuracy." },
      { title: "Handover & Live Dashboard", detail: "Real-time execution dashboard and team operating guides." }
    ],
    faqs: [
      {
        question: "Can automation connect with our legacy or custom software?",
        answer: "Yes, we can interact with legacy software via REST APIs, webhooks, direct SQL connectors, or RPA screen automation."
      }
    ]
  },
  {
    slug: "cloud-devops-consulting",
    title: "Cloud Solutions & DevOps Consulting",
    shortDesc: "Scalable AWS and Google Cloud architecture, automated CI/CD pipelines, Docker containerization, and 99.99% uptime.",
    tagline: "Bulletproof Infrastructure Engineered for Modern Digital Demands",
    iconName: "Cloud",
    heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "AWS & GCP Cloud Architecture Design & Migration",
      "Zero-Downtime CI/CD Pipelines (GitHub Actions / GitLab)",
      "Docker & Kubernetes Container Orchestration",
      "Terraform Infrastructure as Code (IaC)",
      "24/7 Cloud Monitoring, Log Analytics & Alerting"
    ],
    features: [
      {
        title: "Auto-Scaling on Demand",
        description: "Handle sudden traffic surges without crashes while dynamically scaling down during quiet hours to save cloud costs."
      },
      {
        title: "Automated Deployments",
        description: "Push code to production in minutes with automated testing and instant rollback protection."
      },
      {
        title: "Zero-Trust Security & Backups",
        description: "Encrypted databases, isolated VPC networks, automated daily snapshots, and DDoS mitigation."
      }
    ],
    techStack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus"],
    processSteps: [
      { title: "Infrastructure Audit", detail: "We analyze current hosting, bottlenecks, vulnerabilities, and monthly cloud spend." },
      { title: "Architecture Blueprint", detail: "We craft an optimized VPC, database, and container strategy." },
      { title: "Zero-Downtime Migration", detail: "Seamless migration of databases and assets with DNS cutover." },
      { title: "Monitoring & Governance", detail: "Setup of automated alerts, health checks, and cost limits." }
    ],
    faqs: [
      {
        question: "Can you help reduce our existing AWS or cloud bills?",
        answer: "Yes, our cloud cost optimization audits frequently reduce client monthly infrastructure bills by 30% to 50% through rightsizing and reservation strategies."
      }
    ]
  },
  {
    slug: "ui-ux-design-branding",
    title: "UI/UX Design & Brand Identity",
    shortDesc: "User-centric UI/UX design, interactive Figma prototypes, and complete brand design systems that captivate and convert.",
    tagline: "Designs that Captivate Users and Drive Measurable Conversions",
    iconName: "Palette",
    heroImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "User Persona Research & Journey Mapping",
      "Interactive High-Fidelity Figma Prototypes",
      "Comprehensive Design Systems & Component Libraries",
      "Brand Identity, Typography, Color Palettes & Logos",
      "Developer-Ready Design Tokens & Specs"
    ],
    features: [
      {
        title: "User-Centric Behavioral Design",
        description: "Every button placement, typographic hierarchy, and navigation flow is designed based on user testing and cognitive psychology."
      },
      {
        title: "Clickable High-Fidelity Prototypes",
        description: "Experience your mobile app or web platform before a single line of code is written."
      },
      {
        title: "Production Ready Figma Deliverables",
        description: "Organized components, responsive auto-layouts, and design tokens that your developers can implement directly."
      }
    ],
    techStack: ["Figma", "Adobe XD", "FigJam", "Illustrator", "Photoshop", "Principle"],
    processSteps: [
      { title: "User Research & Discovery", detail: "Competitor analysis, user pain points, and product positioning." },
      { title: "Wireframes & Information Architecture", detail: "Low-fidelity structural layouts and screen flows." },
      { title: "High-Fidelity Visual Design", detail: "Crafting beautiful UI, micro-interactions, typography, and dark/light modes." },
      { title: "Developer Handoff", detail: "Exporting clean CSS variables, SVGs, asset packs, and documentation." }
    ],
    faqs: [
      {
        question: "Do you deliver clickable prototypes?",
        answer: "Yes, you receive an interactive Figma link where you and your stakeholders can click through the entire app on mobile and desktop."
      }
    ]
  }
];
