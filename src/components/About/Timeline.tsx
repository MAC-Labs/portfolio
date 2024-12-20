import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { TimelineItem } from './TimelineItem';

export const Timeline = () => {
  const experiences = [
    {
      icon: Briefcase,
      date: '2022 - Present',
      title: 'Senior Full-Stack Developer',
      description: 'Leading development of scalable web applications using React and FastAPI.',
      color: 'text-blue-400'
    },
    {
      icon: GraduationCap,
      date: '2020 - 2022',
      title: 'Master\'s in Computer Science',
      description: 'Specialized in Software Engineering and Distributed Systems.',
      color: 'text-purple-400'
    },
    {
      icon: Award,
      date: '2019 - 2020',
      title: 'Tech Lead',
      description: 'Led a team of developers and implemented best practices for code quality.',
      color: 'text-green-400'
    }
  ];

  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold mb-8 text-white">Experience & Education</h2>
      <div className="space-y-2">
        {experiences.map((exp) => (
          <TimelineItem key={exp.title} {...exp} />
        ))}
      </div>
    </div>
  );
};