import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  level: number;
  color: string;
}

export const SkillCard = ({ icon: Icon, name, level, color }: SkillCardProps) => {
  return (
    <div className="group relative bg-gray-800/50 rounded-xl p-4 hover:bg-gray-800/80 
                    transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center space-x-3 mb-2">
        <Icon className={`${color} w-6 h-6`} />
        <h3 className="text-lg font-semibold text-white">{name}</h3>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className={`${color} h-2 rounded-full transition-all duration-500 ease-out group-hover:opacity-100 opacity-75`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};