import React from 'react';
import { motion } from 'framer-motion';

const GearItem = ({ name, image, description, price, rating, reviews, features, affiliateLink }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
          {price}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            <span className="font-semibold">{rating}</span>
          </div>
          <span className="text-gray-500 text-sm">•</span>
          <span className="text-gray-500 text-sm">{reviews} reviews</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#f56551]">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              {feature}
            </div>
          ))}
        </div>

        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 bg-gradient-to-r from-[#f56551] to-[#ff8a75] hover:from-[#d94e3f] hover:to-[#f56551] text-white text-center rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
        >
          View Details
        </a>
      </div>
    </motion.div>
  );
};

export default GearItem;
