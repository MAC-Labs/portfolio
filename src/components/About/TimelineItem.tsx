import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TimelineItemProps {
  icon: LucideIcon;
  date: string;
  title: string;
  description: string;
  color: string;
}

export const TimelineItem = ({ icon: Icon, date, title, description, color }: TimelineItemProps) => {
  return (
    <div className="flex group">
      <div className="flex flex-col items-center mr-4">
        <div className={`rounded-full p-2 ${color} bg-opacity-20 group-hover:bg-opacity-30 
                        transition-all duration-300`}>
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
        <div className="flex-1 w-px bg-gray-700 my-2"></div>
      </div>
      <div className="flex-1 pb-8">
        <div className="text-sm text-gray-400">{date}</div>
        <h3 className="text-xl font-semibold text-white mt-1">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
    </div>
  );
};