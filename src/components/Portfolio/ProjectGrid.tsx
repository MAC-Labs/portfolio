import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Project } from './types';

interface ProjectGridProps {
  projects: Project[];
  filter: string;
}

export const ProjectGrid = ({ projects, filter }: ProjectGridProps) => {
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};