import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export const SocialLinks = () => {
  return (
    <div className="flex gap-6 mb-16 animate-fade-in-delay-4">
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Github size={24} />
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Linkedin size={24} />
      </a>
    </div>
  );
};