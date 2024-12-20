import React from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';

export const NavLinks = () => {
  const activeSection = useScrollSpy(['home', 'about', 'portfolio', 'contact']);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="flex items-center space-x-8">
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className={`text-sm font-medium transition-all duration-300 relative
                    ${activeSection === href.slice(1) 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-white'}`}
        >
          {label}
          {activeSection === href.slice(1) && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full" />
          )}
        </a>
      ))}
    </div>
  );
};