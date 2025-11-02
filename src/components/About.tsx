import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Proactive approach to threat detection and prevention'
    },
    {
      icon: Target,
      title: 'Precision Focus',
      description: 'Accurate incident analysis and rapid response capabilities'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Effective communication within SOC and IT teams'
    },
    {
      icon: Zap,
      title: 'Quick Response',
      description: '24/7 monitoring and immediate threat mitigation'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-cyan-400">Junior SOC Analyst & Cybersecurity Enthusiast</h3>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
              Welcome to my digital fortress! 
              I’m Abdullah Khan, a dedicated Junior SOC Analyst with hands-on experience in protecting digital assets and responding to evolving cyber threats.
              </p>
              
              <p>
                Currently working in a Security Operations Center environment, I specialize in real-time threat 
                monitoring, incident response, and security event analysis. My expertise spans across SIEM platforms, 
                threat intelligence, and vulnerability assessment.
              </p>
              
              <p>
                My journey in cybersecurity began with a fascination for digital forensics and has evolved into 
                a comprehensive skill set encompassing network security, malware analysis, and security automation. 
                I believe in continuous learning and staying ahead of the threat landscape.
              </p>
            </div>

            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">1+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">100+</div>
                <div className="text-sm text-gray-400">Incidents Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-gray-400">SOC Monitoring</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cybersecurity Operations"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors duration-300"
                >
                  <item.icon className="w-8 h-8 text-cyan-400 mb-2" />
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;