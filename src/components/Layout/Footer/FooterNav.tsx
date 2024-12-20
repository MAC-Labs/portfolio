import React from 'react';

export const FooterNav = () => {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white">Quick Links</h3>
      <ul className="space-y-2">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};