export type ProjectStatus = 'Completed' | 'In Development' | 'Prototype' | 'Deployed' | 'Archived' | 'Planned';

export type FeatureItem = {
  name: string;
  status: 'Implemented' | 'In Development' | 'Planned';
  note?: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  status?: ProjectStatus;
  problem?: string;
  approach?: string;
  solution?: string;
  technologies: string[];
  workflow?: string[];
  features?: (string | FeatureItem)[];
  architecture?: {
    layers: { name: string; description: string; items?: string[] }[];
    authFlow?: string[];
  };
  contribution?: string[];
  challenges?: string[];
  learning?: string[];
  github?: string;
  demo?: string;
  visualType: 'analytics-dashboard' | 'system-architecture' | 'placeholder';
  featured?: boolean;
  hackathonAssociation?: string;
  verified: boolean;
};

export type Hackathon = {
  id: string;
  name: string;
  organizer?: string;
  date: string;
  duration: string;
  format: 'Online' | 'In-person' | 'Hybrid' | 'Virtual';
  location?: string;
  theme: string;
  projectAssociated?: {
    projectId: string;
    projectName: string;
  };
  participationType: 'Solo' | 'Team';
  description: string;
  storyFlow: string[];
  focusAreas: string[];
  technologies: string[];
  learning: string[];
  verified: boolean;
};

export type SkillCategory = {
  name: string;
  skills: {
    name: string;
    evidenceProject?: {
      id: string;
      title: string;
    };
  }[];
};
