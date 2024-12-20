import React from "react";
import { Code2 } from "lucide-react";

export const ProfileSection = () => {
  return (
    <div className="mb-8 relative">
      <div
        className="w-32 h-32 rounded-full border-4 border-white/10 overflow-hidden mb-6 mx-auto 
                    shadow-2xl transform hover:scale-105 transition-transform duration-300"
      >
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300"
          alt="MAC The Developer"
          className="w-full h-full object-cover"
        />
      </div>
      <Code2
        className="absolute top-0 right-0 text-blue-400 animate-spin-slow"
        size={24}
      />
    </div>
  );
};
