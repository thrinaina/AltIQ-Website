export type Perspective = {
  slug: string;
  title: string;
  mindset: string;
  who: string;
  focusHeading: string;
  focus: string;
  thinking: string;
  services: { name: string; slug: string; des: string }[];
};

export const PERSPECTIVES: Perspective[] = [
  {
    slug: 'consumers-of-tech',
    title: 'Consumers of Tech',
    mindset: 'I leverage tech to generate Business Value.',
    who: 'CEO, Business Unit Head, P&L Owner',
    focusHeading: 'Maximising RoI',
    focus:
      'You want to transform technology from a necessary cost into a measurable revenue driver.',
    thinking:
      'We align your technology investment strategy directly with your growth targets.',
    services: [
      { name: '5D Assessment', slug: '5d-assessment', des: 'Progressive enterprise assessment from free discovery to comprehensive transformation blueprints.' },
      { name: 'CTO-as-a-Service', slug: 'cto-as-a-service', des: 'Fractional technology leadership when you need strategic guidance without full-time commitment.' },
    ],
  },
  {
    slug: 'advisors-of-tech',
    title: 'Advisors of Tech',
    mindset: 'I design the Strategy and Architecture.',
    who: 'CIO, Enterprise Architect, Strategy Lead',
    focusHeading: 'Strategic Alignment',
    focus:
      'You want your architectural designs to gain business adoption, not sit on a shelf.',
    thinking:
      'We provide the frameworks and collaboration models to make governance an enabler, not a blocker.',
    services: [
      { name: 'Enterprise Architecture-as-a-Service', slug: 'enterprise-architecture-as-a-service', des: 'Ongoing EA support for business and technology alignment, governance, and roadmap execution.' },
      { name: '5D Assessment', slug: '5d-assessment', des: 'Progressive enterprise assessment from free discovery to comprehensive transformation blueprints.' },
    ],
  },
  {
    slug: 'creators-of-tech',
    title: 'Creators of Tech',
    mindset: 'I build the Applications and Infrastructure.',
    who: 'CTO, Product Manager, Engineering Lead',
    focusHeading: 'Purpose-Driven Build',
    focus:
      'You want to accelerate delivery while staying aligned to business objectives.',
    thinking:
      'We integrate product strategy with engineering execution to build the right things, faster.',
    services: [
      { name: 'Tech Product LifeCycle-as-a-Service', slug: 'tech-product-lifecycle-as-a-service', des: 'End-to-end product management from ideation through launch and continuous improvement.' },
      { name: 'CTO-as-a-Service', slug: 'cto-as-a-service', des: 'Fractional technology leadership when you need strategic guidance without full-time commitment.' },
    ],
  },
];

export const getPerspective = (slug: string | null): Perspective =>
  PERSPECTIVES.find((p) => p.slug === slug) ?? PERSPECTIVES[0];
