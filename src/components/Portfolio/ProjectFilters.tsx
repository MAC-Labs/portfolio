import React from 'react';
import { FilterButton } from './FilterButton';

interface ProjectFiltersProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const ProjectFilters = ({ 
  categories, 
  activeFilter, 
  onFilterChange 
}: ProjectFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-3 mb-12">
      <FilterButton
        label="All"
        active={activeFilter === 'all'}
        onClick={() => onFilterChange('all')}
      />
      {categories.map((category) => (
        <FilterButton
          key={category}
          label={category}
          active={activeFilter === category}
          onClick={() => onFilterChange(category)}
        />
      ))}
    </div>
  );
};