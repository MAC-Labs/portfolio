import React, { useState } from 'react';
import { ProjectFilters } from './ProjectFilters';
import { ProjectGrid } from './ProjectGrid';
import { projects } from './projectData';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const categories = [...new Set(projects.map(project => project.category))];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 
                       text-transparent bg-clip-text">
            My Work
          </h2>
          <p className="text-lg text-gray-300">
            Here are some of the projects I've worked on, showcasing my expertise in building 
            scalable, user-centric applications.
          </p>
        </div>

        {/* Filters */}
        <ProjectFilters
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Projects Grid */}
        <ProjectGrid projects={projects} filter={activeFilter} />

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 
                     rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Explore More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;