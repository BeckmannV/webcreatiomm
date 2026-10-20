export interface Project {
  id: string;
  name: string;
  type: 'Projeto Conceitual' | 'Projeto Publicado';
  category: string;
  shortDescription: string;
  fullDescription: string;
  objectives: string;
  features: string[];
  technologies: string[];
  status: string;
  image: string;
  liveUrl?: string;
  accentColor: string;
  highlights: {
    title: string;
    description: string;
  }[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  targetAudience: string;
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  contact: string;
  projectType: string;
  description: string;
  timeline?: string;
  budget?: string;
}
