
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Search, AlertTriangle, Network, Eye, Zap, Clock, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Eye,
      title: 'SOC Monitoring & Analysis',
      description: 'Comprehensive 24/7 security monitoring with advanced threat detection and real-time incident response capabilities.',
      features: [
        'Real-time SIEM monitoring',
        'Alert triage and analysis',
        'Incident escalation procedures',
        'Security event correlation'
      ],
      pricing: 'From $150/hour',
      popular: true
    },
    {
      icon: Search,
      title: 'Threat Hunting Services',
      description: 'Proactive threat hunting to identify advanced persistent threats and sophisticated attack techniques.',
      features: [
        'IOC-based hunting',
        'Behavioral analysis',
        'Advanced threat detection',
        'Threat intelligence integration'
      ],
      pricing: 'From $200/hour',
      popular: false
    },
    {
      icon: AlertTriangle,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive vulnerability scanning and assessment services to identify security weaknesses.',
      features: [
        'Network vulnerability scans',
        'Web application testing',
        'Risk prioritization',
        'Remediation guidance'
      ],
      pricing: 'From $500/project',
      popular: false
    },
    {
      icon: Shield,
      title: 'Penetration Testing',
      description: 'Ethical hacking services to identify exploitable vulnerabilities in your security infrastructure.',
      features: [
        'Network penetration testing',
        'Web application testing',
        'Social engineering assessments',
        'Detailed reporting'
      ],
      pricing: 'From $1500/project',
      popular: false
    },
    {
      icon: Network,
      title: 'Network Security Analysis',
      description: 'Deep packet inspection and network traffic analysis to identify suspicious activities and threats.',
      features: [
        'Traffic pattern analysis',
        'Anomaly detection',
        'Protocol analysis',
        'Network forensics'
      ],
      pricing: 'From $175/hour',
      popular: false
    },
    {
      icon: Zap,
      title: 'Incident Response',
      description: 'Rapid incident response services to contain, analyze, and remediate security breaches effectively.',
      features: [
        'Emergency response (24/7)',
        'Forensic investigation',
        'Malware analysis',
        'Recovery planning'
      ],
      pricing: 'From $300/hour',
      popular: false
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Discuss your security requirements and assess current infrastructure'
    },
    {
      step: '02',
      title: 'Scope Definition',
      description: 'Define project scope, timeline, and deliverables based on your needs'
    },
    {
      step: '03',
      title: 'Security Assessment',
      description: 'Conduct thorough security analysis using industry-standard tools and methodologies'
    },
    {
      step: '04',
      title: 'Reporting & Remediation',
      description: 'Provide detailed reports with actionable recommendations and remediation support'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Professional Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Comprehensive cybersecurity services tailored to protect your organization from evolving threats.
          </p>
        </motion.div>

        {/* Services Grid */
        }
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gray-900 rounded-2xl p-6 border transition-all duration-300 hover:transform hover:scale-105 relative ${
                service.popular 
                  ? 'border-cyan-400 shadow-lg shadow-cyan-400/20' 
                  : 'border-gray-700 hover:border-cyan-400'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-purple-400 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.pricing}</div>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                  service.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                }`}>
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */
        }
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400">How I Work</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transform -translate-y-0.5"></div>
                  )}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */
        
        }
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Secure Your Organization?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss your cybersecurity needs and create a customized security solution for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transform hover:scale-105 transition-all duration-200">
              Get Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
