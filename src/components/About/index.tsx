import React from 'react';
import { Introduction } from './Introduction';
import { SkillsGrid } from './SkillsGrid';
import { Timeline } from './Timeline';
import { FileDown } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            <Introduction />
            <Timeline />
            <button className="flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 
                             rounded-full font-semibold transition-all duration-300 text-white">
              <FileDown size={20} />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Right Column */}
          <div className="lg:sticky lg:top-8">
            <h2 className="text-2xl font-bold mb-8 text-white">Technical Skills</h2>
            <SkillsGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;