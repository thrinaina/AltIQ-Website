export type EngagementModel = {
  name: string;
  commitment: string;
  price: string;
  popular?: boolean;
};

export type CoverageGroup = {
  heading: string;
  items: string[];
};

export type ServiceDetail = {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  intro: string;
  audience?: string;
  coverage: CoverageGroup[];
  models: EngagementModel[];
  deliverables?: string[];
  note?: string;
};

export const SERVICES: ServiceDetail[] = [
  {
    slug: '5d-assessment',
    name: '5D Enterprise Assessment',
    icon: 'assets/img/icons/service1-icon1.svg',
    tagline: 'From free discovery to a full transformation blueprint',
    intro:
      'Our flagship engagement. A progressive enterprise assessment structured across five tiers, T1 to T5 — you start with a free discovery conversation and scale only as far as the value justifies. Every one of our practice roles is built around this methodology.',
    coverage: [
      {
        heading: 'How it works',
        items: [
          'Tier 1 begins as a free discovery conversation',
          'Each tier deepens scope, evidence and deliverable detail',
          'You stop at the tier where the answer is clear enough to act on',
          'Higher tiers produce comprehensive transformation blueprints',
        ],
      },
    ],
    models: [],
    note:
      'Tier-by-tier scope, durations, deliverables and pricing are being migrated from the existing 5D Assessment page and will be published here.',
  },
  {
    slug: 'cto-as-a-service',
    name: 'CTO-as-a-Service',
    icon: 'assets/img/icons/service1-icon2.svg',
    tagline: 'Experienced technology leadership, without the full-time cost',
    intro:
      'Access experienced technology leadership without the cost and commitment of a full-time executive. Built for companies between $10M and $250M revenue.',
    audience:
      'Growing firms; organisations undergoing technology transformation; startups that have outgrown founder capability; companies where an existing CTO needs strategic peer support; businesses needing interim leadership through a transition.',
    coverage: [
      {
        heading: 'Strategic Leadership',
        items: [
          'Technology strategy aligned with business goals',
          'Build vs. buy vs. partner decisions',
          'Technology roadmap development',
          'Innovation pipeline management',
          'Board and investor communication',
        ],
      },
      {
        heading: 'Operational Excellence',
        items: [
          'Team structure and hiring strategy',
          'Vendor selection and management',
          'Technology budget planning',
          'Architecture review and governance',
          'Security and compliance oversight',
        ],
      },
      {
        heading: 'Execution Support',
        items: [
          'Weekly working sessions with teams',
          'Executive briefings and reporting',
          'Critical project oversight',
          'Crisis management',
          'On-call urgent decision support',
        ],
      },
    ],
    models: [
      { name: 'Part-Time', commitment: '2–3 days weekly, embedded', price: '$12,000 – $18,000 / month', popular: true },
      { name: 'Strategic Advisory', commitment: '1 day weekly, or 4–6 days monthly', price: '$6,000 – $10,000 / month' },
      { name: 'Project-Based', commitment: 'Fixed 3–6 months', price: '$50,000 – $100,000' },
      { name: 'On-Demand Retainer', commitment: '8–12 advisory hours monthly', price: '$3,000 – $5,000 / month' },
    ],
    note:
      'Typical engagements run 6–12 months with extension options. For comparison, a full-time CTO costs $250K–$520K annually including benefits; our part-time model runs $144K–$216K annually.',
  },
  {
    slug: 'enterprise-architecture-as-a-service',
    name: 'Enterprise Architecture-as-a-Service',
    icon: 'assets/img/icons/service1-icon3.svg',
    tagline: 'Align technology to strategy without an in-house EA team',
    intro:
      'Ongoing enterprise architecture support for organisations managing complex technology landscapes or undergoing digital transformation — without requiring a dedicated in-house EA function.',
    coverage: [
      {
        heading: 'Business Architecture',
        items: [
          'Business capability modeling',
          'Value stream mapping',
          'Process architecture',
          'Operating model design',
          'Capability-based planning',
        ],
      },
      {
        heading: 'Technology Architecture',
        items: [
          'Application portfolio management',
          'Integration architecture',
          'Data governance',
          'Cloud strategy',
          'Security principles',
        ],
      },
      {
        heading: 'Architecture Governance',
        items: [
          'Architecture review boards',
          'Standards development',
          'Technology decision frameworks',
          'Compliance support',
          'Documentation',
        ],
      },
      {
        heading: 'Transformation Support',
        items: [
          'Target state architecture',
          'Roadmap development',
          'Vendor evaluation and RFP reviews',
          'Implementation oversight',
        ],
      },
    ],
    models: [
      { name: 'Embedded EA Team', commitment: '2–5 days weekly', price: '$15,000 – $35,000 / month' },
      { name: 'Architecture Governance Retainer', commitment: 'Monthly reviews', price: '$8,000 – $15,000 / month' },
      { name: 'Modernisation Program Support', commitment: '6–18 months', price: '$75,000 – $200,000' },
      { name: 'Assessment + Architecture Development', commitment: 'Packaged engagement', price: 'On application' },
    ],
  },
  {
    slug: 'tech-product-lifecycle-as-a-service',
    name: 'Tech Product LifeCycle-as-a-Service',
    icon: 'assets/img/icons/service1-icon4.svg',
    tagline: 'From ideation to launch and beyond',
    intro:
      'End-to-end product management expertise for building, launching and optimising technology products. Suited to new product development, platform modernisation, and reaching product-market fit.',
    coverage: [
      {
        heading: 'Product Strategy',
        items: [
          'Market research and competitive analysis',
          'Vision and positioning',
          'Value propositions',
          'Go-to-market strategy',
          'Business model design',
        ],
      },
      {
        heading: 'Product Discovery',
        items: [
          'User research and personas',
          'Jobs-to-be-done analysis',
          'Feature prioritization',
          'Prototyping',
          'MVP definition',
        ],
      },
      {
        heading: 'Product Development',
        items: [
          'Roadmap creation',
          'Backlog management',
          'Sprint planning',
          'Stakeholder communication',
          'Team coordination',
        ],
      },
      {
        heading: 'Launch & Optimization',
        items: [
          'Launch planning, training and adoption strategy',
          'Feedback loops and metrics tracking',
          'Usage analytics and feature analysis',
          'Technical debt management',
          'Sunset planning',
        ],
      },
    ],
    deliverables: [
      'Strategy documents',
      '3–12 month roadmaps',
      'User stories',
      'Release plans',
      'Success dashboards',
    ],
    models: [
      { name: 'Embedded Product Manager — full-time', commitment: '3–18 months', price: '$15,000 – $22,000 / month' },
      { name: 'Embedded Product Manager — part-time', commitment: '3 days weekly', price: '$9,000 – $14,000 / month' },
      { name: 'Strategy Sprint', commitment: '4–8 weeks, vision to launch-ready plan', price: '$35,000 – $75,000' },
      { name: 'Product Optimization', commitment: '3–6 months', price: '$50,000 – $125,000' },
      { name: 'Advisory Retainer', commitment: 'Ongoing monthly guidance', price: '$5,000 – $8,000 / month' },
    ],
    note: 'Pricing is indicative and scoped per engagement.',
  },
  {
    slug: 'genesis',
    name: 'GENESIS — GCC Transformer',
    icon: 'assets/img/icons/service1-icon5.svg',
    tagline: 'Global Capability Centre transformation',
    intro:
      'Our Global Capability Centre transformation programme, previously published on its own site.',
    coverage: [],
    models: [],
    note:
      'Programme detail, phases, engagement models and pricing are being migrated from the GENESIS site and will be published here.',
  },
];

export const getService = (slug: string | null): ServiceDetail =>
  SERVICES.find((s) => s.slug === slug) ?? SERVICES[0];
