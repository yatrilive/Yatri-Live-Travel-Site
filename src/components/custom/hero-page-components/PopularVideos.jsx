import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const popularVideos = [
  { 
    id: "c0ST5fY0UZE?si", 
    title: "India-Bangladesh Border Crossing",
    thumbnail: "https://img.youtube.com/vi/c0ST5fY0UZE/maxresdefault.jpg",
    duration: "12:45",
    views: "24K",
    date: "2 weeks ago",
    category: "Travel Guide"
  },
  { 
    id: "zkxqZIwblg0?si", 
    title: "Agartala to Dhaka - Solo Backpacking",
    thumbnail: "https://img.youtube.com/vi/zkxqZIwblg0/maxresdefault.jpg",
    duration: "18:32",
    views: "18K",
    date: "1 month ago",
    category: "Adventure"
  },
  { 
    id: "Fb_PlU1rFsY?si", 
    title: "Foreign Exchange & SIM in Dhaka",
    thumbnail: "https://img.youtube.com/vi/Fb_PlU1rFsY/maxresdefault.jpg",
    duration: "9:15",
    views: "12K",
    date: "3 weeks ago",
    category: "Travel Tips"
  }
];

const PopularVideos = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Travel Inspiration
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch our most popular travel videos and get inspired for your next adventure
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {popularVideos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white">
                  {video.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#f56551]">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {video.category}
                  </span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">{video.views} views</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">{video.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#f56551] transition-colors">
                  {video.title}
                </h3>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#f56551] to-[#ff8a75] text-white rounded-xl font-semibold hover:from-[#d94e3f] hover:to-[#f56551] transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Watch Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/important/resources/videos">
            <button className="px-8 py-4 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-800 hover:bg-gray-50 transition-all duration-300">
              View All Videos
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularVideos;
