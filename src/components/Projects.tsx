import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, ExternalLink, Shield, Mail, Lock, X } from 'lucide-react';
import safesheImage from '../images/SafeShe_Poster_Main.jpg';
import phishawareImage from '../images/PhishAware.jpeg';
import ciphervaultImage from '../images/CipherVault.jpeg';

const Projects: React.FC = () => {
  const [selectedPoster, setSelectedPoster] = useState<number | null>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedPoster(null);
      }
    };
    if (selectedPoster !== null) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedPoster]);
  
  const projects = [
    {
      title: 'SafeShe (FYP – 1st Place, Faculty of CSE)',
      description: 'A mobile application designed to enhance women\'s safety through real-time alerting, community engagement, and AI-based voice recognition.',
      tech: ['Flutter', 'Firebase', 'Python (CNN)', 'Google Maps API'],
      features: [
        'LawPath: Guides users about women\'s protection laws',
        'SOS Button: Sends live GPS coordinates to family and police',
        'Community Feature: Enables nearby users to receive SOS alerts',
        'Voice Recognition: CNN model detects emergency keywords',
        'SafeZones: Alerts users when entering areas with previous incidents',
        'Secure Login/Signup: Firebase authentication with encryption'
      ],
      icon: Shield,
      category: 'Mobile Security App',
      demoSubject: 'request-demo-safeshe',
      image: safesheImage
    },
    {
      title: 'PhishAware (Python, CareCloud)',
      description: 'A Python-based internal security automation system for ~3,000 HIPAA-regulated users, simulating phishing attacks to enhance employee awareness and compliance.',
      tech: ['Python', 'Flask', 'HTML/CSS', 'SMTP', 'SQLite'],
      features: [
        'Automated phishing campaigns via SMTP',
        'Click-tracking and analytics dashboard',
        'Auto-assigned user training modules',
        'HIPAA-compliant data handling and reporting'
      ],
      icon: Mail,
      category: 'Internal Security Platform',
      demoSubject: 'request-demo-phishaware',
      image: phishawareImage
    },
    {
      title: 'Password Manager (Python)',
      description: 'A secure, offline-first password manager with end-to-end encryption, automatic credential sync, and brute-force protection.',
      tech: ['Python', 'PyCryptodome', 'Tkinter', 'SQLite', 'Cloud APIs'],
      features: [
        'AES-256 encryption for stored credentials',
        'Local and cloud synchronization',
        'Autofill for 50+ websites',
        'Self-destruct after failed login attempts'
      ],
      icon: Lock,
      category: 'Encrypted Credential Management',
      demoSubject: 'request-demo-password-manager',
      image: ciphervaultImage
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-inter">
            Cybersecurity & Systems Engineering Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto font-inter">
            Innovative cybersecurity solutions and tools developed to enhance security operations and threat detection capabilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.slice(0, 2).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-green-400 transition-all duration-300 group hover:shadow-lg hover:shadow-green-400/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <project.icon className="w-6 h-6 text-green-400" />
                  <span className="bg-gray-900/90 text-green-400 text-xs px-3 py-1 rounded-full font-inter font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 font-inter">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300 font-inter">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-3 font-inter">Key Features:</h4>
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-gray-400 flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-2 font-inter">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700/50 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-600 font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button 
                    onClick={() => setSelectedPoster(index)}
                    className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors duration-200 hover:shadow-lg hover:shadow-green-400/30 px-3 py-2 rounded-lg hover:bg-green-400/10 font-inter font-medium"
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span className="text-sm">View Poster</span>
                  </button>
                  <button 
                    onClick={() => {
                      const url = new URL(window.location.href);
                      url.searchParams.set('demo', project.demoSubject);
                      window.history.pushState({}, '', url);
                      
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 hover:shadow-lg hover:shadow-cyan-400/30 px-3 py-2 rounded-lg hover:bg-cyan-400/10 font-inter font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Request Demo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Third Project - Centered */}
        {(() => {
          const thirdProject = projects[2];
          const ThirdProjectIcon = thirdProject.icon;
          return (
            <div className="max-w-6xl mx-auto mt-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-green-400 transition-all duration-300 group hover:shadow-lg hover:shadow-green-400/20 max-w-2xl mx-auto"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={thirdProject.image}
                    alt={thirdProject.title}
                    className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <ThirdProjectIcon className="w-6 h-6 text-green-400" />
                    <span className="bg-gray-900/90 text-green-400 text-xs px-3 py-1 rounded-full font-inter font-medium">
                      {thirdProject.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 font-inter">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300 font-inter">
                    {thirdProject.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {thirdProject.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-3 font-inter">Key Features:</h4>
                    <div className="space-y-2">
                      {thirdProject.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-sm text-gray-400 flex items-start">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-2 font-inter">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {thirdProject.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-700/50 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-600 font-inter"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button 
                      onClick={() => setSelectedPoster(2)}
                      className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors duration-200 hover:shadow-lg hover:shadow-green-400/30 px-3 py-2 rounded-lg hover:bg-green-400/10 font-inter font-medium"
                    >
                      <ImageIcon className="w-4 h-4" />
                      <span className="text-sm">View Poster</span>
                    </button>
                    <button 
                      onClick={() => {
                        const url = new URL(window.location.href);
                        url.searchParams.set('demo', thirdProject.demoSubject);
                        window.history.pushState({}, '', url);
                        
                        const element = document.getElementById('contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 hover:shadow-lg hover:shadow-cyan-400/30 px-3 py-2 rounded-lg hover:bg-cyan-400/10 font-inter font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Request Demo</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </div>

      {/* Poster Modal/Lightbox */}
      <AnimatePresence>
        {selectedPoster !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPoster(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPoster(null)}
                className="absolute -top-12 right-0 text-white hover:text-green-400 transition-colors duration-200 z-10"
                aria-label="Close"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                <div className="overflow-auto max-h-[90vh]">
                  <img
                    src={projects[selectedPoster]?.image}
                    alt={projects[selectedPoster]?.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
                
                <div className="p-6 bg-gray-900 border-t border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {projects[selectedPoster]?.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {projects[selectedPoster]?.category}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;