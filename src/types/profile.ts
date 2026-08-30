// Shared content types for the portfolio's data layer (src/data/profile.ts).
// Keeping these separate from the data itself makes the data file easy to
// scan and edit without touching any UI component.

export interface SocialLinks {
  email: string;
  linkedin?: string; // omit until a real profile URL is provided
  github?: string;
  location: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  location: string;
  period?: string; // omitted until exact dates are confirmed
  current: boolean;
  summary: string;
  responsibilities: string[];
  devOpsHighlights: string[]; // responsibilities that map directly to DevOps/CI-CD/Cloud work
  tech: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution?: string; // omitted if unknown rather than fabricated
  location: string;
  period?: string;
  focusAreas?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  status: "completed" | "in-progress";
  credentialId?: string;
  credentialUrl?: string;
}

export type SkillDomain =
  | "Cloud"
  | "Containers"
  | "Kubernetes"
  | "Infrastructure as Code"
  | "Configuration Management"
  | "CI/CD"
  | "GitOps"
  | "Observability"
  | "Security"
  | "Programming & Scripting"
  | "Testing & Automation"
  | "Operating Systems"
  | "Networking";

export interface SkillGroup {
  domain: SkillDomain;
  blurb: string;
  items: string[];
}

export type UsageContext = "professional" | "portfolio" | "learning";

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  architecture: string;
  infrastructure: string;
  cicd: string;
  containerization: string;
  kubernetes: string;
  security: string;
  observability: string;
  troubleshooting: string;
  challenges: { title: string; detail: string; labeled: "confirmed" | "production-style scenario" }[];
  solution: string;
  outcome: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date?: string;
  projectType: string;
  statusLabel: string;
  statusTone: "healthy" | "warning" | "info";
  description: string;
  technologies: string[];
  pipeline: string[];
  github?: string;
  demo?: string;
  ctaCaseStudy: string;
  caseStudy: ProjectCaseStudy;
}

export interface JourneyStage {
  id: string;
  stage: string;
  label: string;
  technologies: string[];
  concepts: string[];
  relatedProjects: string[];
  connection: string;
}

export interface IncidentStep {
  step: string;
  detail: string;
}

export interface Incident {
  id: string;
  title: string;
  label: string;
  scenario: string;
  steps: IncidentStep[];
  note: string;
}

export interface ControlPlaneNode {
  id: string;
  stage: string;
  tools: string[];
  description: string;
  context: UsageContext;
  relatedProject?: string;
}

export interface PipelineStage {
  id: string;
  stage: string;
  technologies: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface AWSArchitectureNode {
  id: string;
  label: string;
  service: string;
  description: string;
  relatedProject: string;
}
