export interface Technology {
  name: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}