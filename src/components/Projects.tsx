import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, Network, Search, AlertTriangle } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'SOC Automation Dashboard',
      description: 'A comprehensive security operations dashboard with real-time threat monitoring, automated incident response, and customizable alerting system.',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Splunk', 'Flask', 'JavaScript'],
      features: ['Real-time monitoring', 'Automated alerts', 'Incident tracking', 'Custom dashboards'],
      icon: Shield,
      category: 'SOC Tools',
      status: 'Completed'
    },
    {
      title: 'Network Traffic Analyzer',
      description: 'Advanced network packet analysis tool with machine learning capabilities for detecting anomalous traffic patterns and potential security threats.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Wireshark', 'Scapy', 'TensorFlow'],
      features: ['Packet analysis', 'ML threat detection', 'Traffic visualization', 'Alert system'],
      icon: Network,
      category: 'Network Security',
      status: 'In Progress'
    },
    {
      title: 'Threat Intelligence Platform',
      description: 'Centralized threat intelligence aggregation platform that collects, analyzes, and correlates threat data from multiple sources.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'REST APIs', 'MongoDB', 'React'],
      features: ['Multi-source integration', 'IOC management', 'Threat correlation', 'API endpoints'],
      icon: Search,
      category: 'Threat Intelligence',
      status: 'Completed'
    },
    {
      title: 'Vulnerability Scanner',
      description: 'Automated vulnerability assessment tool with comprehensive reporting and integration with ticketing systems for remediation tracking.',
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Nessus API', 'PostgreSQL', 'Docker'],
      features: ['Automated scanning', 'Report generation', 'Risk scoring', 'Integration APIs'],
      icon: AlertTriangle,
      category: 'Vulnerability Management',
      status: 'Completed'
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Projects & Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Innovative cybersecurity solutions and tools developed to enhance security operations and threat detection capabilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <project.icon className="w-6 h-6 text-cyan-400" />
                  <span className="bg-gray-900/80 text-cyan-400 text-xs px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">View Code</span>
                  </button>
                  <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;