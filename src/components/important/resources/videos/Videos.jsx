import React from 'react';
import { motion } from 'framer-motion';

function Videos() {
  const videoData = [
    { 
      id: 'c0ST5fY0UZE?si', 
      title: 'How to cross India-Bangladesh border from Akhaura / Agartala',
      description: 'A comprehensive guide to crossing the India-Bangladesh border',
      thumbnail: 'https://img.youtube.com/vi/c0ST5fY0UZE/maxresdefault.jpg',
      date: 'March 15, 2024',
      duration: '12:45'
    },
    { 
      id: 'zkxqZIwblg0?si', 
      title: 'How I travelled from Agartala to Dhaka (Solo backpacking Bangladesh)',
      description: 'My solo journey through Bangladesh, exploring local culture and hidden gems',
      thumbnail: 'https://img.youtube.com/vi/zkxqZIwblg0/maxresdefault.jpg',
      date: 'March 10, 2024',
      duration: '15:30'
    },
    { 
      id: 'Fb_PlU1rFsY?si', 
      title: 'How to get foreign exchange and Tourist sim in Dhaka, Bangladesh',
      description: 'Essential tips for getting currency exchange and SIM cards in Bangladesh',
      thumbnail: 'https://img.youtube.com/vi/Fb_PlU1rFsY/maxresdefault.jpg',
      date: 'March 5, 2024',
      duration: '10:20'
    },
    // Add more videos here
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Travel Vlogs & Guides
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch my travel adventures and get practical tips for your next journey
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoData.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#f56551]">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {video.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#f56551] transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {video.description}
                </p>
                
                <button 
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')}
                  className="inline-flex items-center gap-2 text-[#f56551] font-semibold hover:text-[#d94e3f] transition-colors"
                >
                  Watch Video
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* YouTube Channel Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a 
            href="https://www.youtube.com/channel/YOUR_CHANNEL_ID" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#f56551] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d94e3f] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            Visit my YouTube Channel
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Videos;
