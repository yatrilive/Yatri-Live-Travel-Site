import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DestinationDetail = () => {
  const { destinationName } = useParams();

  // This would typically come from an API or database
  const destinationData = {
    Asia: {
      name: 'Asia',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
      description: 'Explore the diverse cultures and landscapes of Asia.',
      popularLocations: ['Tokyo, Japan', 'Bangkok, Thailand', 'Bali, Indonesia'],
      rating: 4.8,
      reviews: 1250,
      highlights: [
        'Rich cultural heritage',
        'Diverse cuisines',
        'Ancient temples',
        'Modern cities',
        'Beautiful landscapes'
      ],
      bestTimeToVisit: 'March to May, September to November',
      languages: ['Mandarin', 'Japanese', 'Korean', 'Thai', 'Vietnamese'],
      currencies: ['Chinese Yuan', 'Japanese Yen', 'Korean Won', 'Thai Baht']
    },
    Europe: {
      name: 'Europe',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
      description: 'Discover the rich history and stunning architecture of Europe.',
      popularLocations: ['Paris, France', 'Rome, Italy', 'Barcelona, Spain'],
      rating: 4.9,
      reviews: 980,
      highlights: [
        'Historic architecture',
        'Art museums',
        'Mediterranean beaches',
        'Alpine mountains',
        'Cultural festivals'
      ],
      bestTimeToVisit: 'April to October',
      languages: ['French', 'German', 'Italian', 'Spanish', 'English'],
      currencies: ['Euro', 'British Pound', 'Swiss Franc']
    },
    India: {
      name: 'India',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop',
      description: 'Experience the vibrant colors and traditions of India.',
      popularLocations: ['Mumbai', 'Delhi', 'Goa'],
      rating: 4.7,
      reviews: 750,
      highlights: [
        'Ancient temples',
        'Spice markets',
        'Yoga retreats',
        'Beaches',
        'Wildlife sanctuaries'
      ],
      bestTimeToVisit: 'October to March',
      languages: ['Hindi', 'English', 'Bengali', 'Tamil'],
      currencies: ['Indian Rupee']
    },
    China: {
      name: 'China',
      image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2070&auto=format&fit=crop',
      description: 'Immerse yourself in the ancient culture and modern cities of China.',
      popularLocations: ['Beijing', 'Shanghai', 'Hong Kong'],
      rating: 4.6,
      reviews: 620,
      highlights: [
        'Great Wall',
        'Forbidden City',
        'Terracotta Army',
        'Modern architecture',
        'Traditional gardens'
      ],
      bestTimeToVisit: 'March to May, September to November',
      languages: ['Mandarin', 'Cantonese'],
      currencies: ['Chinese Yuan', 'Hong Kong Dollar']
    }
  };

  const destination = destinationData[destinationName];

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
          <p className="text-gray-600 mb-8">The destination you're looking for doesn't exist.</p>
          <Link
            to="/important/Destinations"
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#f56551] to-[#ff8a75] text-white rounded-xl font-semibold hover:from-[#d94e3f] hover:to-[#f56551] transition-all duration-300"
          >
            Back to Destinations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: `url('${destination.image}')`,
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
          <h1 className="text-6xl font-bold text-white mb-4">{destination.name}</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">
            {destination.description}
          </p>
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <div className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="font-semibold">{destination.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">{destination.reviews} reviews</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{destination.description}</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Locations</h2>
                <ul className="space-y-3">
                  {destination.popularLocations.map((location, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#f56551]">
                        <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.365-.24.547-.433.418-.394.787-.93.787-1.855V6.75a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6.75v9.129c0 .925.37 1.461.787 1.855.182.193.361.337.547.433.088.046.173.09.28.14.012.005.016.006.018.008l.006.003zM7.5 6.75a.75.75 0 00-.75.75v9.129c0 .115.046.155.08.178.03.015.068.03.102.044.033.015.066.03.102.044.037.015.07.03.113.044.043.015.09.03.148.044.058.015.12.03.19.044.07.015.145.03.225.03h.75a.75.75 0 00.75-.75V6.75a.75.75 0 00-.75-.75H7.5z" clipRule="evenodd" />
                      </svg>
                      {location}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Highlights</h2>
                <ul className="grid grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Travel Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Best Time to Visit</h3>
                    <p className="text-gray-600">{destination.bestTimeToVisit}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Languages</h3>
                    <p className="text-gray-600">{destination.languages.join(', ')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Currencies</h3>
                    <p className="text-gray-600">{destination.currencies.join(', ')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Back Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/important/Destinations"
              className="inline-block px-8 py-4 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-800 hover:bg-gray-50 transition-all duration-300"
            >
              Back to All Destinations
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail; 