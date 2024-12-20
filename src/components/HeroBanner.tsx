import React from "react";
import { Github, Linkedin, ChevronDown, Code2 } from "lucide-react";

const HeroBanner = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-6 pt-32 pb-16 flex flex-col items-center text-center z-10">
        {/* Profile section */}
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

        {/* Text content */}
        <h1 className="text-5xl font-bold mb-6 animate-fade-in">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            MAC The Developer
          </span>
        </h1>
        <h2 className="text-3xl font-semibold mb-4 animate-fade-in-delay-1">
          Full-Stack Web Developer
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mb-12 animate-fade-in-delay-2">
          I build scalable, user-friendly applications using modern technologies
          like React, FastAPI, and MongoDB.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-6 justify-center mb-16 animate-fade-in-delay-3">
          <button
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold 
                           transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View My Work
          </button>
          <button
            className="px-8 py-3 bg-transparent border-2 border-white/20 hover:border-white/40 
                           rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </button>
        </div>

        {/* Social links */}
        <div className="flex gap-6 mb-16 animate-fade-in-delay-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 
                      animate-bounce flex flex-col items-center"
        >
          <span className="text-sm mb-2">Scroll down to explore my work</span>
          <ChevronDown size={20} />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
