import React from "react";
import { FooterNav } from "./FooterNav";
import { SocialLinks } from "./SocialLinks";
import { ScrollToTop } from "./ScrollToTop";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Let's Connect</h3>
            <p className="text-gray-400 leading-relaxed">
              Thanks for visiting! I'm always open to new opportunities and
              collaborations. Let's build something amazing together.
            </p>
          </div>

          {/* Center Column - Navigation */}
          <FooterNav />

          {/* Right Column - Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Follow Me</h3>
            <SocialLinks />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} MAC The Developer. All rights reserved.
          </p>
          <ScrollToTop />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
