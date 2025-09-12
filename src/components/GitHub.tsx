import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Eye } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  html_url: string;
  updated_at: string;
}

const GitHub: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data for demonstration - replace with actual API call
  useEffect(() => {
    const mockRepos: Repository[] = [
      {
        id: 1,
        name: 'soc-automation-toolkit',
        description: 'Comprehensive SOC automation tools and scripts for incident response and threat detection',
        language: 'Python',
        stargazers_count: 45,
        forks_count: 12,
        watchers_count: 8,
        html_url: 'https://github.com/abdullahkhan/soc-automation-toolkit',
        updated_at: '2024-01-15T10:30:00Z'
      },
      {
        id: 2,
        name: 'threat-intelligence-aggregator',
        description: 'Multi-source threat intelligence platform with IOC correlation and analysis capabilities',
        language: 'Python',
        stargazers_count: 32,
        forks_count: 8,
        watchers_count: 5,
        html_url: 'https://github.com/abdullahkhan/threat-intelligence-aggregator',
        updated_at: '2024-01-10T14:22:00Z'
      },
      {
        id: 3,
        name: 'network-traffic-analyzer',
        description: 'Advanced network packet analysis with machine learning-based anomaly detection',
        language: 'Python',
        stargazers_count: 28,
        forks_count: 6,
        watchers_count: 4,
        html_url: 'https://github.com/abdullahkhan/network-traffic-analyzer',
        updated_at: '2024-01-08T09:15:00Z'
      },
      {
        id: 4,
        name: 'vulnerability-scanner',
        description: 'Automated vulnerability assessment tool with comprehensive reporting features',
        language: 'Python',
        stargazers_count: 19,
        forks_count: 4,
        watchers_count: 3,
        html_url: 'https://github.com/abdullahkhan/vulnerability-scanner',
        updated_at: '2024-01-05T16:45:00Z'
      },
      {
        id: 5,
        name: 'security-scripts-collection',
        description: 'Collection of useful security automation scripts and utilities for SOC operations',
        language: 'Bash',
        stargazers_count: 15,
        forks_count: 3,
        watchers_count: 2,
        html_url: 'https://github.com/abdullahkhan/security-scripts-collection',
        updated_at: '2024-01-03T11:30:00Z'
      },
      {
        id: 6,
        name: 'incident-response-playbooks',
        description: 'Standardized incident response playbooks and procedures for security teams',
        language: 'Markdown',
        stargazers_count: 38,
        forks_count: 15,
        watchers_count: 12,
        html_url: 'https://github.com/abdullahkhan/incident-response-playbooks',
        updated_at: '2024-01-01T08:20:00Z'
      }
    ];

    setTimeout(() => {
      setRepos(mockRepos);
      setLoading(false);
    }, 1000);
  }, []);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      Python: 'text-blue-400',
      JavaScript: 'text-yellow-400',
      TypeScript: 'text-blue-500',
      Bash: 'text-green-400',
      SQL: 'text-orange-400',
      Markdown: 'text-gray-400'
    };
    return colors[language] || 'text-gray-400';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section id="github" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            GitHub Repository
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Open-source cybersecurity tools, scripts, and projects contributing to the security community.
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto"></div>
            <p className="text-gray-400 mt-4">Loading repositories...</p>
          </div>
        ) : (
          <>
            {/* GitHub Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
                <div className="text-gray-400">Public Repos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">180+</div>
                <div className="text-gray-400">Total Stars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-400">Forks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">35+</div>
                <div className="text-gray-400">Followers</div>
              </div>
            </motion.div>

            {/* Repository Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {repos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 group cursor-pointer"
                  onClick={() => window.open(repo.html_url, '_blank')}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {repo.name}
                    </h3>
                    <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {repo.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)} bg-current`}></div>
                      <span className={getLanguageColor(repo.language)}>{repo.language}</span>
                    </div>
                    <span>Updated {formatDate(repo.updated_at)}</span>
                  </div>

                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="w-4 h-4" />
                      <span>{repo.forks_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{repo.watchers_count}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visit GitHub Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <button 
                onClick={() => window.open('https://github.com/abdullahkhan', '_blank')}
                className="px-8 py-4 bg-gray-900 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 mx-auto"
              >
                <Github className="w-5 h-5" />
                <span>Visit My GitHub</span>
              </button>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default GitHub;