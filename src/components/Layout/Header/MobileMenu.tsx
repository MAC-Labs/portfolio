import React from 'react';
import { NavLinks } from './NavLinks';
import { ThemeToggle } from './ThemeToggle';
import { FileDown } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`md:hidden fixed inset-x-0 top-20 bg-gray-900/95 backdrop-blur-sm transition-all duration-300 
                ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
    >
      <div className="container mx-auto px-6 py-8 flex flex-col items-center space-y-8">
        <NavLinks />
        <ThemeToggle />
        <a
          href="/resume.pdf"
          download
          className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full 
                   font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
          onClick={onClose}
        >
          <FileDown size={18} />
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
};