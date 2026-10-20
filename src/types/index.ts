export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Full Platforms' | 'Interactive Apps' | 'Frontend Clones' | 'Personal & Docs';
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
  featured?: boolean;
  accentColor: string;
  badgeText: string;
  previewType: 'interior' | 'attendance' | 'calculator' | 'optp' | 'apple' | 'amazon' | 'cv' | 'sections';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
  waMessage: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon: string;
    verifiedContext: string;
  }[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  projectType: string;
  message: string;
}
