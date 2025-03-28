
export interface GithubProject {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiency: number;
  icon?: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  skills?: string[];
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface ProjectCategory {
  name: string;
  slug: string;
}
