import React from 'react';
import { ChevronDown } from 'lucide-react';

export const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 
                  animate-bounce flex flex-col items-center">
      <span className="text-sm mb-2">Scroll down to explore my work</span>
      <ChevronDown size={20} />
    </div>
  );
};