import React from 'react';

export const CTAButtons = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mb-16 animate-fade-in-delay-3">
      <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold 
                       transform hover:scale-105 transition-all duration-300 shadow-lg">
        View My Work
      </button>
      <button className="px-8 py-3 bg-transparent border-2 border-white/20 hover:border-white/40 
                       rounded-full font-semibold transform hover:scale-105 transition-all duration-300">
        Contact Me
      </button>
    </div>
  );
};