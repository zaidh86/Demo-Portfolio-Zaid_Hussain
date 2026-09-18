import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'LANGUAGES',
    skills: [
      { name: 'Python', evidenceProject: { id: 'ai-data-analyzer', title: 'AI Data Analyzer' } },
      { name: 'TypeScript', evidenceProject: { id: 'transitops', title: 'TransitOps' } },
      { name: 'JavaScript' },
      { name: 'SQL', evidenceProject: { id: 'transitops', title: 'TransitOps' } }
    ]
  },
  {
    name: 'DATA & ANALYTICS',
    skills: [
      { name: 'Pandas', evidenceProject: { id: 'ai-data-analyzer', title: 'AI Data Analyzer' } },
      { name: 'Matplotlib', evidenceProject: { id: 'ai-data-analyzer', title: 'AI Data Analyzer' } },
      { name: 'Plotly', evidenceProject: { id: 'ai-data-analyzer', title: 'AI Data Analyzer' } },
      { name: 'Data Analysis', evidenceProject: { id: 'ai-data-analyzer', title: 'AI Data Analyzer' } },
      { name: 'Data Visualization', evidenceProject: { id: 'ai-data-analyzer', title: 'AI Data Analyzer' } }
    ]
  },
  {
    name: 'ARTIFICIAL INTELLIGENCE',
    skills: [
      { name: 'Artificial Intelligence', evidenceProject: { id: 'ai-data-analyzer', title: 'AI Data Analyzer' } },
      { name: 'Machine Learning' },
      { name: 'AI-powered Applications', evidenceProject: { id: 'ai-data-analyzer', title: 'AI Data Analyzer' } },
      { name: 'LLM / AI APIs', evidenceProject: { id: 'ai-data-analyzer', title: 'AI Data Analyzer' } }
    ]
  },
  {
    name: 'BACKEND & DATABASE',
    skills: [
      { name: 'Express.js', evidenceProject: { id: 'transitops', title: 'TransitOps' } },
      { name: 'PostgreSQL', evidenceProject: { id: 'transitops', title: 'TransitOps' } },
      { name: 'Prisma ORM', evidenceProject: { id: 'transitops', title: 'TransitOps' } },
      { name: 'JWT Authentication', evidenceProject: { id: 'transitops', title: 'TransitOps' } },
      { name: 'Zod Validation', evidenceProject: { id: 'transitops', title: 'TransitOps' } }
    ]
  },
  {
    name: 'FRONTEND & TOOLS',
    skills: [
      { name: 'Streamlit', evidenceProject: { id: 'ai-data-analyzer', title: 'AI Data Analyzer' } },
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'REST APIs', evidenceProject: { id: 'transitops', title: 'TransitOps' } },
      { name: 'Git & GitHub', evidenceProject: { id: 'ai-data-analyzer', title: 'AI Data Analyzer' } }
    ]
  }
];
