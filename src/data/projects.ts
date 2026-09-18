import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ai-data-analyzer',
    title: 'AI Data Analyzer',
    category: 'AI • DATA SCIENCE • ANALYTICS',
    tagline: 'An AI-assisted data analysis application that combines dataset exploration, visualization, and generated insights in one workflow.',
    description: 'AI Data Analyzer explores how traditional data analysis can be combined with AI-generated explanations in a single unified workflow, bridging quantitative exploration and contextual interpretation.',
    status: 'In Development',
    featured: true,
    verified: true,
    visualType: 'analytics-dashboard',
    technologies: [
      'Python',
      'Pandas',
      'Streamlit',
      'Plotly',
      'Matplotlib',
      'Groq AI',
      'OpenAI API / LLM',
      'ReportLab',
      'python-dotenv'
    ],
    problem: 'Exploring a large or unfamiliar dataset typically requires manual table inspections, separate script runs for statistical summaries, manual plotting, and isolated reasoning to understand anomalies or trends.',
    approach: 'Brings data inspection, statistical distribution calculation, automated charts, and LLM-assisted context summaries into a unified responsive interface.',
    workflow: [
      'UPLOAD DATASET',
      'PREVIEW DATA',
      'ANALYZE DATA',
      'VISUALIZE DATA',
      'GENERATE AI INSIGHTS'
    ],
    features: [
      { name: 'CSV Dataset Upload & Ingestion', status: 'Implemented', note: 'Allows uploading arbitrary CSV datasets with immediate schema detection.' },
      { name: 'Dataset Preview & Head/Tail Inspection', status: 'Implemented', note: 'Interactive tabular view to quickly inspect raw records and data types.' },
      { name: 'Statistical Summary & Metrics', status: 'Implemented', note: 'Calculates count, mean, std deviation, min/max, and quartile distributions.' },
      { name: 'Interactive Graph & Plot Generation', status: 'Implemented', note: 'Dynamic chart rendering powered by Plotly and Matplotlib.' },
      { name: 'Missing Value & Data Quality Analysis', status: 'Implemented', note: 'Detects null counts, sparsity ratios, and data integrity indicators.' },
      { name: 'AI-Generated Statistical Insights', status: 'Implemented', note: 'Synthesizes observations and patterns using LLM API reasoning.' },
      { name: 'Correlation Matrix & Bivariate Exploration', status: 'In Development', note: 'Pearson/Spearman heatmap calculation and scatter matrices.' },
      { name: 'Downloadable PDF & Summary Reports', status: 'Planned', note: 'Automated executive summary export generated via ReportLab.' }
    ],
    contribution: [
      'Designed and developed the end-to-end data processing pipeline using Pandas for clean schema normalization.',
      'Implemented dynamic visualizations with Plotly to enable exploratory drill-downs on numerical columns.',
      'Integrated LLM API prompts conditioned on statistical metadata to produce grounded, context-aware dataset insights.',
      'Constructed the Streamlit application layout with real-time feedback loops during data upload.'
    ],
    challenges: [
      'Handling diverse and messy real-world CSV schemas without hardcoded assumptions about column types.',
      'Constructing concise, structured prompts that feed statistical summaries to LLMs without exceeding token constraints.',
      'Ensuring responsive interactive chart rendering when working with medium-to-large dataset slices.'
    ],
    learning: [
      'Deepened practical skills in Python data manipulation with Pandas and dynamic rendering with Plotly.',
      'Learned prompt engineering patterns specifically for tabular data interpretation and guardrailed statistical outputs.',
      'Understood how to design practical AI applications where AI augments rather than replaces core quantitative tools.'
    ],
    github: 'https://github.com/zaidh86/AI-Data-Analyzer',
    demo: '[ADD LIVE DEMO]'
  },
  {
    id: 'transitops',
    title: 'TransitOps',
    category: 'FULL STACK • HACKATHON • SMART TRANSPORT',
    tagline: 'A smart transport operations platform integrating a modern frontend with a structured TypeScript backend, PostgreSQL database, authentication, authorization, and validation.',
    description: 'Developed during hackathon collaboration, TransitOps focuses on integrating a responsive frontend client with an existing structured backend service featuring role-based access control and strict data validation.',
    status: 'Prototype',
    featured: true,
    verified: true,
    visualType: 'system-architecture',
    hackathonAssociation: 'Odoo Hackathon 2026',
    technologies: [
      'TypeScript',
      'Express.js',
      'PostgreSQL',
      'Prisma',
      'JWT Authentication',
      'Role-Based Access Control',
      'Zod Validation'
    ],
    problem: 'Managing transport schedules, vehicle allocations, and personnel roles requires strict access segregation, authenticated API interactions, and type-safe data validation across disparate service boundaries.',
    approach: 'Employed an API-first approach connecting the client layer to a robust TypeScript and Express service powered by Prisma ORM and PostgreSQL with JWT-based session security.',
    workflow: [
      'LOGIN / REGISTER',
      'JWT ISSUANCE',
      'AUTHORIZED API REQUEST',
      'ROLE-BASED PERMISSION CHECK',
      'PRISMA DATABASE TRANSACTION'
    ],
    architecture: {
      layers: [
        { name: 'Client Layer', description: 'Interactive frontend consuming REST endpoints and managing auth bearer tokens.' },
        { name: 'API Routing & Middleware', description: 'Express.js application mounted at http://localhost:3001/api with route guards.' },
        { name: 'Validation Layer', description: 'Zod schemas validating all incoming request payloads before controller logic.' },
        { name: 'Authentication & RBAC', description: 'JSON Web Token (JWT) verification and role-based permissions enforcement.' },
        { name: 'ORM & Data Access', description: 'Prisma ORM generating type-safe queries against PostgreSQL database instances.' }
      ],
      authFlow: [
        'POST /api/auth/register or /api/auth/login',
        'Backend validates payload with Zod schemas',
        'Signed JWT returned to client upon valid credentials',
        'Client includes Bearer token in HTTP Authorization header',
        'Middleware validates JWT and verifies user role against route permission',
        'Controller executes Prisma query and returns structured JSON response'
      ]
    },
    features: [
      { name: 'Health Check Endpoint (GET /api/health)', status: 'Implemented', note: 'Verifies backend uptime and service readiness.' },
      { name: 'User Registration (POST /api/auth/register)', status: 'Implemented', note: 'Zod-validated account creation with secure password handling.' },
      { name: 'User Authentication (POST /api/auth/login)', status: 'Implemented', note: 'Credential verification returning signed JWT token.' },
      { name: 'Current User Identity (GET /api/auth/me)', status: 'Implemented', note: 'Protected route returning authenticated user profile and roles.' },
      { name: 'Structured Response Format Handling', status: 'Implemented', note: 'Standardized success and error JSON envelopes across all endpoints.' },
      { name: 'PostgreSQL & Prisma Schema Models', status: 'Implemented', note: 'Declarative data models with migrations and foreign-key constraints.' }
    ],
    contribution: [
      '[ADD VERIFIED CONTRIBUTION]',
      'Contributed as part of the collaborative hackathon development team at Odoo Hackathon 2026.',
      'Worked on frontend-to-backend API communication, contract handling, and authenticated flow testing.'
    ],
    challenges: [
      'Collaborating under strict hackathon time constraints while maintaining type safety across the client-server boundary.',
      'Integrating with an existing backend structure and ensuring strict compliance with the standardized API error envelope.',
      'Managing JWT token persistence and handling role-based navigation guards smoothly.'
    ],
    learning: [
      'Gained first-hand experience in rapid collaborative hackathon development and Git-based team synchronization.',
      'Learned the mechanics of production-grade Node/Express architectures with Prisma ORM and PostgreSQL.',
      'Mastered payload schema validation using Zod and secure authorization patterns using JWT.'
    ],
    github: 'https://github.com/zaidh86/Transit-Ops-.git',
    demo: '[ADD LIVE DEMO]'
  },
  {
    id: 'event-management-platform',
    title: 'Event Management Platform',
    category: 'EVENT MANAGEMENT • WEB APPLICATION',
    tagline: 'A comprehensive platform designed for organizing, managing, and coordinating events and schedules.',
    description: '[ADD VERIFIED PROJECT DESCRIPTION]',
    status: 'In Development',
    featured: false,
    verified: false,
    visualType: 'placeholder',
    technologies: [
      '[ADD VERIFIED TECHNOLOGIES]'
    ],
    problem: '[ADD VERIFIED PROBLEM]',
    solution: '[ADD VERIFIED SOLUTION]',
    features: [
      { name: '[ADD VERIFIED FEATURES]', status: 'In Development', note: 'Details coming from verified project documentation.' }
    ],
    contribution: [
      '[ADD VERIFIED CONTRIBUTION]'
    ],
    challenges: [
      '[ADD VERIFIED CHALLENGES]'
    ],
    learning: [
      '[ADD VERIFIED LEARNING]'
    ],
    github: '[ADD GITHUB LINK]',
    demo: '[ADD LIVE LINK]'
  },
  {
    id: 'event-registration-system',
    title: 'Event Registration System',
    category: 'EVENT REGISTRATION • WEB APPLICATION',
    tagline: 'A focused system engineered for seamless attendee registration, data capture, and participant verification.',
    description: '[ADD VERIFIED PROJECT DESCRIPTION]',
    status: 'In Development',
    featured: false,
    verified: false,
    visualType: 'placeholder',
    technologies: [
      '[ADD VERIFIED TECHNOLOGIES]'
    ],
    problem: '[ADD VERIFIED PROBLEM]',
    solution: '[ADD VERIFIED SOLUTION]',
    features: [
      { name: '[ADD VERIFIED FEATURES]', status: 'In Development', note: 'Details coming from verified project documentation.' }
    ],
    contribution: [
      '[ADD VERIFIED CONTRIBUTION]'
    ],
    challenges: [
      '[ADD VERIFIED CHALLENGES]'
    ],
    learning: [
      '[ADD VERIFIED LEARNING]'
    ],
    github: '[ADD GITHUB LINK]',
    demo: '[ADD LIVE LINK]'
  }
];
