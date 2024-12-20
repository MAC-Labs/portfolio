import React from "react";
import { Code2 } from "lucide-react";

export const Logo = () => {
  return (
    <a
      href="#"
      className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
    >
      <Code2 size={24} className="text-blue-400" />
      <div>
        <span className="font-bold text-lg">MAC The Developer</span>
        <span className="hidden sm:block text-sm text-gray-400">
          Full-Stack Developer
        </span>
      </div>
    </a>
  );
};
