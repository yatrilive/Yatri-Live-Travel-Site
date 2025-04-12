import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const destinations = [
  {
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop",
    date: "March 2024",
    duration: "10 days",
    highlights: ["Temple Hopping", "Beach Relaxation", "Local Culture"],
    rating: 4.9,
    price: "$1,299"
  },
  {
    name: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
    date: "February 2024",
    duration: "7 days",
    highlights: ["Cherry Blossoms", "Traditional Temples", "Tea Ceremony"],
    rating: 4.8,
    price: "$1,599"
  },
  {
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2086&auto=format&fit=crop",
    date: "January 2024",
    duration: "8 days",
    highlights: ["Sunset Views", "Island Hopping", "Wine Tasting"],
    rating: 4.9,
    price: "$1,499"
  }
];

const RecentTrips = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
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
            Recent Adventures
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest travel experiences and get inspired for your next journey
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((place, index) => (
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
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                  {place.duration}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{place.date}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="font-semibold">{place.rating}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{place.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {place.highlights.map((highlight, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{place.price}</span>
                  <button className="px-6 py-2 bg-gradient-to-r from-[#f56551] to-[#ff8a75] text-white rounded-xl font-semibold hover:from-[#d94e3f] hover:to-[#f56551] transition-all duration-300">
                    View Details
                  </button>
                </div>
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
          <Link to="/important/Destinations">
            <button className="px-8 py-4 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-800 hover:bg-gray-50 transition-all duration-300">
              View All Adventures
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentTrips;