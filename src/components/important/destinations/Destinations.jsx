import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Destinations = () => {
  // Array of destination data
  const destinations = [
    {
      name: 'Asia',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
      description: 'Explore the diverse cultures and landscapes of Asia.',
      popularLocations: ['Tokyo, Japan', 'Bangkok, Thailand', 'Bali, Indonesia'],
      rating: 4.8,
      reviews: 1250
    },
    {
      name: 'Europe',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
      description: 'Discover the rich history and stunning architecture of Europe.',
      popularLocations: ['Paris, France', 'Rome, Italy', 'Barcelona, Spain'],
      rating: 4.9,
      reviews: 980
    },
    {
      name: 'India',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop',
      description: 'Experience the vibrant colors and traditions of India.',
      popularLocations: ['Mumbai', 'Delhi', 'Goa'],
      rating: 4.7,
      reviews: 750
    },
    {
      name: 'China',
      image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2070&auto=format&fit=crop',
      description: 'Immerse yourself in the ancient culture and modern cities of China.',
      popularLocations: ['Beijing', 'Shanghai', 'Hong Kong'],
      rating: 4.6,
      reviews: 620
    },
    {
      name: 'North America',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
      description: 'From national parks to vibrant cities, explore the diverse landscapes of North America.',
      popularLocations: ['New York, USA', 'Vancouver, Canada', 'Mexico City, Mexico'],
      rating: 4.8,
      reviews: 1100
    },
    {
      name: 'South America',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
      description: 'Adventure awaits in the stunning landscapes and rich cultures of South America.',
      popularLocations: ['Rio de Janeiro, Brazil', 'Buenos Aires, Argentina', 'Machu Picchu, Peru'],
      rating: 4.7,
      reviews: 850
    }
  ];

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative text-center"
        >
          <h1 className="text-6xl font-bold text-white mb-4">Destinations</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">
            Explore the world's most amazing places
          </p>
        </motion.div>
      </motion.div>

      {/* Destinations Section */}
      <div className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore the World
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing destinations across the globe
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
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
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="font-semibold">{destination.rating}</span>
                    </div>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">{destination.reviews} reviews</span>
                  </div>

                  <p className="text-gray-600 mb-4">{destination.description}</p>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900">Popular Locations:</h4>
                    <ul className="space-y-1">
                      {destination.popularLocations.map((location, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#f56551]">
                            <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.365-.24.547-.433.418-.394.787-.93.787-1.855V6.75a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6.75v9.129c0 .925.37 1.461.787 1.855.182.193.361.337.547.433.088.046.173.09.28.14.012.005.016.006.018.008l.006.003zM7.5 6.75a.75.75 0 00-.75.75v9.129c0 .115.046.155.08.178.03.015.068.03.102.044.033.015.066.03.102.044.037.015.07.03.113.044.043.015.09.03.148.044.058.015.12.03.19.044.07.015.145.03.225.03h.75a.75.75 0 00.75-.75V6.75a.75.75 0 00-.75-.75H7.5z" clipRule="evenodd" />
                          </svg>
                          {location}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/important/${destination.name}`}
                    className="block w-full py-3 bg-gradient-to-r from-[#f56551] to-[#ff8a75] hover:from-[#d94e3f] hover:to-[#f56551] text-white text-center rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Explore {destination.name}
                  </Link>
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
            <button className="px-8 py-4 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-800 hover:bg-gray-50 transition-all duration-300">
              View All Destinations
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
