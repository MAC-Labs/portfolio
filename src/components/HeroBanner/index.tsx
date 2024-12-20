import React from 'react';
import { BackgroundEffects } from './BackgroundEffects';
import { ProfileSection } from './ProfileSection';
import { IntroSection } from './IntroSection';
import { CTAButtons } from './CTAButtons';
import { SocialLinks } from './SocialLinks';
import { ScrollIndicator } from './ScrollIndicator';

const HeroBanner = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <BackgroundEffects />

      {/* Main content */}
      <div className="relative container mx-auto px-6 pt-32 pb-16 flex flex-col items-center text-center z-10">
        <ProfileSection />
        <IntroSection />
        <CTAButtons />
        <SocialLinks />
        <ScrollIndicator />
      </div>
    </div>
  );
};

export default HeroBanner;