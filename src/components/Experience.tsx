import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Junior SOC Analyst',
      company: 'Carecloud',
      location: 'Bagh, Pakistan',
      period: 'May 2025 - Present',
      type: 'Full-time',
      description: 'Leading 24/7 security monitoring and incident response operations in a enterprise SOC environment.',
      responsibilities: [
        'Monitor security events and alerts using SIEM platforms (Solarwinds, Crowdstrike EDR)',
        'Investigate and analyze security incidents, malware, and threat indicators',
        'Perform initial triage and escalation of critical security events',
        'Document incident response procedures and create detailed investigation reports',
        'Collaborate with threat intelligence teams to identify emerging threats',
        'Maintain and update security playbooks and standard operating procedures'
      ],
      achievements: [
        'Reduced mean time to detection (MTTD) by 35% through process optimization',
        'Successfully handled 100+ security incidents with 97.5% accuracy rate',
        'Developed automated alert correlation rules reducing false positives by 40%'
      ],
      technologies: ['Solarwinds SIEM', 'CrowdStrike EDR', 'Wireshark', 'Python', 'Nmap']
    },
    {
      title: 'Technical Intern',
      company: 'Netsol Technologies',
      location: 'Lahore, Pakistan',
      period: 'Jun 2024 - Aug 2024',
      type: 'Internship',
      description: 'Gained hands-on experience in modern web development and performance optimization while contributing to corporate and personal projects.',
      responsibilities: [
        'Collaborated with cross-functional teams to design and deploy the company’s website using Nuxt 3',
        'Improved server-side rendering (SSR) performance to enhance load speed and SEO rankings',
        'Developed a personal portfolio featuring 100+ reusable UI components following modern UI/UX best practices',
        'Refactored and optimized existing codebases for maintainability, scalability, and adherence to coding standards',
        'Conducted debugging sessions to identify and resolve UI and performance bottlenecks'
      ],
      achievements: [
        'Successfully launched a fully optimized corporate website with improved SEO visibility',
        'Created a reusable component library to accelerate future development projects',
        'Streamlined legacy codebases, reducing technical debt and improving maintainability'
      ],
      technologies: ['Nuxt 3', 'JavaScript', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'Figma']
    },
  
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A progressive journey through cybersecurity operations, from foundational support roles to specialized SOC analysis.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-cyan-400 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="flex items-center justify-center w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} mt-4 md:mt-0`}>
                  <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 ml-8 md:ml-0">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Briefcase className="w-5 h-5 text-cyan-400" />
                        <span className="bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full">
                          {experience.type}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {experience.title}
                      </h3>
                      
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">
                        {experience.company}
                      </h4>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-cyan-400 mb-2">Key Responsibilities:</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {experience.responsibilities.slice(0, 3).map((responsibility, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-purple-400 mb-2">Key Achievements:</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1 h-1 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-sm font-semibold text-green-400 mb-2">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;