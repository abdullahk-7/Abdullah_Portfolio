import React from 'react';
import { Shield, Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'SOC Monitoring',
    'Threat Hunting',
    'Vulnerability Assessment',
    'Penetration Testing',
    'Incident Response',
    'Security Consultation'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">Abdullah Khan</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Junior SOC Analyst & Cybersecurity Enthusiast dedicated to defending digital infrastructures 
              and protecting organizations from evolving cyber threats.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/abdullahk-7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="http://www.linkedin.com/in/abdullah-khan-2001y11m15d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:khan.abdulah@hotmail.com"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="text-cyan-400">Email:</span><br />
                khan.abdulah@hotmail.com
              </p>
              <p className="text-gray-400">
                <span className="text-cyan-400">Phone:</span><br />
                +92 (336) 2238524
              </p>
              <p className="text-gray-400">
                <span className="text-cyan-400">Location:</span><br />
                Islamabad, Pakistan
              </p>
            </div>
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© 2025 Abdullah Khan. All rights reserved.</span>
            </div>
            
            

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </footer>
  );
};

export default Footer;