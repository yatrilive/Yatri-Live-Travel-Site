import React from 'react';
import { motion } from 'framer-motion';
import GearItem from './GearItem';

const Gear = () => {
  // Array of gear data with more details
  const gearData = [
    {
      name: 'Best Travel Backpack',
      image: 'https://images.unsplash.com/photo-1528921581519-52b9d779df2b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A durable and spacious backpack for all your travel needs.',
      price: '$129.99',
      rating: 4.8,
      reviews: 245,
      features: ['Water-resistant', 'Laptop compartment', 'Anti-theft design'],
      affiliateLink: 'https://images.unsplash.com/photo-1528921581519-52b9d779df2b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Comfortable Hiking Shoes',
      image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'High-performance shoes for long hikes and treks.',
      price: '$159.99',
      rating: 4.9,
      reviews: 189,
      features: ['Waterproof', 'Ankle support', 'Vibram sole'],
      affiliateLink: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'High-Quality Camera',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Capture your travel memories in stunning quality.',
      price: '$899.99',
      rating: 4.7,
      reviews: 312,
      features: ['4K video', 'Weather-sealed', 'Long battery life'],
      affiliateLink: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Travel Power Bank',
      image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Stay charged on the go with this high-capacity power bank.',
      price: '$49.99',
      rating: 4.6,
      reviews: 178,
      features: ['20000mAh', 'Fast charging', 'Multiple ports'],
      affiliateLink: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Travel Pillow',
      image: 'https://safaribags.com/cdn/shop/files/NECKPILLOW_CURV_BLUE-02.jpg?v=1682499647',
      description: 'Comfortable and compact pillow for long journeys.',
      price: '$29.99',
      rating: 4.5,
      reviews: 156,
      features: ['Memory foam', 'Washable cover', 'Compact design'],
      affiliateLink: 'https://images.unsplash.com/photo-1616699002805-07479516aec8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Travel Adapter',
      image: 'https://deq64r0ss2hgl.cloudfront.net/images/products_gallery_images/wayona-38w-universal-travel-adapter-39604542452526.jpg',
      description: 'Universal adapter for charging devices worldwide.',
      price: '$24.99',
      rating: 4.7,
      reviews: 203,
      features: ['150+ countries', 'USB ports', 'Surge protection'],
      affiliateLink: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
          backgroundImage: "url('https://images.unsplash.com/photo-1528921581519-52b9d779df2b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
          <h1 className="text-6xl font-bold text-white mb-4">Travel Gear</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">
            Essential equipment for your next adventure
          </p>
        </motion.div>
      </motion.div>

      {/* Gear Section */}
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
              Essential Travel Gear
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of travel essentials
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gearData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GearItem
                  name={item.name}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                  rating={item.rating}
                  reviews={item.reviews}
                  features={item.features}
                  affiliateLink={item.affiliateLink}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gear;
