import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:hello@maclabs.io",
      label: "Email",
    },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};
