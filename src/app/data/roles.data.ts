export type Role = { id: string; title: string; scope: string };

export const CULTURE = [
  { name: 'Lateral thinking', des: 'Connecting strategy, technology and change management through non-obvious connections.' },
  { name: 'Pragmatism', des: 'A player-coach mentality with hands-on expertise — 8 to 20+ years of it.' },
  { name: 'Autonomy', des: 'Direct ownership, minimal bureaucracy, a quality-focused culture.' },
  { name: 'Strategic focus', des: 'Pure advisory work rather than implementation body-shopping.' },
];

export const ROLES: Role[] = [
  { id: '20251108-1', title: 'Managing Partner', scope: 'C-suite client relationships' },
  { id: '20251108-2', title: 'Transformation Lead', scope: 'Engagement leadership' },
  { id: '20251108-3', title: 'Principal Business Architect', scope: 'Business architecture authority' },
  { id: '20251108-4', title: 'Principal Tech Architect — Data & AI', scope: 'Application, data and AI architecture' },
  { id: '20251108-5', title: 'Principal Tech Architect — Infra & Security', scope: 'Infrastructure and security' },
  { id: '20251108-6', title: 'Senior Analyst — Business Architecture', scope: 'Analysis and deliverables' },
  { id: '20251108-7', title: 'Senior Analyst — Technology Architecture', scope: 'ERP and data analysis' },
  { id: '20251108-8', title: 'Analyst — Architecture', scope: 'Support role for T2–T5 engagements' },
];
