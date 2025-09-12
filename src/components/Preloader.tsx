import React, { useEffect, useState } from 'react';
import { Shield, Terminal } from 'lucide-react';

const Preloader: React.FC = () => {
  const [terminalText, setTerminalText] = useState('');
  const fullText = 'Initializing Security Protocols...';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTerminalText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <Shield className="w-16 h-16 text-cyan-400 mx-auto animate-pulse" />
          <div className="absolute inset-0 bg-cyan-400 opacity-20 blur-xl rounded-full animate-ping"></div>
        </div>
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Terminal className="w-5 h-5 text-green-400" />
          <span className="text-green-400 font-mono text-lg">{terminalText}</span>
          <span className="animate-pulse text-green-400">|</span>
        </div>
        <div className="w-48 h-1 bg-gray-700 rounded-full mx-auto">
          <div className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse" style={{ width: '70%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;