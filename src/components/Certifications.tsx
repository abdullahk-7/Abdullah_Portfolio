import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import cert1 from '../images/cer1.png'; 
import cert2 from '../images/cert2.jpeg'; 

import { image } from 'framer-motion/client';

const Certifications: React.FC = () => {
  
  const certifications = [
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      year: '2025',
      description: 'Foundational cybersecurity skills and knowledge',
      badge: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=200',
      verified: false
    },
    {
      name: 'SOC Level 1 — TryHackMe',
      issuer: 'Try Hack Me',
      year: '2025',
      description: 'An introductory hands-on course covering SIEM monitoring, log analysis, threat detection, and incident response fundamentals.',
      badge: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=200',
      verified: true
    },
    {
      name: 'Google Cybersecurity Professional Certificate',
      issuer: 'Coursera',
      year: '2025',
      description: 'A comprehensive program that introduces core cybersecurity concepts, common threats, vulnerabilities, and industry best practices for safeguarding systems, networks, and data.',
      badge: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=200',
      verified: true
    },
    {
      name: 'Introduction to Cybersecurity',
      issuer: 'Coursera',
      year: '2023',
      description: 'Introduction to Cybersecurity – A foundational course covering key security concepts, threats, vulnerabilities, and best practices for protecting systems and data.',
      badge: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=200',
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
      year: '2024',
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
                  src={cert.badge || cert.image}
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

                <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
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
            <div className="text-3xl font-bold text-green-400 mb-2">4</div>
            <div className="text-gray-400">Verified Certs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">2</div>
            <div className="text-gray-400">In Progress</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">240+</div>
            <div className="text-gray-400">Training Hours</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;