import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, ExternalLink, X } from 'lucide-react';
import cert1 from '../images/cer1.png'; 
import cert2 from '../images/cert2.jpeg'; 
import googleCyber from '../images/Google_Cyber.png';
import introToCyber from '../images/Intro_to_Cyber.png';
import socLevel1 from '../images/SOC_Level_1.png';
import introToAI from '../images/Intro_to_AI.png';

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  // Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert !== null) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);
  
  const certifications = [
    {
      name: 'SOC Level 1 — TryHackMe',
      issuer: 'Try Hack Me',
      year: '2025',
      description: 'An introductory hands-on course covering SIEM monitoring, log analysis, threat detection, and incident response fundamentals.',
      image: socLevel1,
      verified: true
    },
    {
      name: 'Google Cybersecurity Professional Certificate',
      issuer: 'Coursera',
      year: '2025',
      description: 'A comprehensive program that introduces core cybersecurity concepts, common threats, vulnerabilities, and industry best practices for safeguarding systems, networks, and data.',
      image: googleCyber,
      verified: true
    },
    {
      name: 'Introduction to Cybersecurity',
      issuer: 'Coursera',
      year: '2023',
      description: 'Introduction to Cybersecurity – A foundational course covering key security concepts, threats, vulnerabilities, and best practices for protecting systems and data.',
      image: introToCyber,
      verified: true
    },
    {
      name: 'Introduction to AI',
      issuer: 'Coursera',
      year: '2023',
      description: 'Introduction to AI – A foundational course covering artificial intelligence concepts, machine learning fundamentals, and AI applications.',
      image: introToAI,
      verified: true
    },
    {
      name: 'Certificate of Appreciation',
      issuer: 'Eric Wagner, Chief Marketing Officer, NetSol Technologies',
      year: '2024',
      description: 'Recognized for applying information security fundamentals and hands-on technical skills in developing and optimizing the NetSol corporate website using the Nuxt 3 framework.',
      image: cert2, // store imported image,
      verified: true
    },
    {
      name: 'Certificate of Appreciation',
      issuer: 'Adeel Sarwar, Chief Technology Officer, CareCloud',
      year: '2025',
      description: 'Acknowledged for leveraging cybersecurity expertise and automation skills to enhance security operations, including SIEM monitoring, EDR analysis, and SOAR platform evaluation.',
      image: cert1, // store imported image,
      verified: true
    },
  
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Certifications & Recognitions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise and commitment to cybersecurity excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={cert.image || cert.badge}
                  alt={cert.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  {cert.verified ? (
                    <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                      <Award className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  ) : (
                    <div className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full">
                      In Progress
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {cert.name}
                </h3>
                
                <div className="flex items-center text-gray-400 text-sm mb-3 space-x-4">
                  <span className="font-medium text-purple-400">{cert.issuer}</span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.year}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                <button 
                  onClick={() => setSelectedCert(index)}
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">View Certificate</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">6</div>
            <div className="text-gray-400">Total Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">6</div>
            <div className="text-gray-400">Verified Certs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
            <div className="text-gray-400">In Progress</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">240+</div>
            <div className="text-gray-400">Training Hours</div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal/Lightbox */}
      <AnimatePresence>
        {selectedCert !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors duration-200 z-10"
                aria-label="Close"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Certificate Image Container */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                <div className="overflow-auto max-h-[90vh]">
                  <img
                    src={certifications[selectedCert]?.image || certifications[selectedCert]?.badge}
                    alt={certifications[selectedCert]?.name}
                    className="w-full h-auto object-contain"
                  />
                </div>
                
                {/* Certificate Info */}
                <div className="p-6 bg-gray-900 border-t border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {certifications[selectedCert]?.name}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm space-x-4">
                    <span className="font-medium text-purple-400">
                      {certifications[selectedCert]?.issuer}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{certifications[selectedCert]?.year}</span>
                    </div>
                    {certifications[selectedCert]?.verified && (
                      <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                        <Award className="w-3 h-3" />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;