import React from 'react';
import { Github, ExternalLink, Tag } from 'lucide-react';

interface Technology {
  name: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) => {
  return (
    <div className={`group relative bg-gray-800/50 rounded-xl overflow-hidden transition-all duration-300 
                    transform hover:-translate-y-2 hover:shadow-xl
                    ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 
                     group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm ${tech.color}`}
            >
              <Tag size={12} />
              <span>{tech.name}</span>
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 
                       rounded-lg transition-colors duration-300"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 
                       rounded-lg transition-colors duration-300"
            >
              <Github size={16} />
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};