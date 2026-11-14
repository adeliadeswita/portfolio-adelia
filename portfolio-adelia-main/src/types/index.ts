export interface ProjectGalleryItem {
  title: string;
  caption?: string;
  image?: string;
  placeholder?: string;
  badge?: string;
}

export interface ProjectWorkflowStep {
  step: string;
  title: string;
  subtitle: string;
  description?: string;
  details?: string[];
  isDeepDive?: boolean;
  deepDiveActions?: string[];
}

export interface ProjectImpactMetric {
  metric: string;
  value: string;
  note: string;
}

export interface ProjectLinks {
  report?: string;
  dashboard?: string;
  streamlit?: string;
  github?: string;
  colab?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  affiliation?: string;
  projectType: "Individual" | "Group" | "Internship" | string;
  domain: string;
  category: string | string[];
  year: string;
  role: string;
  duration?: string;
  tools: string[];
  links?: ProjectLinks;
  overview: string;
  keyNumbers?: string[];
  workDone?: string[];
  keyLearnings?: string;
  sqlTopics?: string[];
  gallery?: ProjectGalleryItem[];
  featured?: boolean;
  coverImage?: string;
  shortDescription?: string;

  // Extended fields for Project #1 (Blibli)
  primaryStack?: string;
  keyImpactMetrics?: ProjectImpactMetric[];
  commercialContext?: {
    overview: string;
    questions: string[];
  };
  problemStatement?: {
    bottleneck: string;
    objectives: string[];
  };
  datasetScopeDetails?: {
    standards: string;
    statChips: string[];
  };
  methodologyExecution?: {
    step: string;
    title: string;
    description: string;
  }[];
  workflowSteps?: ProjectWorkflowStep[];
  codeSnippet?: {
    language: string;
    title: string;
    subtitle: string;
    description: string;
    code: string;
  };
  codeSnippets?: {
    language: string;
    title: string;
    subtitle: string;
    description: string;
    code: string;
  }[];
  keyFindings?: {
    quantitative: { title: string; desc: string }[];
    recommendations: string[];
  };
  challengesLearnings?: {
    title: string;
    desc: string;
  }[];
  confidentialityNote?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  employmentType: string;
  period: string;
  location: string;
  badge?: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  tools: string[];
  relatedProjectSlug?: string;
  relatedProjectTitle?: string;
}

export interface SkillItem {
  name: string;
  level: "Advanced" | "Proficient" | "Working Knowledge";
  applicationSummary: string;
  projectsUsed: string[];
}

export interface SkillGroup {
  group: string;
  summary: string;
  iconName: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: "Data Analytics & BI" | "Databases & Cloud" | "Programming & Data Science" | "General Analytics";
  year?: string;
  skills?: string[];
  credentialUrl?: string;
}

export interface OrganizationExperience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  category?: string;
  description: string;
  responsibilities?: string[];
  highlights?: string[];
  skills?: string[];
}

export interface Profile {
  name: string;
  title: string;
  headline: string;
  tagline: string;
  location: string;
  availability: string;
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  cvUrl: string;
  bioShort: string;
  bioFull: string[];
  academicBackground: {
    degree: string;
    institution: string;
    period: string;
    focus: string;
    gpa?: string;
    relevantCourses?: string[];
    highlights: string[];
  }[];
  philosophies: {
    title: string;
    description: string;
  }[];
  expertiseAreas: {
    title: string;
    description: string;
    tools: string[];
  }[];
}
