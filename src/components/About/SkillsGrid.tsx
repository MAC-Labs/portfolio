import React from 'react';
import { Code2, Database, Globe, Layout, Server, Terminal } from 'lucide-react';
import { SkillCard } from './SkillCard';

export const SkillsGrid = () => {
  const skills = [
    { icon: Code2, name: 'React & TypeScript', level: 90, color: 'text-blue-400' },
    { icon: Server, name: 'FastAPI', level: 85, color: 'text-green-400' },
    { icon: Database, name: 'MongoDB', level: 80, color: 'text-purple-400' },
    { icon: Globe, name: 'REST APIs', level: 85, color: 'text-yellow-400' },
    { icon: Layout, name: 'UI/UX Design', level: 75, color: 'text-pink-400' },
    { icon: Terminal, name: 'DevOps', level: 70, color: 'text-orange-400' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
      {skills.map((skill) => (
        <SkillCard key={skill.name} {...skill} />
      ))}
    </div>
  );
};