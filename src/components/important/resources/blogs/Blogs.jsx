import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogs = [
  { 
    title: "Top 10 Destinations for Remote Work", 
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Discover the best destinations around the world for digital nomads and remote workers.",
    date: "March 20, 2024",
    readTime: "5 min read",
    category: "Digital Nomad"
  },
  { 
    title: "How to Balance Work and Travel", 
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Learn practical tips and strategies for maintaining productivity while traveling.",
    date: "March 18, 2024",
    readTime: "7 min read",
    category: "Work-Life Balance"
  },
  { 
    title: "Best Budget Travel Hacks", 
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop",
    excerpt: "Save money on your travels with these proven budget travel tips and tricks.",
    date: "March 15, 2024",
    readTime: "6 min read",
    category: "Budget Travel"
  },
];

const Blogs = () => {
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
            Travel Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and stories from my travel adventures around the world
          </p>
        </motion.div>

        {/* Featured Blog */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={blogs[0].image} 
              alt={blogs[0].title} 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#f56551] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {blogs[0].category}
                </span>
                <span className="text-white/80 text-sm">
                  {blogs[0].date}
                </span>
                <span className="text-white/80 text-sm">
                  {blogs[0].readTime}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {blogs[0].title}
              </h2>
              <p className="text-white/90 text-lg mb-6 max-w-2xl">
                {blogs[0].excerpt}
              </p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Read More
              </button>
            </div>
          </div>
        </motion.div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.slice(1).map((blog, index) => (
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
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#f56551] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#f56551] transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {blog.excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-[#f56551] font-semibold hover:text-[#d94e3f] transition-colors">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
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
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/important/resources/blogs">
            <button className="bg-[#f56551] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d94e3f] transition-colors">
              View All Blog Posts
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;