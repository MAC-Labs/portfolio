import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  FileDown,
  Mail,
  MapPin,
} from "lucide-react";

export const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: "https://github.com",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
    {
      icon: <Twitter size={20} />,
      label: "Twitter",
      href: "https://twitter.com",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center space-x-3 text-gray-300">
          <Mail size={20} className="text-blue-400" />
          <a
            href="mailto:hello@maclabs.io"
            className="hover:text-white transition-colors"
          >
            hello@maclabs.io
          </a>
        </div>
        <div className="flex items-center space-x-3 text-gray-300">
          <MapPin size={20} className="text-blue-400" />
          <span>Based in Tunisia, available worldwide</span>
        </div>
      </div>

      <div className="flex space-x-4">
        {socialLinks.map(({ icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 
                     transition-colors duration-300 text-gray-300 hover:text-white"
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </div>

      <a
        href="/resume.pdf"
        download
        className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/50 
                 hover:bg-gray-700/50 rounded-lg transition-colors duration-300"
      >
        <FileDown size={20} />
        <span>Download Resume</span>
      </a>
    </div>
  );
};
