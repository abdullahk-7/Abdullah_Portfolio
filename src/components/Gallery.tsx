import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Image as ImageIcon } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'images' | 'videos'>('all');

  const mediaItems = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'SOC Operations Center',
      category: 'Workspace'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Network Security Monitoring',
      category: 'Infrastructure'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Cybersecurity Dashboard',
      category: 'Analytics'
    },
    {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_25fps.mp4',
      thumbnail: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Digital Security Animation',
      category: 'Demonstration'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Threat Analysis',
      category: 'Analysis'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Security Shield Protection',
      category: 'Concepts'
    },
    {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/4087993/4087993-uhd_2560_1440_30fps.mp4',
      thumbnail: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Code Security Review',
      category: 'Development'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Multi-Monitor Setup',
      category: 'Equipment'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Server Infrastructure',
      category: 'Infrastructure'
    }
  ];

  const filteredItems = mediaItems.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'images') return item.type === 'image';
    if (filter === 'videos') return item.type === 'video';
    return true;
  });

  const navigateMedia = (direction: 'prev' | 'next') => {
    if (selectedMedia === null) return;
    
    const currentIndex = filteredItems.findIndex((_, index) => index === selectedMedia);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedMedia(newIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Gallery & Media
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Visual showcase of cybersecurity operations, infrastructure, and security analysis workflows.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-4 mb-12"
        >
          {['all', 'images', 'videos'].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType as 'all' | 'images' | 'videos')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 capitalize ${
                filter === filterType
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:text-cyan-400 border border-gray-700 hover:border-cyan-400'
              }`}
            >
              {filterType}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-800"
              onClick={() => setSelectedMedia(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Media Type Indicator */}
                <div className="absolute top-4 right-4">
                  {item.type === 'video' ? (
                    <div className="bg-red-500 text-white p-2 rounded-full">
                      <Play className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="bg-blue-500 text-white p-2 rounded-full">
                      <ImageIcon className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <span className="text-cyan-400 text-sm">{item.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedMedia !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMedia(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-5xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors duration-200"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateMedia('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-cyan-400 transition-colors duration-200 bg-black/50 rounded-full p-2"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                  onClick={() => navigateMedia('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-cyan-400 transition-colors duration-200 bg-black/50 rounded-full p-2"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                {/* Media Content */}
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  {filteredItems[selectedMedia]?.type === 'video' ? (
                    <video
                      src={filteredItems[selectedMedia].src}
                      controls
                      autoPlay
                      className="w-full max-h-96 object-contain"
                    />
                  ) : (
                    <img
                      src={filteredItems[selectedMedia]?.src}
                      alt={filteredItems[selectedMedia]?.title}
                      className="w-full max-h-96 object-contain"
                    />
                  )}
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {filteredItems[selectedMedia]?.title}
                    </h3>
                    <span className="text-cyan-400">
                      {filteredItems[selectedMedia]?.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;