import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal, Database, Network, Eye, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Cybersecurity Skills',
      icon: Shield,
      skills: [
        { name: 'Threat Analysis', level: 90 },
        { name: 'Incident Response', level: 85 },
        { name: 'Log Analysis', level: 95 },
        { name: 'SIEM Monitoring', level: 92 },
        { name: 'Threat Hunting', level: 80 },
        { name: 'Network Security', level: 88 }
      ]
    },
    {
      title: 'Security Tools',
      icon: Eye,
      skills: [
        { name: 'Solarwinds', level: 90 },
        { name: 'Crowdstrike', level: 85 },
        { name: 'Wireshark', level: 88 },
        { name: 'Nmap', level: 92 },
        { name: 'Nessus', level: 80 },
        { name: 'ELK Stack', level: 75 }
      ]
    },
    {
      title: 'Programming',
      icon: Terminal,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Bash Scripting', level: 90 },
        { name: 'SQL', level: 88 },
        { name: 'PowerShell', level: 75 },
        { name: 'JavaScript', level: 70 },
        { name: 'Regular Expressions', level: 85 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: Zap,
      skills: [
        { name: 'Problem Solving', level: 92 },
        { name: 'Communication', level: 90 },
        { name: 'Team Collaboration', level: 92 },
        { name: 'Critical Thinking', level: 95 },
        { name: 'Attention to Detail', level: 94 },
        { name: 'Time Management', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit developed through hands-on experience in cybersecurity operations and continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">Security Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Solarwinds', 'Crowdstrike', 'Splunk SOAR', 'Wireshark', 'Nmap', 'Nessus',
              'Burp Suite', 'Metasploit', 'Kali Linux', 'YARA', 'Zeek', 'Autopsy'
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700 hover:border-cyan-400 hover:bg-gray-750 transition-all duration-300 cursor-pointer"
              >
                <span className="text-gray-300 font-medium text-sm">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;