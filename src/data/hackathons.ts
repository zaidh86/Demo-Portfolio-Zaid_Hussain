import { Hackathon } from '../types';

export const hackathons: Hackathon[] = [
  {
    id: 'odoo-hackathon-2026',
    name: 'Odoo Hackathon 2026',
    organizer: 'Odoo',
    date: 'July – September 2026',
    duration: 'Round 1: 8 Hours | Round 2: 24 Hours',
    format: 'Hybrid',
    location: 'Round 1: Online | Round 2: Odoo HQ, Gujarat (In-person)',
    theme: 'Smart Business & Enterprise Operations / Smart Transport',
    projectAssociated: {
      projectId: 'transitops',
      projectName: 'TransitOps'
    },
    participationType: 'Team',
    description: 'A two-stage high-intensity competitive hackathon starting with an 8-hour online qualification sprint, progressing to an in-person 24-hour hackathon at Odoo Headquarters in Gujarat. Collaborated on building and integrating TransitOps.',
    storyFlow: [
      'UNFAMILIAR PROBLEM',
      'ARCHITECTURE & API PLANNING',
      'FRONTEND / BACKEND INTEGRATION',
      'AUTH & ROLE-BASED ACCESS',
      'DATABASE & PRISMA ORM',
      'DEBUGGING UNDER DEADLINE',
      'FINAL SHIP & DEMO'
    ],
    focusAreas: [
      'Rapid full-stack prototyping under intense time pressure',
      'Integrating modern client with existing Express/TypeScript backend services',
      'PostgreSQL data modeling and Prisma ORM migrations',
      'Git-based multi-developer coordination and merge resolution'
    ],
    technologies: [
      'TypeScript',
      'Express.js',
      'PostgreSQL',
      'Prisma',
      'JWT Auth',
      'Zod Validation',
      'REST APIs'
    ],
    learning: [
      'Gained deep experience working with pre-structured backend contracts in real time.',
      'Learned how to coordinate rapid feature branches and resolve integration friction under a 24-hour clock.',
      'Understood the value of strict runtime schema validation (Zod) in preventing frontend-backend contract mismatches.'
    ],
    verified: true
  },
  {
    id: 'nexustiq-24',
    name: 'NexusTiQ 24',
    organizer: 'CareerTiQ',
    date: '4 September 2026 – 5 September 2026',
    duration: '24 Hours',
    format: 'Virtual',
    location: 'Online Virtual Hackathon',
    theme: 'Real-world problem solving + Generative AI',
    participationType: 'Solo',
    description: 'Participated individually in a 24-hour virtual GenAI hackathon focused on solving real-world problems through generative AI approaches and rapid prototyping.',
    storyFlow: [
      'PROBLEM ANALYSIS',
      'GENAI FEASIBILITY EVALUATION',
      'PROMPT & PIPELINE DESIGN',
      'RAPID PROTOTYPE IMPLEMENTATION',
      'ITERATIVE REFINEMENT',
      'FINAL SHIP'
    ],
    focusAreas: [
      'Solo problem solving and self-directed architecture decisions',
      'Generative AI API integration for practical contextual reasoning',
      'Structuring unstructured problem domains into actionable code workflows',
      'Managing complete project lifecycle independently within 24 hours'
    ],
    technologies: [
      'Python',
      'Generative AI / LLMs',
      'API Integration',
      'Data Processing'
    ],
    learning: [
      'Strengthened independent decision-making under strict time limits without a team buffer.',
      'Explored how generative AI can be applied to practical, bounded real-world problem statements.',
      'Learned the importance of scoping down features quickly to deliver a working prototype before deadline.'
    ],
    verified: true
  }
];
