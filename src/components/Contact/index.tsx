import React from 'react';
import { ContactForm } from './ContactForm';
import { SocialLinks } from './SocialLinks';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 
                       text-transparent bg-clip-text">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-300">
            I'd love to hear about your project or ideas. Feel free to reach out, and let's create 
            something amazing together!
          </p>
        </div>

        {/* Contact Content */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm">
            <ContactForm />
          </div>

          {/* Social Links & Info */}
          <div className="lg:pl-12 flex flex-col justify-center">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;