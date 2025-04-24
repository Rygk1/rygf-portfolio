export interface PortfolioData {
  navbar: NavItem[];
  about: AboutSection;
  projects: Project[];
  education: Education;
  technologies: Technology[];
  tools: Tool[];
  skills: Skills;
  learning: Technology[];
}

export interface NavItem {
  id: string;
  opt: string;
}

export interface AboutSection {
  name: string;
  contact: Contact;
  profession: string;
  summary: string;
  summaryTwo: string;
  summaryThree: string;
  summaryFour: string;
  summaryFive: string;
}

export interface Contact {
  phone: string;
  email: string;
  linkedin: string;
}

export interface Project {
  title: string;
  description: string;
  type: string; // Type of project (e.g., mobile, web, etc.)
  technologies: string[];
  mainImage: string; // URL of the main image
  images: string[]; // Array of URLs for additional images
  link: string;
}

export interface Education {
  institution: string;
  degree: string;
  graduationYear: number;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Tool extends Technology {}

export interface Skills {
  languages: string[];
  frameworks: string[];
  programmingLanguages: string[];
  databases: string[];
  markupAndStyling: string[];
  tools: string[];
  versionControl: string[];
  methodologies: string[];
  unitTesting: string[];
}
